import React from 'react';
import './Switch.css'; 

const Switch = ({ isOn, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider"></span>
      <span className="label">{isOn ? 'Monthly Plan' : 'Annual Plan'}</span>
    </label>
    
  );
};

export default Switch;
