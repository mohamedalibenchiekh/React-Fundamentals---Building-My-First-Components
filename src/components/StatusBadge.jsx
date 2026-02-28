import './StatusBadge.css';

export default function StatusBadge() {
 
  const isOnline = true;
  
  return (
    <div className="status-badge">
      <h3>User Status</h3>
      <div className="status-container">
        <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? '●' : '○'}
        </span>
        <span className={`status-text ${isOnline ? 'online' : 'offline'}`}>
          User is currently {isOnline ? 'online' : 'offline'}
        </span>
      </div>
    </div>
  );
}