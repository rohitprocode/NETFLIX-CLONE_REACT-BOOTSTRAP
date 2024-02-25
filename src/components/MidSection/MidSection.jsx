import React from "react";
import "./MidSection.css";
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import Accordion from "./Accordion/Accordion";

function MidSection() {
  return (
    <div className="MidSection">
      <SectionOne/>
      <SectionTwo/>
      <ThirdSection/>
      <FourthSection/>
      <Accordion/>
    </div>
  );
}

export default MidSection;
