import React from 'react';
import { Trash2 } from 'lucide-react';
import { Expense } from '../types/expense';
import { formatCurrency, formatDate } from '../utils/formatters';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No expenses recorded yet. Start by adding one!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{expense.description}</h3>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Category: {expense.category}</p>
              <p>Date: {formatDate(expense.date)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(expense.amount)}
            </span>
            <button
              onClick={() => onDelete(expense.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
              aria-label="Delete expense"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}