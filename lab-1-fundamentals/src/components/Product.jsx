import './Product.css';

export default function Product({ title, price, inStock, rating }) {
  // Generate stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push('½');
    }
    
    // Add empty stars to make total of 5
    while (stars.length < 5) {
      stars.push('☆');
    }
    
    return stars.join('');
  };

  return (
    <div className="product-card">
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? '✓ In Stock' : '✗ Out of Stock'}
      </p>
      <p className="product-rating">
        <span className="stars">{renderStars()}</span>
        <span className="rating-value">({rating.toFixed(1)})</span>
      </p>
    </div>
  );
}