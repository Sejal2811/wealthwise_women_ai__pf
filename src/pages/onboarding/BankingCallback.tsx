import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';

export function BankingCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a successful callback after 2 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding/complete');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Card className="p-6 text-center">
      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">Bank Account Connected!</h2>
      <p className="text-gray-600 mb-6">
        Your bank account has been successfully connected.
      </p>
    </Card>
  );
}
