import './Movie.css';

export default function Movie({ title, director, year, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆');
    }
    return stars.join('');
  };

  return (
    <div className="movie-card">
      <h3 className="movie-title">{title}</h3>
      <p className="movie-director"><strong>Director:</strong> {director}</p>
      <p className="movie-year"><strong>Year:</strong> {year}</p>
      <p className="movie-rating">
        <span className="stars">{renderStars()}</span>
        <span className="rating-number">({rating}/5)</span>
      </p>
    </div>
  );
}