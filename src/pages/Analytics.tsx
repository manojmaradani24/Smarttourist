import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Calendar, Download, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const TravelAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const travelData = [
    { date: '2024-01-01', revenue: 45000, bookings: 89, luxury: 25000, adventure: 12000, cultural: 8000 },
    { date: '2024-01-15', revenue: 52000, bookings: 102, luxury: 28000, adventure: 15000, cultural: 9000 },
    { date: '2024-02-01', revenue: 48000, bookings: 95, luxury: 26000, adventure: 13000, cultural: 9000 },
    { date: '2024-02-15', revenue: 61000, bookings: 118, luxury: 33000, adventure: 17000, cultural: 11000 },
    { date: '2024-03-01', revenue: 55000, bookings: 108, luxury: 30000, adventure: 15000, cultural: 10000 },
    { date: '2024-03-15', revenue: 73000, bookings: 145, luxury: 40000, adventure: 20000, cultural: 13000 },
  ];

  const travelerData = [
    { segment: 'Repeat Travelers', value: 45, color: '#6366f1' },
    { segment: 'First-time Travelers', value: 35, color: '#22c55e' },
    { segment: 'Inactive Travelers', value: 20, color: '#f59e0b' },
  ];

  const destinationData = [
    { destination: 'Bali', bookings: 234, revenue: 85600 },
    { destination: 'Thailand', bookings: 198, revenue: 72300 },
    { destination: 'Europe', bookings: 156, revenue: 58900 },
    { destination: 'Dubai', bookings: 134, revenue: 49800 },
    { destination: 'Singapore', bookings: 123, revenue: 47200 },
    { destination: 'Maldives', bookings: 98, revenue: 36500 },
  ];

  const packagePerformance = [
    { package: 'Luxury Beach Resorts', sales: 156, revenue: 234000, growth: 23 },
    { package: 'Adventure Trekking', sales: 134, revenue: 156800, growth: 18 },
    { package: 'Cultural Heritage Tours', sales: 123, revenue: 89300, growth: -5 },
    { package: 'Family Vacation Packages', sales: 98, revenue: 78600, growth: 15 },
    { package: 'Honeymoon Specials', sales: 87, revenue: 67200, growth: 8 },
  ];

  const partnerData = [
    { partner: 'Luxury Hotels Chain', bookings: 45, jobsCreated: 23, satisfaction: 4.8 },
    { partner: 'Adventure Tour Guides', bookings: 38, jobsCreated: 19, satisfaction: 4.9 },
    { partner: 'Local Experience Hosts', bookings: 32, jobsCreated: 16, satisfaction: 4.7 },
    { partner: 'Transport Services', bookings: 28, jobsCreated: 14, satisfaction: 4.6 },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Travel Analytics & Insights</h1>
                  <p className="text-slate-600">
                    Comprehensive travel analytics with AI-powered insights and booking forecasts
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
                    <div className="text-sm text-slate-600">Average Booking Value</div>
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
                    <div className="text-sm text-slate-600">Local Jobs Created</div>
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

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Booking Trends</h2>
                  <div className="text-sm text-green-600 font-medium">+23% growth</div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={travelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      formatter={(value, name) => [
                        `₹${value.toLocaleString()}`, 
                        name === 'revenue' ? 'Revenue' : 'Bookings'
                      ]}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Traveler Segments</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={travelerData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {travelerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {travelerData.map((segment, index) => (
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

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Travel Category Performance</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={travelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="luxury" stackId="a" fill="#96f2d7" name="Luxury" />
                    <Bar dataKey="adventure" stackId="a" fill="#ffd43b" name="Adventure" />
                    <Bar dataKey="cultural" stackId="a" fill="#74c0fc" name="Cultural" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Popular Destinations</h2>
                <div className="space-y-4">
                  {destinationData.map((destination, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-900">{destination.destination}</div>
                        <div className="text-sm text-slate-600">{destination.bookings} bookings</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">₹{destination.revenue.toLocaleString()}</div>
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${(destination.bookings / 250) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Top Travel Packages</h2>
                <div className="space-y-4">
                  {packagePerformance.map((package_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">{package_.package}</div>
                        <div className="text-sm text-slate-600">{package_.sales} packages sold</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">₹{package_.revenue.toLocaleString()}</div>
                        <div className={`text-sm font-medium flex items-center ${
                          package_.growth > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {package_.growth > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                          {Math.abs(package_.growth)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Partner Impact</h2>
                <div className="space-y-4">
                  {partnerData.map((partner, index) => (
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
                          <div className="text-slate-600">Bookings</div>
                          <div className="font-semibold text-slate-900">{partner.bookings}</div>
                        </div>
                        <div>
                          <div className="text-slate-600">Jobs Supported</div>
                          <div className="font-semibold text-green-600">{partner.jobsCreated}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="text-sm text-slate-600 mb-1">Total Local Jobs Supported This Month</div>
                  <div className="text-2xl font-bold text-green-600">847</div>
                  <div className="text-xs text-slate-500">Across 18 travel partners worldwide</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">AI-Powered Travel Insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">🎯 Travel Season Forecast</h3>
                  <p className="text-sm text-slate-700">Summer season approaching: 150% increase in beach destination demand expected. Recommend increasing Bali packages by 200 units.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">💡 Cost Optimization</h3>
                  <p className="text-sm text-slate-700">Switch to new airline partner for Thailand routes to save ₹1,200 per booking. Potential monthly savings: ₹84,000.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-medium text-slate-900 mb-2">📈 Growth Opportunity</h3>
                  <p className="text-sm text-slate-700">European destinations show 45% higher booking rates. Consider targeted marketing campaigns for Paris and Rome packages.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TravelAnalytics;
