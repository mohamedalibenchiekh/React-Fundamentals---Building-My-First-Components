import UserCard from './UserCard';
import './BlogPost.css';

export default function BlogPost({ title, author, content, date }) {
  return (
    <article className="blog-post">
      <h1 className="post-title">{title}</h1>
      <div className="post-author">
        <UserCard 
          name={author.name}
          email={author.email}
          role={author.role}
        />
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <footer className="post-footer">
        <time dateTime={date}>Published: {date}</time>
      </footer>
    </article>
  );
}