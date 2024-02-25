import React from "react";
import style from "./Display.module.css";

function Display({ id, question, answer }) {
  return (
    <div>
      <div className={style.list}>
        <div className={style.question}>
          <h4>{question}</h4>
          <span>➕</span>
        </div>
        {/* <p>{answer}</p> */}
      </div>
    </div>
  );
}

export default Display;
