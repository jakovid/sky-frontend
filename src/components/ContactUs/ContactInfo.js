import {FaMapPin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { WebContent } from '../../content/WebContent'


export default function BuildContactInfo(){
    const { language, dispatch } = useLanguageContext();

    return(
        <div className="bg-red-900/90 flex justify-center items-center py-10">
            <div className="w-2/3 grid grid-cols-3 gap-4">
                <a href ={`mailto: ${WebContent.contactUsEmail[language]}}`} className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950'>
                    <AiOutlineMail className='text-5xl'/>
                    <div className="text-sm">{WebContent.contactUsEmail[language]}</div>
                </a>
                <a href={`tel:${WebContent.contactUsPhone[language]}`} className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950'>
                    <BsTelephone className='text-5xl' />
                    <div className="text-sm">{WebContent.contactUsPhone[language]}</div>
                </a>
                <a href="https://goo.gl/maps/LiUep5WcGGkFXrRP8" target="_blank" className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950 gap-4'>
                    <FaMapPin className='text-5xl' />
                    <div className="text-sm">{WebContent.contactUsAddressOne[language]} <br/> 
                    {WebContent.contactUsAddressTwo[language]} </div>
                </a>
            </div>
        </div>
    )
}