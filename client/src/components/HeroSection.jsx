import React from 'react';
import Hero_img from "../assets/home-image.JPG";
const HeroSection = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column (Text and Buttons) */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="jumbotron bg-white">
            <h1 style={{ fontSize: '66px', fontWeight: 'bolder' }}>
              "You Have the Power to Save Lives – <br />
              It's in Your Blood."
            </h1>
            <p style={{ fontSize: '32px' }}>Donate Blood, Be a Hero</p>
            {/* Button Group */}
            <div className="btn-group" style={{ margin: '54px' }}>
              <button type="button" className="btn btn-primary">Donate Now</button>
              <button type="button" className="btn btn-outline-primary">Register / Login</button>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="col-md-6 image-container">
          <img src={Hero_img} alt="Blood Donation Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
