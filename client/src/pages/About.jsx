import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-primary text-center">About Hemosis</h1>
      <p className="mt-4">
        Hemosis is a dedicated platform to connect blood donors and recipients. 
        We aim to ensure that no life is lost due to a shortage of blood. 
        Our mission is to make blood donation seamless, transparent, and accessible.
      </p>
      <div className="text-center mt-5">
        <img src="/assets/about-image.jpg" alt="About Hemosis" className="img-fluid rounded" />
      </div>
    </div>
  );
};

export default About;
