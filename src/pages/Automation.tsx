import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Settings, Zap, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Automation = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    {
      id: 1,
      name: 'Festive Season Preparation',
      description: 'Automatically prepare inventory and marketing for Diwali, Dussehra, and other festivals',
      category: 'Seasonal',
      triggers: ['Date-based', 'Inventory levels'],
      actions: ['Inventory alerts', 'Marketing campaigns', 'Price adjustments'],
      estimatedSavings: '15 hours/week',
      popularity: 95,
      icon: '🎆'
    },
    {
      id: 2,
      name: 'Low Stock Alert & Reorder',
      description: 'Monitor inventory levels and automatically reorder from manufacturing partners',
      category: 'Inventory',
      triggers: ['Stock quantity below threshold'],
      actions: ['Send alerts', 'Create purchase orders', 'Notify manufacturers'],
      estimatedSavings: '8 hours/week',
      popularity: 88,
      icon: '📦'
    },
    {
      id: 3,
      name: 'Customer Retention Campaign',
      description: 'Re-engage customers who haven\'t purchased in the last 30 days',
      category: 'Marketing',
      triggers: ['Customer inactivity'],
      actions: ['WhatsApp messages', 'Email campaigns', 'Discount offers'],
      estimatedSavings: '12 hours/week',
      popularity: 82,
      icon: '💕'
    },
    {
      id: 4,
      name: 'Order Fulfillment Optimization',
      description: 'Streamline order processing and shipping for fastest delivery',
      category: 'Operations',
      triggers: ['New order received'],
      actions: ['Auto-assign shipping', 'Generate invoice', 'Send tracking'],
      estimatedSavings: '20 hours/week',
      popularity: 91,
      icon: '🚚'
    },
    {
      id: 5,
      name: 'GST Compliance Automation',
      description: 'Ensure all transactions are GST compliant and generate required reports',
      category: 'Compliance',
      triggers: ['Transaction created', 'Monthly schedule'],
      actions: ['Calculate GST', 'Generate invoices', 'File returns'],
      estimatedSavings: '10 hours/week',
      popularity: 76,
      icon: '📊'
    },
    {
      id: 6,
      name: 'New Product Launch Sequence',
      description: 'Coordinate product launches across all platforms and marketing channels',
      category: 'Product Management',
      triggers: ['Product status change'],
      actions: ['Update listings', 'Send notifications', 'Start campaigns'],
      estimatedSavings: '6 hours/week',
      popularity: 79,
      icon: '🚀'
    }
  ];

  const activePlaybooks = [
    {
      id: 1,
      name: 'Diwali Prep Automation',
      status: 'running',
      triggered: 156,
      lastRun: '2 hours ago',
      success: 98,
      category: 'Seasonal'
    },
    {
      id: 2,
      name: 'Low Stock Alerts',
      status: 'running',
      triggered: 23,
      lastRun: '15 minutes ago',
      success: 100,
      category: 'Inventory'
    },
    {
      id: 3,
      name: 'Customer Win-back',
      status: 'paused',
      triggered: 89,
      lastRun: '1 day ago',
      success: 85,
      category: 'Marketing'
    }
  ];

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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Automation Playbooks</h1>
                  <p className="text-slate-600">
                    Save 50+ hours per week with AI-powered automation. Your playbooks have saved 
                    <span className="font-semibold text-indigo-600"> 127 hours</span> this month.
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Custom Playbook
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-slate-600">Active Playbooks</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-600">268</div>
                  <div className="text-sm text-slate-600">Times Triggered</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-2xl font-bold text-amber-600">127h</div>
                  <div className="text-sm text-slate-600">Time Saved</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 rounded-lg p-1 mb-8 w-fit">
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeTab === 'templates'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Template Library
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeTab === 'active'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Active Playbooks
              </button>
              <button
                onClick={() => setActiveTab('builder')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeTab === 'builder'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visual Builder
              </button>
            </div>

            {/* Templates Tab */}
            {activeTab === 'templates' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{template.icon}</div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500">Popularity</div>
                        <div className="text-lg font-bold text-indigo-600">{template.popularity}%</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{template.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-medium text-slate-700 mb-2">TRIGGERS</div>
                      <div className="flex flex-wrap gap-1">
                        {template.triggers.map((trigger, index) => (
                          <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                            {trigger}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs font-medium text-slate-700 mb-2">ACTIONS</div>
                      <div className="flex flex-wrap gap-1">
                        {template.actions.map((action, index) => (
                          <span key={index} className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs text-slate-500">Estimated Savings</div>
                        <div className="font-semibold text-slate-900">{template.estimatedSavings}</div>
                      </div>
                      <div className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                        {template.category}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm">
                        Use Template
                      </button>
                      <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Active Playbooks Tab */}
            {activeTab === 'active' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900">Active Automation Playbooks</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Playbook</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Triggered</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Success Rate</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Last Run</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {activePlaybooks.map((playbook) => (
                        <tr key={playbook.id} className="hover:bg-slate-50">
                          <td className="py-4 px-6">
                            <div>
                              <div className="font-medium text-slate-900">{playbook.name}</div>
                              <div className="text-sm text-slate-500">{playbook.category}</div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className={`flex items-center ${
                              playbook.status === 'running' ? 'text-green-600' : 'text-amber-600'
                            }`}>
                              {playbook.status === 'running' ? (
                                <Play className="h-4 w-4 mr-1" />
                              ) : (
                                <Clock className="h-4 w-4 mr-1" />
                              )}
                              <span className="capitalize font-medium">{playbook.status}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="font-medium text-slate-900">{playbook.triggered}</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center">
                              <span className="font-medium text-slate-900 mr-2">{playbook.success}%</span>
                              {playbook.success >= 95 ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-amber-500" />
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-slate-600">{playbook.lastRun}</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                                Edit
                              </button>
                              <button className="text-slate-400 hover:text-slate-600 font-medium text-sm">
                                View Logs
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Visual Builder Tab */}
            {activeTab === 'builder' && (
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Components Panel */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Components</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Triggers</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100">
                            <div className="font-medium text-blue-800 text-sm">New Order</div>
                          </div>
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100">
                            <div className="font-medium text-blue-800 text-sm">Low Stock</div>
                          </div>
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100">
                            <div className="font-medium text-blue-800 text-sm">Customer Inactive</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Actions</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg cursor-pointer hover:bg-green-100">
                            <div className="font-medium text-green-800 text-sm">Send Email</div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg cursor-pointer hover:bg-green-100">
                            <div className="font-medium text-green-800 text-sm">Update Inventory</div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg cursor-pointer hover:bg-green-100">
                            <div className="font-medium text-green-800 text-sm">Create Order</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Canvas */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 h-96">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-slate-900">Visual Workflow Builder</h3>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">
                          Save Draft
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                          Publish
                        </button>
                      </div>
                    </div>
                    
                    <div className="h-full border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-600 mb-2">Drag components here to build your workflow</h3>
                        <p className="text-slate-500">Start by dragging a trigger from the left panel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Automation;