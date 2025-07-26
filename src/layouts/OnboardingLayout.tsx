import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function OnboardingLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const getNextPage = () => {
    switch (location.pathname) {
      case '/onboarding/banking':
        return '/onboarding/complete';
      case '/onboarding/complete':
        return '/'; // Or wherever you want to go after onboarding
      case '/onboarding/banking/callback':
        return '/onboarding/complete';
      default:
        return null;
    }
  };

  const nextPage = getNextPage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-8 w-8 text-purple-600 mr-2" />
          <span className="text-2xl font-bold">WealthWise Women</span>
        </div>
        <div className="max-w-3xl mx-auto flex-grow">
          <Outlet />
        </div>
      </div>
      {nextPage && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="container mx-auto max-w-3xl">
            <Button onClick={() => navigate(nextPage)} className="w-full">
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
