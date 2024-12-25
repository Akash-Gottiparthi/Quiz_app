export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

export type ExpenseFormData = Omit<Expense, 'id'>;

export const CATEGORIES = [
  'Food',
  'Transportation',
  'Housing',
  'Utilities',
  'Entertainment',
  'Healthcare',
  'Shopping',
  'Other'
] as const;

export type Category = typeof CATEGORIES[number];