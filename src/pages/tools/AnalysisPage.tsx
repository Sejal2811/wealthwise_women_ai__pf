import React from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency as formatCurrencyUtil } from '@/lib/utils';
import { PiggyBank, LineChart, Gem } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
ChartJS.register(ArcElement, Tooltip, Legend);

export function AnalysisPage() {
  const location = useLocation();
  const savedSavings = location.state?.savedSavings || 0;
  const navigate = useNavigate();

  let investmentAdvice = '';
  let investmentDetails = '';
  let icon = null;
  let sipAllocation = 0;
  let goldAllocation = 0;
  let fdAllocation = 0;

  if (savedSavings > 50000) {
    investmentAdvice = 'With savings above ₹50,000, consider diversifying into SIPs and Gold for a balanced portfolio.';
    investmentDetails = 'Allocate 40% to SIPs for long-term growth, 30% to Gold as a safe haven, and 30% to a Fixed Deposit for stability.';
    icon = <><LineChart className="h-6 w-6 text-green-500 mr-2" /><Gem className="h-6 w-6 text-yellow-500 mr-2" /></>;
    sipAllocation = 40;
    goldAllocation = 30;
    fdAllocation = 30;
  } else if (savedSavings > 20000) {
    investmentAdvice = 'With savings above ₹20,000, consider investing in Fixed Deposits and SIPs to balance risk and growth.';
    investmentDetails = 'Allocate 60% to Fixed Deposits for stability and 40% to SIPs for growth.';
    icon = <><PiggyBank className="h-6 w-6 text-blue-500 mr-2" /><LineChart className="h-6 w-6 text-green-500 mr-2" /></>;
    sipAllocation = 40;
    goldAllocation = 0;
    fdAllocation = 60;
  } else {
    investmentAdvice = 'With savings below ₹20,000, focus on building a stronger base with Fixed Deposits for guaranteed returns.';
    investmentDetails = 'Allocate 100% to Fixed Deposits to build a solid foundation for future investments.';
    icon = <PiggyBank className="h-6 w-6 text-blue-500 mr-2" />;
    sipAllocation = 0;
    goldAllocation = 0;
    fdAllocation = 100;
  }

  const pieChartData = {
    labels: ['SIPs', 'Fixed Deposits', 'Gold'],
    datasets: [
      {
        data: [sipAllocation, fdAllocation, goldAllocation],
        backgroundColor: ['#818CF8', '#6EE7B7', '#FBBF24'],
        hoverBackgroundColor: ['#818CF8', '#6EE7B7', '#FBBF24'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Investment Allocation',
      },
    },
  };
  const handleAnalyzeClick = () => {
    navigate('/tools/successStories', { state: { savedSavings } });
  };
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <Card className="bg-white p-8 rounded-lg shadow-xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 text-center">Investment Analysis</h2>
            <p className="text-lg text-gray-700 text-center">Based on your monthly savings of {formatCurrencyUtil(savedSavings)}</p>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 bg-green-50 p-6 rounded-lg">
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <p className="text-green-600 font-medium text-lg">{investmentAdvice}</p>
                <p className="text-gray-600 mt-1">{investmentDetails}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommended Allocation</h3>
              <div className="h-72 relative">
                <Pie data={pieChartData} options={chartOptions} />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Considerations</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Assess your risk tolerance before investing.</li>
                <li>Diversify your investments to reduce risk.</li>
                <li>Review your portfolio regularly and rebalance as needed.</li>
                <li>Consult a financial advisor for personalized advice.</li>
              </ul>
            </div>
          </div>
        </Card>
        <div className="flex justify-end pt-4">
          <Button className="text-xl py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2 rounded-xl shadow-lg" onClick={handleAnalyzeClick}>
            Next Stage: Motivation
          </Button>
        </div>
      </div>
    </div>
  );
}
