import { useAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== 'admin') {
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
        <h1>Admin Dashboard ⚙️</h1>
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
          borderLeft: '4px solid #ffc107'
        }}>
          <h2>Halo Admin, {user.name}!</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UUID:</strong> {user.uuid}</p>
          <p><strong>Role:</strong> <span style={{ 
            background: '#ffc107', 
            color: '#212529', 
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9em',
            fontWeight: 'bold'
          }}>Admin</span></p>
          <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '6px' }}>
            <h3>Admin Panel</h3>
            <p>Manage users, products, and system settings here.</p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default AdminDashboard;
