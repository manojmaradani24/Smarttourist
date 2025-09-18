import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings, ChevronDown, Globe } from 'lucide-react';

const Header = ({ isDashboard = false }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  if (isDashboard) {
    return (
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="font-bold text-xl text-slate-800">SmartMerchant</span>
            </Link>
            
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-96">
              <Search className="h-4 w-4 text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search orders, products, automation..."
                className="bg-transparent outline-none text-sm flex-1 text-slate-600"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">RS</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="font-semibold text-sm text-slate-800">Rahul Sharma</p>
                    <p className="text-xs text-slate-500">rahul@example.com</p>
                  </div>
                  
                  <div className="py-1">
                    <button 
                      onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      {language === 'EN' ? 'हिंदी' : 'English'}
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SM</span>
            </div>
            <span className="font-bold text-2xl text-slate-800">SmartMerchant</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-indigo-600 font-medium">Pricing</Link>
            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium">Features</a>
            <a href="#testimonials" className="text-slate-600 hover:text-indigo-600 font-medium">Success Stories</a>
            <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 font-medium">Demo</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
              className="flex items-center text-slate-600 hover:text-indigo-600 font-medium"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language}
            </button>
            <Link to="/dashboard" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;