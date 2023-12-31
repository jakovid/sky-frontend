import Image from 'next/image'

// Import icons
import {FaFacebook, FaMapPin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'

// Import Hooks
import { useLanguageContext } from '../hooks/useLanguageContext'
import { useContentsContext } from '../hooks/useContentsContext'

export default function BuildFooter(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let address = null;

    if (contents){
        const footerAddress = contents.find(content => content.name === 'footerAddress');
        if (footerAddress) { address = footerAddress[language]};
    }

    return(
        <footer className='flex flex-row justify-between items-center bg-red-900/90 md:gap-10 py-3 px-20'>
            <a href="tel:0225338263" className='text-lg flex gap-2 items-center'><BsTelephone /><div className='hidden md:block' >02 2533 8263</div></a>

            <a className='flex gap-2 cursor-pointer text-lg items-center' href='https://goo.gl/maps/jDmTTpKEmqy1w6FY9'>
                <FaMapPin  />
                <p className='hidden md:block' >{address}</p>
            </a>

            <div className='flex flex-row items-center gap-6 justify-center'>
                <img className='h-6 md:h-8 bg-[#E0D3AF] pt-1 px-4 rounded-s-full rounded-e-full' src="/images/SkyLogo2.webp" />
                <a href='https://www.facebook.com/Skyeducation2008' target="_blank"><FaFacebook className='text-2xl' /></a>
            </div>
        </footer>
    )
}