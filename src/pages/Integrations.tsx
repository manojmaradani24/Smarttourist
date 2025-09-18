import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, Settings, Zap, AlertCircle, ExternalLink, Search } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Integrations', count: 24 },
    { id: 'payments', name: 'Payments', count: 6 },
    { id: 'logistics', name: 'Logistics', count: 5 },
    { id: 'marketing', name: 'Marketing', count: 4 },
    { id: 'accounting', name: 'Accounting', count: 3 },
    { id: 'analytics', name: 'Analytics', count: 4 },
    { id: 'marketplace', name: 'Marketplaces', count: 2 }
  ];

  const integrations = [
    {
      id: 1,
      name: 'Razorpay',
      category: 'payments',
      description: 'Accept payments online with India\'s most popular payment gateway',
      logo: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Credit/Debit Cards', 'UPI', 'Net Banking', 'Wallets'],
      pricing: '2% transaction fee',
      setup_time: '5 minutes',
      rating: 4.8,
      reviews: 15600
    },
    {
      id: 2,
      name: 'Shiprocket',
      category: 'logistics',
      description: 'Ship your products across India with 17+ courier partners',
      logo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Pan-India Delivery', 'Rate Calculator', 'Tracking', 'COD Available'],
      pricing: '₹35 per shipment',
      setup_time: '10 minutes',
      rating: 4.6,
      reviews: 8900
    },
    {
      id: 3,
      name: 'Amazon Seller Central',
      category: 'marketplace',
      description: 'Sell on Amazon India and reach millions of customers',
      logo: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: true,
      features: ['Product Listing', 'Order Management', 'FBA', 'Advertising'],
      pricing: 'Commission based',
      setup_time: '30 minutes',
      rating: 4.4,
      reviews: 12300
    },
    {
      id: 4,
      name: 'Flipkart Seller Hub',
      category: 'marketplace',
      description: 'Expand your reach with India\'s leading e-commerce platform',
      logo: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: false,
      features: ['Bulk Upload', 'Flipkart Plus', 'Advertising', 'Analytics'],
      pricing: 'Commission based',
      setup_time: '25 minutes',
      rating: 4.3,
      reviews: 9800
    },
    {
      id: 5,
      name: 'AiSensy WhatsApp',
      category: 'marketing',
      description: 'Automate WhatsApp marketing and customer support',
      logo: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: false,
      features: ['Broadcast Messages', 'Automation', 'Templates', 'Analytics'],
      pricing: '₹2000/month',
      setup_time: '15 minutes',
      rating: 4.7,
      reviews: 3400
    },
    {
      id: 6,
      name: 'Zoho Books',
      category: 'accounting',
      description: 'Manage your accounts, GST, and invoicing seamlessly',
      logo: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: false,
      features: ['GST Compliance', 'Invoicing', 'Expense Tracking', 'Reports'],
      pricing: '₹1500/month',
      setup_time: '20 minutes',
      rating: 4.5,
      reviews: 7800
    },
    {
      id: 7,
      name: 'Google Analytics',
      category: 'analytics',
      description: 'Track and analyze your website traffic and customer behavior',
      logo: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Traffic Analysis', 'Conversion Tracking', 'Audience Insights', 'Reports'],
      pricing: 'Free',
      setup_time: '10 minutes',
      rating: 4.6,
      reviews: 45600
    },
    {
      id: 8,
      name: 'Facebook Ads',
      category: 'marketing',
      description: 'Run targeted ads on Facebook and Instagram',
      logo: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: true,
      features: ['Targeted Ads', 'Pixel Tracking', 'Catalog Sync', 'ROI Tracking'],
      pricing: 'Ad spend based',
      setup_time: '15 minutes',
      rating: 4.2,
      reviews: 23400
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = activeTab === 'all' || integration.category === activeTab;
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const connectedCount = integrations.filter(i => i.connected).length;

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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Integrations</h1>
                  <p className="text-slate-600">
                    Connect your favorite tools and platforms. You have <span className="font-semibold text-indigo-600">
                    {connectedCount} integrations</span> active out of 24 available.
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Request Integration
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">{connectedCount}</div>
                  <div className="text-sm text-slate-600">Active Integrations</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-slate-600">Available Integrations</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600">96%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-amber-600">₹15,000</div>
                  <div className="text-sm text-slate-600">Monthly Savings</div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>Sort by popularity</option>
                  <option>Sort by name</option>
                  <option>Sort by category</option>
                  <option>Connected first</option>
                </select>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      activeTab === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Integrations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all hover:shadow-lg ${
                    integration.connected 
                      ? 'border-green-200 bg-green-50/30' 
                      : 'border-slate-200 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-12 h-12 rounded-lg object-cover mr-3"
                      />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-slate-900">{integration.name}</h3>
                          {integration.popular && (
                            <span className="ml-2 bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-600 capitalize">{integration.category}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {integration.connected ? (
                        <div className="flex items-center text-green-600">
                          <Check className="h-5 w-5 mr-1" />
                          <span className="text-sm font-medium">Connected</span>
                        </div>
                      ) : (
                        <AlertCircle className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm mb-4">{integration.description}</p>

                  <div className="mb-4">
                    <div className="text-xs font-medium text-slate-600 mb-2">KEY FEATURES</div>
                    <div className="flex flex-wrap gap-1">
                      {integration.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-slate-600">Pricing</div>
                      <div className="font-medium text-slate-900">{integration.pricing}</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Setup Time</div>
                      <div className="font-medium text-slate-900">{integration.setup_time}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-yellow-400 text-sm mr-1">★</div>
                      <span className="font-medium text-slate-900 text-sm">{integration.rating}</span>
                      <span className="text-slate-500 text-xs ml-1">({integration.reviews.toLocaleString()})</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Learn more
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>

                  <div className="flex space-x-3">
                    {integration.connected ? (
                      <>
                        <button className="flex-1 bg-slate-100 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm flex items-center justify-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Configure
                        </button>
                        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm">
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm flex items-center justify-center">
                        <Zap className="h-4 w-4 mr-2" />
                        Connect Now
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Integration Marketplace */}
            <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Integration?</h2>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Can't find the integration you need? Our team can build custom integrations for your business needs. 
                  Connect any API or service to SmartMerchant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Request Custom Integration
                  </button>
                  <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Integrations;