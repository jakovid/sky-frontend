import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const router = useRouter();
      
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); // Clear any prior error
    
        try {
          const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
    
          if (!response.ok) {
            const responseData = await response.json();
            throw new Error(responseData.error || "Login failed");
          }
    
          const data = await response.json();
          console.log('Login successful! Received data:', data);
          
          localStorage.setItem('token', data.token);
    
          // Navigate to your dashboard or admin page
          router.push('/admin');
        } catch (error) {
          setError(error.message);
        }
      }
      
    return (
      <div>
        <Head>
          <title>Sky Education | Admin Login</title>
        </Head>
        <form onSubmit={handleLogin}>
            <div>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />
            </div>

            <div>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            </div>

            <button type="submit">Login</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
}
