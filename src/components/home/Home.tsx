"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "../../styles/aos.css";

function RoadMap() {
    const [imgSrc, setImgSrc] = useState("img/header.png");

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const handleResize = () => {
            if (window.innerWidth < 850) {
                setImgSrc("img/gmsh-mobile.png");
            } else {
                setImgSrc("img/header.png");
            }
        };

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <img src={imgSrc} alt="GMSH RoadMap" className="header-img" />
                <div className="header-container" data-aos="fade-up">
                    <h1 className="title">TodayLunch</h1>
                </div>
                <div className="img-container" data-aos="fade-up">
                    <img loading="lazy" src="img/arrow.png" className="arrow" />
                </div>
            </header>
        </div>
    );
}

export default RoadMap;
