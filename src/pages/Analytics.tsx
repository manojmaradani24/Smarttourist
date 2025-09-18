import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Calendar, Download, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const revenueData = [
    { date: '2024-01-01', revenue: 45000, orders: 89, shopify: 25000, amazon: 12000, flipkart: 8000 },
    { date: '2024-01-15', revenue: 52000, orders: 102, shopify: 28000, amazon: 15000, flipkart: 9000 },
    { date: '2024-02-01', revenue: 48000, orders: 95, shopify: 26000, amazon: 13000, flipkart: 9000 },
    { date: '2024-02-15', revenue: 61000, orders: 118, shopify: 33000, amazon: 17000, flipkart: 11000 },
    { date: '2024-03-01', revenue: 55000, orders: 108, shopify: 30000, amazon: 15000, flipkart: 10000 },
    { date: '2024-03-15', revenue: 73000, orders: 145, shopify: 40000, amazon: 20000, flipkart: 13000 },
  ];

  const customerData = [
    { segment: 'Returning', value: 45, color: '#6366f1' },
    { segment: 'New', value: 35, color: '#22c55e' },
    { segment: 'Dormant', value: 20, color: '#f59e0b' },
  ];

  const geographicData = [
    { state: 'Maharashtra', orders: 234, revenue: 85600 },
    { state: 'Gujarat', orders: 198, revenue: 72300 },
    { state: 'Karnataka', orders: 156, revenue: 58900 },
    { state: 'Tamil Nadu', orders: 134, revenue: 49800 },
    { state: 'Delhi', orders: 123, revenue: 47200 },
    { state: 'West Bengal', orders: 98, revenue: 36500 },
  ];

  const productPerformance = [
    { product: 'Handwoven Sarees', sales: 156, revenue: 234000, growth: 23 },
    { product: 'Brass Handicrafts', sales: 134, revenue: 156800, growth: 18 },
    { product: 'Organic Spices', sales: 123, revenue: 89300, growth: -5 },
    { product: 'Wooden Furniture', sales: 98, revenue: 78600, growth: 15 },
    { product: 'Silver Jewelry', sales: 87, revenue: 67200, growth: 8 },
  ];

  const manufacturingData = [
    { partner: 'Textile Hub Delhi', orders: 45, jobsCreated: 23, satisfaction: 4.8 },
    { partner: 'Rajasthan Crafts', orders: 38, jobsCreated: 19, satisfaction: 4.9 },
    { partner: 'Gujarat Electronics', orders: 32, jobsCreated: 16, satisfaction: 4.7 },
    { partner: 'Maharashtra Foods', orders: 28, jobsCreated: 14, satisfaction: 4.6 },
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
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics & Insights</h1>
                  <p className="text-slate-600">
                    Unified analytics across all platforms with AI-powered insights and forecasting
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select 
                    value={timeRange} 
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                    <option value="1y">Last year</option>
                  </select>
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Total Revenue</div>
                    <div className="flex items-center text-green-600 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +23%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹3,45,680</div>
                  <div className="text-xs text-slate-500 mt-1">vs last month</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Average Order Value</div>
                    <div className="flex items-center text-green-600 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +8%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹2,780</div>
                  <div className="text-xs text-slate-500 mt-1">vs last month</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Conversion Rate</div>
                    <div className="flex items-center text-red-600 text-sm">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      -0.3%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">3.2%</div>
                  <div className="text-xs text-slate-500 mt-1">vs last month</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Manufacturing Jobs</div>
                    <div className="flex items-center text-green-600 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +156
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">1,247</div>
                  <div className="text-xs text-slate-500 mt-1">this month</div>
                </div>
              </div>
            </div>

            {/* Revenue Trends */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Revenue Trends</h2>
                  <div className="text-sm text-green-600 font-medium">+23% growth</div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      formatter={(value, name) => [
                        `₹${value.toLocaleString()}`, 
                        name === 'revenue' ? 'Revenue' : 'Orders'
                      ]}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Customer Segments</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={customerData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {customerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {customerData.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-sm text-slate-700">{segment.segment}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">{segment.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Performance */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Platform Performance</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="shopify" stackId="a" fill="#96f2d7" name="Shopify" />
                    <Bar dataKey="amazon" stackId="a" fill="#ffd43b" name="Amazon" />
                    <Bar dataKey="flipkart" stackId="a" fill="#74c0fc" name="Flipkart" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Geographic Distribution</h2>
                <div className="space-y-4">
                  {geographicData.map((state, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-900">{state.state}</div>
                        <div className="text-sm text-slate-600">{state.orders} orders</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">₹{state.revenue.toLocaleString()}</div>
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${(state.orders / 250) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Performance & Manufacturing */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Top Products</h2>
                <div className="space-y-4">
                  {productPerformance.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">{product.product}</div>
                        <div className="text-sm text-slate-600">{product.sales} units sold</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">₹{product.revenue.toLocaleString()}</div>
                        <div className={`text-sm font-medium flex items-center ${
                          product.growth > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.growth > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                          {Math.abs(product.growth)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Manufacturing Impact</h2>
                <div className="space-y-4">
                  {manufacturingData.map((partner, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-slate-900">{partner.partner}</div>
                        <div className="flex items-center text-yellow-500">
                          <span className="text-sm font-medium mr-1">{partner.satisfaction}</span>
                          <span className="text-yellow-400">★</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-slate-600">Orders</div>
                          <div className="font-semibold text-slate-900">{partner.orders}</div>
                        </div>
                        <div>
                          <div className="text-slate-600">Jobs Created</div>
                          <div className="font-semibold text-green-600">{partner.jobsCreated}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="text-sm text-slate-600 mb-1">Total Jobs Created This Month</div>
                  <div className="text-2xl font-bold text-green-600">847</div>
                  <div className="text-xs text-slate-500">Across 18 manufacturing partners</div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">AI-Powered Insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">🎯 Demand Forecast</h3>
                  <p className="text-sm text-slate-700">Diwali season approaching: 150% increase in handicrafts demand expected. Recommend increasing inventory by 200 units.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">💡 Cost Optimization</h3>
                  <p className="text-sm text-slate-700">Switch to new logistics partner in Maharashtra region to save ₹12 per shipment. Potential monthly savings: ₹8,400.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">📈 Growth Opportunity</h3>
                  <p className="text-sm text-slate-700">Tamil Nadu shows 45% higher conversion rates. Consider targeted marketing campaigns in Chennai and Coimbatore.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;