import { TrendingDown, DollarSign, CheckCircle2 } from "lucide-react";
import MockupBrowser from "./MockupBrowser";

const PrivateFareMockup = () => {
  const fareData = [
    { route: "SFO-LHR", public: "$842", private: "$594", savings: "29%", status: "active" },
    { route: "JFK-CDG", public: "$728", private: "$512", savings: "30%", status: "active" },
    { route: "LAX-NRT", public: "$1,245", private: "$897", savings: "28%", status: "active" },
    { route: "MIA-LHR", public: "$892", private: "$645", savings: "28%", status: "active" }
  ];

  return (
    <MockupBrowser url="app.velaree.com/fares" className="animate-fade-in">
      <div className="p-8 space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-xs font-semibold text-gray-600 uppercase">Avg Savings</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">28.7%</div>
            <div className="text-xs text-green-600 mt-1">↑ 3.2% vs last month</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-gray-600 uppercase">Active Fares</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-xs text-gray-500 mt-1">From 52 consolidators</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs font-semibold text-gray-600 uppercase">Margin</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">$127.4K</div>
            <div className="text-xs text-green-600 mt-1">This month</div>
          </div>
        </div>

        {/* Fare Comparison Table */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-gray-900">Private Fare Comparison</h3>
            <p className="text-xs text-gray-500 mt-1">Real-time rates from consolidator network</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Public Fare</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Private Fare</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Savings</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fareData.map((fare, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{fare.route}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-500 line-through">{fare.public}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-primary">{fare.private}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        <TrendingDown className="w-3 h-3" />
                        {fare.savings}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        {fare.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-accent/20 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total potential monthly savings:</span>
              <span className="font-bold text-xl text-primary">$384,200</span>
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
};

export default PrivateFareMockup;
