export default function BuildClassLevels(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center bg-red-900/90">
            <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                <img className="w-96  rounded-3xl border-8 border-green-950" src="https://cdn.discordapp.com/attachments/989268383751106560/1130755668555599902/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a96abf72-14ef-4646-8f05-a6c6981af1b9.png"/>
                <div className="flex flex-col gap-10">
                    <div className="text-6xl">Beginner Classes</div>
                    <p className="text-xl">At Sky, we believe that building a strong foundation is the most important 
                    step to becoming a strong English speaker. We start with a program of phonics that reinforces 
                    correct pronunciation from day one! We also introduce vocabulary words and important phrases 
                    that students can use in everyday conversations.</p>
                </div>
            </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1131857448806907934/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_f18fc469-1906-4c0c-8af7-b055fb3dc00c.png')]">
                <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">Find a Beginner Class</div>
            </div>

            <div className="w-full flex justify-center items-center bg-green-950/90">
                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">Intermediate Classes</div>
                        <p className="text-xl">Once students demonstrate a strong grasp of phonics and basic sentence 
                        patterns - we split our classes into one day of reading and one day of grammar. In our reading 
                        classes, students learn new vocabulary about interesting topics - and our teachers practice with 
                        students every day to learn to read with proper pronunciation, interesting pacing, and enthusiasm! 
                        Our grammar classes take students through verb tenses and learn to stay away from common mistakes 
                        for English learners. Above all, both classes emphasize speaking - and with our small class sizes, 
                        every student gets a lot of opportunity for practice!</p>
                    </div>
                    <img className="w-96  rounded-3xl border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130756640430358599/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_7598e7a1-6e2b-4618-92aa-08489fc27cb5.png"/>
                </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1131858031517372528/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_5f8d6ec4-549a-4da8-8d65-982efeb85aa0.png')]">
                <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">Contact Us to Join</div>
            </div>

            <div className="w-full flex justify-center items-center bg-red-900/90 border-b-8 border-red-900">
                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <img className="w-96 rounded-3xl border-8 border-green-950" src="https://cdn.discordapp.com/attachments/989268383751106560/1131857448806907934/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_f18fc469-1906-4c0c-8af7-b055fb3dc00c.png"/>
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">Advanced Classes</div>
                        <p className="text-xl">At our highest levels, we focus our classes to maximize speaking and communication. 
                        Using monthly magazines written in Taiwan to introduce interesting topics we challenge students to speak 
                        for extended periods to demonstrate their knowledge and think critically about new topics and ideas. With 
                        our small class sizes, students can speak frequently, not just with the teacher but with each other in 
                        small groups, using materials that are interesting and unique.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}