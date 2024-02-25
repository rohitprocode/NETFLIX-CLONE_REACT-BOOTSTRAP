import React from "react";
import "./SectionTwo.css";
import MobileImage from "../../../Images/MobileMovieNetflix.jpg";
import MobileImagetwo from "../../../Images/MobileMovieNetflix2.png";
import DownloadGif from '../../../Images/DownloadGif.gif'

function SectionTwo() {
  return (
    <div className="container">
      <div className="container-md ">
        <div className="Image-container">
          <img src={MobileImage} alt="" />
          <div className="SectionTwo-content border-secondary ">
            <img src={MobileImagetwo} alt="Your Image" />
            <div className="text">
              <p>Stranger Things</p>
              <p className="text-primary" >Downloading...</p>
            </div>
            <img src={DownloadGif} alt="" />
          </div>
        </div>
        <div className="heading">
          <h1>Download your shows to watch offline</h1>
          <h5>
            Save your favourites easily and always have something to watch.
          </h5>
        </div>
      </div>
      <div className="baseline"></div>
    </div>
  );
}

export default SectionTwo;
