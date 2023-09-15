import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie"
import MovieDetails from "./components/MovieDetails";






const App = () => {
  return (
    <div>
    <Routes>
    <Route path="" element={<Movie />} />
    <Route path="/movies/:id" element={<MovieDetails />} />
  </Routes>
  </div>
  )
}
export default App;
