import { useState } from 'react'
import MovieList from './components/MovieList';
import './App.css'

function App() {

  const movies = [
    { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
    { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
    { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
    { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
  ];

  return (
    <>
      <MovieList movies={movies} />
    </>
  )
}

export default App
