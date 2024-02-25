import React, { useState } from "react";
import style from "./Display.module.css";

function Display({ id, question, answer }) {

    const [show,setShow] = useState(false)

    const displayAnswer=()=>{
        console.log("Called")
        setShow(!show)
    }

  return (
    <div>
      <div className={style.list}>
        <div onClick={()=>displayAnswer()} className={style.question}>
          <h4>{question}</h4>
          <span>{ show ? '-' : '+' }</span>
        </div>
        <div className={style.answer} style={{display: show ? 'block' : 'none'}} >{answer}</div>
        {/* <p>{answer}</p> */}
      </div>
    </div>
  );
}

export default Display;
