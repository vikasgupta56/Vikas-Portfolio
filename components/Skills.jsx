import React from 'react';
import Link from 'next/link';

const Skills = () => {

    const skills = [
        {
            skillname: "HTML",
            perc: "95%"
        },
        {
            skillname: "CSS",
            perc: "95%"
        },
        {
            skillname: "JavaScript",
            perc: "90%"
        },
        {
            skillname: "Python",
            perc: "50%"
        },
        {
            skillname: "React",
            perc: "85%"
        },
        {
            skillname: "Node.js",
            perc: "70%"
        },
        {
            skillname: "MongoDB",
            perc: "80%"
        },
        {
            skillname: "UI design",
            perc: "70%"
        },
        {
            skillname: "Firebase",
            perc: "60%"
        },
        {
            skillname: "Graphic",
            perc: "60%"
        },
        {
            skillname: "Bootstrap",
            perc: "80%"
        }
    ]


    return (
        <>
            <div id="sabout">
                <div id="myimg" data-aos="fade-right" data-aos-duration="1150">
                    <div id="imghex">
                        <img src='/vikaspic.jpeg' alt='vikas' /></div>
                    <h1>Hii...What's up??...Btw I am...</h1>
                    <p className="impara">..a Full stack web developer from Mumbai..I have seious passion</p>
                    <p className="impara">for my work.I love to design web pages with creative UI effects,</p>
                    <p className="impara" id="lastmar"> animations, and dynamic user experiences.</p>
                    <Link href="#contactme">
                    <a id="sa">
                        <p id="special">Lets create something special</p>
                    </a>
                    </Link>
                    <a id="resume" href='/Vikas-Resume.pdf' download><p>Download my resume</p></a>

                </div>
                <div id="skilldiv" data-aos="fade-left" data-aos-duration="1150">
                    {skills.map((inner,index) => {
                        return (
                            
                                <div className="skills" key={index}>
                                    <div className="skillname">{inner.skillname}</div>
                                    <div className="perc">
                                        <div className="innerperc" style={{ width: inner.perc }}></div>
                                    </div>
                                    <div className="percent">{inner.perc}</div>
                                </div>
                            
                        )
                    })
                    }

                </div>
            </div>

        </>
    )
}

export default Skills
