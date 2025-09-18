import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  FileText, 
  Download, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  TrendingUp,
  Users,
  Phone
} from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Accounting = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const gstReturns = [
    { period: 'September 2024', type: 'GSTR-1', status: 'Filed', dueDate: '2024-10-11', amount: 45600 },
    { period: 'September 2024', type: 'GSTR-3B', status: 'Filed', dueDate: '2024-10-20', amount: 38200 },
    { period: 'October 2024', type: 'GSTR-1', status: 'Pending', dueDate: '2024-11-11', amount: 52300 },
    { period: 'October 2024', type: 'GSTR-3B', status: 'Due Soon', dueDate: '2024-11-20', amount: 41800 }
  ];

  const invoices = [
    { id: 'INV-001234', customer: 'Rajesh Textiles', amount: 25600, date: '2024-10-15', status: 'Paid', gst: 4608 },
    { id: 'INV-001235', customer: 'Mumbai Handicrafts', amount: 18900, date: '2024-10-14', status: 'Pending', gst: 3402 },
    { id: 'INV-001236', customer: 'Delhi Spices Co.', amount: 34500, date: '2024-10-13', status: 'Paid', gst: 6210 },
    { id: 'INV-001237', customer: 'Bangalore Electronics', amount: 67800, date: '2024-10-12', status: 'Overdue', gst: 12204 }
  ];

  const expenses = [
    { category: 'Raw Materials', amount: 145600, percentage: 45, color: 'indigo' },
    { category: 'Manufacturing', amount: 89400, percentage: 28, color: 'green' },
    { category: 'Logistics', amount: 54200, percentage: 17, color: 'amber' },
    { category: 'Marketing', amount: 32800, percentage: 10, color: 'purple' }
  ];

  const accountants = [
    {
      id: 1,
      name: 'CA Priya Sharma',
      specialization: 'GST & Compliance',
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      languages: ['English', 'Hindi', 'Gujarati'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹2,000/month',
      availability: 'Available',
      verified: true
    },
    {
      id: 2,
      name: 'CA Amit Kumar',
      specialization: 'Tax Planning & Returns',
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      languages: ['English', 'Hindi'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹2,500/month',
      availability: 'Busy until Nov 15',
      verified: true
    },
    {
      id: 3,
      name: 'CA Sneha Patel',
      specialization: 'Financial Planning',
      experience: '6 years',
      rating: 4.7,
      reviews: 156,
      languages: ['English', 'Hindi', 'Marathi'],
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹1,800/month',
      availability: 'Available',
      verified: true
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
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Accounting & GST Hub</h1>
                  <p className="text-slate-600">
                    Complete financial management with <span className="font-semibold text-green-600">100% GST compliance</span> and professional CA support
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export Reports
                  </button>
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    <Users className="h-4 w-4 mr-2" />
                    Get CA Support
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Monthly Revenue</div>
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹3,45,680</div>
                  <div className="text-xs text-green-600 font-medium">+23% from last month</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">GST Collected</div>
                    <Calculator className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹62,222</div>
                  <div className="text-xs text-slate-600">18% of revenue</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Compliance Score</div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-green-600 font-medium">All filings on time</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Savings This Month</div>
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹8,450</div>
                  <div className="text-xs text-purple-600 font-medium">vs hiring full-time CA</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 rounded-lg p-1 mb-8 w-fit">
              {[
                { id: 'dashboard', name: 'Dashboard' },
                { id: 'gst', name: 'GST Returns' },
                { id: 'invoices', name: 'Invoices' },
                { id: 'expenses', name: 'Expenses' },
                { id: 'accountants', name: 'Find CA' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Upcoming Deadlines</h2>
                  <div className="space-y-4">
                    {gstReturns.filter(r => r.status !== 'Filed').map((return_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-amber-500 mr-3" />
                          <div>
                            <div className="font-medium text-slate-900">{return_.type} - {return_.period}</div>
                            <div className="text-sm text-slate-600">Due: {return_.dueDate}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">₹{return_.amount.toLocaleString()}</div>
                          <div className={`text-xs font-medium ${
                            return_.status === 'Due Soon' ? 'text-amber-600' : 'text-slate-600'
                          }`}>
                            {return_.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Invoices</h2>
                  <div className="space-y-4">
                    {invoices.slice(0, 4).map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <div className="font-medium text-slate-900">{invoice.id}</div>
                          <div className="text-sm text-slate-600">{invoice.customer}</div>
                          <div className="text-xs text-slate-500">{invoice.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">₹{invoice.amount.toLocaleString()}</div>
                          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                            invoice.status === 'Paid' ? 'bg-green-100 text-green-600' :
                            invoice.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {invoice.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* GST Returns Tab */}
            {activeTab === 'gst' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-900">GST Returns</h2>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                      Generate Return
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Period</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Return Type</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Due Date</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Amount</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {gstReturns.map((return_, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="py-4 px-6 font-medium text-slate-900">{return_.period}</td>
                          <td className="py-4 px-6 text-slate-700">{return_.type}</td>
                          <td className="py-4 px-6 text-slate-700">{return_.dueDate}</td>
                          <td className="py-4 px-6 font-semibold text-slate-900">₹{return_.amount.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              return_.status === 'Filed' ? 'bg-green-100 text-green-600' :
                              return_.status === 'Due Soon' ? 'bg-amber-100 text-amber-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {return_.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                                {return_.status === 'Filed' ? 'View' : 'File'}
                              </button>
                              <button className="text-slate-400 hover:text-slate-600 font-medium text-sm">
                                Download
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

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-900">Invoices</h2>
                    <div className="flex space-x-3">
                      <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50">
                        Import Data
                      </button>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                        Create Invoice
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Invoice ID</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Customer</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Date</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Amount</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">GST</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {invoices.map((invoice, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="py-4 px-6 font-medium text-slate-900">{invoice.id}</td>
                          <td className="py-4 px-6 text-slate-700">{invoice.customer}</td>
                          <td className="py-4 px-6 text-slate-700">{invoice.date}</td>
                          <td className="py-4 px-6 font-semibold text-slate-900">₹{invoice.amount.toLocaleString()}</td>
                          <td className="py-4 px-6 text-slate-700">₹{invoice.gst.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              invoice.status === 'Paid' ? 'bg-green-100 text-green-600' :
                              invoice.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                                View
                              </button>
                              <button className="text-slate-400 hover:text-slate-600 font-medium text-sm">
                                Download
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

            {/* Expenses Tab */}
            {activeTab === 'expenses' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Expense Breakdown</h2>
                  <div className="space-y-4">
                    {expenses.map((expense, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full bg-${expense.color}-500 mr-3`}></div>
                          <span className="text-slate-700">{expense.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">₹{expense.amount.toLocaleString()}</div>
                          <div className="text-sm text-slate-600">{expense.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-900">Total Expenses</span>
                      <span className="text-xl font-bold text-slate-900">
                        ₹{expenses.reduce((sum, expense) => sum + expense.amount, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
                  <div className="space-y-4">
                    <button className="w-full p-4 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-indigo-600 mr-3" />
                        <div>
                          <div className="font-medium text-slate-900">Add Expense</div>
                          <div className="text-sm text-slate-600">Record a new business expense</div>
                        </div>
                      </div>
                    </button>
                    
                    <button className="w-full p-4 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center">
                        <Calculator className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-medium text-slate-900">Calculate Tax Savings</div>
                          <div className="text-sm text-slate-600">Optimize your tax deductions</div>
                        </div>
                      </div>
                    </button>
                    
                    <button className="w-full p-4 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <div className="font-medium text-slate-900">Export Report</div>
                          <div className="text-sm text-slate-600">Download expense report</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Find CA Tab */}
            {activeTab === 'accountants' && (
              <div>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Find Professional Chartered Accountants</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Get dedicated CA support starting from ₹1,800/month. All our CAs are verified, experienced, and specialized in e-commerce compliance.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {accountants.map((accountant, index) => (
                    <motion.div
                      key={accountant.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={accountant.image}
                          alt={accountant.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-slate-900">{accountant.name}</h3>
                            {accountant.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                            )}
                          </div>
                          <div className="text-sm text-slate-600">{accountant.specialization}</div>
                          <div className="text-xs text-slate-500">{accountant.experience}</div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-sm mr-1">★</div>
                        <span className="font-medium text-slate-900 text-sm">{accountant.rating}</span>
                        <span className="text-slate-500 text-xs ml-1">({accountant.reviews} reviews)</span>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-slate-600 mb-2">Languages</div>
                        <div className="flex flex-wrap gap-1">
                          {accountant.languages.map((language, index) => (
                            <span
                              key={index}
                              className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm text-slate-600">Starting from</div>
                          <div className="text-lg font-bold text-indigo-600">{accountant.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-600">Availability</div>
                          <div className={`text-sm font-medium ${
                            accountant.availability === 'Available' ? 'text-green-600' : 'text-amber-600'
                          }`}>
                            {accountant.availability}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm">
                          Hire Now
                        </button>
                        <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                    View All Accountants
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accounting;