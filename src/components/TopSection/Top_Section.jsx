import React from "react";
import "./Top_Section.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";

function Top_Section() {
  return (
    <div className="linear">
      <div className="topSection ">
        <div className="container">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/login" element={<SignIn />}></Route>
            </Routes>
          </BrowserRouter>
          <div className="container-md ">
            <div className="heading">
              <h1>Unlimited movies, TV shows and more</h1>
              <h5>Watch anywhere. Cancel anytime.</h5>
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
            </div>

            <div className="inputArea">
              <div className="form-floating mb-3 emailInput mt-3">
                <input
                  type="email"
                  className="form-control border-secondary"
                  id="floatingInput"
                  placeholder="Email address"
                />
                <label htmlFor="floatingInput" className="floatingLabel ">
                  Email address
                </label>
              </div>
              <button
                type="button"
                className="btn btn-lg fw-bold btn-danger submitBtn"
              >
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="baseline"></div>
      </div>
    </div>
  );
}

export default Top_Section;
