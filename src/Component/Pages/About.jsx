import React, { Component } from "react";
import MV from "./Includes/MV";
import Footer from "../INC/Footer";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="py-3 bg-primary v text-center">
          <h1 className=" text-white">About Us</h1>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4>About our Company</h4>
                <div className="underLine mb-3"></div>
                <p className="pHome">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="pHome">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <MV />
        <Footer />
      </>
    );
  }
}

export default About;
