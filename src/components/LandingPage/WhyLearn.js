export default function BuildWhyLearn() {

    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();


    return(
        <div className="bg-red-900/90 py-10 flex justify-center text-center">
            <div className="flex flex-col items-center gap-4 w-4/6 max-w-6xl">
                <h2 className="text-6xl">Learn English the Sky Way</h2>
                <p>Long-term English success starts with a great foundation.</p>
                <p className="text-xl">At Sky Education, we immerse students in a lively, 
                English-speaking setting where everyone gets a chance to shine. Our classrooms 
                resonate with high energy, small class sizes, and enthusiastic, caring teachers. 
                With a strong focus on phonics, grammar, and reading, we instill confident speaking skills that will go with them beyond school. 
                Give your child the competitive edge they deserve - reach out to Sky Education today.</p>
                <div className="bg-green-950 text-3xl px-6 py-2 border-4 border-green-950 rounded-s-full rounded-e-full cursor-pointer hover:bg-[#E0D3AF] hover:text-green-950">New English Classes Starting {1 < currentMonth < 8 ? `July ${currentYear}` : `January ${currentYear+1}`}</div>
            </div>
        </div>
    )
}