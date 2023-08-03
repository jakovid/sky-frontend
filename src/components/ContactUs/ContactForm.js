import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from "../../hooks/useContentsContext";

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

    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null, subtitle = null, button = null

    if(contents) {
        const contactUsTitle = contents.find(content => content.name === 'contactUsFromTitle');
        if (contactUsTitle) { title = contactUsTitle[language] };

        const contactUsSubtitle = contents.find(content => content.name === 'contactUsFormSubtitle');
        if (contactUsSubtitle) { subtitle = contactUsSubtitle[language] };

        const contactUsButton = contents.find(content => content.name === 'contactUsFormButton');
        if (contactUsButton) { button = contactUsButton[language] };
    }

    return(
        <div className="bg-green-950/90 flex justify-center items-center p-2 sm:p-8 lg:p-0 lg:py-10">
            <div className="bg-green-950 lg:w-2/3 p-6 flex flex-col gap-8 border-8 border-red-900 rounded-xl">
                    <div className="flex flex-col text-center gap-2">
                        <div className="text-2xl lg:text-4xl">
                            {title}
                        </div>
                        <div className="text-sm">
                            {subtitle}
                        </div>
                    </div>
                    <form className="flex flex-col lg:grid lg:grid-cols-2 gap-4" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='name'>{language == "english" ? "Name" : "名稱"} *</label>
                            <input type='text' name="user_name" id='name' className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' placeholder="Full Name" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='email'>{language == "english" ? "Email" : "電子郵件"}</label>
                            <input type='email' name="user_email" className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' id='email' placeholder="example@youremail.com" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='phone'>{language == "english" ? "Phone Number" : "電話號碼"}</label>
                            <input type='tel' name="user_phone" id='phone'  className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full placeholder-red-900/50 text-green-950 focus:outline-red-900' placeholder="123-456-7890"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='classes'>{language == "english" ? "Classes" : "班級"} *</label>
                            <select id='classes' name="user_class" className='bg-[#E0D3AF] py-2 px-6 rounded-s-full rounded-e-full text-green-950 focus:outline-red-900' required>
                                <option value='Beginner Classes'>Beginner Classes 初階班</option>
                                <option value='Intermediate Classes'>Intermediate Classes 中階班</option>
                                <option value='Advanced Classes'>Advanced Classes 高階班</option>
                            </select>
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <label htmlFor='message'>{language == "english" ? "Message" : "信息"}</label>
                            <textarea type='text' name="user_message" className='bg-[#E0D3AF] placeholder-red-900/50 text-green-950 p-4 rounded-xl focus:outline-red-900' rows='7' id='message' placeholder={language == "english" ? "Write your message here..." : "在這裡寫下您的信息..."} />
                        </div>
                        <div className="flex col-span-2 justify-center items-center">
                        <button type='submit' value="Send" className='bg-red-900 px-6 py-2 rounded-s-full rounded-e-full text-2xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]'>{button}</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}