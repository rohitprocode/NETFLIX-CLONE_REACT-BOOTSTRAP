import React from "react";
import ImageTV from "./tv-Image.png"
import VideoTV from "./"

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
          <div className="AnimationTV">
           <img src={ImageTV} alt="NetflixTV" srcset="" />
           <video src={VideoTV}></video>
          </div>
        </div> 
        <div className="baseline"></div>
      </div>
      
    </section>
  );
}

export default SectionOne;
