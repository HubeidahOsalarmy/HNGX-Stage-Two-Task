import React, { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);

    (`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovies(data.Search || []);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setMovies([]);
        setError(error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <LoadingIndicator />}
      
      {error && <p>Error: {error}</p>}

      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;