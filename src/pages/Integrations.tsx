import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, Settings, Zap, AlertCircle, ExternalLink, Search } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const TravelPartners = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Partners', count: 24 },
    { id: 'flights', name: 'Flights', count: 6 },
    { id: 'hotels', name: 'Hotels', count: 5 },
    { id: 'transport', name: 'Transport', count: 4 },
    { id: 'activities', name: 'Activities', count: 3 },
    { id: 'insurance', name: 'Insurance', count: 4 },
    { id: 'guides', name: 'Local Guides', count: 2 }
  ];

  const partners = [
    {
      id: 1,
      name: 'MakeMyTrip',
      category: 'flights',
      description: 'Book flights, hotels, and packages across India and international destinations',
      logo: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Flight Booking', 'Hotel Reservations', 'Holiday Packages', '24/7 Support'],
      pricing: 'Commission based',
      setup_time: '5 minutes',
      rating: 4.8,
      reviews: 15600
    },
    {
      id: 2,
      name: 'Uber Travel',
      category: 'transport',
      description: 'Seamless airport transfers and local transportation services',
      logo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Airport Transfers', 'City Rides', 'Price Estimates', 'Real-time Tracking'],
      pricing: 'Distance based',
      setup_time: '10 minutes',
      rating: 4.6,
      reviews: 8900
    },
    {
      id: 3,
      name: 'Booking.com',
      category: 'hotels',
      description: 'Access millions of hotels, resorts, and vacation rentals worldwide',
      logo: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: true,
      features: ['Hotel Booking', 'Vacation Rentals', 'Free Cancellation', 'Guest Reviews'],
      pricing: 'Commission based',
      setup_time: '30 minutes',
      rating: 4.4,
      reviews: 12300
    },
    {
      id: 4,
      name: 'Airbnb Experiences',
      category: 'activities',
      description: 'Discover unique local experiences and activities hosted by locals',
      logo: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: false,
      features: ['Local Experiences', 'Cooking Classes', 'Walking Tours', 'Cultural Activities'],
      pricing: 'Commission based',
      setup_time: '25 minutes',
      rating: 4.3,
      reviews: 9800
    },
    {
      id: 5,
      name: 'TripAdvisor',
      category: 'activities',
      description: 'Access millions of reviews and book tours, activities worldwide',
      logo: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: false,
      features: ['Tour Booking', 'Restaurant Reviews', 'Travel Forums', 'Price Comparison'],
      pricing: 'Commission based',
      setup_time: '15 minutes',
      rating: 4.7,
      reviews: 3400
    },
    {
      id: 6,
      name: 'World Nomads',
      category: 'insurance',
      description: 'Comprehensive travel insurance for international and domestic trips',
      logo: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: false,
      features: ['Trip Cancellation', 'Medical Coverage', 'Lost Luggage', '24/7 Assistance'],
      pricing: 'Trip cost based',
      setup_time: '20 minutes',
      rating: 4.5,
      reviews: 7800
    },
    {
      id: 7,
      name: 'Google Travel',
      category: 'flights',
      description: 'Smart flight and hotel search with price tracking and recommendations',
      logo: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: true,
      popular: true,
      features: ['Price Tracking', 'Flight Search', 'Hotel Deals', 'Travel Insights'],
      pricing: 'Free',
      setup_time: '10 minutes',
      rating: 4.6,
      reviews: 45600
    },
    {
      id: 8,
      name: 'Viator Tours',
      category: 'activities',
      description: 'Book tours, attractions, and experiences in destinations worldwide',
      logo: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100',
      connected: false,
      popular: true,
      features: ['Sightseeing Tours', 'Adventure Activities', 'Skip-the-Line', 'Local Guides'],
      pricing: 'Activity based',
      setup_time: '15 minutes',
      rating: 4.2,
      reviews: 23400
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = activeTab === 'all' || partner.category === activeTab;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const connectedCount = partners.filter(i => i.connected).length;

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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Travel Partners</h1>
                  <p className="text-slate-600">
                    Connect your favorite travel services and platforms. You have <span className="font-semibold text-indigo-600">
                    {connectedCount} partners</span> active out of 24 available.
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Request Partner
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">{connectedCount}</div>
                  <div className="text-sm text-slate-600">Active Partners</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-slate-600">Available Partners</div>
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

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search travel partners..."
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all hover:shadow-lg ${
                    partner.connected 
                      ? 'border-green-200 bg-green-50/30' 
                      : 'border-slate-200 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 rounded-lg object-cover mr-3"
                      />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-slate-900">{partner.name}</h3>
                          {partner.popular && (
                            <span className="ml-2 bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-600 capitalize">{partner.category}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {partner.connected ? (
                        <div className="flex items-center text-green-600">
                          <Check className="h-5 w-5 mr-1" />
                          <span className="text-sm font-medium">Connected</span>
                        </div>
                      ) : (
                        <AlertCircle className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm mb-4">{partner.description}</p>

                  <div className="mb-4">
                    <div className="text-xs font-medium text-slate-600 mb-2">KEY FEATURES</div>
                    <div className="flex flex-wrap gap-1">
                      {partner.features.map((feature, index) => (
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
                      <div className="font-medium text-slate-900">{partner.pricing}</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Setup Time</div>
                      <div className="font-medium text-slate-900">{partner.setup_time}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-yellow-400 text-sm mr-1">★</div>
                      <span className="font-medium text-slate-900 text-sm">{partner.rating}</span>
                      <span className="text-slate-500 text-xs ml-1">({partner.reviews.toLocaleString()})</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Learn more
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>

                  <div className="flex space-x-3">
                    {partner.connected ? (
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

            <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a Travel Partner?</h2>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Can't find the travel service you need? Our team can connect with new travel partners for your needs. 
                  Integrate any travel service or local provider with SmartTourist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Request Travel Partner
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

export default TravelPartners;
