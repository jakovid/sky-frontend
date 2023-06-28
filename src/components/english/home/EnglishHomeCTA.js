import React, { useRef } from "react";
import "../../../styles/home/HomeCTA.css";
import emailjs from "@emailjs/browser";

export default function EnglishHomeCTA() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9q9qq72', 'template_h2lis7d', form.current, 'hrdLjccQiPS2eGQhu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        
    };

    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    return(
        <div id='home-cta-container'>
            <div id='home-cta-text'>
                New English Classes {1 < currentMonth < 8 ? `July ${currentYear}` : `January ${currentYear+1}`}. <br/> Register Now!
            </div>

            <div id='home-cta-email-wrapper'>

                <form id='home-cta-email-container' ref={form} onSubmit={sendEmail}>
                    <input id='home-cta-email-input' name="user_email"  type='email' placeholder='Email' />
                    <button id='home-cta-submit-button' value="Send" type='submit'>SUBMIT</button>
                </form>

                <div id='home-cta-email-subtext'>
                    We will get in touch very soon. 
                    Thank you!
                </div>

            </div>
        </div>
    )
}