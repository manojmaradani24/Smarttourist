import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Factory, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  IndianRupee,
  Package,
  Truck
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const kpiData = [
    {
      title: 'Monthly Revenue',
      value: '₹2,45,680',
      change: '+45%',
      trend: 'up',
      icon: IndianRupee,
      color: 'green'
    },
    {
      title: 'Total Orders',
      value: '1,247',
      change: '+23%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'blue'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'indigo'
    },
    {
      title: 'Manufacturing Jobs',
      value: '847',
      change: '+156',
      trend: 'up',
      icon: Factory,
      color: 'purple'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 145000, orders: 89 },
    { month: 'Feb', revenue: 167000, orders: 102 },
    { month: 'Mar', revenue: 189000, orders: 115 },
    { month: 'Apr', revenue: 198000, orders: 128 },
    { month: 'May', revenue: 234000, orders: 156 },
    { month: 'Jun', revenue: 245680, orders: 167 }
  ];

  const platformData = [
    { name: 'Shopify', orders: 45, color: '#96f2d7' },
    { name: 'Amazon', orders: 38, color: '#ffd43b' },
    { name: 'Flipkart', orders: 32, color: '#74c0fc' },
    { name: 'Website', orders: 28, color: '#ffa8a8' },
    { name: 'Instagram', orders: 24, color: '#d0bfff' }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Low inventory alert: Handwoven Sarees (12 left)',
      time: '2 hours ago'
    },
    {
      type: 'info',
      message: 'GST return filing due in 3 days',
      time: '4 hours ago'
    },
    {
      type: 'success',
      message: 'New manufacturing partner added in Gujarat',
      time: '1 day ago'
    }
  ];

  const aiInsights = [
    'Diwali demand spike predicted for handicrafts category (+150% in next 2 weeks)',
    'Shipping cost optimization available: Switch to new logistics partner (Save ₹8/order)',
    'Customer retention opportunity: 247 customers haven\'t ordered in 30 days',
    'Inventory restocking recommended: Festive collection items selling 3x faster'
  ];

  const quickActions = [
    { title: 'Create Automation', description: 'Set up new workflow', color: 'indigo' },
    { title: 'Generate GST Report', description: 'Monthly compliance', color: 'green' },
    { title: 'Find Manufacturer', description: 'New product sourcing', color: 'purple' },
    { title: 'Bulk Order Update', description: 'Update order status', color: 'blue' }
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Good morning, Rahul! 🌅
              </h1>
              <p className="text-slate-600">
                Your business has created <span className="font-semibold text-indigo-600">847 manufacturing jobs</span> this month. 
                Here's your performance overview:
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {kpiData.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-${kpi.color}-100 flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 text-${kpi.color}-600`} />
                      </div>
                      <div className={`text-${kpi.color}-600 text-sm font-medium bg-${kpi.color}-50 px-2 py-1 rounded-full`}>
                        {kpi.change}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</div>
                    <div className="text-slate-600 text-sm">{kpi.title}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Revenue Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Revenue Trends</h2>
                  <div className="text-sm text-green-600 font-medium">+45% this month</div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'revenue' ? `₹${value.toLocaleString()}` : value, 
                        name === 'revenue' ? 'Revenue' : 'Orders'
                      ]}
                      labelStyle={{ color: '#1e293b' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Platform Distribution */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Orders by Platform</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="orders"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Orders']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-4 mt-4">
                  {platformData.map((platform, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: platform.color }}
                      ></div>
                      <span className="text-sm text-slate-600">{platform.name}: {platform.orders}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Real-time Alerts */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Real-time Alerts</h2>
                <div className="space-y-4">
                  {alerts.map((alert, index) => {
                    const iconMap = {
                      warning: AlertTriangle,
                      success: CheckCircle,
                      info: Clock
                    };
                    const Icon = iconMap[alert.type];
                    const colorMap = {
                      warning: 'amber',
                      success: 'green',
                      info: 'blue'
                    };
                    const color = colorMap[alert.type];
                    
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-4 w-4 text-${color}-600`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-800 mb-1">{alert.message}</p>
                          <p className="text-xs text-slate-500">{alert.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">AI Insights</h2>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                      <p className="text-sm text-slate-800">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`w-full p-4 text-left rounded-lg border border-slate-200 hover:bg-${action.color}-50 hover:border-${action.color}-200 transition-colors`}
                    >
                      <div className="font-medium text-slate-900 text-sm mb-1">{action.title}</div>
                      <div className="text-xs text-slate-600">{action.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;