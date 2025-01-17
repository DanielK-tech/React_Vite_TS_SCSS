import { useState } from "react";
import React from "react";
import OurService from "./OurServices";

const About: React.FC = () => {
    return (
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container">
                <h2>O mě</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos ipsum, earum repudiandae, architecto labore
                    beatae itaque minima asperiores dolor distinctio quaerat
                    assumenda, facere odio animi pariatur omnis. Possimus,
                    reprehenderit.
                </p>
            </div>
            {/* <svg viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,176C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg> */}
            <OurService />
        </section>
    );
};

export default About;
