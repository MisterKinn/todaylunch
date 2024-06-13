"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../../styles/style.css";
import AOS from "aos";
import "../../../styles/aos.css";

import Desktop from "../../../components/instagram/add/desktop";
import Mobile from "../../../components/instagram/add/mobile";

function Instagram() {
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    if (isMobile) {
        return (
            <div id="page">
                <Mobile />
            </div>
        );
    } else {
        return (
            <div id="page">
                <Desktop />
            </div>
        );
    }
}

export default Instagram;
