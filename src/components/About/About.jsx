import './About.css';

export default function About({ profileImage, bio, skills }) {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="bio-section">
          <p className="bio-text">{bio}</p>
          <div className="skills-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}