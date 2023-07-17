import SkyLogo from '../images/SkyLogo2.webp'
import {FaFacebook} from 'react-icons/fa'

export default function BuildFooter(){
    return(
        <footer className='flex flex-row justify-center items-center bg-white gap-10 p-3'>
            <a href="tel:0225338263" className='text-5xl text-red-900'>02 2533 8263</a>
            <div className='flex flex-row items-center justify-center'>
                <img id='english-footer-sky-logo' src={SkyLogo} />
                <a href='https://www.facebook.com/Skyeducation2008' target="_blank"><FaFacebook className='fill-blue-900 text-6xl' /></a>
            </div>
        </footer>
    )
}