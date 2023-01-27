import React, { Component } from "react";
import Footer from "../INC/Footer";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="py-3 bg-primary v text-center">
          <h1 className=" text-white">Contact Us</h1>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2279345234133!2d3.8934495!3d7.3282772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398e0edfb177e9%3A0xdcaa9ba898580fd3!2sIdi%20Mango%20off%20Soka%20Ibadan!5e0!3m2!1sen!2sng!4v1674860399345!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-4">
                <div className="card shadow ">
                  <div className="card-body py-4">
                    <h4>Send Your Idea</h4>
                    <div className="underLine1 mb-3"></div>
                    <form action="">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your Email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Meassage
                        </label>
                        <textarea
                          rows="3"
                          className="form-control"
                          placeholder="Enter your Email"
                        />
                      </div>
                      <div className="mb-3">
                        <button className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Contact;
