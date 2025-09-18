import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Palette, Type, Image, ShoppingCart, Eye, Save } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const StoreBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [previewMode, setPreviewMode] = useState('desktop');

  const templates = [
    {
      name: 'Modern Minimalist',
      category: 'Fashion',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#1f2937', '#ffffff', '#f59e0b']
    },
    {
      name: 'Vibrant Marketplace',
      category: 'Handicrafts',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#dc2626', '#ffffff', '#fbbf24']
    },
    {
      name: 'Tech Store Pro',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#1e40af', '#ffffff', '#10b981']
    }
  ];

  const components = [
    { name: 'Header', icon: Type, category: 'Layout' },
    { name: 'Hero Section', icon: Image, category: 'Layout' },
    { name: 'Product Grid', icon: ShoppingCart, category: 'Products' },
    { name: 'Payment Form', icon: ShoppingCart, category: 'Checkout' },
    { name: 'Footer', icon: Type, category: 'Layout' }
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        
        <div className="flex-1 flex">
          {/* Left Panel - Templates & Components */}
          <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Store Builder</h2>
              
              {/* Templates Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-slate-800 mb-4">AI-Generated Templates</h3>
                <div className="space-y-4">
                  {templates.map((template, index) => (
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

              {/* Components Section */}
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-4">Drag & Drop Components</h3>
                <div className="space-y-2">
                  {components.map((component, index) => {
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

          {/* Center Panel - Preview */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
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
                  Previewing: <span className="font-medium">{templates[selectedTemplate].name}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </button>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save & Publish
                </button>
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-100 p-8 overflow-auto">
              <div className={`mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${
                previewMode === 'mobile' ? 'max-w-sm' : 'max-w-6xl'
              }`}>
                {/* Header */}
                <div className="bg-slate-900 text-white p-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Your Store Name</h1>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="hover:text-slate-300">Home</a>
                      <a href="#" className="hover:text-slate-300">Products</a>
                      <a href="#" className="hover:text-slate-300">About</a>
                      <a href="#" className="hover:text-slate-300">Contact</a>
                    </nav>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
                    <p className="text-xl mb-6">Discover amazing products made in India</p>
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Featured Products</h3>
                  <div className={`grid gap-6 ${previewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-slate-200 flex items-center justify-center">
                          <Package className="h-16 w-16 text-slate-400" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-slate-900 mb-2">Product Name</h4>
                          <p className="text-slate-600 text-sm mb-3">Beautiful handcrafted item made by local artisans</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-indigo-600">₹1,299</span>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-900 text-white p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                      <h4 className="font-semibold mb-4">About Us</h4>
                      <p className="text-slate-300 text-sm">We create jobs and support local artisans across India.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Customer Service</h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div>Email: support@yourstore.com</div>
                        <div>Phone: +91 98765 43210</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Follow Us</h4>
                      <div className="flex justify-center md:justify-start space-x-4">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                        <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                        <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Properties */}
          <div className="w-80 bg-white border-l border-slate-200 p-6">
            <h3 className="text-lg font-medium text-slate-800 mb-6">Design Properties</h3>
            
            {/* Color Scheme */}
            <div className="mb-6">
              <h4 className="font-medium text-slate-700 mb-3">Color Scheme</h4>
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

            {/* Typography */}
            <div className="mb-6">
              <h4 className="font-medium text-slate-700 mb-3">Typography</h4>
              <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
                <option>Inter (Recommended)</option>
                <option>Roboto</option>
                <option>Open Sans</option>
                <option>Poppins</option>
              </select>
            </div>

            {/* AI Content Generator */}
            <div className="mb-6">
              <h4 className="font-medium text-slate-700 mb-3">AI Content Generator</h4>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="font-medium text-slate-900 text-sm">Generate Product Descriptions</div>
                  <div className="text-xs text-slate-600">AI-powered content for your products</div>
                </button>
                <button className="w-full p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="font-medium text-slate-900 text-sm">Create Marketing Copy</div>
                  <div className="text-xs text-slate-600">Headlines and promotional text</div>
                </button>
              </div>
            </div>

            {/* Integration Setup */}
            <div>
              <h4 className="font-medium text-slate-700 mb-3">Quick Integrations</h4>
              <div className="space-y-3">
                <button className="w-full p-3 bg-green-50 border border-green-200 rounded-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-green-800 text-sm">Payment Gateway</div>
                      <div className="text-xs text-green-600">Razorpay Connected</div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </button>
                <button className="w-full p-3 bg-blue-50 border border-blue-200 rounded-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-blue-800 text-sm">Shipping</div>
                      <div className="text-xs text-blue-600">Shiprocket Connected</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </button>
                <button className="w-full p-3 border border-slate-200 rounded-lg text-left hover:bg-slate-50">
                  <div className="font-medium text-slate-700 text-sm">+ Add Integration</div>
                  <div className="text-xs text-slate-600">GST, Analytics, etc.</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBuilder;