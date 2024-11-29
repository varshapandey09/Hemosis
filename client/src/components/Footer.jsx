import React from "react";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Hemosis</h5>
            <p>
              Hemosis connects blood donors and hospitals to save lives
              efficiently and effectively. Join us to make a difference!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#donate" className="text-light text-decoration-none">
                  Donate Blood
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-telephone"></i> +1-234-567-890
            </p>
            <p>
              <i className="bi bi-envelope"></i> support@hemosis.com
            </p>
            <div>
              <a href="#" className="text-light me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="text-light" />

        <div className="text-center">
          <p>&copy; 2024 Hemosis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
