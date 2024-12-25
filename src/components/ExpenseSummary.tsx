import React from 'react';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';
import { Expense } from '../types/expense';
import { formatCurrency } from '../utils/formatters';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-blue-800">
          <DollarSign size={24} />
          <h3 className="font-semibold">Total Expenses</h3>
        </div>
        <p className="text-2xl font-bold text-blue-900 mt-2">
          {formatCurrency(totalExpenses)}
        </p>
      </div>

      <div className="bg-green-100 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-green-800">
          <PieChart size={24} />
          <h3 className="font-semibold">Number of Expenses</h3>
        </div>
        <p className="text-2xl font-bold text-green-900 mt-2">
          {expenses.length}
        </p>
      </div>

      <div className="bg-purple-100 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-purple-800">
          <TrendingUp size={24} />
          <h3 className="font-semibold">Top Category</h3>
        </div>
        <p className="text-2xl font-bold text-purple-900 mt-2">
          {topCategory ? `${topCategory[0]} (${formatCurrency(topCategory[1])})` : 'N/A'}
        </p>
      </div>
    </div>
  );
}