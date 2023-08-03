import {FaMapPin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext'


export default function BuildContactInfo(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let email = null, phone = null, addressOne = null, addressTwo = null

    if (contents) {
        const contactUsEmail = contents.find(content => content.name === 'contactUsEmail');
        if (contactUsEmail) { email = contactUsEmail[language] };

        const contactUsPhone = contents.find(content => content.name === 'contactUsPhone');
        if (contactUsPhone) { phone = contactUsPhone[language] };

        const contactUsAddressOne = contents.find(content => content.name === 'contactUsAddressOne');
        if (contactUsAddressOne) { addressOne = contactUsAddressOne[language]};

        const contactUsAddressTwo = contents.find(content => content.name === 'contactUsAddressTwo');
        if (contactUsAddressTwo) { addressTwo = contactUsAddressTwo[language] };

    }

    return(
        <div className="bg-red-900/90 flex justify-center items-center py-10">
            <div className="w-full px-8 lg:px-0 lg:w-2/3 flex flex-col lg:grid lg:grid-cols-3 gap-4">
                <a href ={`mailto: ${email}}`} className='bg-red-900 py-8 flex flex-col gap-4 justify-between items-center rounded-xl border-8 border-green-950'>
                    <AiOutlineMail className='text-5xl'/>
                    <div className="text-sm lg:text-xs xl:text-sm">{email}</div>
                </a>
                <a href={`tel:${phone}`} className='bg-red-900 py-8 flex flex-col gap-4 justify-between items-center rounded-xl border-8 border-green-950'>
                    <BsTelephone className='text-5xl' />
                    <div className="text-sm lg:text-xs xl:text-sm">{phone}</div>
                </a>
                <a href="https://goo.gl/maps/LiUep5WcGGkFXrRP8" target="_blank" className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950 gap-4'>
                    <FaMapPin className='text-5xl' />
                    <div className="text-sm lg:text-xs xl:text-sm">{addressOne} <br/> 
                    {addressTwo} </div>
                </a>
            </div>
        </div>
    )
}