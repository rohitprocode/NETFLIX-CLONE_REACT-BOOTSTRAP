import React from "react";
import "./MidSection.css";
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'

function MidSection() {
  return (
    <div className="MidSection">
      <SectionOne/>
      <SectionTwo/>
    </div>
  );
}

export default MidSection;
