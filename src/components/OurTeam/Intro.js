import OurTeam from '../../images/OurTeam.jpg'

export default function BuildIntro() {
    return(
        <div className="flex justify-center items-center bg-red-900/90 py-10">
            <div className="grid grid-cols-2 max-w-6xl w-4/6 items-center  p-5 gap-4">
                <img src={OurTeam} alt="hi" className="border-8 border-green-950 rounded-xl" />
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h2 className="text-6xl">Sky Team</h2>
                    <p className="text-xl">Sky Education employees are experienced and passionate individuals who have been handpicked for their roles. 
                        To be with us, means you enjoy being around children, also have a ton of patience and most importantly have 
                        a fun personality. Our small class sizes allow for one on one time with our teachers, giving your kid undivided 
                        attention no matter the subject.</p>
                </div>
            </div>
        </div>
    )
}