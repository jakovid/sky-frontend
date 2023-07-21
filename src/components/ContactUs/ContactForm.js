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
        <div className="contact-us-body-container">
            <div className="contact-us-body-left">
                <div className="contact-us-body-left-text">
                    <div className="contact-us-body-title">
                        Have Questions? Want to Sign Up?
                    </div>
                    <div className="contact-us-body-subtitle">
                        Fill out the form below, email, or call and we will get back to you as soon as possible!
                    </div>
                </div>
                <form className="contact-us-body-left-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-item">
                        <label htmlFor='name'>Name *</label>
                        <input type='text' name="user_name" id='name' className='form-input' placeholder="Full Name" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='email'>Email *</label>
                        <input type='email' name="user_email" className='form-input' id='email' placeholder="example@youremail.com" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='tel' name="user_phone" id='phone'  className='form-input' placeholder="123-456-7890"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='classes'>Classes *</label>
                        <select id='classes' name="user_class" className='form-input' required>
                            <option value='Beginner Classes'>Beginner Classes 初階班</option>
                            <option value='Intermediate Classes'>Intermediate Classes 中階班</option>
                            <option value='Advanced Classes'>Advanced Classes 高階班</option>
                        </select>
                    </div>
                    <div className="form-item message-box">
                        <label htmlFor='message'>Message</label>
                        <textarea type='text' name="user_message" className='form-input' rows='7' id='message' placeholder="Write your message here..." />
                    </div>
                    <button type='submit' value="Send" className='contact-us-submit'>SUBMIT</button>
                </form>
            </div>
            <div className="contact-us-body-right">
                <a href = "mailto: wilmao27@gmail.com" className='contact-us-body-right-item'>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" fill="white" viewBox="0 96 960 960" width="48"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"/></svg>
                    <div>wilmao27@gmail.com</div>
                </a>
                <a href="tel:0225338263" className='contact-us-body-right-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" viewBox="0 96 960 960" width="48"><path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"/></svg>
                    <div>02 2533 8263</div>
                </a>
                <a href="https://goo.gl/maps/LiUep5WcGGkFXrRP8" target="_blank" className='contact-us-body-right-item'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" viewBox="0 96 960 960" width="48"><path d="M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758Zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Zm270-524Z"/></svg>
                    <div>No. 17, Lane 557, Mingshui Road <br/> 
                    Zhongshan District, Taipei, 10491 </div>
                </a>
            </div>

        </div>
    )
}