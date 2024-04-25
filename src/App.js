// App.js
import React from 'react';
import './App.css';
import BudgetSetting from './BudgetSetting';
import ExpenseTracking from './ExpenseTracking';
import FinancialMonitoring from './FinancialMonitoring';
import { BudgetProvider } from './BudgetContext';

function App() {
  return (
    <div className="App">
      <h1>Budget Planner</h1>
      <BudgetProvider>
        <div className="container">
          <div className="card">
            <h2>Set Budget</h2>
            <BudgetSetting />
          </div>
          <div className="card">
            <h2>Track Expenses</h2>
            <ExpenseTracking />
          </div>
          <div className="card">
            <h2>Financial Monitoring</h2>
            <FinancialMonitoring />
          </div>
        </div>
      </BudgetProvider>
    </div>
  );
}

export default App;
