import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, process.env.EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    };

    return(
        <div className="bg-green-950/90 flex justify-center items-center py-10">
            <div className="bg-green-950 w-2/3 p-6 flex flex-col gap-8 border-8 border-red-900 rounded-xl">
                    <div className="flex flex-col text-center gap-2">
                        <div className="text-4xl">
                            Have Questions? Want to Sign Up?
                        </div>
                        <div className="text-sm">
                            Fill out the form below, email, or call and we will get back to you as soon as possible!
                        </div>
                    </div>
                    <form className="grid grid-cols-2 gap-4" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='name'>Name *</label>
                            <input type='text' name="user_name" id='name' className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' placeholder="Full Name" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='email'>Email *</label>
                            <input type='email' name="user_email" className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' id='email' placeholder="example@youremail.com" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='phone'>Phone Number</label>
                            <input type='tel' name="user_phone" id='phone'  className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' placeholder="123-456-7890"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='classes'>Classes *</label>
                            <select id='classes' name="user_class" className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full text-green-950 focus:outline-red-900' required>
                                <option value='Beginner Classes'>Beginner Classes 初階班</option>
                                <option value='Intermediate Classes'>Intermediate Classes 中階班</option>
                                <option value='Advanced Classes'>Advanced Classes 高階班</option>
                            </select>
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <label htmlFor='message'>Message</label>
                            <textarea type='text' name="user_message" className='bg-[#E0D3AF] placeholder-red-900/50 text-green-950 p-4 rounded-xl focus:outline-red-900' rows='7' id='message' placeholder="Write your message here..." />
                        </div>
                        <div className="flex col-span-2 justify-center items-center">
                        <button type='submit' value="Send" className='bg-red-900 px-6 py-2 rounded-s-full rounded-e-full text-2xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]'>SUBMIT</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}