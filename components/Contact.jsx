import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [user, setUser] = useState({
        name: "",phone:"", email: "", message: ""
    })

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, phone, email, message } = user;
      
        emailjs.init("user_hKlZTXDcXsQNunTxsfI2j");
        let templateParams = {
           name,
           phone,
           email,
           message

         };
         emailjs.send('service_8v22h4n', 'template_jcsif6f', templateParams,"user_hKlZTXDcXsQNunTxsfI2j")
       .then(function(res) {
        new swal("Thank you", "We got your message and will contact you as soon as possible", "success");
      }, function(error) {
         console.log('FAILED...', error)
         new swal("Oops!", "We couldn't get your message. Please try again after some time", "error");
         ;
       });
    }

    return (
        <>
                <div id="cont" className="section">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path id="contactme" fill="#252934" fillOpacity="1" d="M0,96L720,224L1440,96L1440,320L720,320L0,320Z"></path>
                    </svg>
                    <div id="contact">
                        <h1 data-aos="fade-right" data-aos-duration="1200">CONTACT</h1>
                        <div data-aos="fade-right" data-aos-duration="1200" id="linee">
                        </div>
                        <p id="cp" data-aos="fade-left">Have a question or want to work together?
                        </p>
                        <div>
                            <form method="POST" data-aos="zoom-in" data-aos-duration="1000">
                                <div><input className="input" name="name" value={user.name} onChange={handleInput} placeholder="Name" /></div>
                                <div><input className="input" name="phone" value={user.phone} onChange={handleInput} placeholder="Your Mobile no" /></div>
                                <div><input className="input" name="email" value={user.email} onChange={handleInput} placeholder="Your Email" /></div>
                                <div><textarea placeholder="Your Message" name="message" value={user.message} onChange={handleInput} id="textarea"></textarea></div>
                                <button type="submit" id="btn" value="register" onClick={postData}>SUBMIT</button>
                            </form>
                        </div>
                    </div>

                </div>
            
        </>
    )
}

export default Contact
