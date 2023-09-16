import React from 'react'
import {useContext} from "react"
import { MyContext } from '../../Context'
import './home.css'

import axios from 'axios'

import Navbar from '../../component/Navbar'
import Movie from '../../component/Movie'


const Home = () => {

    const { state, fetchMovies,setSearchKey} = useContext(MyContext);
    const {searhKey} = state
    // const renderMovies = () => (
    //     movies.map(movie => (
    //         <Movie
    //             selectMovie={selectMovie}
    //             key={movie.id}
    //             movie={movie}
    //         />
    //     ))
    // )

    
  return (
    <div>
        <div className="banner" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/./Assets/Poster.png)`,
        backgroundSize: 'cover', 
      }}>
           
            <Navbar fetchMovies={fetchMovies} setSearchKey={setSearchKey} searchKey={searhKey} />
            
            <div className="contA">
                <div className="contAb">
                <h1>
                    John Wick 3: <br /> Parabellum
                </h1>
                <div className="details">
                    <div className="extA">
                        <img src="./Assets/imdb.svg" alt="imdb image" />
                        <p>86.0/100</p>
                    </div>
                    <div className="extB">
                        <img src="./Assets/tomato.svg" alt="tomato" />
                        <p>97%</p>
                    </div>
                </div>
                <p>
                John Wick is on the run after killing a member of the international assassins' guild, 
                and with a $14 million price tag on his head, 
                he is the target of hit men and women everywhere.
                </p>
                <div className="brot">
                <button className='btn1'>
                    <div className="imaga">
                    <img src="./Assets/Play.svg" alt="play_button" />
                    </div>
                    <p>WATCH TRAILER</p>
                </button>
                </div>
                
                </div>
               
            </div>
           
        </div>
        <div className="movieA">
                    <Movie/>
        </div>
        <div className="footer">
            <div className="socio">
                <img src="./Assets/facebook.svg" alt="facebook" />
                <img src="./Assets/instagram.svg" alt="instagram" />
                <img src="./Assets/twitter.svg" alt="twitter" />
                <img src="youtube.svg" alt="youtube" />
            </div>
            <div className="opt">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className="copy">© 2021 MovieBox by Adriana Eka Prayudha  </div>
        </div>
    </div>
  )
}

export default Home
