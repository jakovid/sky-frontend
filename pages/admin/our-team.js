import withAuth from '@/components/withAuth'
import AdminNavbar from "@/components/AdminNavbar";
import { useContentsContext } from "@/hooks/useContentsContext";
import { useWebImagesContext } from "@/hooks/useWebImagesContext";
import AdminEditForm from "@/components/AdminComps/AdminEditForm";
import OurTeamEng from "../our-team"
import { useState } from "react";
import EditWebImage from "@/components/EditWebImage";

function AdminOurTeam() {
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    const [editType, setEditType] = useState('content')

    const handleClick = (type) => {
        setEditType(type);
    }

    const webImageArray = [];

    if (webImages){
        const heroMain = webImages.find(webImage => webImage.name === 'Our Team Hero Main');
        const heroSub = webImages.find(webImage => webImage.name === 'Our Team Hero Sub');
        const ourTeamIntro = webImages.find(webImage => webImage.name === "Our Team Intro");

        webImageArray.push(heroMain, heroSub, ourTeamIntro)
    }

    return(
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-2">
                <OurTeamEng />

                <div className="flex flex-col">
                    <div className="bg-red-900 p-5 flex items-center justify-center gap-8">
                        <button onClick={() => {handleClick('content')}} className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer ">Content</button>
                        <button onClick={() => {handleClick('images')}}  className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer ">Images</button>
                    </div>
                    <div className="bg-blue-950/90 h-full flex flex-col items-center py-2 gap-2">
                        {editType === 'content' && contents && contents.slice(31, 34).map((content) => (
                            <AdminEditForm key={content._id} content={content} />
                        ))}
                        {editType === 'images' && webImages && webImageArray.map((image) => (
                            <EditWebImage key={image.name} image={image} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default withAuth(AdminOurTeam)