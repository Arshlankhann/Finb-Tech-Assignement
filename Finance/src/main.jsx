import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import AccountSummary from './components/AccountSummary.jsx'
import SpendingReport from './components/SpendingReport.jsx'
import TransactionsPage from './components/TransactionsPage.jsx'
import Income from './components/IncomeExpenses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <AccountSummary />
    <Dashboard />
    <TransactionsPage />
    <Income />
    <SpendingReport />


    <App />
  </StrictMode>,
)
