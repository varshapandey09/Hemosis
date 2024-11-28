import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, searchBloodBanks } from '../features/searchSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { query, results, loading, error } = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(searchBloodBanks(query));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Search for Blood Banks</h2>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Blood Group or City"
            value={query}
            onChange={handleSearchChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div>
        <h4 className="text-primary">Search Results</h4>
        {results.length > 0 ? (
          <ul className="list-group">
            {results.map((result, index) => (
              <li key={index} className="list-group-item">
                {result.name} - {result.location} - {result.bloodGroup}
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
