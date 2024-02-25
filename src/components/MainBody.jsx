import React from "react";
import "./MainBody.css";
import Top_Section from "./TopSection/Top_Section";
import MidSection from "./MidSection/MidSection";

function MainBody() {
  return (
    <div className="MainBody">
      <Top_Section/>
      <MidSection/>
    </div>
  );
}

export default MainBody;
