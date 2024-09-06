import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { useState } from "react";
import Login from "../../Components/Login/Login";

import Header from "../../Components/Header/Header";
import Features from "../../Components/Features/Features";
import Upload from "../../Components/Upload/Upload";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="home" id="home">
        <Header />
      </div>
      <Features />
      <Upload />
      <About />
      <Footer />
    </>
  );
};
export default Home;
