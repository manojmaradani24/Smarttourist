import React, { useState, useEffect } from 'react';
import { 
  FiPackage, FiTruck, FiDollarSign, FiRefreshCw, 
  FiTrendingUp, FiBarChart2, FiPieChart, FiCalendar,
  FiDownload, FiPrinter, FiFilter, FiSearch, FiBell,
  FiSettings, FiHelpCircle, FiUser, FiLogOut, FiMenu,
  FiX, FiChevronDown, FiChevronUp, FiCheckCircle,
  FiAlertCircle, FiClock, FiMap, FiHome, FiShoppingCart
} from 'react-icons/fi';

const ShiprocketDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [dateRange, setDateRange] = useState('last30');
  const [loading, setLoading] = useState(true);

  // Sample data - replace with your actual data
  const [dashboardData, setDashboardData] = useState({
    todayOrders: 0,
    yesterdayOrders: 0,
    totalShipments: 2,
    returnedRequests: 0,
    todayRevenue: 0,
    yesterdayRevenue: 0,
    ndrDetails: 0,
    reattemptRequests: 0,
    ndrDelivered: 0,
    getStarted: 0,
    notPending: 0,
    averageShippingCost: 0,
    totalCOD: 0,
    totalAvailable: 0,
    coolAvailable: 0,
    delivered: 0,
    retained: 0,
    undelivered: 0,
    lostDamaged: 0,
    ontimeDeliveries: 0,
    lateDeliveries: 0
  });

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardData({
        todayOrders: 15,
        yesterdayOrders: 12,
        totalShipments: 42,
        returnedRequests: 2,
        todayRevenue: 12500,
        yesterdayRevenue: 9800,
        ndrDetails: 3,
        reattemptRequests: 2,
        ndrDelivered: 1,
        getStarted: 5,
        notPending: 3,
        averageShippingCost: 85,
        totalCOD: 45000,
        totalAvailable: 32000,
        coolAvailable: 28000,
        delivered: 32,
        retained: 5,
        undelivered: 3,
        lostDamaged: 2,
        ontimeDeliveries: 28,
        lateDeliveries: 4
      });
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Notification data
  const notifications = [
    { id: 1, message: 'New order received', time: '5 min ago', read: false },
    { id: 2, message: 'Shipment delivered successfully', time: '1 hour ago', read: false },
    { id: 3, message: 'COD payment received', time: '2 hours ago', read: true },
  ];

  // Recent shipments data
  const recentShipments = [
    { id: 'SRT123456', status: 'Delivered', customer: 'Rajesh Kumar', date: '20 Sep 2023', amount: '₹450' },
    { id: 'SRT123457', status: 'In Transit', customer: 'Priya Sharma', date: '19 Sep 2023', amount: '₹380' },
    { id: 'SRT123458', status: 'Out for Delivery', customer: 'Vikram Singh', date: '19 Sep 2023', amount: '₹520' },
    { id: 'SRT123459', status: 'Pending', customer: 'Anjali Patel', date: '18 Sep 2023', amount: '₹290' },
  ];

  // Quick actions
  const quickActions = [
    { title: 'Create Order', icon: <FiShoppingCart className="text-blue-500" />, color: 'bg-blue-50' },
    { title: 'Schedule Pickup', icon: <FiTruck className="text-green-500" />, color: 'bg-green-50' },
    { title: 'Generate Label', icon: <FiPrinter className="text-purple-500" />, color: 'bg-purple-50' },
    { title: 'Track Shipment', icon: <FiMap className="text-orange-500" />, color: 'bg-orange-50' },
  ];

  // Loading skeleton component
  const SkeletonLoader = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-800">
          <h1 className="text-xl font-bold">Logistics</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <div className="mb-6">
            <p className="text-blue-200 text-sm uppercase tracking-wider mb-2">Main</p>
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`w-full flex items-center px-3 py-2 rounded-lg mb-1 ${activeTab === 'dashboard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              <FiHome className="mr-3" />
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('databoard')} 
              className={`w-full flex items-center px-3 py-2 rounded-lg mb-1 ${activeTab === 'databoard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              <FiBarChart2 className="mr-3" />
              DataBoard
            </button>
            <button 
              onClick={() => setActiveTab('reports')} 
              className={`w-full flex items-center px-3 py-2 rounded-lg mb-1 ${activeTab === 'reports' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              <FiPieChart className="mr-3" />
              Reports
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-blue-200 text-sm uppercase tracking-wider mb-2">Tools</p>
            <button className="w-full flex items-center px-3 py-2 rounded-lg mb-1 hover:bg-blue-800">
              <FiTruck className="mr-3" />
              Shipments
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-lg mb-1 hover:bg-blue-800">
              <FiDollarSign className="mr-3" />
              Billing
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-lg mb-1 hover:bg-blue-800">
              <FiSettings className="mr-3" />
              Settings
            </button>
          </div>
          
          <div>
            <p className="text-blue-200 text-sm uppercase tracking-wider mb-2">Support</p>
            <button className="w-full flex items-center px-3 py-2 rounded-lg mb-1 hover:bg-blue-800">
              <FiHelpCircle className="mr-3" />
              Help Center
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4">
                <FiMenu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 relative"
                >
                  <FiBell className="h-5 w-5 text-gray-600" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
                
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="p-3 border-b border-gray-200">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div key={notification.id} className={`p-3 border-b border-gray-100 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
                          <p className="text-sm font-medium">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 text-center">
                      <button className="text-sm text-blue-600 font-medium">View All</button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2"
                >
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                    U
                  </div>
                  <span className="hidden md:block text-sm font-medium">User Name</span>
                  {profileOpen ? <FiChevronUp className="h-4 w-4" /> : <FiChevronDown className="h-4 w-4" />}
                </button>
                
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="p-4 border-b border-gray-200">
                      <p className="font-medium">User Name</p>
                      <p className="text-sm text-gray-500">user@example.com</p>
                    </div>
                    <div className="p-2">
                      <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                        <FiUser className="mr-2" /> Profile
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                        <FiSettings className="mr-2" /> Settings
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                        <FiLogOut className="mr-2" /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Quick Stats and Filters */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Today's Overview</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last7">Last 7 Days</option>
                  <option value="last30">Last 30 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
                <FiCalendar className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <button className="bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-50">
                <FiFilter className="h-4 w-4 text-gray-600" />
              </button>
              <button className="bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-50">
                <FiDownload className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div>
              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {quickActions.map((action, index) => (
                  <div key={index} className={`${action.color} rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow`}>
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <span className="text-sm font-medium">{action.title}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Grid - Top 6 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Today's Orders */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-32 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiShoppingCart className="mr-2 text-blue-500" /> Today's Orders
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">{dashboardData.todayOrders}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-500">Yesterday: {dashboardData.yesterdayOrders}</span>
                        {dashboardData.todayOrders > dashboardData.yesterdayOrders ? (
                          <FiTrendingUp className="ml-2 text-green-500" />
                        ) : (
                          <FiTrendingUp className="ml-2 text-red-500 transform rotate-180" />
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Total Shipments */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-32 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiPackage className="mr-2 text-purple-500" /> Total Shipments
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">{dashboardData.totalShipments}</p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500">Returned Requests: {dashboardData.returnedRequests}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Today's Revenue */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-32 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiDollarSign className="mr-2 text-green-500" /> Today's Revenue
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">₹{dashboardData.todayRevenue.toLocaleString()}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-500">Yesterday: ₹{dashboardData.yesterdayRevenue.toLocaleString()}</span>
                        {dashboardData.todayRevenue > dashboardData.yesterdayRevenue ? (
                          <FiTrendingUp className="ml-2 text-green-500" />
                        ) : (
                          <FiTrendingUp className="ml-2 text-red-500 transform rotate-180" />
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* NDR Details */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-32 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiAlertCircle className="mr-2 text-orange-500" /> NDR Details
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">{dashboardData.ndrDetails}</p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500">Total NDR: Yes/Reattempt Request</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Buyer Reattempt Request */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-40 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiRefreshCw className="mr-2 text-blue-500" /> Buyer Reattempt Request
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">{dashboardData.reattemptRequests}</p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500">NDR Delivered: {dashboardData.ndrDelivered}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Get Started */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {loading ? (
                    <>
                      <SkeletonLoader className="h-6 w-32 mb-2" />
                      <SkeletonLoader className="h-8 w-16 mb-4" />
                      <SkeletonLoader className="h-4 w-40" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                        <FiCheckCircle className="mr-2 text-green-500" /> Get Started
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">{dashboardData.getStarted}</p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500">Not Pending: {dashboardData.notPending}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Recent Shipments and Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Recent Shipments */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Shipments</h3>
                    <button className="text-blue-600 text-sm font-medium">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Order ID</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Customer</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Date</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Status</th>
                          <th className="text-right py-2 text-sm font-medium text-gray-500">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentShipments.map(shipment => (
                          <tr key={shipment.id} className="border-b border-gray-100">
                            <td className="py-3 text-sm font-medium">{shipment.id}</td>
                            <td className="py-3 text-sm text-gray-600">{shipment.customer}</td>
                            <td className="py-3 text-sm text-gray-600">{shipment.date}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                shipment.status === 'Out for Delivery' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {shipment.status}
                              </span>
                            </td>
                            <td className="py-3 text-sm text-gray-600 text-right">{shipment.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Delivery Analytics */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Performance</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-700">{dashboardData.ontimeDeliveries}</p>
                      <p className="text-sm text-green-600">On-time Deliveries</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-red-700">{dashboardData.lateDeliveries}</p>
                      <p className="text-sm text-red-600">Late Deliveries</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Shipment Status</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-700">{dashboardData.delivered}</p>
                      <p className="text-sm text-blue-600">Delivered</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-700">{dashboardData.retained}</p>
                      <p className="text-sm text-green-600">Retained</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-yellow-700">{dashboardData.undelivered}</p>
                      <p className="text-sm text-yellow-600">Undelivered</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-red-700">{dashboardData.lostDamaged}</p>
                      <p className="text-sm text-red-600">Lost/Damaged</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last 30 Days Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Last 30 days</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Average Shipping Cost */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Average Shipping Cost</h3>
                    <p className="text-3xl font-bold text-gray-900">₹{dashboardData.averageShippingCost}</p>
                  </div>

                  {/* COD Status */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">COD Status</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Total COD (Last 30 Days): ₹{dashboardData.totalCOD.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Total Available: ₹{dashboardData.totalAvailable.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">COD Available: ₹{dashboardData.coolAvailable.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DataBoard Content */}
          {activeTab === 'databoard' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">DataBoard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center"><FiPackage className="mr-2" /> Others</li>
                    <li className="text-gray-700 flex items-center"><FiRefreshCw className="mr-2" /> Returns</li>
                    <li className="text-gray-700 flex items-center"><FiTruck className="mr-2" /> Delivery Board</li>
                    <li className="text-gray-700 flex items-center"><FiClock className="mr-2" /> Quick - Instant Delivery</li>
                    <li className="text-gray-700 flex items-center"><FiBarChart2 className="mr-2" /> Weight Management</li>
                    <li className="text-gray-700 flex items-center"><FiUser className="mr-2" /> Buyer Experience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 flex justify-between"><span>Today:</span> <span>₹0</span></p>
                    <p className="text-gray-700 flex justify-between"><span>Yesterday:</span> <span>₹0</span></p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Trading Your Attention Today</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Settings</h4>
                    <p className="text-sm text-gray-600">String & Manage</p>
                    <p className="text-sm text-gray-500 mt-1">Run Closer to be Processed</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Tools</h4>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center"><FiBarChart2 className="mr-2" /> Apps</li>
                      <li className="text-sm text-gray-600 flex items-center"><FiDollarSign className="mr-2" /> Billing</li>
                      <li className="text-sm text-gray-600 flex items-center"><FiSettings className="mr-2" /> Settings</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Mining Pickups</h3>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Help & Support</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">20, 2025</p>
                    <p className="text-sm text-gray-600">Sep 22, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <FiDownload className="mr-2" /> Download All
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <FiPrinter className="mr-2" /> Labels
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <FiDollarSign className="mr-2" /> Invoices
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <FiFileText className="mr-2" /> Manifests
                </button>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Reports</h2>
              <div className="flex flex-col items-center justify-center py-12">
                <FiBarChart2 className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-gray-600">Data not found for the selected filter.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Generate Report
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ShiprocketDashboard;