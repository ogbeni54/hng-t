import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Context';
import Trail from '../page/trail/Trail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Movie.css';
import { Link, useNavigate } from 'react-router-dom';

const Movie = () => {
    const { state, fetchMovies, selectMovie, fetchMovie  } = useContext(MyContext);
    const { movies} = state;
    const [click, setCick] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
     const navigate = useNavigate()

  const handleClick = (movie) => {
    selectMovie(movie);
    setSelectedMovieId(movie.id);
    navigate(`/movies/${movie.id}`); // Navigate to the movie details page
  };

    
//    console.log(movies);

//    const Hearty = ({ index }) => {
//     const iconClassName = favri[index] ? 'haty' : 'hat';
//     return (
//       <FontAwesomeIcon
//         icon={faHeart}
//         className={iconClassName}
//         onClick={() => handleClick(index)}
//       />
//     );
//   };


//   console.log( await fetchMovie(movie.id));
    return (
        <div>
            <div className="mainat">
                <div className="head">

                <h1 className="heady">Featured Movie</h1>
                <div className="see">
                <h1 className="headier">See more</h1>

                </div>
                

                </div>
                    
                
                {/* {movie && (
                    <div className="sr">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <h4 className="title"></h4>
                        <p className="country"></p>
                    </div>
                )} */}
                {movies && (
                    <div className="container">
                        {movies.map((movie, index) => (
                            // Render movie details here
                           <Link to={`/movies/${movie.id}`} > <div key={movie.id} className="movie-card" data-testid='movie-card'>
                                
                                {/* <Hearty index={movie.id} /> */}
                                
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" data-testid='movie-poster'/>        
                               
                                
                                    <p className="country" data-testid='movie-release-date'>{movie.release_date}</p>
                                    {/* <p className="country">USA, 2016 - Current</p> */}
                                
                                <h4 data-testid='movie-title'>{movie.title}</h4>
                                <div className="rat-cont">
                                    <div className="A">
                                        <div className="a1">
                                        <img src="./Assets/imdb.svg" alt="imdb" />
                                        </div>
                                        
                                        <p>{movie.vote_average*10} / 100</p>
                                    </div>
                                    <div className="B">
                                        <div className="a2">
                                        <img src="Assets/tomato.svg" alt="tomato" />
                                        </div>
                                        
                                        <p>{Math.round(movie.vote_average*10)}%</p>
                                    </div>
                                </div>


                                        <p className="country">Action, Adventure, Horror</p>

                                

                            </div></Link>
                        ))}
                    </div>
                )}
            </div>
            {/* <Trail selectedMovieId={selectedMovieId} /> */}
        </div>
    );
};

export default Movie;
