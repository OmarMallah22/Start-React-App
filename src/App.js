import React, { Component } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Modal />
      </>
    );
  }
}
