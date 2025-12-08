import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar, Award, Filter, Search, Phone, Mail, Heart } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SmartTraveller = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Destinations', count: 247 },
    { id: 'beach', name: 'Beach Getaways', count: 56 },
    { id: 'mountain', name: 'Mountain Retreats', count: 48 },
    { id: 'cultural', name: 'Cultural Heritage', count: 67 },
    { id: 'adventure', name: 'Adventure Sports', count: 34 },
    { id: 'wildlife', name: 'Wildlife Safari', count: 29 },
    { id: 'spiritual', name: 'Spiritual Journeys', count: 42 },
    { id: 'luxury', name: 'Luxury Resorts', count: 38 }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'asia', name: 'Southeast Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'Americas' },
    { id: 'middle-east', name: 'Middle East' },
    { id: 'oceania', name: 'Oceania' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Bali Tropical Paradise',
      category: 'Beach Getaways',
      location: 'Bali, Indonesia',
      rating: 4.8,
      reviews: 127,
      bestSeason: 'April - October',
      priceRange: '$$',
      travelers: 150,
      highlights: ['White sand beaches', 'Ancient temples', 'Rice terraces', 'Vibrant culture'],
      activities: ['Surfing', 'Temple tours', 'Spa treatments', 'Local cuisine'],
      image: 'https://images.pexels.com/photos/2499785/pexels-photo-2499785.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: true,
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: 'Swiss Alpine Retreat',
      category: 'Mountain Retreats',
      location: 'Swiss Alps, Switzerland',
      rating: 4.9,
      reviews: 89,
      bestSeason: 'December - March',
      priceRange: '$$$',
      travelers: 85,
      highlights: ['Snow-capped peaks', 'Alpine lakes', 'Charming villages', 'Winter sports'],
      activities: ['Skiing', 'Hiking', 'Cable car rides', 'Chocolate tasting'],
      image: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: true,
      verified: true,
      featured: true
    },
    {
      id: 3,
      name: 'Safari Adventure Kenya',
      category: 'Wildlife Safari',
      location: 'Maasai Mara, Kenya',
      rating: 4.7,
      reviews: 156,
      bestSeason: 'July - October',
      priceRange: '$$',
      travelers: 220,
      highlights: ['Big Five wildlife', 'Great Migration', 'Maasai culture', 'Sunset safaris'],
      activities: ['Game drives', 'Hot air balloon', 'Cultural visits', 'Photography'],
      image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: false,
      verified: true,
      featured: false
    },
    {
      id: 4,
      name: 'Kyoto Cultural Journey',
      category: 'Cultural Heritage',
      location: 'Kyoto, Japan',
      rating: 4.6,
      reviews: 73,
      bestSeason: 'March - May, October - November',
      priceRange: '$$',
      travelers: 65,
      highlights: ['Ancient temples', 'Traditional gardens', 'Geisha districts', 'Cherry blossoms'],
      activities: ['Temple visits', 'Tea ceremonies', 'Kimono experience', 'Local markets'],
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: true,
      verified: true,
      featured: true
    },
    {
      id: 5,
      name: 'Santorini Luxury Escape',
      category: 'Luxury Resorts',
      location: 'Santorini, Greece',
      rating: 4.8,
      reviews: 94,
      bestSeason: 'April - October',
      priceRange: '$$$',
      travelers: 45,
      highlights: ['Caldera views', 'White architecture', 'Sunset spots', 'Wine tasting'],
      activities: ['Boat tours', 'Wine tasting', 'Sunset viewing', 'Beach clubs'],
      image: 'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: true,
      verified: true,
      featured: false
    },
    {
      id: 6,
      name: 'New Zealand Adventure',
      category: 'Adventure Sports',
      location: 'Queenstown, New Zealand',
      rating: 4.9,
      reviews: 112,
      bestSeason: 'September - April',
      priceRange: '$$',
      travelers: 180,
      highlights: ['Extreme sports', 'Fiordland', 'Lord of the Rings', 'Glaciers'],
      activities: ['Bungee jumping', 'Skydiving', 'Hiking', 'Jet boating'],
      image: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600',
      sustainable: true,
      verified: true,
      featured: true
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const categoryMatch = selectedCategory === 'all' || destination.category.toLowerCase().includes(selectedCategory);
    const regionMatch = selectedRegion === 'all' || destination.location.toLowerCase().includes(selectedRegion);
    return categoryMatch && regionMatch;
  });

  const travelersTotal = destinations.reduce((total, destination) => total + destination.travelers, 0);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Smart Traveller Destinations</h1>
                  <p className="text-slate-600">
                    Discover 200+ handpicked travel destinations worldwide. <span className="font-semibold text-green-600">
                    {travelersTotal.toLocaleString()} travelers</span> booked through our platform this month.
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Add New Destination
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">247</div>
                  <div className="text-sm text-slate-600">Total Destinations</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">{travelersTotal.toLocaleString()}</div>
                  <div className="text-sm text-slate-600">Happy Travelers</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600">68</div>
                  <div className="text-sm text-slate-600">Countries Covered</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-amber-600">4.8</div>
                  <div className="text-sm text-slate-600">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-6">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 text-slate-600 mr-2" />
                    <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                  </div>

                  <div className="mb-6">
                    <div className="relative">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Search destinations..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium text-slate-800 mb-3">Travel Categories</h3>
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

                  <div className="mb-6">
                    <h3 className="font-medium text-slate-800 mb-3">Region</h3>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                    >
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-800 mb-3">Travel Preferences</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Eco-Friendly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Family Friendly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Luxury</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-slate-700">Adventure</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {filteredDestinations.length} Destinations Found
                  </h2>
                  <select className="p-2 border border-slate-300 rounded-lg text-sm">
                    <option>Sort by Rating</option>
                    <option>Sort by Popularity</option>
                    <option>Sort by Price</option>
                    <option>Sort by Season</option>
                  </select>
                </div>

                <div className="grid gap-6">
                  {filteredDestinations.map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">

                          <div className="lg:w-64 h-48 lg:h-auto relative">
                            <img
                              src={destination.image}
                              alt={destination.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            {destination.featured && (
                              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                Featured
                              </div>
                            )}
                            <button 
                              onClick={() => toggleFavorite(destination.id)}
                              className="absolute top-3 right-3 p-1 bg-white rounded-full shadow-md hover:bg-red-50"
                            >
                              <Heart 
                                className={`h-5 w-5 ${
                                  favorites.includes(destination.id) 
                                    ? 'text-red-500 fill-red-500' 
                                    : 'text-gray-400'
                                }`} 
                              />
                            </button>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center mb-2">
                                  <h3 className="text-xl font-semibold text-slate-900 mr-2">{destination.name}</h3>
                                  {destination.verified && (
                                    <Award className="h-5 w-5 text-green-500" />
                                  )}
                                  {destination.sustainable && (
                                    <div className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                                      Eco-Friendly
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center text-slate-600 text-sm mb-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {destination.location}
                                </div>
                                <div className="text-sm text-slate-600">{destination.category}</div>
                              </div>
                              
                              <div className="text-right">
                                <div className="flex items-center mb-1">
                                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                  <span className="font-medium">{destination.rating}</span>
                                  <span className="text-slate-500 text-sm ml-1">({destination.reviews})</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  <Users className="h-4 w-4 inline mr-1" />
                                  {destination.travelers} travelers
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm text-slate-600 mb-1">Best Season</div>
                                <div className="font-medium text-slate-900 flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {destination.bestSeason}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-slate-600 mb-1">Price Range</div>
                                <div className="font-medium text-slate-900">{destination.priceRange}</div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-sm text-slate-600 mb-2">Destination Highlights</div>
                              <div className="flex flex-wrap gap-2">
                                {destination.highlights.map((highlight, index) => (
                                  <span
                                    key={index}
                                    className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-sm text-slate-600 mb-2">Popular Activities</div>
                              <div className="flex flex-wrap gap-2">
                                {destination.activities.map((activity, index) => (
                                  <span
                                    key={index}
                                    className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full"
                                  >
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                                Book Now
                              </button>
                              <button className="flex items-center text-slate-600 hover:text-slate-900">
                                <Phone className="h-4 w-4 mr-1" />
                                Call Guide
                              </button>
                              <button className="flex items-center text-slate-600 hover:text-slate-900">
                                <Mail className="h-4 w-4 mr-1" />
                                Get Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                    Load More Destinations
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

export default SmartTraveller;
