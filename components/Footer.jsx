import React from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";
import { BsGithub, BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer>
                <a style={{ textDecoration: "none" }} href="#"><div id="newarrow">
                    <FaAngleDoubleUp id="uparrow" />
                </div></a>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://wa.me/917738302421" target="_blank">
                            <BsWhatsapp />
                        </a></li>
                        <li>
                            <a href="https://www.instagram.com/vikas_gupta______/?igshid=1i66m7ghmb71v" target="_blank">
                                <BsInstagram />
                            </a></li>
                        <li><a href="https://www.linkedin.com/in/vikas-gupta-79436a203/" target="_blank">
                            <BsLinkedin />
                        </a></li>
                        <li><a href="https://github.com/vikasgupta56" target="_blank">
                            <BsGithub />
                        </a></li>
                    </ul>
                </div>
                <p>VIKAS GUPTA &nbsp;| <a href="tel:+917738302421"><BsFillTelephoneFill />CONTACT : 7738302421 &nbsp;</a>|<a href="mailto:vikasgupta3634@gmail.com"><AiFillMail />vikasgupta3634@gmail.com</a></p>
            </footer>
        </>
    )
}

export default Footer
