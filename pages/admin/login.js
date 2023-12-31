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

        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/login`;

        setError(null); // Clear any prior error
    
        try {
          const response = await fetch(API_ENDPOINT, {
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
      <div className='flex bg-green-950/90 w-screen h-screen justify-center items-center'>
        <Head>
          <title>Sky Education | Admin Login</title>
        </Head>
        <div className='sm:hidden text-2xl p-8 text-center'>
          Please switch to desktop to edit the website.
        </div>
        <div className='hidden w-screen sm:flex justify-center items-center'>
          <div className='bg-red-900 w-2/3 p-20 rounded-xl flex items-center flex-col'>
              <form onSubmit={handleLogin} className='flex flex-col items-end gap-4'>
                <h2 className='w-full text-center text-4xl'>Admin Login</h2>
                  <div className='flex gap-2'>
                  <label>Username:</label>
                  <input
                      type="text"
                      className='text-black px-2'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      required
                  />
                  </div>

                  <div className='flex gap-2'>
                  <label>Password:</label>
                  <input
                      type="password"
                      className='text-black px-2'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                  />
                  </div>

                  <button type="submit" className='bg-green-950 w-full rounded-full hover:text-green-950 hover:bg-white py-2'>Login</button>
            </form>
          </div>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
}
