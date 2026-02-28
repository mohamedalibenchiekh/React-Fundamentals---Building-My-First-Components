import './Header.css';

export default function Header({ name, tagline }) {
  return (
    <header className="portfolio-header">
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}