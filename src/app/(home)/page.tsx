"use client";
import Home from "../../components/home/Home";
import About from "../../components/home/about";
import Explain from "../../components/home/explain";
import Success from "../../components/home/success";
import Recruit from "../../components/home/recruit";
import "../../styles/todaylunch.css";

function Novalaw() {
    return (
        <div>
            <Home />
            <About />
            <Explain />
            <Success />
            <Recruit />
        </div>
    );
}
export default Novalaw;
