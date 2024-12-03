import React, { useState, useEffect } from 'react';

// A placeholder for the backend data, this would typically come from your database
const bloodStockData = [
  { bloodType: 'A+', quantity: 10 },
  { bloodType: 'B+', quantity: 5 },
  { bloodType: 'O-', quantity: 2 },
];

const DashboardBloodBank = () => {
  const [bloodStock, setBloodStock] = useState(bloodStockData);
  const [newBloodType, setNewBloodType] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  // Function to handle adding new blood stock
  const addBloodStock = () => {
    setBloodStock([
      ...bloodStock,
      { bloodType: newBloodType, quantity: parseInt(newQuantity) },
    ]);
    setNewBloodType('');
    setNewQuantity('');
  };

  // Function to handle updating blood stock
  const updateBloodStock = (bloodType, newQuantity) => {
    const updatedStock = bloodStock.map(item =>
      item.bloodType === bloodType
        ? { ...item, quantity: parseInt(newQuantity) }
        : item
    );
    setBloodStock(updatedStock);
  };

  // Function to handle deleting a blood type
  const deleteBloodStock = (bloodType) => {
    setBloodStock(bloodStock.filter(item => item.bloodType !== bloodType));
  };

  return (
    <div className="container">
      <h2>Dashboard: Blood Stock Management</h2>
      
      {/* Blood Stock Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Available Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bloodStock.map((item, index) => (
            <tr key={index}>
              <td>{item.bloodType}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateBloodStock(item.bloodType, e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <button
                  onClick={() => deleteBloodStock(item.bloodType)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Blood Stock Form */}
      <div className="form-group">
        <label>New Blood Type</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Blood Type"
          value={newBloodType}
          onChange={(e) => setNewBloodType(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
      </div>
      <button
        onClick={addBloodStock}
        className="btn btn-primary"
        style={{ marginTop: '10px' }}
      >
        Add Blood Stock
      </button>
    </div>
  );
};

export default DashboardBloodBank;
