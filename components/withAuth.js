import jwt from 'jsonwebtoken';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function withAuth(Component) {
    return function ProtectedRoute(props) {
      const [isClient, setIsClient] = useState(false); // New state to track client-side rendering
      const router = useRouter();
  
      // Check if we are on the client after the component is mounted
      useEffect(() => {
        setIsClient(true);
      }, []);
  
      if (!isClient) {
        // Still server-side rendering, don't try to access localStorage yet
        return null; // Or return a loading placeholder
      }
  
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Redirect to login if no token is found
        router.push("/admin/login");
        return null;
      }
        
      return <Component {...props} />
    }
  }
