import './Contact.css';

export default function Contact({ email, github, linkedin }) {
  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <span className="contact-text">{email}</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🐙</span>
          <span className="contact-text">{github}</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <span className="contact-text">{linkedin}</span>
        </div>
      </div>
    </section>
  );
}