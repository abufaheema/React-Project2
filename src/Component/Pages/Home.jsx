import React, { Component } from "react";
import Slider from "../INC/Slider";
import MV from "./Includes/MV";
import Footer from "../INC/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Slider />
        <section className="sectionPadding py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4>Our Company</h4>
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
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4>Our Service</h4>
                <div className="underLine"></div>
              </div>
            </div>

            <div className="row mt-5 gy-4">
              <div className="col-md-4">
                <div className="card t shadow">
                  <div className="card-body">
                    <h6>Our Services</h6>
                    <div className="subUnderLine mb-3"></div>
                    <p className="pHome">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h6>Web Designing</h6>
                    <div className="subUnderLine mb-3"></div>

                    <p className="pHome">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h6>Digital Marketing</h6>
                    <div className="subUnderLine mb-3"></div>

                    <p className="pHome">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
