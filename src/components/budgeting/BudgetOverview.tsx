import React from 'react';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { formatCurrency } from '@/lib/utils';

interface BudgetOverviewProps {
  monthlyIncome: number;
  totalExpenses: number;
  savings: number;
}

export function BudgetOverview({ monthlyIncome, totalExpenses, savings }: BudgetOverviewProps) {
  const expensePercentage = (totalExpenses / monthlyIncome) * 100;
  const savingsPercentage = (savings / monthlyIncome) * 100;

  return (
    <Card title="Monthly Overview">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Monthly Income</span>
            <span className="text-sm font-bold">{formatCurrency(monthlyIncome)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <span className="text-sm text-gray-500">Remaining Amount</span>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-green-600">{formatCurrency(savings)}</p>
              <span className="text-sm text-gray-500">{savingsPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={savingsPercentage} />
          </div>
        </div>
      </div>
    </Card>
  );
}
