import Link from "next/link"
import { useRouter } from 'next/router';
import { useEffect } from 'react'

// import hooks
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useContentsContext } from '../hooks/useContentsContext';
import { useWebImagesContext } from "@/hooks/useWebImagesContext";

export default function AdminNavbar() {
    const router = useRouter();

    const handleLogout = () => {
        // 1. Remove the JWT from local storage
        localStorage.removeItem('token');

        // 2. (Optional) Update your application state if using state management
        
        // 3. Redirect the user to the login page or homepage
        router.push('/admin/login'); // or another path like '/'
    };

    const { language, dispatch } = useLanguageContext();
    const { dispatch: contentsDispatch, contents } = useContentsContext();
    const{ dispatch: webImagesDispatch } = useWebImagesContext();
      
  
      useEffect(() => {
          const fetchContents = async() => {
            const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/content`;
              const response = await fetch(API_ENDPOINT)
              const json = await response.json()
  
              if(response.ok) {
                  contentsDispatch({
                      type: 'SET_CONTENTS',
                      payload: json
                  })
              }
          }
  
          fetchContents()
          
      }, [contentsDispatch])
  
      useEffect(() => {
        const fetchWebImages = async() => {
            const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/web-images`;
          const response = await fetch(API_ENDPOINT)
          const json = await response.json()
  
          if(response.ok) {
              webImagesDispatch({
                  type: 'SET_WEB_IMAGES',
                  payload: json
              })
          }
        }
  
        fetchWebImages();
      }, [webImagesDispatch])
  

    let home = null, aboutUs = null, ourTeam = null, ourClasses = null, contactUs = null;

    if (contents){
        home = contents[0][language];
        aboutUs = contents[1][language];
        ourTeam = contents[2][language]; 
        ourClasses = contents[3][language]; 
        contactUs = contents[4][language];
    }

    return (
        <header className="bg-blue-950 h-20 flex px-4 justify-center items-center">
            <div className="flex justify-center gap-2 text-center items-center xl:gap-4 xl:p-4">
                <Link href="/admin">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Admin</h1>
                </Link>
                <Link href="/admin/teachers">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Manage Teachers</h1>
                </Link>
                <Link href="/admin/home">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Edit Home</h1>
                </Link>
                <Link href="/admin/about-us">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Edit About Us</h1>
                </Link>
                <Link href="/admin/our-team">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Edit Our Team</h1>
                </Link>
                <Link href="/admin/our-classes">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Edit Our Classes</h1>
                </Link>
                <Link href="/admin/contact-us">
                    <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4">Edit Contact Us</h1>
                </Link>
                <h1 className="rounded-s-full rounded-e-full p-2 sm:text-xs sm:border-2 lg:text-md xl:text-lg 2xl:text-xl xl:border-4 cursor-pointer" onClick={handleLogout}>Log Out</h1>
            </div>
        </header>
    )
}