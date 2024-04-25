// BudgetContext.js
import React, { createContext, useState } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  // Functions to manage budgets

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
