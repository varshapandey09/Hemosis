import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitDonation } from '../features/donationSlice';

const Donate = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.donations);

  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitDonation(formData));
    setFormData({ name: '', bloodGroup: '', phone: '', city: '', message: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Donate Blood</h2>
      <p className="text-center">
        Your donation can save lives. Please fill out the form below to register as a blood donor.
      </p>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bloodGroup" className="form-label">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Donation'}
        </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Donate;
