import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  IndianRupee,
  Plane,
  Hotel,
  Car,
  Utensils,
  Mountain,
  Sun,
  Moon,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Download,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Calendar,
  Navigation,
  Camera,
  Wallet,
  Shield,
  Globe,
  Phone,
  Mail,
  Bot,
  X,
  Send
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { chatAPI } from '../utils/api';

const Dashboard = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, text: string, isUser: boolean, timestamp: Date}>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendChatMessage = async () => {
    if (!chatInput.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsLoading(true);

    try {
      const response = await chatAPI.sendMessage(chatInput, chatMessages);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response.data.response,
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  const clearChat = () => {
    setChatMessages([]);
  };

  const kpiData = [
    { title: 'Indian Trip (All Cultural Places)', value: '₹2,45,680', change: '+45%', trend: 'up', icon: IndianRupee, color: 'green' },
    { title: 'Total Bookings', value: '1,247', change: '+23%', trend: 'up', icon: ShoppingCart, color: 'blue' },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up', icon: TrendingUp, color: 'indigo' },
    { title: 'Active Destinations', value: '847', change: '+156', trend: 'up', icon: MapPin, color: 'purple' },
    { title: 'Happy Travelers', value: '2,847', change: '+320', trend: 'up', icon: Users, color: 'pink' },
    { title: 'Partner Hotels', value: '156', change: '+12', trend: 'up', icon: Hotel, color: 'orange' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 145000, bookings: 89, profit: 45000 },
    { month: 'Feb', revenue: 167000, bookings: 102, profit: 52000 },
    { month: 'Mar', revenue: 189000, bookings: 115, profit: 58000 },
    { month: 'Apr', revenue: 198000, bookings: 128, profit: 61000 },
    { month: 'May', revenue: 234000, bookings: 156, profit: 72000 },
    { month: 'Jun', revenue: 245680, bookings: 167, profit: 78000 },
    { month: 'Jul', revenue: 267890, bookings: 189, profit: 85000 },
    { month: 'Aug', revenue: 289450, bookings: 203, profit: 92000 }
  ];

  const platformData = [
    { name: 'Chennai', bookings: 45, color: '#96f2d7' },
    { name: 'Mumbai', bookings: 38, color: '#ffd43b' },
    { name: 'Punjab', bookings: 32, color: '#74c0fc' },
    { name: 'Hyderabad', bookings: 28, color: '#ffa8a8' },
    { name: 'Kerala', bookings: 24, color: '#d0bfff' }
  ];

  const destinationPerformance = [
    { name: 'Goa', revenue: 89000, growth: 45, popularity: 95 },
    { name: 'Kerala', revenue: 78000, growth: 32, popularity: 88 },
    { name: 'Himachal', revenue: 67000, growth: 28, popularity: 82 },
    { name: 'Rajasthan', revenue: 56000, growth: 22, popularity: 78 },
    { name: 'Andaman', revenue: 45000, growth: 65, popularity: 85 }
  ];

  const alerts = [
    { type: 'warning', message: 'High demand alert: Goa packages (12 slots left)', time: '2 hours ago', priority: 'high' },
    { type: 'info', message: 'Peak season pricing starts in 3 days', time: '4 hours ago', priority: 'medium' },
    { type: 'success', message: 'New destination added: Andaman Islands', time: '1 day ago', priority: 'low' },
    { type: 'warning', message: 'Weather alert: Heavy rainfall in Kerala', time: '6 hours ago', priority: 'high' }
  ];

  const quickActions = [
    { title: 'Create Tour Package', description: 'Set up new travel itinerary', icon: Plane, bgColor: '#eef2ff', borderColor: '#c7d2fe' },
    { title: 'Generate Revenue Report', description: 'Monthly performance', icon: TrendingUp, bgColor: '#dcfce7', borderColor: '#bbf7d0' },
    { title: 'Add Destination', description: 'New location sourcing', icon: MapPin, bgColor: '#f5e0ff', borderColor: '#ddd6fe' },
    { title: 'Bulk Booking Update', description: 'Update booking status', icon: ShoppingCart, bgColor: '#e0f2fe', borderColor: '#bae6fd' },
    { title: 'Hotel Management', description: 'Partner hotel updates', icon: Hotel, bgColor: '#ffe4e6', borderColor: '#fecdd3' },
    { title: 'Customer Support', description: 'Handle traveler queries', icon: Users, bgColor: '#fef3c7', borderColor: '#fde68a' }
  ];

  const aiInsights = [
    { text: 'Summer vacation demand spike predicted for beach destinations (+150% in next 2 weeks)', type: 'demand' },
    { text: 'Flight cost optimization available: Switch to new airline partner (Save ₹800/ticket)', type: 'cost' },
    { text: 'Customer retention opportunity: 247 travelers haven\'t booked in 30 days', type: 'retention' },
    { text: 'Hotel availability alert: Premium rooms selling 3x faster in hill stations', type: 'inventory' }
  ];

  const trendingDestinations = [
    {
      id: 1,
      name: 'Goa Beach Paradise',
      location: 'Goa, India',
      rating: 4.8,
      price: '₹12,499',
      image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bookings: 156,
      trend: 'up'
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      location: 'Kerala, India',
      rating: 4.9,
      price: '₹15,999',
      image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bookings: 128,
      trend: 'up'
    },
    {
      id: 3,
      name: 'Himachal Adventure',
      location: 'Manali, India',
      rating: 4.7,
      price: '₹9,999',
      image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bookings: 89,
      trend: 'up'
    }
  ];

  const recentBookings = [
    { id: 'BK001', customer: 'Raj Sharma', destination: 'Goa', amount: '₹12,499', status: 'confirmed', date: '2024-01-15' },
    { id: 'BK002', customer: 'Priya Patel', destination: 'Kerala', amount: '₹15,999', status: 'pending', date: '2024-01-14' },
    { id: 'BK003', customer: 'Amit Kumar', destination: 'Manali', amount: '₹9,999', status: 'confirmed', date: '2024-01-14' },
    { id: 'BK004', customer: 'Neha Singh', destination: 'Rajasthan', amount: '₹11,499', status: 'cancelled', date: '2024-01-13' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-3">Good morning, Travel Manager! 🌴</h1>
                  <p className="text-blue-100 text-lg">
                    Your platform has served <span className="font-semibold">847 destinations</span> to{' '}
                    <span className="font-semibold">2,847 happy travelers</span> this month.
                  </p>
                  
                  <div className="flex items-center space-x-6 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Emails Sent</p>
                        <p className="font-semibold text-lg">1,247</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Feedback Received</p>
                        <p className="font-semibold text-lg">89% Positive</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Send className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Response Rate</p>
                        <p className="font-semibold text-lg">94%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <h1>Artificial intelligence in tourism and travel,to improve various aspects of the tourism industry,refers to the use of AI technology </h1>
                  
                  <button 
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center shadow-lg"
                  >
                    <Bot className="inline w-5 h-5 mr-2" />
                    AI Assistant
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {kpiData.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
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

            <div className="grid xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Booking Trends</h2>
                  <div className="flex space-x-2">
                    <button className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                      +45% this month
                    </button>
                    <button className="text-sm text-slate-600 hover:text-slate-900">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'revenue' || name === 'profit' ? `₹${value.toLocaleString()}` : value, 
                        name === 'revenue' ? 'Revenue' : name === 'profit' ? 'Profit' : 'Bookings'
                      ]}
                      labelStyle={{ color: '#1e293b' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1' }} />
                    <Line type="monotone" dataKey="bookings" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Indian Tourist Places</h2>
                  <button className="text-slate-600 hover:text-slate-900">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="bookings"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Top Performing Destinations</h2>
                <button 
                  onClick={() => toggleSection('destinations')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {expandedSection === 'destinations' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <ResponsiveContainer width="100%" height={expandedSection === 'destinations' ? 400 : 250}>
                <BarChart data={destinationPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                  <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid xl:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Real-time Alerts</h2>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">4 new</span>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {alerts.map((alert, index) => {
                    const iconMap = { warning: AlertTriangle, success: CheckCircle, info: Clock };
                    const Icon = iconMap[alert.type];
                    const colorMap = { warning: 'amber', success: 'green', info: 'blue' };
                    const color = colorMap[alert.type];
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div className={`w-8 h-8 rounded-full bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-4 w-4 text-${color}-600`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-800 mb-1">{alert.message}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-slate-500">{alert.time}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              alert.priority === 'high' ? 'bg-red-100 text-red-600' :
                              alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {alert.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">AI Insights & Predictions</h2>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {aiInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-slate-200 hover:shadow-md transition-all cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="text-sm text-slate-800">{insight.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Quick Actions</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-lg border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: action.bgColor, borderColor: action.borderColor }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                            <Icon className="h-5 w-5" style={{ color: action.borderColor }} />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{action.title}</div>
                            <div className="text-xs text-slate-600">{action.description}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Trending Destinations</h2>
                <div className="space-y-4">
                  {trendingDestinations.map((destination) => (
                    <div key={destination.id} className="flex items-center space-x-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                      <img src={destination.image} alt={destination.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{destination.name}</h3>
                        <p className="text-sm text-slate-600">{destination.location}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-sm text-amber-600">
                            <Star className="w-4 h-4 fill-current mr-1" />
                            {destination.rating}
                          </div>
                          <div className="text-sm text-slate-600">{destination.bookings} bookings</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">{destination.price}</div>
                        <div className="text-green-600 text-sm">↑ Trending</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Bookings</h2>
                <div className="space-y-3">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-medium text-slate-900">{booking.customer}</div>
                        <div className="text-sm text-slate-600">{booking.destination}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">{booking.amount}</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {booking.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
              >
                <ChevronUp className="w-6 h-6" />
              </motion.button>
            )}

            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="fixed bottom-32 right-8 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Travel AI Assistant</h3>
                      <p className="text-blue-100 text-xs">Powered by ChatGPT</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                  {chatMessages.length === 0 && (
                    <div className="text-center text-slate-500 mt-8">
                      <Bot className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                      <p className="text-sm">Hello! I'm your travel AI assistant.</p>
                      <p className="text-xs mt-1">Ask me about analytics, bookings, or travel trends!</p>
                    </div>
                  )}
                  
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs rounded-lg p-3 ${
                          message.isUser
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-slate-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-200 rounded-lg rounded-bl-none p-3 shadow-sm">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 p-4 bg-white rounded-b-2xl">
                  <div className="flex space-x-2">
                    <textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={handleChatKeyPress}
                      placeholder="Ask about travel analytics..."
                      className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                      rows={1}
                      disabled={isLoading}
                    />
                    <button
                      onClick={sendChatMessage}
                      disabled={!chatInput.trim() || isLoading}
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  {chatMessages.length > 0 && (
                    <button
                      onClick={clearChat}
                      className="text-xs text-slate-500 hover:text-slate-700 mt-2 transition-colors"
                    >
                      Clear conversation
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
