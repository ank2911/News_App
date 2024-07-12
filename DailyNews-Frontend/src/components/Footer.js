import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  const dateObject = new Date();
  const currentYear = dateObject.getFullYear();
  return (
    <div>
      <footer
        className="text-center text-white footer"
      >
        <div className="container p-5 pb-0">
          <p>
            Need some help
            <Link to="/help" className="help-link">
              Click here
            </Link>
          </p>
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Give Your Feedback here</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="text-center p-3">
          Copyright © {currentYear} Daily News, Tech Mahindra. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
