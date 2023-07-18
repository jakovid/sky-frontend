export default function BuildInfo(){
    return(
        <div className="bg-green-950/90 flex justify-center items-center">
            <div className="h-full flex flex-col items-center">
                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <img className="w-1/3 rounded-3xl border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130755668555599902/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a96abf72-14ef-4646-8f05-a6c6981af1b9.png"/>
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">Our Mission</div>
                        <p className="text-xl">At the core of Sky Education's teaching philosophy is an emphasis on speaking. 
                            From the moment students walk into Sky; they are in an English speaking environment. 
                            We create a high-energy learning environment that is fun for our students to learn and 
                            teachers to teach. Happy teachers are more productive and creative, as happy children learn 
                            better.</p>
                    </div>
                </div>

                <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130755685571899553/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a9ea020d-fab6-44b0-a8d9-6b2a6e27301e.png')]">
                    <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">Find a Class Now!</div>
                </div>

                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">Great Teachers, <br/> Great Students</div>
                        <p className="text-xl">A priority at Sky Education is hiring teachers who are energetic and passionate about teaching. 
                            Our teachers bring a high level of energy to the classroom and genuinely care about our students 
                            in an out of class. When students are actively learning and constantly being challenged, there is 
                            no time to get bored!</p>
                    </div>
                    <img className="w-1/3 rounded-3xl border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130756640430358599/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_7598e7a1-6e2b-4618-92aa-08489fc27cb5.png"/>
                </div>
            </div>
        </div>
    )
}