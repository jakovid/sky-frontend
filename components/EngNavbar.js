import Link from 'next/link'

import { useLanguageContext } from "../hooks/useLanguageContext";
import { useContentsContext } from '../hooks/useContentsContext';
import { useWebImagesContext } from "@/hooks/useWebImagesContext";
import { useEffect } from 'react'
import { AiFillHome, AiFillInfoCircle, AiOutlineTeam, AiOutlineMail } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'

export default function EngNavbar() {
    const { language, dispatch } = useLanguageContext();
    const { dispatch: contentsDispatch, contents } = useContentsContext();
    const{ dispatch: webImagesDispatch } = useWebImagesContext();
      
  
      useEffect(() => {
          const fetchContents = async() => {
              const response = await fetch('http://localhost:4000/api/content')
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
          const response = await fetch('http://localhost:4000/api/web-images')
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

    function switchLanguage(language){
        dispatch({
            type: 'SET_LANGUAGE',
            payload: language
        })
    };


    return(
        <header className="bg-green-950 text-white flex">
            <div className="flex flex-row justify-between items-center h-20 w-full">
                <div className="bg-red-900 px-3 flex w-60 h-full justify-center items-center">
                    <Link href="/" className="bg-white h-14 w-14 flex justify-center items-center rounded-full">
                        <img src="/images/skylogo.jpg" className="h-7" />
                    </Link>
                </div>
                <div className="pe-5 flex items-center gap-4">
                    <div className="flex flex-row gap-4 items-center">
                        <Link href="/" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                                <p className="text-xs text-center hidden sm:text-md sm:block">{home}</p>
                                <AiFillHome className="sm:hidden text-2xl" />
                        </Link>
                        <Link href="/about-us" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                                <p className="text-xs text-center hidden sm:text-md sm:block">{aboutUs}</p>
                                <AiFillInfoCircle className="sm:hidden text-2xl" />
                        </Link>
                        <Link href="/our-team" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                                <p className="text-xs text-center hidden sm:text-md sm:block">{ourTeam}</p>
                                <AiOutlineTeam className="sm:hidden text-2xl" />
                        </Link>
                        <Link href="/our-classes" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                                <p className="text-xs text-center hidden sm:text-md sm:block">{ourClasses}</p>
                                <FaChalkboardTeacher className="sm:hidden text-2xl"/>
                        </Link>
                        <Link href="/contact-us" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                                <p className="text-xs text-center hidden sm:text-md sm:block">{contactUs}</p>
                                <AiOutlineMail className="sm:hidden text-2xl" />
                        </Link>
                    </div>
                    <div>
                        {language && language === 'chinese' ? <div className="bg-black h-6 w-6 sm:h-10 sm:w-10 bg-cover bg-center rounded-full cursor-pointer bg-[url(/images/usa.png)]" onClick={() => switchLanguage("english")}  /> : <div className="bg-black h-6 w-6 sm:h-10 sm:w-10 bg-cover bg-center rounded-full cursor-pointer bg-[url(/images/tw.png)]" onClick={() => switchLanguage("chinese")}  />}
                    </div>
                </div>
            </div>
        </header>
    )
}