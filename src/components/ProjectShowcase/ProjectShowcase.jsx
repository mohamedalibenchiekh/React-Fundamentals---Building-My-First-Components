import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectShowcase.css';

export default function ProjectShowcase({ projects }) {
  return (
    <section className="project-showcase" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}