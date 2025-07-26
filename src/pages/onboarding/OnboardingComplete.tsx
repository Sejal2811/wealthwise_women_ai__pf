import React from 'react';
import { Card } from '@/components/ui/Card';
import { CheckCircle } from 'lucide-react';

export function OnboardingComplete() {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4">Setup Complete!</h1>
      <p className="text-gray-600 mb-8">
        We're analyzing your financial data to provide personalized insights and recommendations.
      </p>
    </Card>
  );
}
