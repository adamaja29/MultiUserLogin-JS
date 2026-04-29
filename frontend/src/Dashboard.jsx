import { useAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'admin') {
      navigate('/admin-dashboard', { replace: true });
    } else if (user?.role === 'user') {
      navigate('/user-dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px solid #eee'
      }}>
        <h1>Selamat datang di Dashboard 🚀</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </header>

      {user ? (
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '4px solid #007bff'
        }}>
          <h2>Halo, {user.name}!</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UUID:</strong> {user.uuid}</p>
          <p><strong>Role:</strong> <span style={{ 
            background: '#007bff', 
            color: 'white', 
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>{user.role}</span></p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;