import Movie from './Movie';
import './MovieList.css';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2>Movie Collection</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            director={movie.director}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}