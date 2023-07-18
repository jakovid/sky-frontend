import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineChat} from 'react-icons/hi'
import {GiBrickWall} from 'react-icons/gi'

export default function BuildKeys() {
    return(
        <div className='flex flex-col gap-2 bg-red-900/90'>
            <div className="w-full  text-center text-6xl p-4 pt-10">The Keys to Success!</div>
            
            <div className=" flex items-center justify-center pb-28">
                <div className="w-4/6 max-w-6xl h-full bg-red-900 p-10 flex gap-8 rounded-xl border-8 border-green-950">
                    <div className=" gap-3 flex flex-col items-center text-center">
                        <div><FaUserFriends className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]' /></div>
                        <h3 className="text-5xl">Small Classes</h3>
                        <p>Every student has more opportunities to speak and participate in class. 
                            With maximum class sizes of 12 and 2.5 hours per class. Everyone speaks.</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><HiOutlineChat className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="text-5xl">Immersive English</h3>
                        <p>Our method ensures that even the shyest student will get many opportunities 
                            to practice communicating. Our classes are team driven and competitive.</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><GiBrickWall className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="text-5xl">Strong Foundation</h3>
                        <p>With a strong foundation in phonics, students move on to grammar and reading 
                            where we reinforce the correct pronunciation of words and sentence patterns.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}