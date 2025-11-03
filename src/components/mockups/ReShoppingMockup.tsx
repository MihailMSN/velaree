import MockupBrowser from "./MockupBrowser";
import { RefreshCw, TrendingDown, DollarSign, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const stats = [{
  label: "PNRs Monitored",
  value: "2,847",
  icon: Clock
}, {
  label: "Savings Found",
  value: "$42.3K",
  icon: TrendingDown
}, {
  label: "Re-booked Today",
  value: "156",
  icon: RefreshCw
}, {
  label: "Avg ROI",
  value: "18.4%",
  icon: DollarSign
}];
const reShoppingData = [{
  pnr: "ABC123",
  route: "JFK-LHR",
  originalFare: "$842",
  newFare: "$687",
  savings: "$155",
  savingsPercent: "18%",
  supplier: "Consolidator X",
  commission: "12%",
  source: "Private Fare",
  status: "price-drop",
  time: "2m ago",
  badge: "Best Price"
}, {
  pnr: "DEF456",
  route: "LAX-CDG",
  originalFare: "$1,245",
  newFare: "$1,098",
  savings: "$147",
  savingsPercent: "12%",
  supplier: "GDS Amadeus",
  commission: "8%",
  source: "Public GDS",
  status: "processing",
  time: "Just now",
  badge: null
}, {
  pnr: "GHI789",
  route: "MIA-LHR",
  originalFare: "$892",
  newFare: "$745",
  savings: "$147",
  savingsPercent: "16%",
  supplier: "Consolidator Y",
  commission: "15%",
  source: "Private Fare",
  status: "completed",
  time: "5m ago",
  badge: "Best Commission"
}, {
  pnr: "JKL012",
  route: "SFO-NRT",
  originalFare: "$1,567",
  newFare: "$1,389",
  savings: "$178",
  savingsPercent: "11%",
  supplier: "Airline Direct",
  commission: "10%",
  source: "NDC Direct",
  status: "price-drop",
  time: "8m ago",
  badge: null
}];
const ReShoppingMockup = () => {
  return <MockupBrowser url="app.velaree.com/re-shopping">
      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <Card key={index} className="p-4 bg-card border-border animate-fade-in" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </Card>;
        })}
        </div>

        {/* Main Content */}
        <Card className="bg-card border-border overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Re-Shopping Opportunities</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Live monitoring</span>
                  </div>
                  <span>•</span>
                  <span>Auto-refresh ON</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                <RefreshCw className="w-3 h-3 mr-1" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">PNR</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Original</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">New Fare</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Savings</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {reShoppingData.map((row, index) => <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors animate-fade-in" style={{
                animationDelay: `${0.2 + index * 0.05}s`
              }}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-foreground">{row.pnr}</div>
                      <div className="text-xs text-muted-foreground">{row.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-foreground">{row.route}</div>
                      {row.badge}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground line-through">{row.originalFare}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-foreground">{row.newFare}</div>
                      <div className="text-xs text-muted-foreground">{row.source}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-foreground">{row.supplier}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200">
                        <span className="text-xs font-semibold text-green-700">{row.commission}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200">
                        <TrendingDown className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-semibold text-green-700">
                          {row.savings} ({row.savingsPercent})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {row.status === "price-drop" && <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 border border-amber-200">
                          <AlertCircle className="w-3 h-3 text-amber-600" />
                          <span className="text-xs font-medium text-amber-700">Price Drop</span>
                        </div>}
                      {row.status === "processing" && <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 border border-blue-200">
                          <RefreshCw className="w-3 h-3 text-blue-600 animate-spin" />
                          <span className="text-xs font-medium text-blue-700">Processing</span>
                        </div>}
                      {row.status === "completed" && <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span className="text-xs font-medium text-green-700">Completed</span>
                        </div>}
                    </td>
                    <td className="px-6 py-4">
                      {row.status === "price-drop" && <Button size="sm" className="text-xs bg-accent text-accent-foreground hover:bg-accent/90">
                          Review
                        </Button>}
                      {row.status === "processing" && <Button size="sm" variant="outline" className="text-xs" disabled>
                          Processing...
                        </Button>}
                      {row.status === "completed" && <Button size="sm" variant="ghost" className="text-xs text-muted-foreground">
                          View
                        </Button>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </MockupBrowser>;
};
export default ReShoppingMockup;