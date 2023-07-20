import React, { useState } from 'react';
import PlanList from './components/PlanList';
import PlanDetails from './components/PlanDetails';
import Switch from './components/switch';
import ActionButton from './components/ActionButton';
import './App.css';

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(false);

  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
  };

  const handleTogglePlanType = () => {
    setIsMonthlyPlan((prevIsMonthlyPlan) => !prevIsMonthlyPlan);
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='Title'>Choose Your Plan</div>
        <div className='Note'>No Contract and No Surprise Fees</div>
        <div className='switch-container'>
          <Switch isOn={isMonthlyPlan} handleToggle={handleTogglePlanType} />
        </div>
        <div className='content-container'>
        <PlanList
           selectedPlan={selectedPlan}
           onPlanChange={handlePlanChange}
           isMonthlyPlan={isMonthlyPlan} // Pass the value of isMonthlyPlan
          />
          <a href='#' className='back-link'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width='20'
            height='20'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          Back
        </a>
          <div  className='plan-details-container'>
            <PlanDetails selectedPlan={selectedPlan}  isMonthlyPlan={isMonthlyPlan}/>
            <ActionButton onClick={() => console.log('Button clicked')} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
