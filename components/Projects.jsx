import React from 'react';

const Projects = () => {

    const projects = [
        {
            bgimg: "/pscbharatlogo.jpeg",
            title: "PSC Bharat",
            span: "",
            url: "https://www.pscbharat.in"
        },
        {
            bgimg: "/for-future-india-big-logo.webp",
            title: "For Future India",
            span: undefined,
            url: "https://www.forfutureindia.org"
        },
        {
            bgimg: '/donation.JPG',
            title: "Donation website DonateEazy using ",
            span: "MERN",
            url: "http://donateeazy.herokuapp.com/"
        },
        {
            bgimg: "https://image.freepik.com/free-vector/realistic-coffee-background_79603-1652.jpg",
            title: "Cafe website using ",
            span: "vanilla JavaScript",
            url: "https://vikasgupta56.github.io/coffee-shop/"
        }
    ]

    return (
        <>
           
            <div id="col" className="section">
                <div id="projects">
                    <p id="projp" data-aos="fade-left" data-aos-duration="1000">PROJECTS</p>
                    <div id="pline" data-aos="fade-left" data-aos-duration="1000"></div>
                    <div className="projectcontainer">
                        {projects.map((project,index) => {
                            return (
                                
                                    <div className="project" key={index} style={{ background: `url(${project.bgimg})` }} data-aos="fade-up" data-aos-duration="1400">
                                        <div className="whitediv" id={index}>
                                            <div className="projjflex"><h1 className="projhead">{project.title}<span>{project.span}</span></h1></div>
                                            <a href={project.url} target="_blank" rel="noreferrer"><button className="projbtn">View Site</button></a>
                                        </div>
                                    </div>
                                
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
