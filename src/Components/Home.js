import React from "react";
import BannerBackground from "../Assets/mountains_behind.png";
// import BannerImage from "../Assets/weight.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Altitude Fitness
          </h1>
          <p className="primary-text">
            Take the next steps to a better life!
          </p>
          <button className="secondary-button">
            Check Us Out <FiArrowRight />{" "}
          </button>
        </div>
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
