// File: src/pages/DeveloperPortal.tsx
import React, { useState } from 'react';
import { DeveloperLayout } from '../components/layouts/DeveloperLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Code, Terminal, Package, TrendingUp, Users, BookOpen, Download, Eye, Star } from 'lucide-react';

const DeveloperPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    { name: 'GST API', endpoints: 12, usage: '1.2M calls/month', status: 'Live' },
    { name: 'PMKVY API', endpoints: 8, usage: '850K calls/month', status: 'Live' },
    { name: 'E-commerce API', endpoints: 15, usage: '2.1M calls/month', status: 'Live' },
    { name: 'Payment API', endpoints: 6, usage: '3.5M calls/month', status: 'Live' },
  ];

  const marketplaceItems = [
    { name: 'E-commerce Theme Pro', rating: 4.8, sales: 1240, price: '₹4,999' },
    { name: 'Inventory Dashboard', rating: 4.6, sales: 890, price: '₹3,499' },
    { name: 'GST Automation Plugin', rating: 4.9, sales: 2100, price: '₹2,999' },
    { name: 'AI Analytics Suite', rating: 4.7, sales: 1560, price: '₹5,999' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, growth: 12 },
    { month: 'Feb', revenue: 52000, growth: 15 },
    { month: 'Mar', revenue: 61000, growth: 17 },
    { month: 'Apr', revenue: 73000, growth: 20 },
  ];

  return (
    <DeveloperLayout>
      <div className="space-y-8">
        {/* Header with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹73,000</p>
                  <p className="text-sm text-green-600">+20% from last month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">12,458</p>
                  <p className="text-sm text-green-600">+8% from last month</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">API Calls</p>
                  <p className="text-2xl font-bold text-gray-900">7.6M</p>
                  <p className="text-sm text-green-600">+15% from last month</p>
                </div>
                <Code className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Products</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-green-600">+2 this quarter</p>
                </div>
                <Package className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Documentation Section */}
        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
            <CardDescription>Explore our comprehensive API endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiEndpoints.map((api, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{api.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {api.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Endpoints: {api.endpoints}</p>
                    <p>Usage: {api.usage}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <Eye className="w-4 h-4 mr-1" />
                      View Docs
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      SDK
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Marketplace Section */}
        <Card>
          <CardHeader>
            <CardTitle>Marketplace Performance</CardTitle>
            <CardDescription>Your products in the SmartMerchant marketplace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketplaceItems.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Total Sales: {item.sales}</p>
                    <p>Price: {item.price}</p>
                    <p>Estimated Revenue: ₹{(item.sales * parseInt(item.price.replace('₹', '').replace(',', ''))).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      Analytics
                    </Button>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Monthly revenue growth and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {revenueData.map((month, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">₹{month.revenue.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{month.month}</div>
                    <div className="text-sm text-green-600">+{month.growth}%</div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Revenue Growth</span>
                  <span className="text-sm text-green-600">+16% average</span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Developer Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 flex flex-col items-center py-4">
                <Terminal className="w-6 h-6 mb-2" />
                <span>Sandbox</span>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 flex flex-col items-center py-4">
                <Code className="w-6 h-6 mb-2" />
                <span>API Docs</span>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 flex flex-col items-center py-4">
                <Package className="w-6 h-6 mb-2" />
                <span>Marketplace</span>
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 flex flex-col items-center py-4">
                <BookOpen className="w-6 h-6 mb-2" />
                <span>Tutorials</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DeveloperLayout>
  );
};

export default DeveloperPortal;