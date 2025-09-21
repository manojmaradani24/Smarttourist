// src/pages/DeveloperPortal.tsx
import React, { useState } from 'react';

const DeveloperPortal: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState('documentation');

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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-red-800 to-yellow-600 text-white p-6 shadow-md rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Developer Portal</h1>
        <p className="mt-2 text-blue-100">Build, integrate, and extend our platform with powerful APIs and tools</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Plugin Marketplace Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
              Plugin Marketplace
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-800">Analytics Tool</h3>
                <p className="text-gray-600 text-sm mt-2">Advanced analytics for your SME applications.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">Install</button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-800">CRM Sync</h3>
                <p className="text-gray-600 text-sm mt-2">Integrate your apps with popular CRM systems.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Premium</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-800">Invoice Generator</h3>
                <p className="text-gray-600 text-sm mt-2">Generate and manage invoices easily.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">Install</button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-800">Inventory Manager</h3>
                <p className="text-gray-600 text-sm mt-2">Keep track of your inventory with ease.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Premium</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View All Plugins →
              </button>
            </div>
          </section>

          {/* API Documentation Tabs */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'documentation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('documentation')}
              >
                Documentation
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'examples' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('examples')}
              >
                Examples
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'sdks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('sdks')}
              >
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
                    <h3 className="font-semibold text-gray-800 mb-2">JavaScript</h3>
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
                    <h3 className="font-semibold text-gray-800 mb-2">Python</h3>
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
                    <h3 className="font-semibold text-gray-800 mb-2">JavaScript SDK</h3>
                    <p className="text-gray-600 text-sm">Official SDK for Node.js and browsers</p>
                    <div className="mt-3">
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm">npm install @smartmerchant/sdk</code>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Python Library</h3>
                    <p className="text-gray-600 text-sm">Official Python client library</p>
                    <div className="mt-3">
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm">pip install smartmerchant</code>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Code Editor Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
              Code Editor
            </h2>
            <div className="bg-gray-800 rounded-md p-4">
              <div className="flex text-xs text-gray-400 mb-2">
                <span className="mr-3">Python</span>
                <span className="mr-3">● Running</span>
                <button className="ml-auto text-blue-400 hover:text-blue-300">Run Code</button>
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
                <h3 className="font-semibold text-blue-800 mb-2">API Status</h3>
                <p className="text-blue-700 text-sm">Check the current status of our API services and endpoints.</p>
                <div className="mt-3 flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm text-green-700">All Systems Operational</span>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Community Forum</h3>
                <p className="text-green-700 text-sm">Join our developer community to ask questions and share knowledge.</p>
                <button className="mt-3 text-sm text-green-700 hover:text-green-900 font-medium">
                  Join Discussion →
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Submit Your App Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
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
                  <label htmlFor="appUpload" className="cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    <i className="fas fa-upload mr-2"></i> Choose File
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
                className="w-full bg-gradient-to-r from-blue-900 to-red-800 text-white py-2 px-4 rounded-md hover:from-blue-800 hover:to-red-700 transition-colors shadow-md"
              >
                Submit
              </button>
            </form>
          </section>

          {/* Revenue Sharing Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
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
                <div className="flex flex-col items-center">
                  <div className="w-10 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: '100%' }}></div>
                  <span className="text-xs mt-1">Jan</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: '80%' }}></div>
                  <span className="text-xs mt-1">Feb</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: '40%' }}></div>
                  <span className="text-xs mt-1">Mar</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: '20%' }}></div>
                  <span className="text-xs mt-1">Apr</span>
                </div>
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
                <span className="mr-2">📚</span>
                <span>API Documentation</span>
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2">🛠️</span>
                <span>Developer Guides</span>
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2">🔑</span>
                <span>API Keys Management</span>
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2">📊</span>
                <span>Usage Analytics</span>
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2">💬</span>
                <span>Support Center</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortal;