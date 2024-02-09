import React from "react";
import '../App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
import Form from "./Form";
import HolidayView from "./HolidayView";
import Footer from "./Footer";


function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Cards></Cards>
            <Form></Form>
            <HolidayView></HolidayView>
            <Footer></Footer>
        </>
    )
}

export default Home