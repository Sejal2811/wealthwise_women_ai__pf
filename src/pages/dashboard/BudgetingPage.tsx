import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { formatCurrency } from '@/lib/utils';

// Placeholder for your database saving function
async function saveMonthlySavingsToDB(savings: number): Promise<void> {
  console.log('Saving savings to database:', savings);
  await new Promise(resolve => setTimeout(resolve, 500));
}

export function BudgetingPage() {
  const navigate = useNavigate();
  const [occupationType, setOccupationType] = useState('');
  const [totalIncome, setTotalIncome] = useState<number | null>(null);
  const [amountToSave, setAmountToSave] = useState<number | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [savedSavings, setSavedSavings] = useState<number | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const savings = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.5 : amountToSave || 0;
  const extra = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.2 : 0;
  const expense = occupationType === 'Salaried' && totalIncome ? totalIncome * 0.3 : 0;
  const moneyToInvest = occupationType === 'Salaried' ? savings : 0;

  const handleNextClick = () => {
    navigate('/tools', { state: { savedSavings: savings } });
  };

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

  const handleSaveSavings = async () => {
    if (savings) {
      await saveMonthlySavingsToDB(savings);
      setSavedSavings(savings);
      setSaveMessage('Monthly savings saved successfully!');
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="space-y-6 container mx-auto px-4 py-12">
        <Card className="p-6 bg-white rounded-3xl shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-pink-600 text-center">
               Welcome to the Learning Stage
            </h2>
            <p className="text-gray-600 text-center italic">
              "The journey of thousand rupees begins with a single rupee saved."
            </p>

            <div>
              <label className="block text-sm font-medium text-pink-800">Occupation Type</label>
              <select
                className="w-full rounded-xl border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                <label className="block text-sm font-medium text-pink-800">Total Income (₹)</label>
                <Input
                  type="number"
                  placeholder="Enter your monthly income"
                  className="focus:ring-pink-400"
                  value={totalIncome || ''}
                  onChange={handleIncomeChange}
                />
              </div>
            )}

            {occupationType === 'Housewife' && (
              <div>
                <label className="block text-sm font-medium text-pink-800">Amount to Save (₹)</label>
                <Input
                  type="number"
                  placeholder="Enter amount to save"
                  className="focus:ring-pink-400"
                  value={amountToSave || ''}
                  onChange={handleSavingsChange}
                />
              </div>
            )}

            {showSummary && occupationType === 'Salaried' && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Ideal Financial Distribution (50/30/20 Rule)</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-sm text-gray-500">Savings</span>
                    <p className="text-lg font-semibold text-pink-600">{formatCurrency(savings)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-gray-500">Extra</span>
                    <p className="text-lg font-semibold text-yellow-500">{formatCurrency(extra)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-gray-500">Expense</span>
                    <p className="text-lg font-semibold text-red-500">{formatCurrency(expense)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-gray-500">Money to Invest</span>
                    <p className="text-lg font-semibold text-purple-600">{formatCurrency(moneyToInvest)}</p>
                  </div>
                </div>
              </div>
            )}

            {showSummary && occupationType === 'Housewife' && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Your Monthly Saving Goal:</h2>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Savings</span>
                  <p className="text-lg font-semibold text-pink-600">{formatCurrency(savings)}</p>
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-pink-100 rounded-xl">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Why Saving Matters</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Builds financial discipline</li>
                <li>Prepares you for emergencies</li>
                <li>Sets foundation for wealth</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-purple-100 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Budgeting Basics: 50/30/20 Rule</h3>
              <p className="text-gray-700">This simple method helps you divide your income smartly:</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>50% for Needs (food, rent, utilities)</li>
                <li>30% for Wants (shopping, entertainment)</li>
                <li>20% for Savings & Debt repayment</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-pink-100 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Explore Simple Investment Tools</h3>

              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-pink-700">💰 Fixed Deposit (FD):</strong>
                  <p className="text-sm">
                    An FD locks your money at a fixed interest rate for a set period. Great for risk-free saving.
                    <br />
                    <span className="text-purple-600 font-medium">📈 Avg Rate: 6.5% - 7.5% p.a.</span>
                  </p>
                </div>

                <div>
                  <strong className="text-pink-700">📊 SIP (Systematic Investment Plan):</strong>
                  <p className="text-sm">
                    SIP allows you to invest a fixed amount regularly in mutual funds. Start small, grow big with compounding!
                    <br />
                    <span className="text-purple-600 font-medium">🚀 Avg Returns: 10% - 14% p.a. (long-term)</span>
                  </p>
                </div>

                <div>
                  <strong className="text-pink-700">👑 Gold Loan:</strong>
                  <p className="text-sm">
                    Use your gold as security to get quick funds. Ideal for emergencies or short-term needs.
                    <br />
                    <span className="text-purple-600 font-medium">🏦 Avg Interest Rate: 9% - 12% p.a.</span>
                  </p>
                </div>
              </div>
            </div>

            {saveMessage && <div className="text-pink-600 font-medium">{saveMessage}</div>}

            {occupationType === 'Salaried' && totalIncome && (
              <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={handleSaveSavings}>
                Save Monthly Savings
              </Button>
            )}

            <Button
              className="text-xl py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2 rounded-xl shadow-lg"
              onClick={handleNextClick}
            >
              Next Stop: Tools
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
