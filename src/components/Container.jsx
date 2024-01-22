import React from "react";
import "./Container.css";

function Container() {
  return (
    <div className="containers">
      <div className="top-section">
        <div className="nav middleContent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
            id="netflix"
          >
            <path
              fill="#fff"
              d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
            ></path>
            <path
              fill="#E50A13"
              d="M21.1524 37.8294V21.948L26.5236 37.1886C28.1742 37.0014 29.8284 36.8286 31.4862 36.663V9.59998H27.132V26.0484L21.3396 9.59998H16.8V38.4H16.8288C18.2688 38.202 19.7088 38.0112 21.1524 37.8294"
            ></path>
          </svg>

          <div className="nav-options">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-translate"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                </svg>
                English
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-danger login-btn fw-medium ">
              Sign In
            </button>
          </div>
        </div>
        <div className="mid-section middleContent ">
          <div className="main-section ">
            <h1 className="fw-bold">Unlimited movies, TV shows and more</h1>
            <h4 className="fw-normal">Watch anywhere. Cancel anytime.</h4>
            <h5 className="fw-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className="input_email">
              <div class="input-group">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGroup"
                    placeholder="Email address"
                  />
                  <label for="floatingInputGroup1">Email address</label>
                </div>
              </div>
              <button className="btn bg-danger fw-bold" >Get Started &gt; </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Container;
