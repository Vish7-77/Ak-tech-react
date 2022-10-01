import React from 'react'
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";

const Main = () => {
  return (
    <div>
          <HeadersComponent />
          <AboutUs />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
  )
}

export default Main