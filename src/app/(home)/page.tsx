"use client";
import Home from "../../components/home/Home";
import About from "../../components/home/about";
import Explain from "../../components/home/explain";
import Insta from "../../components/home/Insta";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";
import "../../styles/todaylunch.css";

function Novalaw() {
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
export default Novalaw;
