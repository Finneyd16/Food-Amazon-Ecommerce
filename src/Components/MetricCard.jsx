import React from 'react';


const MetricCard = ({ title, value, change, isPositive, subtitle }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <h6 className="metric-title">{title}</h6>
      </div>
      <div className="metric-body">
        <h3 className="metric-value">{value}</h3>
        <div className="d-flex align-items-center justify-content-between">
          <span className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
            <i className={`fas fa-arrow-${isPositive ? 'up' : 'down'} mr-1`}></i>
            {change}
          </span>
        </div>
        <p className="metric-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default MetricCard;
