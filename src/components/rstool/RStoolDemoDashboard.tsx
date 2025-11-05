import { useState } from "react";
import MockupBrowser from "@/components/mockups/MockupBrowser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Sparkles,
  ArrowRight
} from "lucide-react";

const stats = [
  { label: "PNRs Monitored", value: "1,247", icon: Users, change: "+12%" },
  { label: "Active Opportunities", value: "89", icon: AlertCircle, change: "+23%" },
  { label: "Total Savings Today", value: "$43,892", icon: DollarSign, change: "+18%" },
  { label: "Avg. Savings/PNR", value: "$493", icon: TrendingDown, change: "+8%" },
  { label: "Successful Re-bookings", value: "156", icon: CheckCircle2, change: "+15%" },
  { label: "Processing Time", value: "2.3s", icon: Clock, change: "-12%" },
];

const reShoppingData = [
  {
    pnr: "ABC123",
    route: "JFK-LHR",
    passenger: "Smith, John",
    originalFare: 1250,
    newFare: 980,
    savings: 270,
    savingsPercent: 21.6,
    supplier: "Amadeus",
    newSupplier: "Sabre Private Fare",
    scenario: "Void/Reissue",
    status: "Ready",
    confidence: "High",
    gds: "Amadeus",
    bookingClass: "Y → B",
  },
  {
    pnr: "DEF456",
    route: "LAX-NRT-SIN",
    passenger: "Johnson, Sarah",
    originalFare: 2100,
    newFare: 1750,
    savings: 350,
    savingsPercent: 16.7,
    supplier: "Sabre",
    newSupplier: "Mystifly Consolidator",
    scenario: "Refund/Reissue",
    status: "Processing",
    confidence: "High",
    gds: "Sabre",
    bookingClass: "M → M",
  },
  {
    pnr: "GHI789",
    route: "SFO-CDG",
    passenger: "Williams, Mike",
    originalFare: 890,
    newFare: 720,
    savings: 170,
    savingsPercent: 19.1,
    supplier: "Travelport",
    newSupplier: "Amadeus NDC",
    scenario: "Void/Upgrade",
    status: "Ready",
    confidence: "Medium",
    gds: "Travelport",
    bookingClass: "K → W (Premium Eco)",
  },
  {
    pnr: "JKL012",
    route: "MIA-GRU",
    passenger: "Brown, Lisa",
    originalFare: 650,
    newFare: 580,
    savings: 70,
    savingsPercent: 10.8,
    supplier: "Mystifly",
    newSupplier: "Travelport Private",
    scenario: "Exchange",
    status: "Review Required",
    confidence: "Medium",
    gds: "Mystifly",
    bookingClass: "L → L",
  },
];

const RStoolDemoDashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Processing": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Review Required": return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "High": return "text-green-600 dark:text-green-400";
      case "Medium": return "text-amber-600 dark:text-amber-400";
      case "Low": return "text-red-600 dark:text-red-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  const getScenarioColor = (scenario: string) => {
    switch (scenario) {
      case "Void/Reissue": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      case "Refund/Reissue": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Void/Upgrade": return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400";
      case "Exchange": return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <MockupBrowser url="rstool.velaree.com/dashboard" className="w-full">
      <div className="p-6 min-h-[600px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Re-Shopping Dashboard</h2>
            <p className="text-sm text-gray-600">Real-time PNR monitoring & optimization</p>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm" className="bg-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Auto-Rebook
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 bg-white border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tabs for Different Views */}
        <Tabs defaultValue="opportunities" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="opportunities">Active Opportunities</TabsTrigger>
            <TabsTrigger value="all">All PNRs</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities" className="space-y-4">
            {/* Re-shopping Opportunities Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">PNR</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Passenger</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Route</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Original</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">New Price</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Savings</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Scenario</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Supplier</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Confidence</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reShoppingData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="font-mono text-sm font-semibold text-gray-900">{item.pnr}</div>
                          <div className="text-xs text-gray-500">{item.gds}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.passenger}</td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">{item.route}</div>
                          <div className="text-xs text-gray-500">{item.bookingClass}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">${item.originalFare}</div>
                          <div className="text-xs text-gray-500">{item.supplier}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-bold text-green-600">${item.newFare}</div>
                          <div className="text-xs text-gray-500">{item.newSupplier}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-bold text-green-600">${item.savings}</div>
                          <div className="text-xs font-medium text-green-600">{item.savingsPercent}%</div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge className={getScenarioColor(item.scenario)}>
                            {item.scenario}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-600">
                          {item.supplier} → {item.newSupplier}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-sm font-medium ${getConfidenceColor(item.confidence)}`}>
                            {item.confidence}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button size="sm" variant="ghost" className="text-primary">
                            Review <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="all" className="text-center py-12 text-gray-500">
            All PNRs view - showing complete monitoring list
          </TabsContent>

          <TabsContent value="completed" className="text-center py-12 text-gray-500">
            Completed re-bookings and historical data
          </TabsContent>
        </Tabs>
      </div>
    </MockupBrowser>
  );
};

export default RStoolDemoDashboard;
