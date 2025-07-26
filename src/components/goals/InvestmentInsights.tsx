import React from 'react';
import { Card } from '@/components/ui/Card';
import { LineChart, PiggyBank, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface InvestmentType {
  name: string;
  description: string;
  link: string;
  icon: React.ReactElement;
  color: string;
  fdLinks?: { [bankName: string]: string };
}

interface InvestmentInsightsProps {
  investmentTypes?: InvestmentType[];
}

export function InvestmentInsights({ investmentTypes }: InvestmentInsightsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {investmentTypes && investmentTypes.map((investment) => (
        <Card key={investment.name} className={`bg-${investment.color}-100 border-${investment.color}-200`}>
          <div className="p-4 space-y-4">
            <div className="relative flex items-center justify-center">
              {investment.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{investment.name}</h3>
            <p className="text-sm text-gray-500">{investment.description}</p>
            {investment.name === 'Fixed Deposits (FDs)' && investment.fdLinks ? (
              <div className="flex flex-col gap-2 mt-4">
                {Object.entries(investment.fdLinks).map(([bankName, link]) => (
                  <a
                    key={bankName}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="w-full">
                      {bankName}
                    </Button>
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={investment.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="sm" className="w-full mt-4">
                  Invest Now
                </Button>
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

// Example usage (replace with your actual data)
const investmentTypesData = [
  {
    name: 'Gold',
    description: 'Invest in gold, a safe haven asset.',
    link: 'https://docs.google.com/document/d/1YF-j1e6gT6joZjeEziGeltTcqGYuujap/edit?usp=sharing&ouid=115725879762685459550&rtpof=true&sd=true',
    icon: <LineChart className="h-8 w-8 text-rose-500" />,
    color: 'rose'
  },
  {
    name: 'Fixed Deposits (FDs)',
    description: 'Secure investment with guaranteed returns.',
    link: '', // General FD link (optional)
    icon: <PiggyBank className="h-8 w-8 text-orange-500" />,
    color: 'orange',
    fdLinks: {
      'Maharashtra Bank': 'https://www.paisabazaar.com/bank-of-maharashtra/fixed-deposits/#:~:text=Bank%20of%20Maharashtra%20offers%20FD%20interest%20rates%20of,from%207%20days%20to%205%20years%20and%20above.',
      'BOI': 'https://bankofindia.co.in/internet-banking/fixed-deposit',
      'SBI': 'https://sbi.co.in/web/personal-banking/investments-deposits/deposits/fixed-deposit',
      'HDFC': 'https://www.hdfcbank.com/personal/save/deposits/fixed-deposit',
    },
  },
  {
    name: 'Systematic Investment Plans (SIPs)',
    description: 'Regular investments for long-term growth.',
    link: 'https://docs.google.com/document/d/1RhdrkF3gLzp3IPOIX1rt4EouF5fd42ye/edit', // Replace with actual link
    icon: <TrendingUp className="h-8 w-8 text-amber-500" />,
    color: 'amber'
  },
];

export default function InvestmentOptions() {
  return (
    <InvestmentInsights investmentTypes={investmentTypesData} />);
}
