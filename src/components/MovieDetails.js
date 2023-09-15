import React, { Fragment, useEffect, useState } from "react";
import tv_icon from "./assets/tv.png"
import axios from 'axios';
import "../Styles/details.css";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
//import movieTrailer from 'movie-trailer';
import {GoHome} from "react-icons/go";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {LuMonitorPlay} from "react-icons/lu";
import {VscCalendar} from "react-icons/vsc";
import {TbLogout} from "react-icons/tb";

const MovieDetails = () => {
  const { id } = useParams();
  const ApiKey = "6fcc45b1f4fb6c1e3c77a01abef720eb";
  const MovieApi = `https://api.themoviedb.org/3/movie/${id}`;
  const VideoApi = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`;

  function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  
  return `${hours}h ${minutes}m`;
}

  const [moviesDetails, setMoviesDetails] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(MovieApi, {
          params: {
            api_key: ApiKey
          }
        });
        console.log(response.data)
        setMoviesDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    
    fetchMovieDetails();
  }, [MovieApi]);

  useEffect(() => {
    const fetchVideoTrailer = async () => {
      try {
        const response = await axios.get(VideoApi);
        const videoKey = response.data.results[0]?.key;
        setVideoURL(videoKey);
      } catch (error) {
        console.error("Error fetching video trailer:", error);
      }
    };
    
    fetchVideoTrailer();
  }, [VideoApi]);

 

  return (
    <Fragment>
      <div className="details_main_Container">
        <div className="sidebar_Container">
            <div className="sidebar_content">
                <div>
                    <img src={tv_icon} alt="tv_icon" width={35}/>
                </div>
                <div>
                    <h3>MovieBox</h3>
                </div>
            </div>
            <div className="sidebar_content">
                <div>
                    <GoHome fontSize={25} color="#666"/>
                </div>
                <div>
                    <p>Home</p>
                </div>
            </div>
            <div className="sidebar_content_active">
                <div>
                    <AiOutlineVideoCamera fontSize={25} color="#666"/>
                </div>
                <div>
                    <p>Movies</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="96" viewBox="0 0 15 96" fill="none">
                    <g filter="url(#filter0_d_1320_687)">
                        <path d="M7.5 3L7.00299 89" stroke="#BE123C" stroke-width="6"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_1320_687" x="0.00305176" y="0.982452" width="14.4969" height="94.0351" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1320_687"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1320_687" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
                </div>
            </div>
            <div className="sidebar_content">
                <div>
                    <LuMonitorPlay fontSize={25} color="#666"/>
                </div>
                <div>
                    <p>Tv Series</p>
                </div>
            </div>
            <div className="sidebar_content">
                <div>
                    <VscCalendar fontSize={25} color="#666"/>
                </div>
                <div>
                    <p>Upcoming</p>
                </div>
            </div>

            <div className="sidebar_content_2">
                <p className="play_info">Play movie quizes and earn free tickets</p>
                <p className="pple_info">50k people are playing now</p>
                <div className="play_btn">
                    <p>Start playing</p>
                </div>
            </div>


            <div className="sidebar_content">
                <div>
                    <TbLogout fontSize={25} color="#666"/>
                </div>
                <div>
                    <p>Log out</p>
                </div>
            </div>
        </div>
          <div id="details_info_container">
            <div className="trailer">
                {videoURL && <ReactPlayer width="950px" height="450px" url={`https://www.youtube.com/watch?v=${videoURL}`} controls={true} />}
            </div>
            <div className="container_content">
              <div className="container_content_2">
                <p className={moviesDetails ? (moviesDetails.original_title.length <= 28 ? "normal-text" : "smallertext") : ""} data-testid="movie-title">
                    {moviesDetails ? moviesDetails.original_title : ""}</p>
                <p data-testid="movie-runtime">{moviesDetails ? formatRuntime(moviesDetails.runtime) : ""}</p>
                <p data-testid="movie-release-date">{moviesDetails ? `${moviesDetails.release_date}` : ""}</p>
                <div className="container_content_3">
                <p>{moviesDetails ? `${moviesDetails.genres[0]?.name}` : ""}</p>
                <p className="genres_info">{moviesDetails ? `${moviesDetails.genres[1]?.name}` : ""}</p>
                </div >
                </div>
              <div id="container_overview">
                <h1>Overview</h1>
                <h3 data-testid="movie-overview">{moviesDetails ? moviesDetails.overview : ""}</h3>
              </div>
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default MovieDetails;
