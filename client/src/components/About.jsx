import React from 'react';
import Img1 from '../assets/Mission2.jpg'
import Img2 from '../assets/Story.jpg'
import Img3 from '../assets/values.jpg'
import Img4 from '../assets/what_we_do.svg'
const About = () => {
  return (
    <>
      <main>
        <div className="container text-center">
          {/* First Section */}
          <div className="row mb-3">
            <div className="col-5">
              <img
                src={Img1}
                alt="Image 1"
                className="img-fluid"
                style={{ height: '250px' }}
              />
            </div>
            <div className="col-7">
              <h3>Our Mission</h3>
              <br />
              <p style={{ textAlign: 'left' }}>
                At Heamosis, our mission is simple: to save lives by connecting blood donors with those
                in need. We believe that every person has the power to make a difference, and through
                the act of donating blood, you can be a lifeline for someone facing a medical emergency.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="row mb-3">
            <div className="col-7">
              <h3>Our Story</h3>
              <br />
              <p style={{ textAlign: 'left' }}>
                Heamosis is more than just a platform – it’s a dream born out of a shared vision by
                four students who wanted to make the world a better place. A powerful initiative,
                driven by the belief that small actions can lead to big changes.
              </p>
            </div>
            <div className="col-5">
              <img
                src={Img2}
                alt="Image 2"
                className="img-fluid"
                style={{ height: '250px' }}
              />
            </div>
          </div>

          {/* Third Section */}
          <div className="row mb-3">
            <div className="col-5">
              <img
                
                src={Img3}
                alt="Image 3"
                className="img-fluid"
                style={{ height: '250px' }}
              />
            </div>
            <div className="col-7">
              <h3>Our Values</h3>
              <br />
              <ul style={{ textAlign: 'left' }}>
                <li>Compassion: Driven by the desire to help and bring hope.</li>
                <li>Integrity: Committed to honesty and transparency.</li>
                <li>Innovation: Continuously seeking better ways to make an impact.</li>
                <li>Community: Believing in the strength of unity.</li>
              </ul>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="row mb-3">
            <div className="col-7">
              <h3>What We Do?</h3>
              <br />
              <p style={{ textAlign: 'left' }}>
                Our platform serves as a bridge between blood donors and recipients. We make it easy
                for individuals to register as donors, find nearby donation centers, and stay informed
                about urgent needs in their community.
              </p>
            </div>
            <div className="col-5">
              <img              
              src={Img4}
                alt="Image 4"
                className="img-fluid"
                style={{ height: '250px' }}
              />
            </div>
          </div>
        </div>
      </main>
      {/* Bootstrap Scripts and Inline Styles */}
      <style>
        {`
          .container {
            margin-top: 45px;
          }
          a {
            color: white;
          }
          .nav-item {
            margin-right: 50px;
          }
          .row.mb-3 {
            margin-top: 50px;
            margin-bottom: 50px;
          }
          .col-7 {
            display: block;
          }
        `}
      </style>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9K+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default About;
