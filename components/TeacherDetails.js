import { useTeachersContext } from "../hooks/useTeachersContext"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useState } from "react";

export default function TeacherDetails({ teacher }) {
    const { dispatch } = useTeachersContext()

    const [order, setOrder] = useState(teacher.order)

    const token = localStorage.getItem('token');

    function countrySwitch(country) {
        switch(country) {
            case 'Taiwan':
                return "/images/tw.png";
            case 'USA':
                return "/images/usa.png";
            case 'Canada':
                return "/images/cn.png";
            case 'UK':
                return "/images/uk.png";
            case 'Ireland':
                return "/images/ire.png";
            case 'New Zealand' :
                return "/images/nz.png";
            case 'Australia':
                return "/images/au.png";
            case 'South Africa':
                return "/images/sa.png";
            default:
                return '';
        }
      };

    const handleClick = () => {
        deleteImage();
        deleteTeacher();
    }

    const deleteImage = async () => {
        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/images/` + teacher.img_id;
        const response = await fetch (API_ENDPOINT, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
        });
        const json = await response.json();
        console.log(json);
    }

    const deleteTeacher = async () => {
        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/teachers/` + teacher._id;
        const response = await fetch(API_ENDPOINT, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TEACHER', payload: json })
        }
    }

    const saveOrder= async (e) => {
        // I can't figure out how to re-render without reloading the webpage
        // e.preventDefault()

        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/teachers/` + teacher._id;
        
        const response = await fetch(API_ENDPOINT, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ order })
        })
        const json = await response.json()
        console.log('updating')

        if (response.ok) {
            sendDispatch(json);
        }
    }

    const sendDispatch = (json) => {
        dispatch({ type: 'PATCH_TEACHER', payload: json })
    }

    function truncateBio(bio) {
        return bio.length > 30 ? bio.substring(0, 30) + '...' : bio;
    }

    return (
        <div className="bg-green-950 rounded-lg m-4 p-5 gap-2 relative shadow-md flex items-end ">
            <div className="flex flex-col items-center w-24">
                <img src={teacher.img_url} className="h-14 md:h-20 "/>
                <div className="flex gap-3 items-center h-6 md:w-28">
                    <h4 className="text-xs md:text-sm lg:text-md xl:text-lg">{teacher.name}</h4>
                    <img className="h-2 md:h-3 lg:w-4" src={countrySwitch(teacher.country)} />
                </div>
            </div>
            <p className="text-xs flex h-20 w-20 bg-white text-black p-2">{teacher.bio ? truncateBio(teacher.bio) : "No Bio Available"}</p>
            <div className="flex flex-col items-center gap-2 text-xs h-20 xl:text-5xl text-black">
                <div className="flex items-center gap-2">
                    <label>Order:</label>
                    <input type="number" value={order} className="text-black w-4 h-6 ps-1 xl:w-16 flex" onChange={(e) => setOrder(e.target.value)} />
                </div>
                <button type="submit" onClick={saveOrder} className="bg-red-900 text-white px-1 text-xs  h-auto w-auto m-2 rounded-s-full rounded-e-full cursor-pointer border-4 border-red-900 hover:bg-green-950">Save Order Update</button>
            </div>
            <span onClick={handleClick} className="flex items-center justify-center absolute top-5 right-5 cursor-pointer p-1 border-red-900 border-2 rounded-full fill-red-900 hover:bg-red-900 hover:fill-white">
                <BsFillTrash3Fill fill="inherit" />
            </span>
        </div>
    )
}