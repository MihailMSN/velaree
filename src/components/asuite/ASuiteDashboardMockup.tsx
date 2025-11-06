import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  BarChart3,
  Settings,
  Search,
  Bell,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  UserPlus,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  Plus,
  Globe,
  Image as ImageIcon,
  Layout,
  Palette,
} from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const ASuiteDashboardMockup = () => {
  const [activeView, setActiveView] = useState("crm");

  // Mock data
  const revenueData = [
    { month: "Jan", revenue: 45000, bookings: 120 },
    { month: "Feb", revenue: 52000, bookings: 145 },
    { month: "Mar", revenue: 48000, bookings: 132 },
    { month: "Apr", revenue: 61000, bookings: 168 },
    { month: "May", revenue: 55000, bookings: 151 },
    { month: "Jun", revenue: 67000, bookings: 186 },
  ];

  const customerSegments = [
    { name: "Corporate", value: 35, color: "#8B5CF6" },
    { name: "Leisure", value: 45, color: "#3B82F6" },
    { name: "Group", value: 20, color: "#10B981" },
  ];

  const recentCustomers = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@company.com", bookings: 12, value: "$24,500", status: "active", joined: "2024-01-15" },
    { id: 2, name: "Michael Chen", email: "m.chen@business.com", bookings: 8, value: "$18,200", status: "active", joined: "2024-02-03" },
    { id: 3, name: "Emma Williams", email: "emma.w@corp.com", bookings: 15, value: "$32,100", status: "vip", joined: "2023-11-20" },
    { id: 4, name: "James Brown", email: "james.b@enterprise.com", bookings: 5, value: "$12,800", status: "active", joined: "2024-03-10" },
  ];

  const contentPages = [
    { id: 1, title: "Homepage", status: "published", lastEdited: "2 hours ago", views: 15234 },
    { id: 2, title: "Destinations", status: "published", lastEdited: "1 day ago", views: 8921 },
    { id: 3, title: "Special Offers", status: "draft", lastEdited: "3 hours ago", views: 0 },
    { id: 4, title: "About Us", status: "published", lastEdited: "5 days ago", views: 3456 },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border border-border overflow-hidden shadow-2xl">
      {/* Dashboard Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">aS</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">aSuite Dashboard</h3>
                <p className="text-xs text-muted-foreground">Travel Corp International</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
              />
            </div>
            <Button size="sm" variant="ghost" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground rounded-full text-[10px] flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary">JD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-64 bg-background/50 backdrop-blur-sm border-r border-border p-4 hidden md:block">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveView("crm")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "crm"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">CRM</span>
            </button>
            <button
              onClick={() => setActiveView("cms")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "cms"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">CMS</span>
            </button>
            <button
              onClick={() => setActiveView("analytics")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "analytics"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            <button
              onClick={() => setActiveView("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "settings"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </nav>

          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="text-xs font-semibold text-foreground mb-2">Quick Stats</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Users</span>
                <span className="font-semibold text-foreground">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Bookings</span>
                <span className="font-semibold text-foreground">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Revenue MTD</span>
                <span className="font-semibold text-foreground">$67K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6 bg-muted/20">
          {/* CRM View */}
          {activeView === "crm" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Customer Relationship Management</h2>
                  <p className="text-sm text-muted-foreground">Manage your customer database and interactions</p>
                </div>
                <Button className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Add Customer
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total Customers</span>
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">2,847</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12% this month</span>
                  </div>
                </Card>
                <Card className="p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Bookings</span>
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">186</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+8% this week</span>
                  </div>
                </Card>
                <Card className="p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Avg. Booking Value</span>
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">$1,842</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+5% this month</span>
                  </div>
                </Card>
                <Card className="p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">VIP Customers</span>
                    <Badge variant="secondary" className="text-xs">Premium</Badge>
                  </div>
                  <div className="text-2xl font-bold text-foreground">342</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+18% this month</span>
                  </div>
                </Card>
              </div>

              {/* Customer Table */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Recent Customers</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Contact</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Bookings</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Lifetime Value</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCustomers.map((customer) => (
                        <tr key={customer.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-xs font-semibold text-primary">
                                  {customer.name.split(" ").map(n => n[0]).join("")}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium text-foreground text-sm">{customer.name}</div>
                                <div className="text-xs text-muted-foreground">Joined {customer.joined}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{customer.email}</td>
                          <td className="py-3 px-4 text-sm font-medium text-foreground">{customer.bookings}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-foreground">{customer.value}</td>
                          <td className="py-3 px-4">
                            <Badge variant={customer.status === "vip" ? "default" : "secondary"}>
                              {customer.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Mail className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* CMS View */}
          {activeView === "cms" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Content Management System</h2>
                  <p className="text-sm text-muted-foreground">Manage your website content and media</p>
                </div>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Page
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Layout className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Pages</h4>
                      <p className="text-sm text-muted-foreground">24 published</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Media Library</h4>
                      <p className="text-sm text-muted-foreground">1,847 files</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Branding</h4>
                      <p className="text-sm text-muted-foreground">Customize theme</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Content Pages */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Content Pages</h3>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    View Site
                  </Button>
                </div>
                <div className="space-y-3">
                  {contentPages.map((page) => (
                    <div key={page.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">{page.title}</div>
                          <div className="text-xs text-muted-foreground">
                            Last edited {page.lastEdited} • {page.views.toLocaleString()} views
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={page.status === "published" ? "default" : "secondary"}>
                          {page.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Analytics View */}
          {activeView === "analytics" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Analytics & Reporting</h2>
                <p className="text-sm text-muted-foreground">Track performance across your entire platform</p>
              </div>

              {/* Revenue Chart */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Revenue & Bookings Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Segments */}
                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Customer Segments</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={customerSegments}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {customerSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-4 mt-4">
                    {customerSegments.map((segment) => (
                      <div key={segment.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                        <span className="text-sm text-muted-foreground">{segment.name} ({segment.value}%)</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Key Metrics */}
                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                        <span className="text-sm font-semibold text-foreground">18.5%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "18.5%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Customer Retention</span>
                        <span className="text-sm font-semibold text-foreground">87%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "87%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                        <span className="text-sm font-semibold text-foreground">2.4 hrs</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                        <span className="text-sm font-semibold text-foreground">4.8/5</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "96%" }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Settings View */}
          {activeView === "settings" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Platform Settings</h2>
                <p className="text-sm text-muted-foreground">Configure your aSuite environment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">White-Label Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Company Logo</label>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">TC</span>
                        </div>
                        <Button variant="outline" size="sm">Upload New</Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Primary Color</label>
                      <div className="flex gap-2">
                        <input type="color" className="w-12 h-10 rounded border border-border" defaultValue="#8B5CF6" />
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm"
                          defaultValue="#8B5CF6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Custom Domain</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm"
                        placeholder="travel.yourdomain.com"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">API Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">API Key</label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm"
                          defaultValue="sk_live_••••••••••••••••"
                        />
                        <Button variant="outline" size="sm">Copy</Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Rate Limit</label>
                      <select className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm">
                        <option>1,000 requests/hour</option>
                        <option>5,000 requests/hour</option>
                        <option>10,000 requests/hour</option>
                        <option>Unlimited</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-foreground">Webhook Notifications</div>
                        <div className="text-xs text-muted-foreground">Receive real-time updates</div>
                      </div>
                      <div className="w-10 h-6 bg-primary rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Team Management</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">JD</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">John Doe</div>
                          <div className="text-xs text-muted-foreground">Admin</div>
                        </div>
                      </div>
                      <Badge>Owner</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">AS</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">Alice Smith</div>
                          <div className="text-xs text-muted-foreground">Manager</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <UserPlus className="w-4 h-4" />
                      Invite Team Member
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-foreground">Two-Factor Authentication</div>
                        <div className="text-xs text-muted-foreground">Enhanced account security</div>
                      </div>
                      <div className="w-10 h-6 bg-primary rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-foreground">IP Whitelist</div>
                        <div className="text-xs text-muted-foreground">Restrict access by IP</div>
                      </div>
                      <div className="w-10 h-6 bg-muted/50 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-foreground">Activity Logs</div>
                        <div className="text-xs text-muted-foreground">Track all user actions</div>
                      </div>
                      <div className="w-10 h-6 bg-primary rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View Selector */}
      <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-2">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveView("crm")}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg text-xs transition-colors ${
              activeView === "crm"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>CRM</span>
          </button>
          <button
            onClick={() => setActiveView("cms")}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg text-xs transition-colors ${
              activeView === "cms"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>CMS</span>
          </button>
          <button
            onClick={() => setActiveView("analytics")}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg text-xs transition-colors ${
              activeView === "analytics"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setActiveView("settings")}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg text-xs transition-colors ${
              activeView === "settings"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ASuiteDashboardMockup;
