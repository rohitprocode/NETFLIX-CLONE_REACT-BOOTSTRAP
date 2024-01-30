import React from "react";
import ImageTV from "./tv-Image.png";
import VideoTV from "./Netflix_TV.mp4";

function SectionOne() {
  return (
    <section className="sectionOne">
      <div className="container">
        <div className="container-md ">
          <div className="heading">
            <h1>Enjoy on your TV</h1>
            <h5>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div class="video-container">
            <video muted loop autoPlay>
              <source src={VideoTV} type="video/mp4" />
            </video>
            <div class="content">
              <img src={ImageTV} alt="Your Image" />
            </div>
          </div>
        </div>
        <div className="baseline"></div>
      </div>
    </section>
  );
}

export default SectionOne;
