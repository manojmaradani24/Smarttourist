import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Zap, Factory, Calculator } from 'lucide-react';
import Header from '../components/Header';

const LandingPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Smart playbooks that automate 80% of routine tasks'
    },
    {
      icon: Shield,
      title: 'GST Compliance',
      description: 'Zero-error GST filing with automated invoice generation'
    },
    {
      icon: Factory,
      title: 'Manufacturing Hubs',
      description: 'Connect with 500+ verified manufacturers across India'
    },
    {
      icon: Calculator,
      title: 'Integrated Accounting',
      description: 'Professional accountants on-demand for your business'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student Entrepreneur, Mumbai University',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'SmartMerchant helped me scale from ₹10K to ₹2L monthly revenue while reducing my operational costs by 35%.',
      metrics: '200% growth in 6 months'
    },
    {
      name: 'Amit Kumar',
      role: 'SME Owner, Handicrafts Business',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The manufacturing hub connected me with artisans in Rajasthan, creating 15 jobs while improving my margins.',
      metrics: '15 jobs created, 25% margin improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                India's First 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> AI-Powered</span>
                <br />E-commerce Operating System
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Unified platform for Indian SMEs and student entrepreneurs. 
                <strong className="text-indigo-600"> Save 40-60% costs</strong> while creating manufacturing jobs across India.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">20%</div>
                  <div className="text-sm text-slate-600">Faster order-to-dispatch</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">30%</div>
                  <div className="text-sm text-slate-600">Cost reduction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/dashboard" 
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors text-center"
                >
                  Start Free Trial
                </Link>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
                  Book Demo
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
                    <h3 className="font-semibold text-slate-800">Revenue Dashboard</h3>
                    <span className="text-green-600 text-sm font-medium">+45% this month</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">₹2,45,680</div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <span>Orders: 156</span>
                    <span>Conversion: 3.2%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="text-sm text-indigo-600 font-medium">Manufacturing Jobs</div>
                    <div className="text-xl font-bold text-indigo-800">847</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600 font-medium">GST Compliance</div>
                    <div className="text-xl font-bold text-green-800">100%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* Solutions Section */}
<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-white mb-6">
      Smart Solutions for MSMEs
    </h2>
    <p className="text-xl text-indigo-100 mb-12">
      AI-powered platforms to manage business, empower developers, and connect skilled workers.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 text-left">
      {/* MSME Business Hub */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          MSME Business Hub
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Complete business management solution with GST compliance,
          analytics, and employment matching.
        </p>
        <ul className="space-y-2 text-sm text-slate-700 mb-4">
          <li>✅ GST Automation (10.22hrs → 2hrs)</li>
          <li>✅ AI Analytics Dashboard</li>
          <li>✅ E-commerce Integration</li>
          <li>✅ Employment Matching</li>
        </ul>
        <div className="bg-indigo-600 text-white font-semibold rounded-lg px-4 py-2 text-center mb-4">
          80% Time Saved in GST compliance
        </div>
        <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition">
          Create Account
        </button>
      </div>

      {/* Developer Platform */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Developer Platform
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Build on SmartMerchant ecosystem with APIs, marketplace
          opportunities, and revenue sharing.
        </p>
        <ul className="space-y-2 text-sm text-slate-700 mb-4">
          <li>✅ Complete API Documentation</li>
          <li>✅ Sandbox Environment</li>
          <li>✅ Theme Marketplace</li>
          <li>✅ Revenue Sharing</li>
        </ul>
        <div className="bg-orange-500 text-white font-semibold rounded-lg px-4 py-2 text-center mb-4">
          50+ API Endpoints ready to use
        </div>
        <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition">
          Create Account
        </button>
      </div>

      {/* PMKVY Workers Portal */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          PMKVY Workers Portal
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Smart job matching from 24.3 lakh workers with career progression
          and skill development.
        </p>
        <ul className="space-y-2 text-sm text-slate-700 mb-4">
          <li>✅ AI Job Matching</li>
          <li>✅ 24.3L Worker Database</li>
          <li>✅ Skill Development</li>
          <li>✅ Career Progression</li>
        </ul>
        <div className="bg-green-600 text-white font-semibold rounded-lg px-4 py-2 text-center mb-4">
          89% Success Rate job placements
        </div>
        <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition">
          Create Account
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose SmartMerchant?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed specifically for Indian businesses with features that matter most to SMEs and student entrepreneurs.
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

      {/* Cost Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Save 40-60% Compared to Competitors</h2>
            <p className="text-xl text-slate-600">See how SmartMerchant reduces your operational costs significantly</p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">₹50,000</div>
                <div className="text-slate-600 mb-4">Traditional Setup Cost</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Shopify: ₹2,000/month</div>
                  <div>Razorpay: 2.5% fees</div>
                  <div>Shiprocket: ₹40/shipment</div>
                  <div>Accountant: ₹8,000/month</div>
                  <div>WhatsApp API: ₹5,000/month</div>
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
                <div className="text-slate-600 mb-4">SmartMerchant Total Cost</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Platform: ₹2,999/month</div>
                  <div>Transaction: 1.2% fees</div>
                  <div>Free shipping rates</div>
                  <div>AI accountant included</div>
                  <div>Built-in automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 1000+ Indian entrepreneurs who've already reduced their costs by 50% and created 2500+ manufacturing jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
          
          <p className="text-indigo-200 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;