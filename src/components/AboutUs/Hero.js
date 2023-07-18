import SkyLogo from '../../images/SkyLogo2.webp'

export default function BuildHero() {
    return(
        <div className="w-full flex flex-col"> 
            <div className="h-96 bg-green-950/90 flex flex-row items-center">
                    <div className="w-2/3 h-full flex justify-center items-center gap-3 text-center bg-center bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130725410976571502/jakovid_A_Canadian_Teacher_teaching_students_in_an_English_clas_7787d88c-5dd3-4986-8e03-53884d50e37d.png')]">
                        <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                            <img src={SkyLogo} />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center gap-4">
                        <div className='text-6xl'>About Us</div>
                        
                        <div className='flex items-center justify-center'>
                            <img className="h-64 rounded-full border-8 border-red-900 z-10" src="https://cdn.discordapp.com/attachments/989268383751106560/1130489036931346522/jakovid_a_student_raising_her_hand_in_an_English_classroom_in_T_f508f6cb-8ad7-4951-bbed-5e075db1b282.png"/>
                            <img className="h-64 rounded-full border-8 border-red-900 -ms-24" src="https://cdn.discordapp.com/attachments/989268383751106560/1130489653364011048/jakovid_An_American_Teacher_in_an_English_classroom_in_Taiwan_w_8fa7cd68-00ea-466b-9903-5f7305602c5b.png"/>
                        </div>
                    </div>
            </div>
            
        </div>
        // 
    )
}