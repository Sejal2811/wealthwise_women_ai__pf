import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/Slider';
import { Button } from '@/components/ui/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DashboardPage() {
  const [occupationType, setOccupationType] = useState('');
  const [totalIncome, setTotalIncome] = useState<number | null>(null);
  const [amountToSave, setAmountToSave] = useState<number | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const savings = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.5 : amountToSave || 0;
  const extra = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.2 : 0;
  const expense = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.3 : 0;
  const moneyToInvest = occupationType === 'Salaried' ? savings : 0;

  const handleOccupationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOccupationType(e.target.value);
    setTotalIncome(null);
    setAmountToSave(null);
    setShowSummary(false);
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalIncome(Number(e.target.value));
    setShowSummary(true);
  };

  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountToSave(Number(e.target.value));
    setShowSummary(true);
  };

  const pieChartData = useMemo(() => {
    if (occupationType === 'Salaried' && totalIncome) {
      return {
        labels: ['Expense', 'Money to Invest', 'Extra'],
        datasets: [
          {
            data: [expense, moneyToInvest, extra],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
    } else {
      return null;
    }
  }, [occupationType, totalIncome, expense, moneyToInvest, extra]);

  const investmentAdvice = useMemo(() => {
    if ((occupationType === 'Salaried' && totalIncome && moneyToInvest > 0) || (occupationType === 'Housewife' && amountToSave)) {
      return (
        <>
          <p className="mb-2">Based on your situation, here's a potential investment plan:</p>
          <ul className="list-disc pl-5">
            {occupationType === 'Salaried' ? (
              <>
                <li>Stocks: Invest 40% in diversified stocks for growth.</li>
                <li>Fixed Deposit: Allocate 30% to a fixed deposit for stability.</li>
                <li>SIP: Consider a Systematic Investment Plan (SIP) with 30% for long-term returns.</li>
              </>
            ) : (
              <>
                <li>Fixed Deposit: Consider a fixed deposit with a reputable bank for guaranteed returns.</li>
                <li>Recurring Deposit: Explore recurring deposit options for disciplined savings.</li>
                <li>Banking Compound Interest Plans: Look into high-yield savings accounts with compound interest.</li>
              </>
            )}
          </ul>
        </>
      );
    } else {
      return <p>Enter your income or savings to see investment advice.</p>;
    }
  }, [occupationType, totalIncome, moneyToInvest, amountToSave]);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Financial Planning Form</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation Type</label>
            <select
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={occupationType}
              onChange={handleOccupationChange}
            >
              <option value="">Select...</option>
              <option value="Salaried">Salaried</option>
              <option value="Housewife">Housewife</option>
            </select>
          </div>

          {occupationType === 'Salaried' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Income (₹)</label>
              <div className="flex">
                <Input
                  type="number"
                  placeholder="Enter your monthly income"
                  className="focus:ring-purple-500"
                  value={totalIncome || ''}
                  onChange={handleIncomeChange}
                />
                <Button className="ml-2" onClick={() => {
                  // TODO: Implement save income logic
                  console.log('Saving income:', totalIncome);
                }}>Save</Button>
              </div>
            </div>
          )}

          {occupationType === 'Housewife' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount to Save (₹)</label>
              <Input
                type="number"
                placeholder="Enter amount to save"
                className="focus:ring-purple-500"
                value={amountToSave || ''}
                onChange={(e) => handleSavingsChange(e)}
              />
            </div>
          )}

          {showSummary && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Ideal Financial Distribution : </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Savings</span>
                  <p className="text-lg font-semibold text-green-600">
                    {formatCurrency(savings)}
                  </p>
                </div>
                {occupationType === 'Salaried' && (
                  <>
                    <div className="space-y-1">
                      <span className="text-sm text-gray-500">Extra</span>
                      <p className="text-lg font-semibold text-yellow-600">
                        {formatCurrency(extra)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-gray-500">Expense</span>
                      <p className="text-lg font-semibold text-red-600">
                        {formatCurrency(expense)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-gray-500">Money to Invest</span>
                      <p className="text-lg font-semibold text-blue-600">
                        {formatCurrency(moneyToInvest)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {pieChartData && (
        <Card className="w-full max-w-md p-6 mt-4">
          <h2 className="text-xl font-semibold mb-2">Expense Distribution</h2>
          <Pie data={pieChartData} />
        </Card>
      )}

      {showSummary && (
        <Card className="w-full max-w-md p-6 mt-4">
          <h2 className="text-xl font-semibold mb-2">Investment Advice</h2>
          {investmentAdvice}
        </Card>
      )}
    </div>
  );
}
