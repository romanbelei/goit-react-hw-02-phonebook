import React, { Component } from 'react';

function Filter({ value, onFilter }) {
  return (
    <label>
      <p>Find contact by name</p>
      <input type="input" name="filter" onChange={onFilter} value={value} />
    </label>
  );
}

export default Filter;
