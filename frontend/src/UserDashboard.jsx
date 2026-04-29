import { useAuth } from "./AuthContext";

function UserDashboard() {
  const { user, logout } = useAuth();

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
        <h1>User Dashboard 🚀</h1>
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
          borderLeft: '4px solid #28a745'
        }}>
          <h2>Halo, {user.name}!</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UUID:</strong> {user.uuid}</p>
          <p><strong>Role:</strong> <span style={{ 
            background: '#28a745', 
            color: 'white', 
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>User</span></p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserDashboard;
