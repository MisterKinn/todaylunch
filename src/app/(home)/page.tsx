"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";

import Home from "../../components/desktop/Home";
import About from "../../components/desktop/About";
import Explain from "../../components/desktop/Explain";
import Insta from "../../components/desktop/Insta";
import Banner from "../../components/desktop/Banner";
import Footer from "../../components/desktop/Footer";

import MobileHome from "../../components/mobile/Home";
import MobileAbout from "../../components/mobile/About";
import MobileExplain from "../../components/mobile/Explain";
import MobileInsta from "../../components/mobile/Insta";
import MobileBanner from "../../components/mobile/Banner";
import MobileFooter from "../../components/mobile/Footer";

function TodayLunch() {
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    if (isMobile) {
        return (
            <div id="page">
                <MobileHome />
                <MobileAbout />
                <MobileExplain />
                <MobileInsta />
                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <Home />
                <About />
                <Explain />
                <Insta />
                <Banner />
                <Footer />
            </div>
        );
    }
}
export default TodayLunch;
