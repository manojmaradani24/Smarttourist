import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Palette, Type, Image, Map, Eye, Save, ChevronDown, ChevronUp, Star, Users, Shield, Clock, Calendar, Navigation, Utensils, Hotel, Landmark, Camera, Wifi, Car, Heart, Plane, Luggage, Compass, Globe, Mountain, Sun, Moon, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const TouristBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [showMoreTemplates, setShowMoreTemplates] = useState(false);
  const [showMoreComponents, setShowMoreComponents] = useState(false);
  const [activeTab, setActiveTab] = useState('itinerary');

  const templates = [
    {
      name: 'Adventure Seeker',
      category: 'Active Travel',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#1f2937', '#ffffff', '#f59e0b']
    },
    {
      name: 'Cultural Explorer',
      category: 'Heritage',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#dc2626', '#ffffff', '#fbbf24']
    },
    {
      name: 'Luxury Traveler',
      category: 'Premium',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#1e40af', '#ffffff', '#10b981']
    },
    {
      name: 'Beach Lover',
      category: 'Relaxation',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#0ea5e9', '#ffffff', '#f59e0b']
    },
    {
      name: 'Mountain Trekker',
      category: 'Adventure',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#059669', '#ffffff', '#f59e0b']
    },
    {
      name: 'City Tourist',
      category: 'Urban',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#4f46e5', '#ffffff', '#f59e0b']
    }
  ];

  const components = [
    { name: 'Trip Header', icon: Type, category: 'Layout' },
    { name: 'Travel Itinerary', icon: Calendar, category: 'Planning' },
    { name: 'Destination Map', icon: MapPin, category: 'Navigation' },
    { name: 'Photo Gallery', icon: Camera, category: 'Memories' },
    { name: 'Travel Tips', icon: Compass, category: 'Guide' },
    { name: 'Budget Tracker', icon: Save, category: 'Finance' },
    { name: 'Packing List', icon: Luggage, category: 'Preparation' },
    { name: 'Local Contacts', icon: Users, category: 'Support' },
    { name: 'Weather Forecast', icon: Sun, category: 'Planning' },
    { name: 'Emergency Info', icon: Shield, category: 'Safety' }
  ];

  const touristProfile = {
    name: "Sarah Johnson",
    type: "Adventure Traveler",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Expert Explorer",
    trips: 24,
    countries: 15,
    badges: ["Mountain Climber", "Foodie", "Photographer", "Cultural Enthusiast"]
  };

  const currentTrip = {
    destination: "Bali, Indonesia",
    duration: "5 Days 4 Nights",
    dates: "Nov 15-20, 2024",
    budget: "₹12,999",
    status: "Upcoming",
    companions: 2
  };

  const travelChecklist = [
    { task: "Book flights", completed: true },
    { task: "Hotel reservation", completed: true },
    { task: "Travel insurance", completed: true },
    { task: "Visa application", completed: false },
    { task: "Vaccinations", completed: true },
    { task: "Currency exchange", completed: false },
    { task: "SIM card purchase", completed: false },
    { task: "Download offline maps", completed: false }
  ];

  const visibleTemplates = showMoreTemplates ? templates : templates.slice(0, 3);
  const visibleComponents = showMoreComponents ? components : components.slice(0, 5);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        
        <div className="flex-1 flex">
          <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Tourist Travel Planner</h2>
              
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                <div className="flex items-center mb-3">
                  <img 
                    src={touristProfile.avatar} 
                    alt={touristProfile.name}
                    className="w-12 h-12 rounded-full border-2 border-white mr-3"
                  />
                  <div>
                    <div className="font-bold">{touristProfile.name}</div>
                    <div className="text-blue-100 text-sm">{touristProfile.type}</div>
                  </div>
                </div>
                <div className="flex justify-between text-center text-sm">
                  <div>
                    <div className="font-bold">{touristProfile.trips}</div>
                    <div className="text-blue-100">Trips</div>
                  </div>
                  <div>
                    <div className="font-bold">{touristProfile.countries}</div>
                    <div className="text-blue-100">Countries</div>
                  </div>
                  <div>
                    <div className="font-bold">{touristProfile.badges.length}</div>
                    <div className="text-blue-100">Badges</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-slate-800">Travel Style Templates</h3>
                  <button
                    onClick={() => setShowMoreTemplates(!showMoreTemplates)}
                    className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
                  >
                    {showMoreTemplates ? (
                      <>
                        Show Less <ChevronUp className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-4">
                  {visibleTemplates.map((template, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedTemplate === index
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedTemplate(index)}
                    >
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <div className="font-medium text-slate-900 text-sm mb-1">{template.name}</div>
                      <div className="text-xs text-slate-600 mb-2">{template.category}</div>
                      <div className="flex space-x-1">
                        {template.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-slate-800">Travel Planner Components</h3>
                  <button
                    onClick={() => setShowMoreComponents(!showMoreComponents)}
                    className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center"
                  >
                    {showMoreComponents ? (
                      <>
                        Show Less <ChevronUp className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-2">
                  {visibleComponents.map((component, index) => {
                    const Icon = component.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center p-3 border border-slate-200 rounded-lg cursor-move hover:bg-slate-50"
                        draggable
                      >
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm">{component.name}</div>
                          <div className="text-xs text-slate-500">{component.category}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`p-2 rounded-md ${previewMode === 'desktop' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <Monitor className="h-4 w-4 text-slate-600" />
                  </button>
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`p-2 rounded-md ${previewMode === 'mobile' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <Smartphone className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
                
                <div className="text-sm text-slate-600">
                  Planning: <span className="font-medium">{templates[selectedTemplate].name} Trip</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Trip
                </button>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Travel Plan
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-100 p-8 overflow-auto">
              <div className={`mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${previewMode === 'mobile' ? 'max-w-sm' : 'max-w-6xl'}`}>
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-bold">MyTravelPlanner</h1>
                      <p className="text-blue-100">Your Personal Travel Companion</p>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="hover:text-blue-200">Dashboard</a>
                      <a href="#" className="hover:text-blue-200">Trips</a>
                      <a href="#" className="hover:text-blue-200">Destinations</a>
                      <a href="#" className="hover:text-blue-200">Profile</a>
                    </nav>
                  </div>
                </div>

                <div className="p-8 bg-white border-b border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">Bali Adventure Trip</h2>
                      <p className="text-slate-600">November 15-20, 2024 • 2 Travelers</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                      {currentTrip.status}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-6 mb-6">
                    {[
                      { icon: MapPin, label: 'Destination', value: currentTrip.destination },
                      { icon: Calendar, label: 'Duration', value: currentTrip.duration },
                      { icon: Users, label: 'Travelers', value: `${currentTrip.companions} people` },
                      { icon: Save, label: 'Budget', value: currentTrip.budget }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                          <Icon className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                          <div className="text-sm text-slate-600">{item.label}</div>
                          <div className="font-semibold text-slate-900">{item.value}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                      <span>Trip Preparation Progress</span>
                      <span>{Math.round((travelChecklist.filter(item => item.completed).length / travelChecklist.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(travelChecklist.filter(item => item.completed).length / travelChecklist.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-slate-200">
                  <div className="flex overflow-x-auto">
                    {[
                      { id: 'itinerary', label: 'Itinerary', icon: Calendar },
                      { id: 'map', label: 'Travel Map', icon: Map },
                      { id: 'checklist', label: 'Checklist', icon: Luggage },
                      { id: 'budget', label: 'Budget', icon: Save },
                      { id: 'photos', label: 'Photos', icon: Camera },
                      { id: 'notes', label: 'Travel Notes', icon: Type }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === tab.id
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-8">
                  {activeTab === 'itinerary' && (
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">Daily Itinerary</h3>
                      <div className="space-y-6">
                        {[
                          {
                            day: 1,
                            title: "Arrival in Bali",
                            date: "Nov 15, 2024",
                            activities: [
                              { time: "14:00", activity: "Arrive at Ngurah Rai Airport", icon: Plane },
                              { time: "15:30", activity: "Transfer to Seminyak hotel", icon: Car },
                              { time: "17:00", activity: "Check into Alila Seminyak", icon: Hotel },
                              { time: "19:00", activity: "Dinner at La Plancha Beach Club", icon: Utensils }
                            ]
                          },
                          {
                            day: 2,
                            title: "Ubud Cultural Day",
                            date: "Nov 16, 2024",
                            activities: [
                              { time: "08:00", activity: "Breakfast with rice terrace view", icon: Utensils },
                              { time: "10:00", activity: "Sacred Monkey Forest visit", icon: Landmark },
                              { time: "13:00", activity: "Traditional Balinese cooking class", icon: Utensils },
                              { time: "16:00", activity: "Tegalalang Rice Terraces", icon: Camera },
                              { time: "19:30", activity: "Traditional dance performance", icon: Users }
                            ]
                          },
                          {
                            day: 3,
                            title: "Temples & Sunsets",
                            date: "Nov 17, 2024",
                            activities: [
                              { time: "07:00", activity: "Sunrise at Mount Batur", icon: Mountain },
                              { time: "11:00", activity: "Visit Ulun Danu Temple", icon: Landmark },
                              { time: "14:00", activity: "Lunch by Lake Bratan", icon: Utensils },
                              { time: "17:00", activity: "Tanah Lot Temple sunset", icon: Sun },
                              { time: "19:00", activity: "Seafood dinner at Jimbaran Bay", icon: Utensils }
                            ]
                          }
                        ].map((day, index) => (
                          <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xl font-bold">Day {day.day}: {day.title}</h4>
                                <div className="text-blue-100">{day.date}</div>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="space-y-4">
                                {day.activities.map((activity, activityIndex) => {
                                  const Icon = activity.icon;
                                  return (
                                    <div key={activityIndex} className="flex items-center p-3 bg-slate-50 rounded-lg">
                                      <div className="w-16 text-sm font-medium text-slate-600">{activity.time}</div>
                                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                                        <Icon className="h-4 w-4 text-indigo-600" />
                                      </div>
                                      <div className="flex-1 text-slate-800">{activity.activity}</div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'checklist' && (
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">Travel Checklist</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4">Pre-Trip Preparation</h4>
                          <div className="space-y-3">
                            {travelChecklist.map((item, index) => (
                              <div key={index} className="flex items-center p-3 border border-slate-200 rounded-lg">
                                <input
                                  type="checkbox"
                                  checked={item.completed}
                                  onChange={() => {}}
                                  className="h-5 w-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                                />
                                <span className={`ml-3 ${item.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                                  {item.task}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4">Packing List</h4>
                          <div className="space-y-3">
                            {[
                              "Passport & Documents",
                              "Travel Adapter",
                              "Beach Wear",
                              "Hiking Shoes",
                              "Camera & Accessories",
                              "First Aid Kit",
                              "Sunscreen & Mosquito Repellent",
                              "Light Jacket"
                            ].map((item, index) => (
                              <div key={index} className="flex items-center p-3 border border-slate-200 rounded-lg">
                                <input
                                  type="checkbox"
                                  className="h-5 w-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                                />
                                <span className="ml-3 text-slate-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'budget' && (
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">Travel Budget</h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                          { category: "Flights", amount: "₹25,000", spent: "₹25,000", color: "bg-blue-500" },
                          { category: "Accommodation", amount: "₹20,000", spent: "₹20,000", color: "bg-green-500" },
                          { category: "Activities", amount: "₹15,000", spent: "₹8,000", color: "bg-purple-500" },
                          { category: "Food", amount: "₹10,000", spent: "₹0", color: "bg-yellow-500" },
                          { category: "Transport", amount: "₹8,000", spent: "₹0", color: "bg-red-500" },
                          { category: "Shopping", amount: "₹5,000", spent: "₹0", color: "bg-indigo-500" }
                        ].map((item, index) => (
                          <div key={index} className="p-4 border border-slate-200 rounded-xl">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-semibold text-slate-900">{item.category}</div>
                                <div className="text-sm text-slate-600">Budget: {item.amount}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-slate-900">{item.spent}</div>
                                <div className="text-sm text-slate-600">Spent</div>
                              </div>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${item.color} transition-all duration-300`}
                                style={{ width: item.spent === "₹0" ? '0%' : '50%' }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-slate-600">Total Budget</div>
                            <div className="text-2xl font-bold text-slate-900">₹83,000</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-600">Amount Spent</div>
                            <div className="text-2xl font-bold text-green-600">₹53,000</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-600">Remaining</div>
                            <div className="text-2xl font-bold text-blue-600">₹30,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 bg-slate-50 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Essential Travel Tips</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: Globe, title: "Local Customs", description: "Dress modestly when visiting temples" },
                      { icon: Sun, title: "Weather", description: "Hot & humid, pack light clothing" },
                      { icon: Shield, title: "Safety", description: "Keep valuables secure in crowded areas" },
                      { icon: Utensils, title: "Food", description: "Try local warungs for authentic cuisine" }
                    ].map((tip, index) => {
                      const Icon = tip.icon;
                      return (
                        <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                          <Icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                          <div className="font-semibold text-slate-900 mb-2">{tip.title}</div>
                          <div className="text-sm text-slate-600">{tip.description}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-8 bg-white border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Emergency Contacts</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "Local Police", number: "110", type: "Emergency" },
                      { name: "Medical Emergency", number: "118", type: "Emergency" },
                      { name: "Hotel Reception", number: "+62 361 123456", type: "Accommodation" },
                      { name: "Tour Guide", number: "+62 812 3456789", type: "Guide" }
                    ].map((contact, index) => (
                      <div key={index} className="p-4 border border-slate-200 rounded-xl">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-semibold text-slate-900">{contact.name}</div>
                            <div className="text-sm text-slate-600">{contact.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">{contact.number}</div>
                            <button className="text-sm text-indigo-600 hover:text-indigo-700">Call</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-6">Travel Settings</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-slate-700 mb-3">Travel Preferences</h4>
                <div className="space-y-3">
                  <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
                    <option>Adventure Traveler</option>
                    <option>Cultural Explorer</option>
                    <option>Relaxation Seeker</option>
                    <option>Food Tourist</option>
                    <option>Photography Enthusiast</option>
                  </select>
                  <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
                    <option>Moderate Budget</option>
                    <option>Budget Travel</option>
                    <option>Luxury Experience</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-slate-700 mb-3">Travel Theme</h4>
                <div className="grid grid-cols-3 gap-3">
                  {templates[selectedTemplate].colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-12 h-12 rounded-lg border border-slate-300 mx-auto mb-2 cursor-pointer"
                        style={{ backgroundColor: color }}
                      ></div>
                      <div className="text-xs text-slate-600">{color}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-slate-700 mb-3">AI Travel Assistant</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Generate Itinerary</div>
                    <div className="text-xs text-slate-600">AI-powered daily schedule</div>
                  </button>
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Find Local Experiences</div>
                    <div className="text-xs text-slate-600">Discover hidden gems</div>
                  </button>
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Budget Optimization</div>
                    <div className="text-xs text-slate-600">Smart cost-saving tips</div>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-slate-700 mb-3">Travel Services</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-green-50 border border-green-200 rounded-lg text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-green-800 text-sm">Flight Booking</div>
                        <div className="text-xs text-green-600">Connected to Skyscanner</div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </button>
                  <button className="w-full p-3 bg-blue-50 border border-blue-200 rounded-lg text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-blue-800 text-sm">Hotel Reservations</div>
                        <div className="text-xs text-blue-600">Booking.com Connected</div>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </button>
                  <button className="w-full p-3 border border-slate-200 rounded-lg text-left hover:bg-slate-50">
                    <div className="font-medium text-slate-700 text-sm">+ Add Service</div>
                    <div className="text-xs text-slate-600">Insurance, Tours, etc.</div>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-slate-700 mb-3">Travel Tools</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Currency Converter</div>
                    <div className="text-xs text-slate-600">Real-time exchange rates</div>
                  </button>
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Weather Forecast</div>
                    <div className="text-xs text-slate-600">7-day weather outlook</div>
                  </button>
                  <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900 text-sm">Language Translator</div>
                    <div className="text-xs text-slate-600">Basic phrases & translations</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default TouristBuilder;
