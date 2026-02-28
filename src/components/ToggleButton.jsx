import './ToggleButton.css';

export default function ToggleButton({ isVisible = true }) {
  return (
    <div className="toggle-container">
      <button className="toggle-button">Click me!</button>
      <div className={`content-area ${isVisible ? 'visible' : 'hidden'}`}>
        {isVisible ? (
          <p className="visible-message">Content is VISIBLE</p>
        ) : (
          <p className="hidden-message">Content is HIDDEN</p>
        )}
      </div>
    </div>
  );
}