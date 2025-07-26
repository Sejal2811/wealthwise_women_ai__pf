import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { calculateSIP } from '@/lib/utils/financial';
import { formatCurrency, formatLargeNumber } from '@/lib/utils';
import { PiggyBank, LineChart, Gem } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

function calculateFD(principal: number, rate: number, tenure: number): number {
  const interestRate = rate / 100;
  return principal * (1 + interestRate * tenure);
}

function calculateGoldLoan(goldWeight: number, goldRate: number, loanToValueRatio: number): number {
  const goldValue = goldWeight * goldRate;
  return goldValue * (loanToValueRatio / 100);
}

export function ToolsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const savedSavings = location.state?.savedSavings || 0;
  const [activeTab, setActiveTab] = useState("sip");

  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(10);
  const [sipRate, setSipRate] = useState(12);
  const sipResult = calculateSIP(sipAmount, sipYears, sipRate);

  const [fdPrincipal, setFdPrincipal] = useState(10000);
  const [fdRate, setFdRate] = useState(7);
  const [fdTenure, setFdTenure] = useState(1);
  const fdMaturityAmount = calculateFD(fdPrincipal, fdRate, fdTenure);

  const [goldWeight, setGoldWeight] = useState(10);
  const [goldRate, setGoldRate] = useState(5000);
  const [loanToValueRatio, setLoanToValueRatio] = useState(75);
  const goldLoanAmount = calculateGoldLoan(goldWeight, goldRate, loanToValueRatio);

  const handleAnalyzeClick = () => {
    navigate('/tools/analysis', { state: { savedSavings } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 font-sans">
      <div className="container mx-auto space-y-8">
        <div className="flex space-x-4 justify-center">
          <button
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${activeTab === 'sip'
              ? 'bg-purple-600 text-white'
              : 'bg-white border border-purple-200 text-purple-700 hover:bg-purple-100'
              }`}
            onClick={() => setActiveTab('sip')}
          >
            <LineChart className="h-4 w-4 mr-2" />
            SIP
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${activeTab === 'fd'
              ? 'bg-green-600 text-white'
              : 'bg-white border border-green-200 text-green-700 hover:bg-green-100'
              }`}
            onClick={() => setActiveTab('fd')}
          >
            <PiggyBank className="h-4 w-4 mr-2" />
            FD
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${activeTab === 'gold'
              ? 'bg-yellow-500 text-white'
              : 'bg-white border border-yellow-200 text-yellow-700 hover:bg-yellow-100'
              }`}
            onClick={() => setActiveTab('gold')}
          >
            <Gem className="h-4 w-4 mr-2" />
            Gold Loan
          </button>
        </div>

        {activeTab === 'sip' && (
          <Card className="bg-purple-80 p-6 space-y-4">
            <p className="text-sm text-gray-600 italic">SIP (Systematic Investment Plan) helps you invest monthly into mutual funds. It’s ideal for long-term wealth building.</p>
            <div className="p-3 rounded bg-purple-100 text-purple-800 text-sm">
              📊 Average SIP returns in India: <span className="font-semibold">12% annually</span></div>

            <Input label="Monthly Investment (₹)" type="number" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} />
            <Input label="Investment Period (Years)" type="number" value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} />
            <Input label="Expected Annual Return (%)" type="number" value={sipRate} onChange={(e) => setSipRate(Number(e.target.value))} />

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Investment</span>
                  <span className="font-medium">{formatLargeNumber(sipResult.invested)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Expected Returns</span>
                  <span className="font-semibold text-green-600">{formatLargeNumber(sipResult.returns)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Value</span>
                  <span className="font-semibold text-purple-700">{formatLargeNumber(sipResult.totalValue)}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <p>* SIP returns are subject to market risks. Past performance is not indicative of future returns.</p>
                <p>* This calculator provides an estimate based on constant returns. Actual results may vary.</p>
              </div>
            </div>

          </Card>
        )}

        {activeTab === 'fd' && (
          <Card className="bg-green-50 p-6 space-y-4">
            <p className="text-sm text-gray-600 italic">FD (Fixed Deposit) is a safe investment offering fixed returns over a set period of time.</p>
            <div className="p-3 rounded bg-green-100 text-green-800 text-sm">
              🏦 Average FD interest rate: <span className="font-semibold">7% annually</span></div>

            <Input label="Principal Amount (₹)" type="number" value={fdPrincipal} onChange={(e) => setFdPrincipal(Number(e.target.value))} />
            <Input label="Annual Interest Rate (%)" type="number" value={fdRate} onChange={(e) => setFdRate(Number(e.target.value))} />
            <Input label="Tenure (Years)" type="number" value={fdTenure} onChange={(e) => setFdTenure(Number(e.target.value))} />

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between text-sm">
                <span>Maturity Amount</span>
                <span className="font-semibold text-green-700">{formatLargeNumber(fdMaturityAmount)}</span>
              </div>
              <div className="text-sm text-gray-500">
                <p>* FD returns vary by bank and tenure. This estimate is based on simple interest calculation.</p>
                <p>* For compound interest and exact maturity, consult your bank or financial institution.</p>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'gold' && (
          <Card className="bg-yellow-50 p-6 space-y-4">
            <p className="text-sm text-gray-600 italic">Gold Loan lets you borrow against your gold jewelry at a fixed value per gram.</p>
            <div className="p-3 rounded bg-yellow-100 text-yellow-800 text-sm">
              💰 Average gold loan value: <span className="font-semibold">₹4,500–₹5,000 per gram</span><br />
              🏦 Typical loan-to-value ratio: <span className="font-semibold">75%</span>
            </div>

            <Input label="Gold Weight (grams)" type="number" value={goldWeight} onChange={(e) => setGoldWeight(Number(e.target.value))} />
            <Input label="Gold Rate per Gram (₹)" type="number" value={goldRate} onChange={(e) => setGoldRate(Number(e.target.value))} />
            <Input label="Loan-to-Value Ratio (%)" type="number" value={loanToValueRatio} onChange={(e) => setLoanToValueRatio(Number(e.target.value))} />

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between text-sm">
                <span>Loan Amount</span>
                <span className="font-semibold text-yellow-700">{formatLargeNumber(goldLoanAmount)}</span>
              </div>

              <div className="text-sm text-gray-500">
                <p>* Gold loan eligibility depends on purity, rate per gram, and current LTV regulations.</p>
                <p>* Contact your bank/NBFC for exact loan processing details.</p>
              </div>
            </div>
          </Card>
        )}

        <div className="flex justify-end pt-4">
          <Button className="text-xl py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2 rounded-xl shadow-lg" onClick={handleAnalyzeClick}>
            Next Stage: Analyze Savings
          </Button>
        </div>
      </div>
    </div >
  );
}
