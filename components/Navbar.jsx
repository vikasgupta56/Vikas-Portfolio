import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';


const Navbar = () => {

    useEffect(() => {

        const sections = document.querySelectorAll("div.section");
        const navLi = document.querySelectorAll("div#navbar ul li");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute("id");

                }
            });
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
        });



    }, [])

    let menu = () => {
        document.getElementById('menu').checked = false
    }

    return (
        <>

            <div id="navbar">
                <input type='checkbox' id='menu' />
                <ul>
                    <li className="navli home active" onClick={menu}>
                        <Link href="#home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="navli about" onClick={menu}>
                        <Link href="#about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="navli col" onClick={menu}>
                        <Link href="#col">
                            <a>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li className="navli cont" onClick={menu}>
                        <Link href="#contactme">
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
                <div className='hamburger'>

                    <label htmlFor='menu' id="nav-icon3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Navbar
