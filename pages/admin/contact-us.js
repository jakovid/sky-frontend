import withAuth from '@/components/withAuth'
import AdminNavbar from "@/components/AdminNavbar";
import { useContentsContext } from "@/hooks/useContentsContext";
import { useWebImagesContext } from "@/hooks/useWebImagesContext";
import AdminEditForm from "@/components/AdminComps/AdminEditForm";
import Iframe from 'react-iframe'
import { useState } from "react";
import EditWebImage from "@/components/EditWebImage";
import Head from 'next/head';

function AdminContactUs() {
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    const [editType, setEditType] = useState('content')

    const handleClick = (type) => {
        setEditType(type);
    }

    const webImageArray = [];

    if (webImages){
        const heroMain = webImages.find(webImage => webImage.name === "Contact Us Hero Main");
        const heroSub = webImages.find(webImage => webImage.name === "Contact Us Hero Sub");

        webImageArray.push(heroMain, heroSub)
    }

    return(
        <div>
            <Head>
                <title>Sky Education | Edit Contact Us</title>
            </Head>
            <div className='bg-red-900 flex sm:hidden w-screen h-screen justify-center items-center text-2xl text-center p-8'>
                Please switch to desktop to edit the website.
            </div>
            <div className="hidden sm:flex flex-col w-screen">
                <AdminNavbar />
                <div className="grid grid-cols-2">
                    <Iframe url="https://www.skyeducation.online/contact-us" className='w-full h-full'/>


                    <div className="flex flex-col">
                        <div className="bg-red-900 p-5 flex items-center justify-center gap-8">
                            <button onClick={() => {handleClick('content')}} className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer hover:text-green-950 hover:bg-white">Content</button>
                            <button onClick={() => {handleClick('images')}}  className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer hover:text-green-950 hover:bg-white">Images</button>
                        </div>
                        <div className="bg-blue-950/90 h-full flex flex-col items-center py-2 gap-2">
                            {editType === 'content' && contents && contents.slice(58, 65).map((content) => (
                                <AdminEditForm key={content._id} content={content} />
                            ))}
                            {editType === 'images' && webImages && webImageArray.map((image) => (
                                <EditWebImage key={image.name} image={image} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default withAuth(AdminContactUs)