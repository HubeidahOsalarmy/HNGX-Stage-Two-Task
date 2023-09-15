import React, { Fragment, useState, useEffect } from "react";
import "../Styles/movie.css";
import Noimg from "./assets/no img.jpg";
import tv_icon from "./assets/tv.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Routes and Route

import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

const Movie = () => {

 const [randomMovie, setRandomMovie] = useState(null);// navbar background image state

 useEffect(() => {
    // Function to fetch random movie data
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(
          " https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "6fcc45b1f4fb6c1e3c77a01abef720eb",
              sort_by: "popularity.desc",
              page: Math.floor(Math.random() * 100) + 1,
            },
          }
        );
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovieData = movies[randomIndex];
        setRandomMovie(randomMovieData);
      } catch (error) {
        console.error("Error fetching random movie:", error);
      }
    };
    fetchRandomMovie();
    const intervalId = setInterval(fetchRandomMovie, 60000); // Fetch a new random movie every 60 seconds
    return () => clearInterval(intervalId);
  }, []);

  const[inputValue,setInputValue] = useState("");// search movies state
  const input = inputValue;
  const Shown = input ? "search" : "top_rated";


  const [moviesData, setMoviesData] = useState([]);
  const MovieApi = ` https://api.themoviedb.org/3/movie/${Shown}`;
  const Images = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {

    const MovieCall = async () => {
    try {
      const response = await axios.get(MovieApi, {
        params: {
          api_key: "6fcc45b1f4fb6c1e3c77a01abef720eb",
          query: input,
        },
      });
      const results = response.data.results;
      setMoviesData(results);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

    MovieCall();
  }, [input,MovieApi]);


  const [favorites, setFavorites] = useState({});

  // Function to toggle the favorite status of a movie
  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId],
    }));
  };

  return (
    <Fragment>
      <nav style={{
        backgroundImage: `url(${Images}${randomMovie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"500px",
        position: "relative",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      }}>
        <div className="navbar_overlay"> 
          <div className="navbar_container">
          <div className="navbar_logo">
            <div>
                <img src={tv_icon} alt="tv_icon" width={35}/>
            </div>
              <div>
                  <h3>MovieBox</h3>
            </div>
          </div>
          <div className="navbar_input">
            <input type="text" placeholder="What do you want to watch?" onChange={(e) => {setInputValue(e.target.value); console.log(inputValue); }}/>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{cursor: "pointer"}}>
            <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="navbar_signin">
            <p>Sign in</p>
            <div className="navbar_signin_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white"/>
            </svg>
            </div>
          </div>
        </div>
        <div className="navbar_info">
          <h1>{randomMovie?.title}</h1>
           <h3>{randomMovie?.overview}</h3>
           <div className="navbar_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/>
          </svg>
          <p>Watch Trailer</p>
           </div>
        </div>
        </div>
      </nav>

      <div className="main_Container">
        <div className="section_Container">
          <div>
            <h2>Featured Movie</h2>
          </div>
          <div className="container_Link">
            <p>See More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                stroke="#B91C1C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="movie_container" data-testid="movie-card">
          {moviesData.map((movie) => (
            <Link
              to={`/${movie.id}`}
              key={movie.id}
              style={{ textDecorationLine: "none" ,position: "relative"}}
              className="movieCard_Container"
            >
              <div>
                 <div className="favorite-icon"
                  onClick={(e) => {
                  e.stopPropagation(); 
                  toggleFavorite(movie.id);
                }}
                  style={{
                  position: "absolute",
                  top: "5px", 
                  right: "5px", 
                  zIndex: 1, 
                }}
                   >
                    {favorites[movie.id] ? (
                      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
                    )}
                  </div>
                <img
                src={movie.poster_path ? `${Images}${movie.poster_path}` : Noimg}
                alt="movie poster"
                data-testid="movie-poster"
              />
              </div>
              <h4 data-testid="movie-title">{movie.title}</h4>
              <p className="release_date" data-testid="movie-release-date">
                {movie.release_date}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="profile_link">
        <div className="profile">
          <a href="https://www.linkedin.com/in/salami-hubeidah-7b90a9260">
            <AiFillLinkedin
              color="#111827"
              fontSize={24}
              cursor="pointer"
              fontWeight="bolder"
            />
          </a>
          <a href="https://x.com/hubeidatullah?t=B-xuQ3HMcCwS19h_HkEBog&s=09">
            <AiOutlineTwitter
              color="#111827"
              fontSize={24}
              fontWeight="bolder"
            />
          </a>
          <a href="https://github.com/HubeidahOsalarmy">
            <AiFillGithub
              color="#111827"
              fontSize={24}
              cursor="pointer"
              fontWeight="bolder"
            />
          </a>
        </div>

        <div className="terms">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>

        <div className="copyright">
          <p>© 2023 MovieBox by Hubeidah</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
