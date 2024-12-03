import React, { useState, useEffect } from 'react';

const DashboardUser = () => {
  // Mock data for demonstration
  const [donationHistory, setDonationHistory] = useState([
    { date: '2024-11-10', bloodType: 'A+', location: 'LifeCare Blood Bank', status: 'Completed' },
    { date: '2024-12-01', bloodType: 'B+', location: 'Red Cross', status: 'Completed' },
  ]);

  const [receivedHistory, setReceivedHistory] = useState([
    { date: '2024-11-15', bloodType: 'O-', location: 'City Hospital', status: 'Completed' },
  ]);

  const [upcomingDonations, setUpcomingDonations] = useState([
    { date: '2024-12-20', bloodType: 'AB+', location: 'Save Lives Bank', status: 'Scheduled' },
  ]);

  useEffect(() => {
    // Fetch data from your API to populate donationHistory, receivedHistory, and upcomingDonations
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">User Dashboard</h2>

      {/* Donation History Section */}
      <div className="mt-4">
        <h3>Donation History</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation, index) => (
              <tr key={index}>
                <td>{donation.date}</td>
                <td>{donation.bloodType}</td>
                <td>{donation.location}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Received History Section */}
      <div className="mt-4">
        <h3>Blood Received History</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {receivedHistory.map((received, index) => (
              <tr key={index}>
                <td>{received.date}</td>
                <td>{received.bloodType}</td>
                <td>{received.location}</td>
                <td>{received.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Donations Section */}
      <div className="mt-4">
        <h3>Upcoming Donations</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {upcomingDonations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.date}</td>
                <td>{donation.bloodType}</td>
                <td>{donation.location}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardUser;
