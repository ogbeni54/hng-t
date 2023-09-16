import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "movie/top_rated"
    const API_KEY = "c4d5df8083103f3545114862c2333b93"
   
  
    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [movie, setMovie] = useState({title: "Loading Movies"})
    // const [favri, setFavri] = useState([]);
  
    useEffect(() => {
        fetchMovies()
        
    }, [])
    
    const fetchMovies = async (e) => {
        if (e) {
            e.preventDefault()
        }
  
        const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })
  
        // console.log(data.results[0])
        // console.log(data.result);
        setMovies(data.results.slice(0,10))
        setMovie(data.results[0])
  
        // if (data.results.length) {
        //     await fetchMovie(data.results[0].id)
        // }
        // setSearchKey('')
        
    }
  
    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: API_KEY,
                // append_to_response: "videos"
            }
        })
  
        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }
  
        setMovie(data)
        console.log(data);
    }
  
  
    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    // const handleClick = (index) => {
    //     const newFav = [...favri];
    //     newFav[index] = !newFav[index];
    //     setFavri(newFav);
    //   };
  

  const state = {
    playing,
    trailer,
    movies,
    searchKey,
    movie
    // favri
  };

  return (
    <MyContext.Provider value={{ state, fetchMovie, setSearchKey, selectMovie }}>
      {children}
    </MyContext.Provider>
  );
};