import {FaMapPin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'


export default function BuildContactInfo(){
    return(
        <div className="bg-red-900/90 flex justify-center items-center py-10">
            <div className="w-2/3 grid grid-cols-3 gap-4">
                <a href = "mailto: wilmao27@gmail.com" className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950'>
                    <AiOutlineMail className='text-5xl'/>
                    <div className="text-sm">wilmao27@gmail.com</div>
                </a>
                <a href="tel:0225338263" className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950'>
                    <BsTelephone className='text-5xl' />
                    <div className="text-sm">02 2533 8263</div>
                </a>
                <a href="https://goo.gl/maps/LiUep5WcGGkFXrRP8" target="_blank" className='bg-red-900 py-8 flex flex-col justify-between items-center rounded-xl border-8 border-green-950 gap-4'>
                    <FaMapPin className='text-5xl' />
                    <div className="text-sm">No. 17, Lane 557, Mingshui Road <br/> 
                    Zhongshan District, Taipei, 10491 </div>
                </a>
            </div>
        </div>
    )
}