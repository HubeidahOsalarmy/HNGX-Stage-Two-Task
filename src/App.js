import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import MovieSearch from "./components/MovieSearch";
import LoadingIndicator from "./components/LoadingIndicator";
import footSection from "./components/footSection";






function App() {
  return (
    <div className="App">
      
      <MovieList />
      <MovieCard />
      <MovieSearch />
      <footSection />
      
    </div>
  )
}
export default App;
