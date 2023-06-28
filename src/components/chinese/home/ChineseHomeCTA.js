import React, { useRef } from "react";
import "../../../styles/home/HomeCTA.css";
import emailjs from "@emailjs/browser";


export default function ChineseHomeCTA() {
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

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    return(
        <div id='home-cta-container'>
            <div id='home-cta-text' className='chinese'>
                {1 < currentMonth < 8 ? <div className="chinese-home-cta-text">{currentYear}年7月開始最新課程！</div> : <div className="chinese-home-cta-text">{currentYear+1}年1月開始最新課程！</div>}
                
            </div>

            <div id='home-cta-email-wrapper'>

                <form id='home-cta-email-container' ref={form} onSubmit={sendEmail}>
                    <input id='home-cta-email-input' name="user_email"  type='text' placeholder='電子郵件' />
                    <button id='home-cta-submit-button' value="Send" type='submit'>提交</button>
                </form>

                <div id='home-cta-email-subtext'>
                    我們會盡快和您聯繫，謝謝!
                </div>

            </div>
        </div>
    )
}