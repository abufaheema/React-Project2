import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section className="sectionPadding bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>Company Info</h6>
              <hr />
              <p className="pHome">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </p>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <hr />
              <div>
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/about" className="text-decoration-none">
                  About
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-decoration-none">
                  Contact
                </Link>
              </div>
              <div>
                <Link to="/blog" className="text-decoration-none">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <h6>Contact Information</h6>
              <hr />
              <div>
                <p>Abuja </p>
              </div>
              <div>
                <p>0803232323 </p>
              </div>
              <div>
                <p>08167676767 </p>
              </div>
              <div>
                <p>demo@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
