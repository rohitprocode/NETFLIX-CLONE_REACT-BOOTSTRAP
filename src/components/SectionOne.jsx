import React from "react";
import Image from "./tv-Image.png"

function SectionOne() {
  return (
    <section className="sectionOne">
      <div className="container">
        <div className="container-md">
          <div className="heading">
            <h1>Enjoy on your TV</h1>
            <h5>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div className="AnimationTV">
           <img src={Image} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
