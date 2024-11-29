import React from "react";
import contactImage from "../assets/contact-img.png";
const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p className="text-muted">
            For any Queries Contact us via Email , we will be sure to help reach you as soon as possible.
          </p>

          {/* Contact Form */}
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Mail"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-danger px-4"
              style={{ backgroundColor: "#e91e63" }}
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={contactImage}
            alt="Contact Us Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
