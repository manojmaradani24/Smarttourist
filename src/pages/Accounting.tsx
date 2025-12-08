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

const TripBudget = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const travelDocuments = [
    { period: 'November 2024', type: 'Visa Application', status: 'Approved', dueDate: '2024-10-11', amount: 4500 },
    { period: 'November 2024', type: 'Travel Insurance', status: 'Active', dueDate: '2024-10-20', amount: 3200 },
    { period: 'December 2024', type: 'Visa Extension', status: 'Pending', dueDate: '2024-11-11', amount: 2800 },
    { period: 'December 2024', type: 'Insurance Renewal', status: 'Due Soon', dueDate: '2024-11-20', amount: 3500 }
  ];

  const bookings = [
    { id: 'BK-001234', service: 'Luxury Resort Bali', amount: 25600, date: '2024-10-15', status: 'Confirmed', tax: 4608 },
    { id: 'BK-001235', service: 'Flight to Thailand', amount: 18900, date: '2024-10-14', status: 'Pending', tax: 3402 },
    { id: 'BK-001236', service: 'European Tour Package', amount: 34500, date: '2024-10-13', status: 'Confirmed', tax: 6210 },
    { id: 'BK-001237', service: 'Safari Adventure Kenya', amount: 67800, date: '2024-10-12', status: 'Cancelled', tax: 12204 }
  ];

  const expenses = [
    { category: 'Accommodation', amount: 145600, percentage: 45, color: 'indigo' },
    { category: 'Flights', amount: 89400, percentage: 28, color: 'green' },
    { category: 'Activities', amount: 54200, percentage: 17, color: 'amber' },
    { category: 'Food & Dining', amount: 32800, percentage: 10, color: 'purple' }
  ];

  const travelAgents = [
    {
      id: 1,
      name: 'Priya Sharma',
      specialization: 'Luxury Travel & Visa',
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      languages: ['English', 'Hindi', 'Gujarati'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹2,000/trip',
      availability: 'Available',
      verified: true
    },
    {
      id: 2,
      name: 'Amit Kumar',
      specialization: 'Adventure & Budget Travel',
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      languages: ['English', 'Hindi'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹2,500/trip',
      availability: 'Busy until Nov 15',
      verified: true
    },
    {
      id: 3,
      name: 'Sneha Patel',
      specialization: 'Family & Group Tours',
      experience: '6 years',
      rating: 4.7,
      reviews: 156,
      languages: ['English', 'Hindi', 'Marathi'],
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: '₹1,800/trip',
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
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Trip Budget & Planning</h1>
                  <p className="text-slate-600">
                    Complete travel budget management with <span className="font-semibold text-green-600">smart expense tracking</span> and professional travel agent support
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export Budget
                  </button>
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    <Users className="h-4 w-4 mr-2" />
                    Get Travel Expert
                  </button>
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Trip Budget</div>
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹3,45,680</div>
                  <div className="text-xs text-green-600 font-medium">+23% savings this month</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Taxes & Fees</div>
                    <Calculator className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹62,222</div>
                  <div className="text-xs text-slate-600">18% of total budget</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Planning Progress</div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">85%</div>
                  <div className="text-xs text-green-600 font-medium">All bookings on track</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Savings This Month</div>
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">₹8,450</div>
                  <div className="text-xs text-purple-600 font-medium">with smart planning</div>
                </div>
              </div>
            </div>

            
            <div className="flex space-x-1 bg-slate-100 rounded-lg p-1 mb-8 w-fit">
              {[
                { id: 'dashboard', name: 'Dashboard' },
                { id: 'documents', name: 'Travel Documents' },
                { id: 'bookings', name: 'Bookings' },
                { id: 'expenses', name: 'Expenses' },
                { id: 'agents', name: 'Find Travel Expert' }
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

            
            {activeTab === 'dashboard' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Upcoming Deadlines</h2>
                  <div className="space-y-4">
                    {travelDocuments.filter(doc => doc.status !== 'Approved').map((document, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-amber-500 mr-3" />
                          <div>
                            <div className="font-medium text-slate-900">{document.type} - {document.period}</div>
                            <div className="text-sm text-slate-600">Due: {document.dueDate}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">₹{document.amount.toLocaleString()}</div>
                          <div className={`text-xs font-medium ${
                            document.status === 'Due Soon' ? 'text-amber-600' : 'text-slate-600'
                          }`}>
                            {document.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Bookings</h2>
                  <div className="space-y-4">
                    {bookings.slice(0, 4).map((booking, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <div className="font-medium text-slate-900">{booking.id}</div>
                          <div className="text-sm text-slate-600">{booking.service}</div>
                          <div className="text-xs text-slate-500">{booking.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">₹{booking.amount.toLocaleString()}</div>
                          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                            booking.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
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
            )}

            
            {activeTab === 'documents' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-900">Travel Documents</h2>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                      Apply New Document
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Period</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Document Type</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Due Date</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Fee</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {travelDocuments.map((document, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="py-4 px-6 font-medium text-slate-900">{document.period}</td>
                          <td className="py-4 px-6 text-slate-700">{document.type}</td>
                          <td className="py-4 px-6 text-slate-700">{document.dueDate}</td>
                          <td className="py-4 px-6 font-semibold text-slate-900">₹{document.amount.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              document.status === 'Approved' ? 'bg-green-100 text-green-600' :
                              document.status === 'Due Soon' ? 'bg-amber-100 text-amber-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {document.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                                {document.status === 'Approved' ? 'View' : 'Apply'}
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

            
            {activeTab === 'bookings' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-900">Travel Bookings</h2>
                    <div className="flex space-x-3">
                      <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50">
                        Import Itinerary
                      </button>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                        New Booking
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Booking ID</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Service</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Date</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Amount</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Tax & Fees</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {bookings.map((booking, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="py-4 px-6 font-medium text-slate-900">{booking.id}</td>
                          <td className="py-4 px-6 text-slate-700">{booking.service}</td>
                          <td className="py-4 px-6 text-slate-700">{booking.date}</td>
                          <td className="py-4 px-6 font-semibold text-slate-900">₹{booking.amount.toLocaleString()}</td>
                          <td className="py-4 px-6 text-slate-700">₹{booking.tax.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                              booking.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {booking.status}
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
                      <span className="font-semibold text-slate-900">Total Trip Cost</span>
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
                          <div className="text-sm text-slate-600">Record a new travel expense</div>
                        </div>
                      </div>
                    </button>
                    
                    <button className="w-full p-4 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center">
                        <Calculator className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-medium text-slate-900">Calculate Savings</div>
                          <div className="text-sm text-slate-600">Optimize your travel budget</div>
                        </div>
                      </div>
                    </button>
                    
                    <button className="w-full p-4 text-left border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <div className="font-medium text-slate-900">Export Budget</div>
                          <div className="text-sm text-slate-600">Download travel expense report</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            
            {activeTab === 'agents' && (
              <div>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Find Professional Travel Experts</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Get dedicated travel expert support starting from ₹1,800/trip. All our agents are verified, experienced, and specialized in different travel styles.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {travelAgents.map((agent, index) => (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-slate-900">{agent.name}</h3>
                            {agent.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                            )}
                          </div>
                          <div className="text-sm text-slate-600">{agent.specialization}</div>
                          <div className="text-xs text-slate-500">{agent.experience}</div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-sm mr-1">★</div>
                        <span className="font-medium text-slate-900 text-sm">{agent.rating}</span>
                        <span className="text-slate-500 text-xs ml-1">({agent.reviews} reviews)</span>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-slate-600 mb-2">Languages</div>
                        <div className="flex flex-wrap gap-1">
                          {agent.languages.map((language, index) => (
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
                          <div className="text-lg font-bold text-indigo-600">{agent.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-600">Availability</div>
                          <div className={`text-sm font-medium ${
                            agent.availability === 'Available' ? 'text-green-600' : 'text-amber-600'
                          }`}>
                            {agent.availability}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm">
                          Hire Expert
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
                    View All Travel Experts
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

export default TripBudget;
