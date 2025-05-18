import React from "react";
import "./AccountSummary.css";

const AccountSummary = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h3>Quick actions</h3>
        {[
          { icon: "A", className: "accounts", title: "Accounts", subtitle: "2 accounts" },
          { icon: "D", className: "debit", title: "Debit card", subtitle: "Visa ending in 1234" },
          { icon: "I", className: "invite", title: "Invite friends", subtitle: "Get $5 when you sign up" },
          { icon: "B", className: "boosts", title: "Boosts", subtitle: "Get early deposit" },
          { icon: "A", className: "activity", title: "Activity", subtitle: "\u00a0" },
          { icon: "$", className: "cash", title: "Cash", subtitle: "2% Cash Back" },
          { icon: "?", className: "help", title: "Help", subtitle: "Support center" },
        ].map(({ icon, className, title, subtitle }) => (
          <div className="sidebar-item" key={title}>
            <span className={`icon icon-${className}`}>{icon}</span>
            <div className="sidebar-text">
              <div className="sidebar-title">{title}</div>
              <div className="sidebar-subtitle">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="main">
        <div className="top-nav">
          <ul className="top-nav-menu">
            {["Home", "Send", "Request", "Scan", "Split", "Rewards"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="top-nav-right">
            <span className="notification-icon">🔔</span>
            <span className="avatar">A</span>
          </div>
        </div>

        <h1 className="greeting">Good evening, Adam</h1>

        <div className="balance-cards">
          <div className="balance-card">
            <div className="card-title">Spendable</div>
            <div className="card-amount">$2,500</div>
            <div className="card-change negative">-15%</div>
          </div>
          <div className="balance-card">
            <div className="card-title">Total</div>
            <div className="card-amount">$8,500</div>
            <div className="card-change positive">+5%</div>
          </div>
        </div>

        <div className="referral-banner">
          <span className="banner-icon">🎁</span>
          <span className="banner-text">
            You&rsquo;re eligible for a <strong>$10 referral bonus</strong>
          </span>
        </div>

        <div className="recent-activity">
          <h3>Recent activity</h3>
          <ul className="activity-list">
            {[
              {
                type: "transfer",
                icon: "T",
                label: "Transfer",
                date: "Jan 23, 2023 • 9:41 PM",
                amount: "$250"
              },
              {
                type: "deposit",
                icon: "D",
                label: "Deposit",
                date: "Jan 21, 2023 • 11:21 AM",
                amount: "$2,500"
              },
              {
                type: "groceries",
                icon: "G",
                label: "Groceries",
                date: "Jan 19, 2023 • 3:16 PM",
                amount: "$50"
              },
              {
                type: "paycheck",
                icon: "P",
                label: "Paycheck",
                date: "Jan 18, 2023 • 8:45 AM",
                amount: "$1,500"
              }
            ].map(({ type, icon, label, date, amount }) => (
              <li className={`activity-item ${type}`} key={label}>
                <div className="item-left">
                  <div className="item-icon">{icon}</div>
                  <div className="item-details">
                    <div className="item-label">{label}</div>
                    <div className="item-date">{date}</div>
                  </div>
                </div>
                <div className="item-amount">{amount}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
