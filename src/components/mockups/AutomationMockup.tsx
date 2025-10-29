import { Zap, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import MockupBrowser from "./MockupBrowser";

const AutomationMockup = () => {
  const tasks = [
    { id: "TKT-4821", type: "Auto-Ticketing", status: "completed", time: "2m ago", pnr: "ABC123" },
    { id: "TKT-4822", type: "Schedule Change", status: "processing", time: "Just now", pnr: "DEF456" },
    { id: "TKT-4823", type: "Auto-Ticketing", status: "completed", time: "5m ago", pnr: "GHI789" },
    { id: "TKT-4824", type: "Refund Process", status: "pending", time: "8m ago", pnr: "JKL012" }
  ];

  return (
    <MockupBrowser url="app.velaree.com/automation" className="animate-fade-in">
      <div className="p-8 space-y-6">
        {/* Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-card rounded-lg shadow p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Tasks Today</span>
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <div className="text-xs text-green-600 mt-1">↑ 23% automated</div>
          </div>

          <div className="bg-card rounded-lg shadow p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Completed</span>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-foreground">1,089</div>
            <div className="text-xs text-muted-foreground mt-1">87.3% success rate</div>
          </div>

          <div className="bg-card rounded-lg shadow p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Processing</span>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-foreground">142</div>
            <div className="text-xs text-blue-600 mt-1 flex items-center gap-1">
              <span className="animate-pulse">●</span> Live
            </div>
          </div>

          <div className="bg-card rounded-lg shadow p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Avg Time</span>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">2.3s</div>
            <div className="text-xs text-green-600 mt-1">↓ 70% faster</div>
          </div>
        </div>

        {/* Task Queue */}
        <div className="bg-card rounded-lg shadow border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">Automation Queue</h3>
              <p className="text-xs text-muted-foreground mt-1">Real-time task processing</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Auto-refresh:</span>
              <span className="text-green-600 font-semibold flex items-center gap-1">
                <span className="animate-pulse">●</span> ON
              </span>
            </div>
          </div>

          <div className="divide-y divide-border">
            {tasks.map((task, idx) => (
              <div key={idx} className="px-6 py-4 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      task.status === 'completed' ? 'bg-green-100' :
                      task.status === 'processing' ? 'bg-blue-100' :
                      'bg-yellow-100'
                    }`}>
                      {task.status === 'completed' ? <CheckCircle2 className="w-5 h-5 text-green-600" /> :
                       task.status === 'processing' ? <Clock className="w-5 h-5 text-blue-600 animate-spin" /> :
                       <AlertCircle className="w-5 h-5 text-yellow-600" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{task.id}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{task.type}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">PNR: {task.pnr}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{task.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Preview */}
        <div className="bg-card rounded-lg shadow p-6 border border-border">
          <h4 className="font-bold text-foreground mb-4">Today's Performance</h4>
          <div className="flex items-end justify-between h-32 gap-2">
            {[65, 78, 85, 92, 88, 95, 87, 90, 94, 89, 91, 88].map((height, idx) => (
              <div key={idx} className="flex-1 bg-primary/20 rounded-t hover:bg-primary/30 transition-colors animate-slide-up" style={{ height: `${height}%`, animationDelay: `${idx * 0.05}s` }}>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
};

export default AutomationMockup;
