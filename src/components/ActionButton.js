import React from 'react';
import './ActionButton.css';

const ActionButton = ({ onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      Choose Plan
    </button>
  );
};

export default ActionButton;
