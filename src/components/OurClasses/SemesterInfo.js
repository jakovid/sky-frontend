export default function BuildSemesterInfo(){
    return(
        <div className="bg-red-900/90 flex flex-col py-10 justify-center items-center">
            <div className="bg-red-900 w-2/3 flex flex-col items-center justify-center border-8 border-green-950 rounded-xl py-10">
                <div className="flex flex-col items-center justify-center w-full gap-6">
                    <h2 className="text-6xl">Our Semesters</h2>
                    <div className="flex flex-row w-2/3 justify-between  text-center gap-8">
                        <div className="flex flex-col w-1/2 border-8 border-[#E0D3AF] p-4 rounded-xl justify-center">
                            <h3 className="text-4xl">Spring</h3>
                            <p className="text-xl">February - June</p>
                        </div>
                        <div className="flex flex-col w-1/2 border-8 rounded-xl border-[#E0D3AF] p-4 justify-center">
                            <h3 className="text-4xl">Fall</h3>
                            <p className="text-xl">September - January</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}