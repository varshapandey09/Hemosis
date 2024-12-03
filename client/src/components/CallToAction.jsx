import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample data (You can replace this with an API call to fetch real blood banks)
const bloodBanksData = [
  { id: 1, name: 'LifeCare Blood Bank', location: 'New Delhi', bloodTypes: ['A+', 'B+', 'O-'], distance: 5 },
  { id: 2, name: 'Red Cross', location: 'Mumbai', bloodTypes: ['A+', 'AB-', 'O+'], distance: 15 },
  { id: 3, name: 'Save Lives Bank', location: 'Bengaluru', bloodTypes: ['B-', 'O+', 'AB+'], distance: 25 },
  // Add more blood bank entries here
];

const CallToAction = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [filteredBloodBanks, setFilteredBloodBanks] = useState([]);
  const [urgentRequest, setUrgentRequest] = useState({
    bloodBank: '',
    recipientName: '',
    hospitalLocation: '',
    reason: '',
  });

  useEffect(() => {
    // Filter blood banks based on blood group and location
    const filtered = bloodBanksData.filter(bank => {
      const matchesBloodGroup = bloodGroup ? bank.bloodTypes.includes(bloodGroup) : true;
      const matchesLocation = location ? bank.location.toLowerCase().includes(location.toLowerCase()) : true;
      return matchesBloodGroup && matchesLocation;
    });
    setFilteredBloodBanks(filtered);
  }, [bloodGroup, location]);

  const handleUrgentRequestSubmit = (e) => {
    e.preventDefault();
    // Handle urgent request submission (e.g., send to backend or show confirmation)
    alert('Urgent Request Sent');
  };

  return (
    <div className="container">
      <h1 className="my-4">Find Nearby Blood Banks & Send Urgent Request</h1>

      {/* Filters Section */}
      <div className="filters">
        <div className="form-group">
          <label htmlFor="bloodGroup">Select Blood Group</label>
          <select
            id="bloodGroup"
            className="form-control"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">-- Select Blood Group --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Enter Location</label>
          <input
            type="text"
            id="location"
            className="form-control"
            placeholder="City or Blood Bank Name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Displaying Filtered Blood Banks */}
      <h3 className="mt-4">Available Blood Banks</h3>
      <ul className="list-group">
        {filteredBloodBanks.length > 0 ? (
          filteredBloodBanks.map((bank) => (
            <li key={bank.id} className="list-group-item">
              <h5>{bank.name} ({bank.location})</h5>
              <p>Available Blood Types: {bank.bloodTypes.join(', ')}</p>
              <p>Distance: {bank.distance} km</p>
              <Link to="#" className="btn btn-primary" onClick={() => setUrgentRequest({ ...urgentRequest, bloodBank: bank.name })}>
                Send Urgent Request
              </Link>
            </li>
          ))
        ) : (
          <li className="list-group-item">No blood banks found based on your filters.</li>
        )}
      </ul>

      {/* Urgent Request Form */}
      {urgentRequest.bloodBank && (
        <div className="mt-5">
          <h3>Urgent Blood Request for {urgentRequest.bloodBank}</h3>
          <form onSubmit={handleUrgentRequestSubmit}>
            <div className="form-group">
              <label htmlFor="recipientName">Recipient Name</label>
              <input
                type="text"
                id="recipientName"
                className="form-control"
                value={urgentRequest.recipientName}
                onChange={(e) => setUrgentRequest({ ...urgentRequest, recipientName: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hospitalLocation">Hospital Location</label>
              <input
                type="text"
                id="hospitalLocation"
                className="form-control"
                value={urgentRequest.hospitalLocation}
                onChange={(e) => setUrgentRequest({ ...urgentRequest, hospitalLocation: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason / Urgency</label>
              <textarea
                id="reason"
                className="form-control"
                value={urgentRequest.reason}
                onChange={(e) => setUrgentRequest({ ...urgentRequest, reason: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-success mt-3">
              Send Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
