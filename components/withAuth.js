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
  
      // I need to figure out how to verify lol
      // try {
      //   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);  // Remember, verifying this on the client-side isn't the safest way!
      //   if (!decoded.isAdmin) {
      //     // Redirect if user isn't admin
      //     router.push("/admin/login");
      //     return null;
      //   }
      // } catch (error) {
      //   console.error("Token verification failed:", error);
      //   router.push("/admin/login");
      //   return null;
      // }
  
      return <Component {...props} />
    }
  }
