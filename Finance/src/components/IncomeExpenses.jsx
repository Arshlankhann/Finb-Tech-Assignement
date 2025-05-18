import React from 'react';
import './IncomeExpenses.css';

const IncomeExpenses = () => {
  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">Finwise</div>
        <nav className="nav-links">
          <a href="#">Overview</a>
          <a href="#">Transactions</a>
          <a href="#">Invoices</a>
          <a href="#">Reports</a>
          <button className="new-btn">New</button>
          <div className="bell">🔔</div>
          <img
            className="avatar"
            src="https://i.pravatar.cc/32"
            alt="User Avatar"
          />
        </nav>
      </header>

      <main className="container">
        <div>
        <h1 >Your income and expenses</h1>
        </div>
        <p className="subtitle">
          This chart shows the net amount of money you’ve earned or spent each month.
        </p>
        <br></br>

        <div className="chart-box">
          <div className="chart-title">Monthly net income</div>
          <img
            src="chart-placeholder.png"
            alt="Net Income Chart"
            className="chart-img"
          />
        </div>

        <p className="note">
          Net income is the amount of money you have left after paying all your bills.
          It’s a good indicator of how well you’re managing your money. If your net income is positive, 
          you’re living within your means. If it’s negative, you’re spending more than you’re earning.
        </p>
      </main>
    </div>
  );
};

export default IncomeExpenses;
