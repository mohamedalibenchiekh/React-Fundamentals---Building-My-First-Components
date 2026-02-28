import './ProjectCard.css';

export default function ProjectCard({ name, description, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>
      <div className="technologies">
        <h4>Technologies:</h4>
        <ul className="tech-list">
          {technologies.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-rating">
        {'🚀'.repeat(3)} {/* Amazing emoji indicator */}
      </div>
    </div>
  );
}