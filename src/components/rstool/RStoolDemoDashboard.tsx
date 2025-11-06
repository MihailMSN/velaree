import { useState } from "react";
import MockupBrowser from "@/components/mockups/MockupBrowser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  { label: "Total Savings YTD", value: "$2.4M", icon: TrendingDown, change: "+32%" },
  { label: "PNRs Monitored", value: "1,247", icon: Users, change: "+12%" },
  { label: "Active Opportunities", value: "89", icon: AlertCircle, change: "+23%" },
  { label: "Total Savings Today", value: "$43,892", icon: DollarSign, change: "+18%" },
  { label: "Avg. Savings/PNR", value: "$493", icon: TrendingDown, change: "+8%" },
  { label: "Successful Re-bookings", value: "156", icon: CheckCircle2, change: "+15%" },
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
    <MockupBrowser url="arstool.velaree.com/dashboard" className="w-full">
      <div className="p-4 sm:p-6 min-h-[600px]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-5 bg-white border-gray-200 min-w-0">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-xl font-bold text-gray-900 leading-tight mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 line-clamp-2">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Top Routes Chart */}
        <Card className="p-4 bg-white border-gray-200 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Top Routes by Savings Opportunity</h3>
          <div className="space-y-3">
            {[
              { route: "JFK-LHR", savings: "$8,200", percentage: 100 },
              { route: "LAX-NRT", savings: "$6,500", percentage: 79 },
              { route: "SFO-CDG", savings: "$5,800", percentage: 71 },
              { route: "MIA-GRU", savings: "$4,200", percentage: 51 },
              { route: "ORD-FRA", savings: "$3,900", percentage: 48 }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-20 sm:w-24 text-sm font-medium text-gray-900 truncate">{item.route}</div>
                <div className="flex-1 min-w-0">
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="w-16 sm:w-20 text-sm font-bold text-green-600 text-right flex-shrink-0">{item.savings}</div>
              </div>
            ))}
          </div>
        </Card>

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
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[100px]">PNR</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[140px]">Passenger</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[120px]">Route</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[100px]">Original</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[100px]">New Price</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[90px]">Savings</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[120px]">Scenario</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[180px]">Supplier</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[90px]">Confidence</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[110px]">Status</th>
                      <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700 min-w-[100px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reShoppingData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-3 py-2.5 min-w-[100px]">
                          <div className="font-mono text-sm font-semibold text-gray-900">{item.pnr}</div>
                          <div className="text-xs text-gray-500">{item.gds}</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[140px]">
                          <div className="text-sm text-gray-900 truncate max-w-[140px]">{item.passenger}</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[120px]">
                          <div className="text-sm font-medium text-gray-900">{item.route}</div>
                          <div className="text-xs text-gray-500 truncate">{item.bookingClass}</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[100px]">
                          <div className="text-sm font-medium text-gray-900">${item.originalFare}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[100px]">{item.supplier}</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[100px]">
                          <div className="text-sm font-bold text-green-600">${item.newFare}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[100px]">{item.newSupplier}</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[90px]">
                          <div className="text-sm font-bold text-green-600">${item.savings}</div>
                          <div className="text-xs font-medium text-green-600">{item.savingsPercent}%</div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[120px]">
                          <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", getScenarioColor(item.scenario))}>
                            {item.scenario}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 min-w-[180px]">
                          <div className="text-xs text-gray-600 truncate max-w-[180px]">
                            {item.supplier} → {item.newSupplier}
                          </div>
                        </td>
                        <td className="px-3 py-2.5 min-w-[90px]">
                          <span className={`text-sm font-medium ${getConfidenceColor(item.confidence)}`}>
                            {item.confidence}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 min-w-[110px]">
                          <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", getStatusColor(item.status))}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 min-w-[100px]">
                          <Button size="sm" variant="ghost" className="text-primary whitespace-nowrap">
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
