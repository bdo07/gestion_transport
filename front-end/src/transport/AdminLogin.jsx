import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './AdminLogin.css';

const AdminLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        toast.success('Successfully login!');
        localStorage.setItem('isAuthenticated', 'true');
        setTimeout(() => {
          navigate('/transport/administration');
        }, 1500);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Invalid login or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred.');
    }
  };

  return (
    <div className="admin-login-page">
      <Toaster position="top-center" reverseOrder={false} />
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
