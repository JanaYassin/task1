import React from 'react';
import './PlanList.css';
import DiscountBadge from './DiscountBadge';


const plans = [
  { id: 1, name: 'Base Plan', price: '$12', discount: '30%' },
  { id: 2, name: 'Fuse Plan', price: '$24', discount: '30%' },
  { id: 3, name: 'Extro Plan', price: '$48', discount: '30%' },
  { id: 4, name: 'Universe Plan', price: '$96', discount: '30%' },
];

const PlanList = ({ selectedPlan, onPlanChange, isMonthlyPlan }) => {
  return (
    <div className="plan-list-container">
      {plans.map(plan => (
        <label key={plan.id} className={`plan-item ${selectedPlan === plan.id && !isMonthlyPlan ? 'selected' : ''}`}>
          <input
            type="radio"
            id={`plan-${plan.id}`}
            value={plan.id}
            checked={!isMonthlyPlan && selectedPlan === plan.id}
            onChange={() => onPlanChange(plan.id)}
          />
          <span className="checkmark"></span>
          <div className="plan-info">
            <div className="plan-name">{plan.name}</div>
            <DiscountBadge
              discount={plan.discount}
              isSelected={selectedPlan === plan.id}
              isMonthlyPlan={isMonthlyPlan}
              />
            <div className="price">{plan.price}</div>
            <div>/Month</div>
          </div>
        </label>
      ))}
    </div>
  );
};


export default PlanList;
