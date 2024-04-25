// ExpenseTracking.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from './BudgetContext';

const ExpenseTracking = () => {
  const { budgets, setBudgets } = useContext(BudgetContext);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to track expense
    setBudgets([...budgets, { category, amount }]);
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Track Expense</button>
    </form>
  );
};

export default ExpenseTracking;
