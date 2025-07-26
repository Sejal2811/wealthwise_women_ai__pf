import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { formatCurrency, formatLargeNumber } from '@/lib/utils';

function calculateFD(principal: number, rate: number, tenure: number): number {
  const interestRate = rate / 100;
  const maturityAmount = principal * (1 + interestRate * tenure);
  return maturityAmount;
}

export function FDCalculatorPage() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [tenure, setTenure] = useState(1);

  const maturityAmount = calculateFD(principal, rate, tenure);

  return (
    <Card title="FD Calculator" description="Estimate maturity value of your fixed deposits">
      <div className="space-y-4">
        <Input
          label="Principal Amount (₹)"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
        <Input
          label="Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <Input
          label="Tenure (Years)"
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        />

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Maturity Amount</span>
              <span className="font-semibold text-green-600">
                {formatLargeNumber(maturityAmount)}
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>* FD returns are subject to change. This calculator provides an estimate based on the entered values.</p>
          <p>* Consult your bank for the exact interest rates and maturity amounts.</p>
        </div>
      </div>
    </Card>
  );
}
