import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Placeholder Data (You can fetch this from your backend later)
const bloodBanksData = [
  { id: 1, name: 'ABC Blood Bank', location: 'New York', availableBloodGroups: ['A+', 'B+', 'O+'], contact: '123-456-7890' },
  { id: 2, name: 'XYZ Blood Bank', location: 'Los Angeles', availableBloodGroups: ['A-', 'O-', 'B-'], contact: '987-654-3210' },
  { id: 3, name: 'LMN Blood Bank', location: 'Chicago', availableBloodGroups: ['AB+', 'O+', 'B+'], contact: '555-555-5555' },
];

const DonateUs = () => {
  // States to handle user input
  const [location, setLocation] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [filteredBloodBanks, setFilteredBloodBanks] = useState(bloodBanksData);

  // Function to filter blood banks based on location and blood group
  const filterBloodBanks = () => {
    const filtered = bloodBanksData.filter((bloodBank) => {
      const locationMatch = location ? bloodBank.location.toLowerCase().includes(location.toLowerCase()) : true;
      const bloodGroupMatch = bloodGroup ? bloodBank.availableBloodGroups.includes(bloodGroup) : true;
      return locationMatch && bloodGroupMatch;
    });
    setFilteredBloodBanks(filtered);
  };

  // Call the filter function when inputs change
  useEffect(() => {
    filterBloodBanks();
  }, [location, bloodGroup]);

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <h2 className="text-center">Donate Blood</h2>
      <p className="text-center" style={{ fontSize: '20px' }}>
        Find nearby blood banks and schedule your donation.
      </p>

      {/* Filters Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
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
      </div>

      {/* Blood Banks List */}
      <div className="row">
        {filteredBloodBanks.length === 0 ? (
          <p className="text-center">No blood banks found with the selected criteria.</p>
        ) : (
          filteredBloodBanks.map((bloodBank) => (
            <div key={bloodBank.id} className="col-md-4 mb-4">
              <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="card-body">
                  <h5 className="card-title">{bloodBank.name}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {bloodBank.location}
                  </p>
                  <p className="card-text">
                    <strong>Available Blood Groups:</strong> {bloodBank.availableBloodGroups.join(', ')}
                  </p>
                  <p className="card-text">
                    <strong>Contact:</strong> {bloodBank.contact}
                  </p>
                  <Link
                    to={`/schedule-donation/${bloodBank.id}`}
                    className="btn btn-primary"
                  >
                    Schedule Donation
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DonateUs;
