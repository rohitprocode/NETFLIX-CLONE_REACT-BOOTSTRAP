import React from "react";
import style from './Accordion.module.css'
import AccordionData from "./AccordionData";
import Display from "./Display";

function Accordion() {
  return (
    <div className={style.container}>
      <div className={style.accordionBody}>
        <div className={style.heading}>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className={style.DisplayOutput}>
        {
            AccordionData.map((d)=>{
               return <Display key={d.id} id={d.id} question={d.question} answer={d.answer} />
            })
        }
        </div>
        {/* <div className="baseline"></div> */}
      </div>
    </div>
  );
}

export default Accordion;
