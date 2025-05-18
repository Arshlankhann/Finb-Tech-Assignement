import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <header className="dashboard-header">
        <div className="logo">Wealthy</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Accounts</a>
          <a href="#">Budgets</a>
          <a href="#">Cashflow</a>
          <a href="#">Reports</a>
        </nav>
        <img className="profile" src="https://via.placeholder.com/32" alt="Profile" />
      </header>

      <main>
        <h1>Dashboard</h1>
        <p className="subtitle">Your current financial overview</p>

        <div className="cards">
          <div className="card">
            <h2>Total Balance</h2>
            <p>$12,345.67</p>
          </div>
          <div className="card">
            <h2>Monthly Income</h2>
            <p>$7,890.12</p>
          </div>
          <div className="card">
            <h2>Monthly Expenses</h2>
            <p>$3,456.78</p>
          </div>
          <div className="card">
            <h2>Savings Ratio</h2>
            <p>56%</p>
          </div>
        </div>

        <div className="chart">
          <h3>Net Worth over Time</h3>
          <img src="https://via.placeholder.com/800x300?text=Chart" alt="Net Worth Chart" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
