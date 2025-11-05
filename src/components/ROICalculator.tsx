import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Building2, TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";

const ROICalculator = () => {
  // aRStool state
  const [airVolume, setAirVolume] = useState(2500);
  const [airTicketPrice, setAirTicketPrice] = useState(650);
  const [airSavingsPercent, setAirSavingsPercent] = useState(25);

  // hRStool state
  const [hotelVolume, setHotelVolume] = useState(1500);
  const [hotelBookingPrice, setHotelBookingPrice] = useState(450);
  const [hotelSavingsPercent, setHotelSavingsPercent] = useState(27);

  // Calculate aRStool ROI
  const airTotalMonthlyValue = airVolume * airTicketPrice;
  const airMonthlySavings = (airTotalMonthlyValue * airSavingsPercent) / 100;
  const airYearlySavings = airMonthlySavings * 12;
  const airPlanCost = airVolume < 1000 ? 499 : airVolume < 5000 ? 1999 : 3999;
  const airNetMonthlyProfit = airMonthlySavings - airPlanCost;
  const airNetYearlyProfit = airNetMonthlyProfit * 12;
  const airROIPercent = ((airNetMonthlyProfit / airPlanCost) * 100).toFixed(0);

  // Calculate hRStool ROI
  const hotelTotalMonthlyValue = hotelVolume * hotelBookingPrice;
  const hotelMonthlySavings = (hotelTotalMonthlyValue * hotelSavingsPercent) / 100;
  const hotelYearlySavings = hotelMonthlySavings * 12;
  const hotelPlanCost = hotelVolume < 500 ? 399 : hotelVolume < 2500 ? 1499 : 2999;
  const hotelNetMonthlyProfit = hotelMonthlySavings - hotelPlanCost;
  const hotelNetYearlyProfit = hotelNetMonthlyProfit * 12;
  const hotelROIPercent = ((hotelNetMonthlyProfit / hotelPlanCost) * 100).toFixed(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-muted-foreground">
            See how much your agency could save with our re-shopping tools
          </p>
        </div>

        <Tabs defaultValue="arstool" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="arstool" className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              aRStool
            </TabsTrigger>
            <TabsTrigger value="hrstool" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              hRStool
            </TabsTrigger>
          </TabsList>

          {/* aRStool Calculator */}
          <TabsContent value="arstool">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="w-5 h-5 text-primary" />
                    Your Agency Details
                  </CardTitle>
                  <CardDescription>
                    Adjust the sliders to match your monthly booking volume
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Monthly Volume */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Monthly PNRs</Label>
                      <span className="text-2xl font-bold text-primary">
                        {airVolume.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[airVolume]}
                      onValueChange={(value) => setAirVolume(value[0])}
                      min={100}
                      max={10000}
                      step={100}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Number of air tickets you book per month
                    </p>
                  </div>

                  {/* Average Ticket Price */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Average Ticket Price</Label>
                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(airTicketPrice)}
                      </span>
                    </div>
                    <Slider
                      value={[airTicketPrice]}
                      onValueChange={(value) => setAirTicketPrice(value[0])}
                      min={100}
                      max={3000}
                      step={50}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Your typical airfare price point
                    </p>
                  </div>

                  {/* Savings Percentage */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Expected Savings Rate</Label>
                      <span className="text-2xl font-bold text-primary">
                        {airSavingsPercent}%
                      </span>
                    </div>
                    <Slider
                      value={[airSavingsPercent]}
                      onValueChange={(value) => setAirSavingsPercent(value[0])}
                      min={10}
                      max={40}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Typical savings: 15-40% (average: 25%)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Your Potential ROI
                  </CardTitle>
                  <CardDescription>
                    Based on your inputs, here's what you could save
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Monthly Savings */}
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Monthly Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(airMonthlySavings)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From {airVolume.toLocaleString()} tickets
                    </p>
                  </div>

                  {/* Yearly Savings */}
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Yearly Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(airYearlySavings)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Annual savings potential
                    </p>
                  </div>

                  {/* Net Profit */}
                  <div className="bg-card p-4 rounded-lg border border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Net Monthly Profit</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(airNetMonthlyProfit)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After {formatCurrency(airPlanCost)}/month plan cost
                    </p>
                  </div>

                  {/* ROI Percentage */}
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Return on Investment</span>
                    </div>
                    <p className="text-4xl font-bold text-primary">
                      {airROIPercent}%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Monthly ROI • {formatCurrency(airNetYearlyProfit)}/year net profit
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Bottom line:</strong> For every ${airPlanCost} you invest monthly, 
                      you could generate {formatCurrency(airMonthlySavings)} in savings, 
                      netting {formatCurrency(airNetMonthlyProfit)} in pure profit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* hRStool Calculator */}
          <TabsContent value="hrstool">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Your Agency Details
                  </CardTitle>
                  <CardDescription>
                    Adjust the sliders to match your monthly hotel bookings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Monthly Volume */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Monthly Hotel Bookings</Label>
                      <span className="text-2xl font-bold text-primary">
                        {hotelVolume.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[hotelVolume]}
                      onValueChange={(value) => setHotelVolume(value[0])}
                      min={50}
                      max={5000}
                      step={50}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Number of hotel bookings per month
                    </p>
                  </div>

                  {/* Average Booking Price */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Average Booking Value</Label>
                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(hotelBookingPrice)}
                      </span>
                    </div>
                    <Slider
                      value={[hotelBookingPrice]}
                      onValueChange={(value) => setHotelBookingPrice(value[0])}
                      min={100}
                      max={2000}
                      step={25}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Your typical hotel booking value
                    </p>
                  </div>

                  {/* Savings Percentage */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Expected Savings Rate</Label>
                      <span className="text-2xl font-bold text-primary">
                        {hotelSavingsPercent}%
                      </span>
                    </div>
                    <Slider
                      value={[hotelSavingsPercent]}
                      onValueChange={(value) => setHotelSavingsPercent(value[0])}
                      min={15}
                      max={35}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Typical savings: 20-35% (average: 27%)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Your Potential ROI
                  </CardTitle>
                  <CardDescription>
                    Based on your inputs, here's what you could save
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Coming Soon Badge */}
                  <div className="bg-accent/20 border border-accent/40 p-3 rounded-lg text-center">
                    <p className="text-sm font-semibold">Coming Q2 2025</p>
                    <p className="text-xs text-muted-foreground">Join waitlist for early access</p>
                  </div>

                  {/* Monthly Savings */}
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Monthly Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(hotelMonthlySavings)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From {hotelVolume.toLocaleString()} bookings
                    </p>
                  </div>

                  {/* Yearly Savings */}
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Yearly Savings</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(hotelYearlySavings)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Annual savings potential
                    </p>
                  </div>

                  {/* Net Profit */}
                  <div className="bg-card p-4 rounded-lg border border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Net Monthly Profit</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(hotelNetMonthlyProfit)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After {formatCurrency(hotelPlanCost)}/month plan cost
                    </p>
                  </div>

                  {/* ROI Percentage */}
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Return on Investment</span>
                    </div>
                    <p className="text-4xl font-bold text-primary">
                      {hotelROIPercent}%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Monthly ROI • {formatCurrency(hotelNetYearlyProfit)}/year net profit
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Bottom line:</strong> For every ${hotelPlanCost} you invest monthly, 
                      you could generate {formatCurrency(hotelMonthlySavings)} in savings, 
                      netting {formatCurrency(hotelNetMonthlyProfit)} in pure profit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Calculations are estimates based on industry averages. Actual savings may vary based on your specific booking patterns, 
            routes, destinations, and market conditions. Results shown are potential gross savings before any re-booking costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
