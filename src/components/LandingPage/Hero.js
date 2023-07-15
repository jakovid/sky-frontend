import SkyLogo from '../../images/SkyLogo2.webp'

export default function BuildHero() {
    return(
        <div className="grid grid-cols-3 h-96">
            <div className="flex justify-center items-center col-span-2 bg-center bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1129712468206288906/jakovid_Students_in_an_English_classroom_in_Taiwan_with_a_dark__f78af349-a0ba-4e35-ad42-11bf7c50354c.png')]">
                <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                    <img src={SkyLogo} />
                </div>
            </div>
            <div className="bg-green-950/90 flex flex-col justify-center items-center px-6 gap-3">
                <p className="text-6xl text-center">Where they study matters.</p>
                <p className="text-xl">Small Classes. Native Teachers.</p>
                <p className="text-xs">- Dazhi, Taipei -</p>
                <div className="bg-red-900 px-6 py-2 border-4 border-red-900 rounded-s-full rounded-e-full text-sm cursor-pointer hover:bg-[#E0D3AF] hover:text-red-900">Find a class now!</div>
                <p className="text-xs">- Est. 2008 -</p>
            </div>

        </div>
    )
}