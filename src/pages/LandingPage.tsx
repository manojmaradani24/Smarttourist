import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Zap, MapPin, Calculator, X } from 'lucide-react';
import Header from '../components/Header';

const LandingPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('traveler');
  const navigate = useNavigate();

  const API_BASE_URL = 'http://localhost:5000/api/auth';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        navigate('/dashboard');
        setShowAuthModal(false);
        setEmail('');
        setPassword('');
      } else {
        setLoginError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setLoginError('Network error. Please check if backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password !== confirmPassword) {
      setLoginError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    if (!agreeToTerms) {
      setLoginError('Please agree to the Terms of Service and Privacy Policy');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password,
          userType: selectedPlatform
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        const platformName = getPlatformName(selectedPlatform);
        alert(`Registration successful! Welcome to ${platformName}.`);
        navigate('/dashboard');
        setShowAuthModal(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAgreeToTerms(false);
        setSelectedPlatform('traveler');
      } else {
        setLoginError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setLoginError('Network error. Please check if backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const openGoogleMaps = () => {
    const defaultLocation = 'India';
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(defaultLocation)}`;
    window.open(mapsUrl, '_blank');
  };

  const getPlatformName = (platform) => {
    switch(platform) {
      case 'traveler': return 'Smart Tourist Platform';
      case 'agent': return 'Travel Agent Portal';
      case 'partner': return 'Hotel & Service Partners';
      default: return 'SmartTourist';
    }
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setShowAuthModal(true);
    setIsLogin(false);
  };

  const features = [
    { icon: Zap, title: 'AI Trip Planning', description: 'Smart itineraries that optimize your travel experience' },
    { icon: Shield, title: 'Secure Bookings', description: 'Verified partners and secure payment processing' },
    { icon: MapPin, title: '500+ Destinations', description: 'Connect with verified hotels and tour guides across India' },
    { icon: Calculator, title: 'Budget Optimization', description: 'Smart pricing and cost-saving recommendations' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md animate-in">
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  {isLogin ? 'Login to Your Account' : `Join ${getPlatformName(selectedPlatform)}`}
                </h2>
                {!isLogin && (
                  <p className="text-sm text-slate-600 mt-1">
                    Create your ${getPlatformName(selectedPlatform)} account
                  </p>
                )}
              </div>
              <button 
                onClick={() => {
                  setShowAuthModal(false);
                  setLoginError('');
                  setSelectedPlatform('traveler');
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex border-b border-slate-200 mb-6">
                <button 
                  onClick={() => {
                    setIsLogin(true);
                    setLoginError('');
                  }}
                  className={`py-2 px-4 mr-4 ${isLogin ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' : 'text-slate-600'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    setIsLogin(false);
                    setLoginError('');
                  }}
                  className={`py-2 px-4 ${!isLogin ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' : 'text-slate-600'}`}
                >
                  Register
                </button>
              </div>
              
              {loginError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm">
                  {loginError}
                </div>
              )}
              
              <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your name"
                      required
                      disabled={isLoading}
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={isLogin ? "Enter your password" : "Create a password"}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                    <input 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Confirm your password"
                      required
                      disabled={isLoading}
                    />
                  </div>
                )}
                
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded text-indigo-600 focus:ring-indigo-500" 
                        disabled={isLoading}
                      />
                      <span className="ml-2 text-sm text-slate-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot password?</a>
                  </div>
                )}
                
                {!isLogin && (
                  <label className="flex items-start">
                    <input 
                      type="checkbox" 
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500 mt-1" 
                      disabled={isLoading}
                    />
                    <span className="ml-2 text-sm text-slate-600">I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a></span>
                  </label>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {isLogin ? 'Logging in...' : 'Creating Account...'}
                    </div>
                  ) : (
                    isLogin ? 'Login to Account' : `Create ${getPlatformName(selectedPlatform)} Account`
                  )}
                </button>
              </form>
              
              <div className="mt-6">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-4 text-slate-500 text-sm">Or continue with</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Google
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    GitHub
                  </button>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setLoginError('');
                    }}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                    disabled={isLoading}
                  >
                    {isLogin ? 'Sign up' : 'Login'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                India's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Next-Gen</span>
                <br />Smart Travel Platform
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Unified platform for travelers and tourism partners. 
                <strong className="text-indigo-600"> Save 40-60% costs</strong> while discovering amazing destinations across India.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">20%</div>
                  <div className="text-sm text-slate-600">Faster booking process</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">30%</div>
                  <div className="text-sm text-slate-600">Cost reduction on trips</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setSelectedPlatform('traveler');
                    setShowAuthModal(true);
                  }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors text-center"
                >
                  Login / Register
                </button>
                <button 
                  onClick={openGoogleMaps}
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
                >
                  Explore Destinations
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="bg-slate-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-800">Travel Dashboard</h3>
                    <span className="text-green-600 text-sm font-medium">+45% this month</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">₹2,45,680</div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <span>Bookings: 156</span>
                    <span>Conversion: 3.2%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="text-sm text-indigo-600 font-medium">Active Destinations</div>
                    <div className="text-xl font-bold text-indigo-800">847</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600 font-medium">Happy Travelers</div>
                    <div className="text-xl font-bold text-green-800">100%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Smart Solutions for Travelers
          </h2>
          <p className="text-xl text-indigo-100 mb-12">
            AI-powered platforms to plan trips, manage bookings, and connect with local experts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Traveler Platform
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Complete travel planning solution with AI itineraries,
                real-time bookings, and local experiences.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>AI Trip Planning (10.22hrs → 2hrs)</li>
                <li>Real-time Booking Dashboard</li>
                <li>Hotel & Flight Integration</li>
                <li>Local Experience Matching</li>
              </ul>
              <div className="text-black font-semibold rounded-lg px-4 py-2 text-center mb-4">
                80% Time Saved in trip planning
              </div>
              <button 
                onClick={() => handlePlatformSelect('traveler')}
                className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition"
              >
                Create Account
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Travel Agent Portal
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Build on SmartTourist ecosystem with APIs, package creation
                opportunities, and revenue sharing.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>Complete API Documentation</li>
                <li>Package Builder Tools</li>
                <li>Customer Management</li>
                <li>Revenue Dashboard</li>
              </ul>
              <div className="text-black font-semibold rounded-lg px-4 py-2 text-center mb-4">
                50+ Destinations ready to book
              </div>
              <button 
                onClick={() => handlePlatformSelect('agent')}
                className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition"
              >
                Create Account
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hotel & Service Partners
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Smart traveler matching with 24.3k monthly visitors and business
                growth opportunities.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>AI Guest Matching</li>
                <li>24.3K Monthly Visitors</li>
                <li>Business Analytics</li>
                <li>Revenue Growth</li>
              </ul>
              <div className="text-black font-semibold rounded-lg px-4 py-2 text-center mb-4">
                89% Success Rate in bookings
              </div>
              <button 
                onClick={() => handlePlatformSelect('partner')}
                className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose SmartTourist?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed specifically for modern travelers with features that matter most for unforgettable experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Save 40-60% Compared to Traditional Travel</h2>
            <p className="text-xl text-slate-600">See how SmartTourist reduces your travel costs significantly</p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">₹50,000</div>
                <div className="text-slate-600 mb-4">Traditional Travel Cost</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Travel Agents: ₹2,350 to 17,550/trip</div>
                  <div>Hotel Bookings: 20-30% commission fees</div>
                  <div>Flight Bookings: from ₹1,500/ticket + fees</div>
                  <div>Tour Guides: ~₹8,000/day</div>
                  <div>Local Transport: ~₹1,700/day</div>
                  <div>Package Tours: from ₹15,000</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-green-600">SAVES 50%</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">₹25,000</div>
                <div className="text-slate-600 mb-4">SmartTourist Total Cost</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Platform: ₹2,999/trip</div>
                  <div>Direct Hotel: 0% commission</div>
                  <div>Best flight rates</div>
                  <div>Local guides included</div>
                  <div>Built-in transport</div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Perfect Trip?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 1000+ travelers who've already reduced their costs by 50% and discovered 2500+ amazing destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setSelectedPlatform('traveler');
                setShowAuthModal(true);
              }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Get Started Free
            </button>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Travel Packages
            </Link>
          </div>
          
          <p className="text-indigo-200 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
