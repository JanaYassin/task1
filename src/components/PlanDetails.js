import React from 'react';
import './PlanDetails.css'; 
const PlanDetails = ({ selectedPlan, isMonthlyPlan }) => {
  const planDetails = {
    1: {
      details: 'Details of Plan 1',
      fusePlan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: false,
        optimizeHashtag: false,
        unlimitedUser: false,
      },
    },
    2: {
      details: 'Details of Plan 2',
      fusePlan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: true,
        optimizeHashtag: false,
        unlimitedUser: false,
      },
    },
    3: {
      details: 'Details of Plan 3',
      fusePlan: {
        allLimitedLinks: false,
        ownAnalyticPlatform: false,
        chatSupport: false,
        optimizeHashtag: true,
        unlimitedUser: false,
      },
    },
    4: {
      details: 'Details of Plan 4',
      fusePlan: {
        allLimitedLinks: true,
        ownAnalyticPlatform: true,
        chatSupport: true,
        optimizeHashtag: true,
        unlimitedUser: true,
      },
    },
  };

  const handleFusePlanChange = (field) => {
    const updatedFusePlan = {
      ...planDetails[selectedPlan].fusePlan,
      [field]: !planDetails[selectedPlan].fusePlan[field],
    };
    const updatedPlanDetails = {
      ...planDetails[selectedPlan],
      fusePlan: updatedFusePlan,
    };
    planDetails[selectedPlan] = updatedPlanDetails;
    console.log(planDetails);
  };

  if (isMonthlyPlan) {
    return null; 
  }

  return (
    <form className="form">
      <table className="plan-details-table">
        <tr>
          <th colSpan="2">
          <span style={{ marginLeft: '-10%' }}>Details</span>
            <span style={{ fontWeight: 'bold', fontSize: '25px',marginLeft: '10%' }}>Fuse Plan</span>
          </th>
        </tr>
        <tr>
          <td>All Limited Links</td>
          <td>
            <input
              type="radio"
              id="allLimitedLinks"
              checked={planDetails[selectedPlan]?.fusePlan.allLimitedLinks}
              onChange={() => handleFusePlanChange('allLimitedLinks')}
            />
            <label htmlFor="allLimitedLinks"></label>
          </td>
        </tr>
        <tr>
          <td>Own Analytic Platform</td>
          <td>
            <input
              type="radio"
              id="ownAnalyticPlatform"
              checked={planDetails[selectedPlan]?.fusePlan.ownAnalyticPlatform}
              onChange={() => handleFusePlanChange('ownAnalyticPlatform')}
            />
            <label htmlFor="ownAnalyticPlatform"></label>
          </td>
        </tr>
        <tr>
          <td>Chat Support</td>
          <td>
            <input
              type="radio"
              id="chatSupport"
              checked={planDetails[selectedPlan]?.fusePlan.chatSupport}
              onChange={() => handleFusePlanChange('chatSupport')}
            />
            <label htmlFor="chatSupport"></label>
          </td>
        </tr>
        <tr>
          <td>Optimize Hashtag</td>
          <td>
            <input
              type="radio"
              id="optimizeHashtag"
              checked={planDetails[selectedPlan]?.fusePlan.optimizeHashtag}
              onChange={() => handleFusePlanChange('optimizeHashtag')}
            />
            <label htmlFor="optimizeHashtag"></label>
          </td>
        </tr>
        <tr>
          <td>Unlimited User</td>
          <td>
            <input
              type="radio"
              id="unlimitedUser"
              checked={planDetails[selectedPlan]?.fusePlan.unlimitedUser}
              onChange={() => handleFusePlanChange('unlimitedUser')}
            />
            <label htmlFor="unlimitedUser"></label>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default PlanDetails;
