import React from 'react'

function EmailInputBox() {
  return (
    <div className="InputBox">
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
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
  )
}

export default EmailInputBox
