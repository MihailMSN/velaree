'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export default function ReShopForm() {
  const [pnr, setPnr] = useState('');
  const [loading, setLoading] = useState(false);
  const [savings, setSavings] = useState<number | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate API call (replace with real Amadeus later)
    setTimeout(() => {
      setSavings(Math.floor(Math.random() * 300) + 50);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto mt-20">
        <Card className="p-6 shadow-xl">
          <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">
            Velaree – Find Cheaper Flights
          </h1>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="pnr">Enter Your Booking Reference (PNR)</Label>
              <Input
                id="pnr"
                placeholder="ABC123"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                className="mt-1"
              />
            </div>

            <Button 
              onClick={handleSearch} 
              disabled={!pnr || loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              {loading ? 'Searching...' : 'Find Better Deals'}
            </Button>

            {savings && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700">${savings}</p>
                <p className="text-sm text-green-600">Potential savings found!</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
