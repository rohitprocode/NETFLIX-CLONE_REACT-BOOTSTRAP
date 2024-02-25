import React from "react";
import "./SectionOne.css";
import ImageTV from "../../../Images/tv-Image.png";
import VideoTV from "../../../Videos/Netflix_TV.mp4";

function SectionOne() {
  return (
      <div className="container">
        <div className="container-md ">
          <div className="heading">
            <h1>Enjoy on your TV</h1>
            <h5>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div className="video-container">
            <video muted loop autoPlay>
              <source src={VideoTV} type="video/mp4" />
            </video>
            <div className="content">
              <img src={ImageTV} alt="Your Image" />
            </div>
          </div>
        </div>
        <div className="baseline"></div>
      </div>

  );
}

export default SectionOne;
