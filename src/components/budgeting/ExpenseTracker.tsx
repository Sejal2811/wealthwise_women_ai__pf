import React from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Input } from '@/components/ui/Input';

interface ExpenseCategory {
  name: string;
  limit: number;
  amount: number;
}

interface ExpenseTrackerProps {
  monthlyIncome: number;
  categories: ExpenseCategory[];
  onAmountChange: (index: number, value: number) => void;
}

export function ExpenseTracker({ monthlyIncome, categories, onAmountChange }: ExpenseTrackerProps) {
  return (
    <Card title="Expense Categories" description="Track your spending by category">
      <div className="space-y-4">
        {categories.map((category, index) => {
          const limitAmount = category.limit * monthlyIncome;
          const percentageUsed = Math.min((category.amount / limitAmount) * 100, 100);

          return (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{category.name}</span>
              </div>
              <Input
                type="number"
                placeholder="Enter amount"
                value={category.amount || ''}
                onChange={(e) => onAmountChange(index, Number(e.target.value))}
              />
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    category.amount > limitAmount ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${percentageUsed}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
