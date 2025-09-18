import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Truck, Award, Filter, Search, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ManufacturingHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 547 },
    { id: 'textiles', name: 'Textiles & Apparel', count: 156 },
    { id: 'handicrafts', name: 'Handicrafts', count: 98 },
    { id: 'electronics', name: 'Electronics', count: 87 },
    { id: 'food', name: 'Food Processing', count: 76 },
    { id: 'jewelry', name: 'Jewelry', count: 54 },
    { id: 'furniture', name: 'Furniture', count: 43 },
    { id: 'cosmetics', name: 'Cosmetics', count: 33 }
  ];

  const states = [
    { id: 'all', name: 'All States' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'gujarat', name: 'Gujarat' },
    { id: 'tamil-nadu', name: 'Tamil Nadu' },
    { id: 'rajasthan', name: 'Rajasthan' },
    { id: 'karnataka', name: 'Karnataka' },
    { id: 'west-bengal', name: 'West Bengal' }
  ];

  const manufacturers = [
    {
      id: 1,
      name: 'Textile Hub Delhi',
      category: 'Textiles & Apparel',
      location: 'New Delhi, Delhi',
      rating: 4.8,
      reviews: 127,
      capacity: '10,000 units/month',
      minOrder: '500 pieces',
      jobsCreated: 150,
      certifications: ['ISO 9001', 'GOTS', 'Oeko-Tex'],
      specialties: ['Cotton garments', 'Sustainable fabrics', 'Custom designs'],
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300',
      sustainable: true,
      verified: true
    },
    {
      id: 2,
      name: 'Rajasthani Handicrafts Co.',
      category: 'Handicrafts',
      location: 'Jaipur, Rajasthan',
      rating: 4.9,
      reviews: 89,
      capacity: '5,000 pieces/month',
      minOrder: '100 pieces',
      jobsCreated: 85,
      certifications: ['Handicrafts Export', 'GI Tag'],
      specialties: ['Blue pottery', 'Block printing', 'Metal crafts'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300',
      sustainable: true,
      verified: true
    },
    {
      id: 3,
      name: 'Tech Manufacturing Gujarat',
      category: 'Electronics',
      location: 'Ahmedabad, Gujarat',
      rating: 4.7,
      reviews: 156,
      capacity: '15,000 units/month',
      minOrder: '1000 pieces',
      jobsCreated: 220,
      certifications: ['ISO 14001', 'CE', 'FCC'],
      specialties: ['Consumer electronics', 'IoT devices', 'Mobile accessories'],
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=300',
      sustainable: false,
      verified: true
    },
    {
      id: 4,
      name: 'Organic Foods Maharashtra',
      category: 'Food Processing',
      location: 'Pune, Maharashtra',
      rating: 4.6,
      reviews: 73,
      capacity: '8,000 kg/month',
      minOrder: '200 kg',
      jobsCreated: 65,
      certifications: ['FSSAI', 'Organic India', 'HACCP'],
      specialties: ['Organic spices', 'Health foods', 'Custom packaging'],
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=300',
      sustainable: true,
      verified: true
    },
    {
      id: 5,
      name: 'Artisan Jewelry Collective',
      category: 'Jewelry',
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      reviews: 94,
      capacity: '2,000 pieces/month',
      minOrder: '50 pieces',
      jobsCreated: 45,
      certifications: ['BIS Hallmark', 'Export Quality'],
      specialties: ['Temple jewelry', 'Contemporary designs', 'Custom orders'],
      image: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=300',
      sustainable: true,
      verified: true
    }
  ];

  const filteredManufacturers = manufacturers.filter(manufacturer => {
    const categoryMatch = selectedCategory === 'all' || manufacturer.category.toLowerCase().includes(selectedCategory);
    const stateMatch = selectedState === 'all' || manufacturer.location.toLowerCase().includes(selectedState.replace('-', ' '));
    return categoryMatch && stateMatch;
  });

  const jobsCreatedTotal = manufacturers.reduce((total, manufacturer) => total + manufacturer.jobsCreated, 0);

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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Manufacturing Hub Network</h1>
                  <p className="text-slate-600">
                    Connect with 500+ verified manufacturers across India. <span className="font-semibold text-green-600">
                    {jobsCreatedTotal.toLocaleString()} jobs created</span> through our platform this month.
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Add New Partner
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">547</div>
                  <div className="text-sm text-slate-600">Total Partners</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">{jobsCreatedTotal.toLocaleString()}</div>
                  <div className="text-sm text-slate-600">Jobs Created</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600">18</div>
                  <div className="text-sm text-slate-600">States Covered</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-amber-600">4.7</div>
                  <div className="text-sm text-slate-600">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-6">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 text-slate-600 mr-2" />
                    <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Search manufacturers..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium text-slate-800 mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.id} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-slate-700 flex-1">{category.name}</span>
                          <span className="text-xs text-slate-500">({category.count})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* State Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium text-slate-800 mb-3">State</h3>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                    >
                      {states.map((state) => (
                        <option key={state.id} value={state.id}>{state.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Filters */}
                  <div>
                    <h3 className="font-medium text-slate-800 mb-3">Certifications</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">ISO Certified</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Sustainable</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Export Quality</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturers Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {filteredManufacturers.length} Manufacturers Found
                  </h2>
                  <select className="p-2 border border-slate-300 rounded-lg text-sm">
                    <option>Sort by Rating</option>
                    <option>Sort by Jobs Created</option>
                    <option>Sort by Capacity</option>
                    <option>Sort by Location</option>
                  </select>
                </div>

                <div className="grid gap-6">
                  {filteredManufacturers.map((manufacturer, index) => (
                    <motion.div
                      key={manufacturer.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Image */}
                          <div className="lg:w-48 h-32 lg:h-auto">
                            <img
                              src={manufacturer.image}
                              alt={manufacturer.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center mb-2">
                                  <h3 className="text-xl font-semibold text-slate-900 mr-2">{manufacturer.name}</h3>
                                  {manufacturer.verified && (
                                    <Award className="h-5 w-5 text-green-500" />
                                  )}
                                  {manufacturer.sustainable && (
                                    <div className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                                      Sustainable
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center text-slate-600 text-sm mb-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {manufacturer.location}
                                </div>
                                <div className="text-sm text-slate-600">{manufacturer.category}</div>
                              </div>
                              
                              <div className="text-right">
                                <div className="flex items-center mb-1">
                                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                  <span className="font-medium">{manufacturer.rating}</span>
                                  <span className="text-slate-500 text-sm ml-1">({manufacturer.reviews})</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  <Users className="h-4 w-4 inline mr-1" />
                                  {manufacturer.jobsCreated} jobs created
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm text-slate-600 mb-1">Production Capacity</div>
                                <div className="font-medium text-slate-900">{manufacturer.capacity}</div>
                              </div>
                              <div>
                                <div className="text-sm text-slate-600 mb-1">Minimum Order</div>
                                <div className="font-medium text-slate-900">{manufacturer.minOrder}</div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-sm text-slate-600 mb-2">Specialties</div>
                              <div className="flex flex-wrap gap-2">
                                {manufacturer.specialties.map((specialty, index) => (
                                  <span
                                    key={index}
                                    className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-sm text-slate-600 mb-2">Certifications</div>
                              <div className="flex flex-wrap gap-2">
                                {manufacturer.certifications.map((cert, index) => (
                                  <span
                                    key={index}
                                    className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full"
                                  >
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                                Request Quote
                              </button>
                              <button className="flex items-center text-slate-600 hover:text-slate-900">
                                <Phone className="h-4 w-4 mr-1" />
                                Contact
                              </button>
                              <button className="flex items-center text-slate-600 hover:text-slate-900">
                                <Mail className="h-4 w-4 mr-1" />
                                Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                    Load More Manufacturers
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

export default ManufacturingHub;