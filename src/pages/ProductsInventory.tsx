import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface TourPackage {
  id: number;
  name: string;
  category: string;
  price: number;
  cost: number;
  availability: number;
  sku: string;
  status: 'Available' | 'Limited' | 'Sold Out';
  lastUpdated: string;
}

interface AvailabilityAlert {
  id: number;
  packageName: string;
  type: 'limited_availability' | 'sold_out' | 'restock';
  message: string;
  date: string;
}

const TourPackages: React.FC = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lowAvailabilityThreshold, setLowAvailabilityThreshold] = useState(10);
  
  const [packages, setPackages] = useState<TourPackage[]>([
    {
      id: 1,
      name: 'Bali Cultural Experience',
      category: 'Cultural',
      price: 124.99,
      cost: 48.50,
      availability: 45,
      sku: 'CUL-BL-001',
      status: 'Available',
      lastUpdated: '2025-09-15'
    },
    {
      id: 2,
      name: 'Thailand Adventure Tour',
      category: 'Adventure',
      price: 214.99,
      cost: 84.25,
      availability: 8,
      sku: 'ADV-TH-002',
      status: 'Limited',
      lastUpdated: '2025-09-17'
    },
    {
      id: 3,
      name: 'European Heritage Journey',
      category: 'Cultural',
      price: 334.99,
      cost: 122.75,
      availability: 0,
      sku: 'CUL-EU-003',
      status: 'Sold Out',
      lastUpdated: '2025-09-10'
    },
    {
      id: 4,
      name: 'Maldives Luxury Getaway',
      category: 'Luxury',
      price: 519.99,
      cost: 186.80,
      availability: 32,
      sku: 'LUX-ML-004',
      status: 'Available',
      lastUpdated: '2025-09-16'
    },
    {
      id: 5,
      name: 'Himalayan Trekking Expedition',
      category: 'Adventure',
      price: 312.99,
      cost: 103.90,
      availability: 5,
      sku: 'ADV-HM-005',
      status: 'Limited',
      lastUpdated: '2025-09-18'
    },
    {
      id: 6,
      name: 'Japanese Cultural Immersion',
      category: 'Cultural',
      price: 419.99,
      cost: 157.50,
      availability: 23,
      sku: 'CUL-JP-006',
      status: 'Available',
      lastUpdated: '2025-09-14'
    },
    {
      id: 7,
      name: 'Safari Adventure Kenya',
      category: 'Adventure',
      price: 722.99,
      cost: 248.25,
      availability: 3,
      sku: 'ADV-KE-007',
      status: 'Limited',
      lastUpdated: '2025-09-18'
    },
    {
      id: 8,
      name: 'Dubai Luxury Experience',
      category: 'Luxury',
      price: 814.99,
      cost: 294.50,
      availability: 0,
      sku: 'LUX-DB-008',
      status: 'Sold Out',
      lastUpdated: '2025-09-12'
    },
    {
      id: 9,
      name: 'Greek Island Hopping',
      category: 'Cultural',
      price: 429.99,
      cost: 152.80,
      availability: 67,
      sku: 'CUL-GR-009',
      status: 'Available',
      lastUpdated: '2025-09-16'
    },
    {
      id: 10,
      name: 'New Zealand Adventure',
      category: 'Adventure',
      price: 627.99,
      cost: 212.25,
      availability: 12,
      sku: 'ADV-NZ-010',
      status: 'Available',
      lastUpdated: '2025-09-17'
    },
    {
      id: 11,
      name: 'Maldives Overwater Villa',
      category: 'Luxury',
      price: 1029.99,
      cost: 310.50,
      availability: 2,
      sku: 'LUX-MV-011',
      status: 'Limited',
      lastUpdated: '2025-09-18'
    },
    {
      id: 12,
      name: 'Vietnam Cultural Tour',
      category: 'Cultural',
      price: 311.99,
      cost: 113.80,
      availability: 0,
      sku: 'CUL-VN-012',
      status: 'Sold Out',
      lastUpdated: '2025-09-15'
    }
  ]);

  const [availabilityAlerts] = useState<AvailabilityAlert[]>([
    {
      id: 1,
      packageName: 'Thailand Adventure Tour',
      type: 'limited_availability',
      message: 'Limited spots available (8 slots remaining)',
      date: '2025-09-17'
    },
    {
      id: 2,
      packageName: 'European Heritage Journey',
      type: 'sold_out',
      message: 'Tour package is sold out',
      date: '2025-09-15'
    },
    {
      id: 3,
      packageName: 'Himalayan Trekking Expedition',
      type: 'limited_availability',
      message: 'Limited spots available (5 slots remaining)',
      date: '2025-09-18'
    },
    {
      id: 4,
      packageName: 'Safari Adventure Kenya',
      type: 'limited_availability',
      message: 'Limited spots available (3 slots remaining)',
      date: '2025-09-18'
    },
    {
      id: 5,
      packageName: 'Dubai Luxury Experience',
      type: 'sold_out',
      message: 'Tour package is sold out',
      date: '2025-09-12'
    },
    {
      id: 6,
      packageName: 'Maldives Overwater Villa',
      type: 'limited_availability',
      message: 'Limited spots available (2 slots remaining)',
      date: '2025-09-18'
    },
    {
      id: 7,
      packageName: 'Vietnam Cultural Tour',
      type: 'sold_out',
      message: 'Tour package is sold out',
      date: '2025-09-15'
    }
  ]);

  const totalPackages = packages.length;
  const availablePackages = packages.filter(p => p.status === 'Available').length;
  const limitedPackages = packages.filter(p => p.status === 'Limited').length;
  const soldOutPackages = packages.filter(p => p.status === 'Sold Out').length;
  const totalPackageValue = packages.reduce((sum, pkg) => sum + (pkg.availability * pkg.cost), 0);

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  const categories = ['all', ...new Set(packages.map(pkg => pkg.category))];

  const updateAvailability = (packageId: number, newAvailability: number) => {
    setPackages(packages.map(pkg => {
      if (pkg.id === packageId) {
        const status = newAvailability === 0 
          ? 'Sold Out' 
          : newAvailability <= lowAvailabilityThreshold 
            ? 'Limited' 
            : 'Available';
            
        return {
          ...pkg,
          availability: newAvailability,
          status,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      return pkg;
    }));
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        <div className="flex-1 overflow-auto bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Tour Packages & Availability</h1>
              <p className="text-lg text-gray-600 mt-2">Manage your tour packages and availability slots</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    <span className="text-blue-600 text-xl">✈️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Packages</p>
                    <h3 className="text-2xl font-bold text-gray-900">{totalPackages}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-100 p-3 mr-4">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Available</p>
                    <h3 className="text-2xl font-bold text-gray-900">{availablePackages}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-yellow-100 p-3 mr-4">
                    <span className="text-yellow-600 text-xl">⚠️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Limited Spots</p>
                    <h3 className="text-2xl font-bold text-gray-900">{limitedPackages}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-red-100 p-3 mr-4">
                    <span className="text-red-600 text-xl">✗</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Sold Out</p>
                    <h3 className="text-2xl font-bold text-gray-900">{soldOutPackages}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('packages')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'packages' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Tour Packages
                  </button>
                  <button
                    onClick={() => setActiveTab('alerts')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'alerts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Availability Alerts
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Package Analytics
                  </button>
                </nav>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center">
                  <span className="mr-2">+</span> Add Package
                </button>
              </div>
            </div>

            {activeTab === 'packages' && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="max-h-96 overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tour Package
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Package Code
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Availability
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPackages.map((pkg) => (
                          <tr key={pkg.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                                  <span className="text-gray-500">🏝️</span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{pkg.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {pkg.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {pkg.sku}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${pkg.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <input
                                  type="number"
                                  min="0"
                                  value={pkg.availability}
                                  onChange={(e) => updateAvailability(pkg.id, parseInt(e.target.value) || 0)}
                                  className="w-20 border border-gray-300 rounded-md px-2 py-1"
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${pkg.status === 'Available' ? 'bg-green-100 text-green-800' : 
                                  pkg.status === 'Limited' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}`}>
                                {pkg.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                              <button className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Availability Alerts</h3>
                  <p className="mt-1 text-sm text-gray-600">Recent availability notifications that require your attention</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <ul className="divide-y divide-gray-200">
                    {availabilityAlerts.map((alert) => (
                      <li key={alert.id} className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center
                            ${alert.type === 'limited_availability' ? 'bg-yellow-100' : 
                              alert.type === 'sold_out' ? 'bg-red-100' : 'bg-blue-100'}`}>
                            <span className={
                              alert.type === 'limited_availability' ? 'text-yellow-600' : 
                              alert.type === 'sold_out' ? 'text-red-600' : 'text-blue-600'
                            }>
                              {alert.type === 'limited_availability' ? '⚠️' : alert.type === 'sold_out' ? '✗' : '🔄'}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{alert.packageName}</div>
                            <div className="text-sm text-gray-500">{alert.message}</div>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">{alert.date}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 max-h-96 overflow-y-auto">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Package Analytics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Total Package Value</h4>
                      <p className="text-2xl font-bold text-gray-900">${totalPackageValue.toFixed(2)}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Low Availability Threshold</h4>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="1"
                          max="50"
                          value={lowAvailabilityThreshold}
                          onChange={(e) => setLowAvailabilityThreshold(parseInt(e.target.value))}
                          className="w-full mr-3"
                        />
                        <span className="text-sm font-medium text-gray-900">{lowAvailabilityThreshold}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-600 mb-4">Availability Levels by Category</h4>
                    <div className="space-y-3">
                      {Array.from(new Set(packages.map(p => p.category))).map(category => {
                        const categoryPackages = packages.filter(p => p.category === category);
                        const availableCount = categoryPackages.filter(p => p.status === 'Available').length;
                        const limitedCount = categoryPackages.filter(p => p.status === 'Limited').length;
                        const soldOutCount = categoryPackages.filter(p => p.status === 'Sold Out').length;
                        
                        return (
                          <div key={category} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-900">{category}</span>
                              <span className="text-sm text-gray-500">{categoryPackages.length} packages</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-green-600 h-2.5 rounded-full" 
                                style={{ width: `${(availableCount / categoryPackages.length) * 100}%` }}
                              ></div>
                              <div 
                                className="bg-yellow-400 h-2.5 rounded-full -mt-2.5" 
                                style={{ 
                                  width: `${(limitedCount / categoryPackages.length) * 100}%`, 
                                  marginLeft: `${(availableCount / categoryPackages.length) * 100}%` 
                                }}
                              ></div>
                              <div 
                                className="bg-red-600 h-2.5 rounded-full -mt-2.5" 
                                style={{ 
                                  width: `${(soldOutCount / categoryPackages.length) * 100}%`, 
                                  marginLeft: `${((availableCount + limitedCount) / categoryPackages.length) * 100}%` 
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
