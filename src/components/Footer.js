import SkyLogo from '../images/SkyLogo2.webp'
import {FaFacebook, FaMapPin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import { useLanguageContext } from '../hooks/useLanguageContext'
import { WebContent } from '../content/WebContent'

export default function BuildFooter(){
    const { language, dispatch } = useLanguageContext();

    return(
        <footer className='flex flex-row justify-between items-center bg-red-900/90 gap-10 py-3 px-20'>
            <a href="tel:0225338263" className='text-lg flex gap-2 items-center'><BsTelephone /><div >02 2533 8263</div></a>

            <a className='flex gap-2 cursor-pointer items-center' href='https://goo.gl/maps/jDmTTpKEmqy1w6FY9'>
                <FaMapPin  />
                <p >{WebContent.footerAddress[language]}</p>
            </a>

            <div className='flex flex-row items-center gap-6 justify-center'>
                <img className='h-8 bg-[#E0D3AF] pt-1 px-4 rounded-s-full rounded-e-full' src={SkyLogo} />
                <a href='https://www.facebook.com/Skyeducation2008' target="_blank"><FaFacebook className='text-2xl' /></a>
            </div>
        </footer>
    )
}