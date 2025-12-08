import React, { useState } from 'react';
import { 
  Package, 
  DollarSign, 
  Settings, 
  HelpCircle, 
  User, 
  LogOut,
  BarChart3,
  Search,
  Download,
  Code,
  FileText,
  Server,
  Shield,
  Globe,
  Bell,
  ChevronDown
} from 'lucide-react';

const TravelPartnerPortal: React.FC = () => {
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState('documentation');
  const [activeNav, setActiveNav] = useState('dashboard');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Package Name:', packageName);
    console.log('Description:', packageDescription);
    console.log('File:', selectedFile);
  };

  const apiUsageData = [
    { endpoint: '/products', requests: 2250, errors: 8, latency: 95 },
    { endpoint: '/orders', requests: 1580, errors: 3, latency: 75 },
    { endpoint: '/customers', requests: 920, errors: 2, latency: 110 },
    { endpoint: '/inventory', requests: 780, errors: 5, latency: 85 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 5200 },
    { month: 'Mar', revenue: 4800 },
    { month: 'Apr', revenue: 6100 },
    { month: 'May', revenue: 7400 },
    { month: 'Jun', revenue: 8200 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold flex items-center">
            <Package className="mr-2" />
            Partner Portal
          </h1>
          <p className="text-gray-400 text-sm mt-1">Build and manage integrations</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'dashboard' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('dashboard')}
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'apis' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('apis')}
              >
                <Server className="h-5 w-5 mr-3" />
                Merchant APIs
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'revenue' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('revenue')}
              >
                <DollarSign className="h-5 w-5 mr-3" />
                Revenue
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'documentation' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('documentation')}
              >
                <FileText className="h-5 w-5 mr-3" />
                Documentation
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'settings' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('settings')}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Partner</p>
              <p className="text-xs text-gray-400">partner@example.com</p>
            </div>
          </div>
          <button className="w-full flex items-center text-gray-300 hover:text-white text-sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search APIs, documentation..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">P</div>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-2">Partner Portal</h1>
            <p className="text-blue-100">Build and integrate with our merchant platform APIs</p>
            <div className="flex mt-4 space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm">API Endpoints</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Partner Support</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">15%</div>
                <div className="text-sm">Commission</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <section className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  API Usage Statistics
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Endpoint</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requests</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Errors</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Latency (ms)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {apiUsageData.map((data, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{data.endpoint}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{data.requests}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{data.errors}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{data.latency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`px-4 py-2 font-medium flex items-center ${activeTab === 'documentation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('documentation')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Documentation
                  </button>
                  <button
                    className={`px-4 py-2 font-medium flex items-center ${activeTab === 'examples' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('examples')}
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Examples
                  </button>
                  <button
                    className={`px-4 py-2 font-medium flex items-center ${activeTab === 'sdks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('sdks')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    SDKs
                  </button>
                </div>

                {activeTab === 'documentation' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Merchant API Documentation</h2>
                    <p className="text-gray-700 mb-4">
                      RESTful APIs for e-commerce integration and management.
                    </p>
                    
                    <h3 className="font-semibold text-gray-800 mt-6 mb-2">GET /products</h3>
                    <h4 className="font-medium text-gray-700 mt-4 mb-2">Parameters</h4>
                    <table className="min-w-full divide-y divide-gray-200 mt-2">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-700">category</td>
                          <td className="px-4 py-2 text-sm text-gray-700">string</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Product category filter</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-700">limit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">integer</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Number of results (max: 100)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'examples' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">API Examples</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">JavaScript</h3>
                        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs">
{`// Fetch products
fetch('https://api.merchant.com/products')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sdks' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">SDKs & Libraries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">JavaScript SDK</h3>
                        <code className="bg-gray-200 px-2 py-1 rounded text-sm">npm install @merchant/sdk</code>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            <div className="space-y-6">
              <section className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Revenue Sharing
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                    <p className="text-2xl font-bold text-gray-800">$24,680</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Monthly Earnings</h3>
                    <p className="text-2xl font-bold text-gray-800">$4,100</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Monthly Revenue</h3>
                  <div className="flex items-end justify-between h-32 px-4 border-b border-gray-200">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-4 bg-blue-500 rounded-t" 
                          style={{ height: `${(data.revenue / 10000) * 100}%` }}
                        ></div>
                        <span className="text-xs mt-1">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>API Documentation</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Partner Guides</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>API Keys</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    <span>Support</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TravelPartnerPortal;
