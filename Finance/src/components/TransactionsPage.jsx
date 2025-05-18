import React from 'react';
import './TransactionsPage.css';

const transactions = [
  { date: 'Jun 26', category: 'Income', description: 'Paycheck', amount: '+$2,500.00' },
  { date: 'Jun 25', category: 'Expense', description: 'Rent', amount: '-$1,500.00' },
  { date: 'Jun 24', category: 'Expense', description: 'Groceries', amount: '-$65.00' },
  { date: 'Jun 23', category: 'Expense', description: 'Dinner', amount: '-$30.00' },
  { date: 'Jun 22', category: 'Expense', description: 'Gas', amount: '-$40.00' },
  { date: 'Jun 21', category: 'Income', description: 'Freelance', amount: '+$300.00' },
  { date: 'Jun 20', category: 'Expense', description: 'Amazon', amount: '-$50.00' },
  { date: 'Jun 19', category: 'Expense', description: 'Coffee', amount: '-$5.00' },
  { date: 'Jun 18', category: 'Expense', description: 'Lunch', amount: '-$15.00' },
  { date: 'Jun 17', category: 'Income', description: 'Refund', amount: '+$100.00' },
];

export default function TransactionsPage() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">◆ CashFlow</div>
        <div className="nav-links">
          <a href="#">Overview</a>
          <a href="#">Transactions</a>
          <a href="#">Insights</a>
          <a href="#">Budgets</a>
          <a href="#">Goals</a>
          <button className="search-btn">Search</button>
          <span className="bell">🔔</span>
          <img src="https://i.pravatar.cc/32" alt="Profile" className="avatar" />
        </div>
      </nav>

      <div className="container">
        <h1>Transactions</h1>
        <div className="tabs">
          <button className="tab active">All</button>
          <button className="tab">Income</button>
          <button className="tab">Expense</button>
          <button className="tab">Transfer</button>
        </div>

        <div className="table">
          <div className="table-header">
            <div>Date</div>
            <div>Category</div>
            <div>Description</div>
            <div>Amount</div>
          </div>
          {transactions.map((tx, index) => (
            <div className="table-row" key={index}>
              <div>{tx.date}</div>
              <div><span className="category-pill">{tx.category}</span></div>
              <div>{tx.description}</div>
              <div className={tx.amount.startsWith('-') ? 'amount red' : 'amount green'}>
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
