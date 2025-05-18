import React from 'react';
import './SpendingReport.css';

const SpendingReport = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">⧉ Spendy</div>
        <div className="navbar-right">
          <a href="#">Dashboard</a>
          <a href="#">Transactions</a>
          <a href="#">Reports</a>
          <a href="#">Budgets</a>
          <button>Add Transaction</button>
          <img src="https://i.pravatar.cc/32" alt="User" />
        </div>
      </div>

      <div className="container">
        <div className="header">Spending Report</div>
        <div className="filters">
          <button>Last month</button>
          <button>This month</button>
          <button>Last 3 months</button>
        </div>

        <div className="report-card">
          {[
            ['Home', 'home'],
            ['Food & Dining', 'food'],
            ['Auto & Transport', 'auto'],
            ['Health & Fitness', 'fitness'],
            ['Shopping', 'shopping'],
            ['Travel', 'travel'],
            ['Entertainment', 'entertainment']
          ].map(([label, className]) => (
            <div className="category-row" key={className}>
              <div className="category-label">{label}</div>
              <div className="bar-container">
                <div className={`bar ${className}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpendingReport;
