import { useState } from "react";
import React from "react"; 
import OurService from "./OurServices";

const About: React.FC = () => {
    return (  
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container">
                <h2>O mě</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos ipsum, earum repudiandae, architecto labore beatae itaque minima asperiores dolor distinctio quaerat assumenda, facere odio animi pariatur omnis. Possimus, reprehenderit.</p>
            </div>  
            <OurService />
        </section>
        );
};

export default About;
