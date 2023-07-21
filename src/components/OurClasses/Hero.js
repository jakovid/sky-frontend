import SkyLogo from '../../images/SkyLogo2.webp';

export default function BuildHero() {
    return(
        <div className="w-full flex flex-col">
            <div className="h-96 bg-green-950/90 flex flex-row items-center">
                <div className="w-2/3 h-full flex justify-center items-center gap-3 text-center bg-center bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1131857448806907934/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_f18fc469-1906-4c0c-8af7-b055fb3dc00c.png')]">
                    <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                           <img src={SkyLogo} />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center gap-4">
                    <div className='text-6xl'>Our Classes</div>
                        
                    <div className='flex items-center justify-center'>
                        <div className='h-64 w-96 bg-cover bg-center border-8 border-red-900 rounded-xl bg-[url("https://cdn.discordapp.com/attachments/989268383751106560/1131858031517372528/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_5f8d6ec4-549a-4da8-8d65-982efeb85aa0.png")]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}