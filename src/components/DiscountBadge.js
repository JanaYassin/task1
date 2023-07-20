import React from 'react';

const DiscountBadge = ({ discount, isSelected, isMonthlyPlan }) => {
  return (
    <div className={`discount-badge ${isMonthlyPlan ? '' : isSelected ? 'selected' : ''}`}>
      Save {discount}
    </div>
  );
};

export default DiscountBadge;
