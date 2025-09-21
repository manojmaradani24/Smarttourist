// src/pages/DeveloperPortal.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  FileText, 
  Package, 
  DollarSign, 
  Settings, 
  HelpCircle, 
  User, 
  LogOut,
  ChevronDown,
  Bell,
  Search,
  BarChart3,
  Download,
  Play,
  Server,
  Cpu,
  Zap,
  Globe,
  Shield,
  GitBranch
} from 'lucide-react';

const DeveloperPortal: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState('documentation');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('dashboard');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('App Name:', appName);
    console.log('Description:', appDescription);
    console.log('File:', selectedFile);
  };

  // Mock data for API usage
  const apiUsageData = [
    { endpoint: '/users', requests: 1250, errors: 12, latency: 120 },
    { endpoint: '/products', requests: 980, errors: 5, latency: 85 },
    { endpoint: '/orders', requests: 750, errors: 8, latency: 150 },
    { endpoint: '/inventory', requests: 620, errors: 3, latency: 95 },
  ];

  // Mock data for revenue
  const revenueData = [
    { month: 'Jan', revenue: 3200 },
    { month: 'Feb', revenue: 4200 },
    { month: 'Mar', revenue: 3800 },
    { month: 'Apr', revenue: 5100 },
    { month: 'May', revenue: 6400 },
    { month: 'Jun', revenue: 7200 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 min-h-screen flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold flex items-center">
            <Code className="mr-2" />
            Developer Portal
          </h1>
          <p className="text-gray-400 text-sm mt-1">Build, integrate, and extend</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
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
                APIs
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeNav === 'plugins' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveNav('plugins')}
              >
                <Package className="h-5 w-5 mr-3" />
                Plugins
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
          
          <div className="mt-8 pt-4 border-t border-gray-800">
            <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <HelpCircle className="h-4 w-4 mr-3" />
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <Globe className="h-4 w-4 mr-3" />
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <Shield className="h-4 w-4 mr-3" />
                  API Status
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Developer Name</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
          <button className="w-full flex items-center text-gray-300 hover:text-white text-sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 rounded-md hover:bg-gray-100 mr-4"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
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
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                DN
              </div>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-blue-900 via-red-800 to-yellow-600 text-white p-6 shadow-md rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-2">Developer Portal</h1>
            <p className="text-blue-100">Build, integrate, and extend our platform with powerful APIs and tools</p>
            <div className="flex mt-4 space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">API Endpoints</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm">Revenue Share</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* API Usage Statistics */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  API Usage Statistics
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Errors</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Latency (ms)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {apiUsageData.map((data, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{data.endpoint}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.requests}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.errors}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.latency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Plugin Marketplace Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Plugin Marketplace
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-800">Analytics Tool</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Advanced analytics for your SME applications.</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Install</button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-2">
                      <Cpu className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-800">CRM Sync</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Integrate your apps with popular CRM systems.</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Premium</span>
                      <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-800">Invoice Generator</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Generate and manage invoices easily.</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Install</button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-2">
                      <Package className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-800">Inventory Manager</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Keep track of your inventory with ease.</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Premium</span>
                      <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
                    View All Plugins <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </section>

              {/* API Documentation Tabs */}
              <section className="bg-white rounded-lg shadow-md p-6">
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
                    SDKs & Libraries
                  </button>
                </div>

                {activeTab === 'documentation' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">API Documentation</h2>
                    <p className="text-gray-700 mb-4">
                      The API is organized around REST. Our API has resource-oriented URLs and returns JSON-encoded responses.
                    </p>
                    
                    <h3 className="font-semibold text-gray-800 mt-6 mb-2">GET /users</h3>
                    <h4 className="font-medium text-gray-700 mt-4 mb-2">Parameters</h4>
                    <table className="min-w-full divide-y divide-gray-200 mt-2">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">id</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">integer</td>
                          <td className="px-4 py-2 text-sm text-gray-700">The ID of the user</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">limit</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">integer</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Number of results to return (max: 100)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">offset</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">integer</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Number of results to skip</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <h4 className="font-medium text-gray-700 mt-6 mb-2">Response</h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
{`{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2023-01-15T10:30:00Z"
    }
  ],
  "total": 1,
  "limit": 10,
  "offset": 0
}`}
                    </pre>
                    
                    <h4 className="font-medium text-gray-700 mt-6 mb-2">Request</h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
                      {`fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));`}
                    </pre>
                  </div>
                )}

                {activeTab === 'examples' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">API Examples</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          JavaScript
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-3 rounded-md overflow-x-auto text-xs">
{`// Create a new user
const response = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
const data = await response.json();`}
                        </pre>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          Python
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-3 rounded-md overflow-x-auto text-xs">
{`import requests

url = "https://api.example.com/users"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "name": "John Doe",
    "email": "john@example.com"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
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
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          JavaScript SDK
                        </h3>
                        <p className="text-gray-600 text-sm">Official SDK for Node.js and browsers</p>
                        <div className="mt-3">
                          <code className="bg-gray-200 px-2 py-1 rounded text-sm">npm install @smartmerchant/sdk</code>
                        </div>
                        <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          Download SDK
                        </button>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          Python Library
                        </h3>
                        <p className="text-gray-600 text-sm">Official Python client library</p>
                        <div className="mt-3">
                          <code className="bg-gray-200 px-2 py-1 rounded text-sm">pip install smartmerchant</code>
                        </div>
                        <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          Download Library
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Code Editor Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Code Editor
                </h2>
                <div className="bg-gray-800 rounded-md p-4">
                  <div className="flex text-xs text-gray-400 mb-2">
                    <span className="mr-3">Python</span>
                    <span className="mr-3">● Running</span>
                    <button className="ml-auto text-blue-400 hover:text-blue-300 flex items-center">
                      <Play className="h-3 w-3 mr-1" />
                      Run Code
                    </button>
                  </div>
                  <pre className="text-gray-100 overflow-x-auto text-sm">
{`def fetch_data():
    url = "https://api.example.com/data"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"API request failed: {response.status_code}")

# Example usage
data = fetch_data()
print(data)`}
                  </pre>
                </div>
              </section>

              {/* Additional Resources Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                  Additional Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      API Status
                    </h3>
                    <p className="text-blue-700 text-sm">Check the current status of our API services and endpoints.</p>
                    <div className="mt-3 flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-green-700">All Systems Operational</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Community Forum
                    </h3>
                    <p className="text-green-700 text-sm">Join our developer community to ask questions and share knowledge.</p>
                    <button className="mt-3 text-sm text-green-700 hover:text-green-900 font-medium flex items-center">
                      Join Discussion <ChevronDown className="ml-1 h-4 w-4 transform rotate-270" />
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Submit Your App Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Submit Your App
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">
                      App Name
                    </label>
                    <input
                      type="text"
                      id="appName"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="appDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="appDescription"
                      value={appDescription}
                      onChange={(e) => setAppDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="appUpload" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload
                    </label>
                    <div className="flex items-center">
                      <label htmlFor="appUpload" className="cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Choose File
                      </label>
                      <input
                        type="file"
                        id="appUpload"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {selectedFile && (
                        <span className="ml-3 text-sm text-gray-600 truncate max-w-xs">
                          {selectedFile.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900 to-red-800 text-white py-2 px-4 rounded-md hover:from-blue-800 hover:to-red-700 transition-colors shadow-md flex items-center justify-center"
                  >
                    <GitBranch className="h-4 w-4 mr-2" />
                    Submit Application
                  </button>
                </form>
              </section>

              {/* Revenue Sharing Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Revenue Sharing
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                    <p className="text-2xl font-bold text-gray-800">$12,340</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Monthly Earnings</h3>
                    <p className="text-2xl font-bold text-gray-800">$3,200</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Share Percentage</h3>
                    <p className="text-2xl font-bold text-gray-800">70%</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Monthly Revenue</h3>
                  <div className="flex items-end justify-between h-40 px-4 border-b border-gray-200">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" 
                          style={{ height: `${(data.revenue / 8000) * 100}%` }}
                        ></div>
                        <span className="text-xs mt-1">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quick Links Section */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>API Documentation</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Developer Guides</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>API Keys Management</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    <span>Usage Analytics</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    <span>Support Center</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Developer Portal</h3>
              <p className="text-gray-400">Build, integrate, and extend our platform with powerful APIs and tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Forums</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 SmartMerchant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DeveloperPortal;