"use client";
import Home from "../../components/home/Home";
import About from "../../components/home/about";
import Works from "../../components/home/works";
import Success from "../../components/home/success";
import Recruit from "../../components/home/recruit";
import Footer from "../../components/home/Footer";
import "../../styles/todaylunch.css";

function Novalaw() {
    return (
        <div>
            <Home />
            <About />
            <Works />
            <Success />
            <Recruit />
            <Footer />
        </div>
    );
}
export default Novalaw;
