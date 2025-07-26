import React from 'react';
import { Card } from '@/components/ui/Card';
import { PercentCircle, Gift } from 'lucide-react';

const skimsData = [
  {
    id: '1',
    title: 'High-Yield Savings Accounts',
    description: 'Maximize your savings with these high-interest accounts.',
    offer: 'Earn up to 7% interest annually',
    link: 'https://example.com/savings',
    icon: <PercentCircle className="h-6 w-6 text-green-500" />,
  },
  {
    id: '2',
    title: 'Discounted Investment Plans',
    description: 'Exclusive offers on investment plans for WealthWise Women members.',
    offer: 'Get 20% off on your first investment',
    link: 'https://example.com/investments',
    icon: <Gift className="h-6 w-6 text-blue-500" />,
  },
  {
    id: '3',
    title: 'Credit Card Rewards',
    description: 'Earn rewards and cashback on your everyday spending.',
    offer: 'Get ₹500 cashback on your first transaction',
    link: 'https://example.com/credit-cards',
    icon: <PercentCircle className="h-6 w-6 text-red-500" />,
  },
];

export function SkimsOffersPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Gift className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Exclusive schemes & Offers</h1>
            <p className="text-pink-100">Unlock special deals and financial benefits</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skimsData.map((skim) => (
          <a
            key={skim.id}
            href={skim.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="hover:shadow-md transition-shadow h-full">
              <div className="space-y-4 p-4">
                <div className="flex items-center space-x-3">
                  {skim.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{skim.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{skim.description}</p>
                <p className="text-sm font-medium text-purple-600">{skim.offer}</p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
