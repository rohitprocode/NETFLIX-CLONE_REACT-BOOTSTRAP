import React from "react";
import style from './Accordion.module.css'

function Accordion() {
  return (
    <div className={style.container}>
      <div className={style.accordionBody}>
        <div className={style.heading}>
            <h1>Frequently Asked Questions</h1>
        </div>
        
        {/* <div className="baseline"></div> */}
      </div>
    </div>
  );
}

export default Accordion;
