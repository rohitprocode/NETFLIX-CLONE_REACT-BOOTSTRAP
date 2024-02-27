import React from "react";
import "./Top_Section.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import EmailInputBox from "../EmailInputBox";

function Top_Section() {
  return (
    <div className="linear">
      <div className="topSection ">
        <div className="container">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/home" element={<Nav />}></Route>
              <Route path="/login" element={<SignIn />}></Route>
            </Routes>
          </BrowserRouter>
          <div className="container-md ">
            <div className="heading">
              <h1>Unlimited movies, TV shows and more</h1>
              <h5>Watch anywhere. Cancel anytime.</h5>
            </div>

            <EmailInputBox />
          </div>
        </div>
        <div className="baseline"></div>
      </div>
    </div>
  );
}

export default Top_Section;
