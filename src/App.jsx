import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer";




const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <Banner></Banner>
      <Footer></Footer>
      {/* <Menu></Menu>
      <Contacts></Contacts> */}
    </div>
  );
};

export default App;
