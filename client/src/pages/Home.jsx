import React from 'react';

const Home = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="text-primary">Welcome to Hemosis</h1>
      <p className="mt-4">
        Connecting blood donors and recipients. Together, we can save lives. ❤️
      </p>
      <div className="mt-5">
        <a href="/donate" className="btn btn-primary btn-lg mx-2">Donate Blood</a>
        <a href="/contact" className="btn btn-outline-primary btn-lg mx-2">Contact Us</a>
      </div>
    </div>
  );
};

export default Home;
