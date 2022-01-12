import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const Home = () => {

    const row = [];
    const tr = [];

    for (let i = 0; i <= 7; i++) {
        row.push(<div className="row">{tr}
        </div>)
    }
    for (let i = 0; i <= 14; i++) {
        tr.push(<div className="tr">
        </div>)
    }


    return (
        <>
            <div id="home" className="section">

                <div className="homeflex">
                    <div id="info">
                        <div className="flex">
                            <p id="infop">Hello,I'm<span id="pinkcolor"> Vikas Gupta</span></p>
                        </div>
                        <p id="ip">I'm a full-stack Web Developer</p>
                        <Link href='/#col'>
                            <a><button id="btnn">View my work
                                <IoMdArrowRoundForward id="righta" style={{ marginLeft: "9px" }} />
                            </button></a>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <video loop muted autoPlay id="video">
                        <source src='/file.mp4' type="video/mp4" />
                    </video>
                    <video id="secondvideo" loop muted autoPlay>
                        <source src='/file.mp4' type="video/mp4" />
                    </video>
                    {row}
                </div>
            </div>



        </>
    )
}

export default Home
