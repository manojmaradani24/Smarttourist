import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, Building, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: isAnnual ? 799 : 999,
      originalPrice: 1500,
      description: 'Perfect for student entrepreneurs and new businesses',
      color: 'indigo',
      features: [
        'Drag-and-drop store builder',
        '2 platform integrations (Shopify + Razorpay)',
        'Basic AI insights & automation',
        'GST invoice generation',
        'Email support',
        'Mobile-responsive templates',
        'Basic inventory management'
      ],
      transactionFee: '1.5%',
      savings: 'vs 2.5-3% industry standard',
      popular: false
    },
    {
      name: 'Growth',
      icon: Users,
      price: isAnnual ? 2399 : 2999,
      originalPrice: 5000,
      description: 'Ideal for growing SMEs ready to scale operations',
      color: 'green',
      features: [
        'Everything in Starter',
        '5 platform integrations',
        'AI-powered automation playbooks',
        'Manufacturing hub access (10% commission)',
        'WhatsApp marketing automation',
        'Dedicated accountant service (₹2,000/month addon)',
        'Advanced analytics dashboard',
        'Priority customer support',
        'Multi-language support'
      ],
      transactionFee: '1.2%',
      savings: 'Save ₹15,000/month vs competitors',
      popular: true
    },
    {
      name: 'Scale',
      icon: Building,
      price: isAnnual ? 6399 : 7999,
      originalPrice: 12000,
      description: 'For established businesses scaling across India',
      color: 'purple',
      features: [
        'Everything in Growth',
        'Unlimited platform integrations',
        'Custom AI models & automations',
        'Priority manufacturing partner network',
        'Full accounting team access (₹5,000/month)',
        'Multi-language customer support',
        'White-label solutions',
        'API access & webhooks',
        'Custom onboarding & training'
      ],
      transactionFee: '0.9%',
      savings: 'Save ₹25,000/month vs traditional setup',
      popular: false
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      description: 'Custom solutions for large-scale operations',
      color: 'amber',
      features: [
        'Everything in Scale',
        'Dedicated manufacturing facilities',
        'On-site accountant deployment',
        'Custom compliance solutions',
        'Multi-tenant architecture',
        'Dedicated success manager',
        'Custom integrations',
        'SLA guarantees',
        '24/7 phone support'
      ],
      transactionFee: 'Negotiable',
      savings: 'Custom pricing based on volume',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Dedicated Accountant',
      price: '₹2,000/month',
      description: 'Professional CA for GST filing, compliance, and financial planning'
    },
    {
      name: 'Full Accounting Team',
      price: '₹5,000/month',
      description: 'Complete finance team with CA, bookkeeper, and tax consultant'
    },
    {
      name: 'Manufacturing Hub Premium',
      price: '5% commission',
      description: 'Priority access to verified manufacturers with quality guarantees'
    },
    {
      name: 'AI Content Generator',
      price: '₹1,500/month',
      description: 'Unlimited product descriptions, marketing copy, and social media content'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Choose Your Growth Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Save 40-60% compared to traditional e-commerce setups while creating jobs across India
          </p>
          
          {/* Annual Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isAnnual ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const colorClasses = {
              indigo: 'border-indigo-200 bg-indigo-50',
              green: 'border-green-200 bg-green-50 ring-2 ring-green-500',
              purple: 'border-purple-200 bg-purple-50',
              amber: 'border-amber-200 bg-amber-50'
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl border-2 p-8 relative ${colorClasses[plan.color]} ${
                  plan.popular ? 'shadow-2xl' : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 text-${plan.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <span className="text-4xl font-bold text-slate-900">₹{plan.price.toLocaleString()}</span>
                          <span className="text-slate-500 ml-2">/month</span>
                        </div>
                        <div className="text-sm text-slate-500 line-through">₹{plan.originalPrice.toLocaleString()}</div>
                        <div className="text-sm text-green-600 font-medium">Transaction fee: {plan.transactionFee}</div>
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                    )}
                  </div>
                  
                  <div className="text-xs text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                    {plan.savings}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 text-${plan.color}-600 mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/dashboard"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : `bg-${plan.color}-600 text-white hover:bg-${plan.color}-700`
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Professional Add-on Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-3">{addon.price}</div>
                <p className="text-slate-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Compare with Traditional Setup</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Traditional Setup</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">SmartMerchant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 px-6">Monthly Platform Cost</td>
                  <td className="py-4 px-6 text-center">₹15,000+</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">₹2,999</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Transaction Fees</td>
                  <td className="py-4 px-6 text-center">2.5-3%</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">1.2%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Accounting Services</td>
                  <td className="py-4 px-6 text-center">₹8,000/month</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">₹2,000/month</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Manufacturing Network</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ 500+ partners</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Job Creation Tracking</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ Real-time metrics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Save 50% on Your E-commerce Costs?</h2>
          <p className="text-xl text-slate-600 mb-8">Join 1000+ Indian entrepreneurs who've already made the switch</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
            >
              Start 14-Day Free Trial
            </Link>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-4">No credit card required • Cancel anytime • Full feature access</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;