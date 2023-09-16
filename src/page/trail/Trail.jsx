import {React, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context';
import './Trail.css';
const Trail = () => {
    const { state, fetchMovie} = useContext(MyContext);
    const { movie, trailer } = state;
    const [loading, setLoading] = useState(true);

    const {id} = useParams()
    // console.log(movie)

    useEffect(() => {
        // Fetch the trailer for the selected movie when the component mounts
        fetchMovie(id)
        .then(() => {
            // Set loading to false once the data is fetched
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching movie:', error);
            setLoading(false); // Set loading to false even on error
          });
      }, [id]);

      console.log(trailer);

  return (
    <div>
      <div className="mina">
        <div className="side">
          <div className="navb">
            <img src="./Assets/Logo.svg" alt="logo" />
            <p>MovieBox</p>
          </div>
          <div className="navb">
            <img src="./Assets/Home.svg" alt="home" />
            <p>Home</p>
          </div>
          <div className="navb">
            <img src="./Assets/Movie Projector.svg.svg" alt="project" />
            <p>Home</p>
          </div>
          <div className="navb">
            <img src="./Assets/TV Show.svg" alt="Tv Show" />
            <p>Tv Series</p>
          </div>
          <div className="navb">
            <img src="./Assets/Calendar.svg.svg" alt="calendar" />
            <p>Upcoming</p>
          </div>
          <div className="navb">
            <p>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <button>start playing</button>
          </div>
          <div className="navb">
            <img src="./Assets/Logout.svg" alt="logout" />
            <p>Logout</p>
          </div>
        </div>
        <div className="trailer">
          {loading ? (
            <p>Loading...</p>
          ) : movie ? (
            <>
              <div className="mix">
                <div className="hero">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div className="details">
                  <div className="b1">
                    <div className="heading">
                      <h2>
                        {" "}
                        <span data-testid='movie-title'>{movie.title}</span>
                        &nbsp;.&nbsp;
                        <span data-testid='movie-release-date'>{new Date(movie.release_date).toUTCString()}</span>.&nbsp;
                        <span>
                          PG-
                          {movie.genres.length > 0 && (
                            <span>{movie.genres[0].id}</span>
                          )}
                        </span>
                        .&nbsp;
                        <span data-testid='movie-runtime'>{movie.runtime}</span>{" "}
                      </h2>
                      <p className="action">{}</p>
                      <p className="action">{}</p>

                      <p className="overview" data-testid='movie-overview'>{movie.overview}</p>
                      <div className="series"></div>
                    </div>
                  </div>
                  <div className="b2"></div>
                </div>
              </div>
            </>
          ) : (
            <p>No movie data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trail
