import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TrendingUp, Target, Brain, BarChart, Shield,
  Users, ArrowRight, Check, Menu, X, Bell, Settings, LogOut
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StaticHeader } from '@/components/home/StaticHeader';

function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl mb-4">
          💎 Invest. Grow. Thrive.
          <br />
          Your money, your rules—designed for women who dare to dream big.
        </p>
        <p className="text-sm">
          🔗 Let’s Stay Connected! Follow us for exclusive insights, trends, and success stories.
        </p>
        <p className="text-sm mt-4">
          💜 #WealthWiseWomen | #MoneyMoves | #SheInvests
        </p>
      </div>
    </footer>
  );
}

export function HomePage() {
  const navigate = useNavigate();

  const handleStartJourneyClick = () => {
    navigate('/budgeting');
  };

  const features: any[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <StaticHeader />

      {/* Hero Section */}
      <div className="relative flex-grow">
        <div className="container mx-auto px-4 py-24 flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-pink-600">
                🌸 Welcome to GrowHer
              </h1>

              <h4 className="text-2xl font-bold tracking-tight text-gray-600">
                Financial Power. Fearless Women. Limitless Growth.
              </h4>
              <p className="text-xl text-gray-600">
                Break barriers, build wealth, and take control of your financial future with AI-driven insights—because your success story starts now! 🚀✨
              </p>
              <Button onClick={handleStartJourneyClick}>Start Your Journey</Button>
            </div>
            <div className="relative">
              <img
                src="https://www.licmf.com/assets/blog-page/lazytech/Images/head/Safe%20Investment%20Haven%20for%20Women%20%E2%80%93%20Mutual%20Funds.png"
                alt="Woman investing"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
