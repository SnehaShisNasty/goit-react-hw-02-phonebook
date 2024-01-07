import React from 'react';
import './Filter.css';

export const Filter = ({ value, onChange }) => (
  <form className="form">
    <label className="filterLabel">
      Filter
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filterInput"
      />
    </label>
  </form>
);
