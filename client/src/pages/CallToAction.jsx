import React from 'react';

const CallToAction = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-primary">Take Action Today</h1>
      <p className="mt-4">
        By donating blood, you’re giving the gift of life to someone in need. Join our movement!
      </p>
      <a href="/donate" className="btn btn-primary btn-lg mt-4">Donate Now</a>
    </div>
  );
};

export default CallToAction;
