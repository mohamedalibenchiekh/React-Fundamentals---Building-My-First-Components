import './UserCard.css';

export default function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h3 className="user-name">{name}</h3>
      <div className="user-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
}