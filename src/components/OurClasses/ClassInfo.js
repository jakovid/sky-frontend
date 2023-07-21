export default function BuildClassInfo(){
    return(
        <div className="bg-green-950/90 flex flex-col justify-center items-center">
            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130755685571899553/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a9ea020d-fab6-44b0-a8d9-6b2a6e27301e.png')]">
                <div className="w-1/2 bg-[#E0D3AF] text-red-900 p-8 text-center text-xl border-8 border-red-900 rounded-xl">Classes are twice a week and 2.5 hours long at the times 
                listed below. Our classes are held in semester long periods over the course 
                of 4 to 5 months, either September to January or January to June. This ensures 
                the students have rates of retainment of the information they learn and lays the 
                foundation to speaking English clearly and fluently.</div>
            </div>
            <div className="w-2/3 bg-green-950 flex flex-col justify-center items-center my-10 p-8 gap-4 border-8 border-red-900 rounded-xl">
                <h2 className="text-6xl">Class Times</h2>
                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">Monday & Thursday</p>
                        <p>1:15PM - 3:45PM</p>
                    </div>
                    <div>
                        <p className="text-2xl">Wednesday & Friday</p>
                        <p>1:15PM - 3:45PM</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">Monday & Thursday</p>
                        <p>3:40PM - 7:10PM</p>
                    </div>
                    <div>
                        <p className="text-2xl">Wednesday & Friday</p>
                        <p>3:40PM - 7:10PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}