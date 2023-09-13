{/*import React from "react";
import axios from 'axios';
import MovieCard from "./MovieCard"
import MovieSearch from './MovieSearch';



const Movie = () => {
  const [movies, setMovies] = useState([]);
  const MovieCard = ({ title, releaseDate, posterImageUrl }) 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=6fcc45b1f4fb6c1e3c77a01abef720eb`
        );
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          
          <MovieCard 
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          posterImageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          
          />

          
        </div>
      ))}
      <div>
            <div>
              <img src="./conponents/assets/poster" />
            </div>
            <div data-testid="movie-card">
              <img src={posterImageUrl} data-testid="movie-poster" />
              <h2 data-testid="movie-title">{title}</h2>
              <p data-testid="movie-release-date">{releaseDate}</p>
            </div>
      
            
          </div>
    </div>
  );
};

    
        
          
          
        
      


    
export default Movie*/}