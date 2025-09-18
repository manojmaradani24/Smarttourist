import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


// Define types for our data
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  sku: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

interface InventoryAlert {
  id: number;
  productName: string;
  type: 'low_stock' | 'out_of_stock' | 'restock';
  message: string;
  date: string;
}

const ProductsInventory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lowStockThreshold, setLowStockThreshold] = useState(10);
  
  // Sample product data
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Custom Printed T-Shirt',
      category: 'Apparel',
      price: 24.99,
      cost: 8.50,
      stock: 45,
      sku: 'APP-TS-001',
      status: 'In Stock',
      lastUpdated: '2025-09-15'
    },
    {
      id: 2,
      name: 'Personalized Mugs',
      category: 'Drinkware',
      price: 14.99,
      cost: 4.25,
      stock: 8,
      sku: 'DW-MG-002',
      status: 'Low Stock',
      lastUpdated: '2025-09-17'
    },
    {
      id: 3,
      name: 'Engraved Wooden Sign',
      category: 'Home Decor',
      price: 34.99,
      cost: 12.75,
      stock: 0,
      sku: 'HD-WS-003',
      status: 'Out of Stock',
      lastUpdated: '2025-09-10'
    },
    {
      id: 4,
      name: 'Custom Phone Case',
      category: 'Accessories',
      price: 19.99,
      cost: 6.80,
      stock: 32,
      sku: 'ACC-PC-004',
      status: 'In Stock',
      lastUpdated: '2025-09-16'
    },
    {
      id: 5,
      name: 'Personalized Notebook',
      category: 'Stationery',
      price: 12.99,
      cost: 3.90,
      stock: 5,
      sku: 'ST-NB-005',
      status: 'Low Stock',
      lastUpdated: '2025-09-18'
    }
  ]);

  // Sample inventory alerts
  const [inventoryAlerts] = useState<InventoryAlert[]>([
    {
      id: 1,
      productName: 'Personalized Mugs',
      type: 'low_stock',
      message: 'Stock is running low (8 units remaining)',
      date: '2025-09-17'
    },
    {
      id: 2,
      productName: 'Engraved Wooden Sign',
      type: 'out_of_stock',
      message: 'Product is out of stock',
      date: '2025-09-15'
    },
    {
      id: 3,
      productName: 'Personalized Notebook',
      type: 'low_stock',
      message: 'Stock is running low (5 units remaining)',
      date: '2025-09-18'
    }
  ]);

  // Calculate inventory metrics
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.status === 'In Stock').length;
  const lowStockProducts = products.filter(p => p.status === 'Low Stock').length;
  const outOfStockProducts = products.filter(p => p.status === 'Out of Stock').length;
  const totalInventoryValue = products.reduce((sum, product) => sum + (product.stock * product.cost), 0);

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Get unique categories for filter
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Handle stock update
  const updateStock = (productId: number, newStock: number) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const status = newStock === 0 
          ? 'Out of Stock' 
          : newStock <= lowStockThreshold 
            ? 'Low Stock' 
            : 'In Stock';
            
        return {
          ...product,
          stock: newStock,
          status,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      return product;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products & Inventory</h1>
          <p className="text-lg text-gray-600 mt-2">Manage your products and inventory levels</p>
        </div>

        {/* Inventory Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <span className="text-blue-600 text-xl">📦</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <h3 className="text-2xl font-bold text-gray-900">{totalProducts}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <h3 className="text-2xl font-bold text-gray-900">{inStockProducts}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <span className="text-yellow-600 text-xl">⚠️</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <h3 className="text-2xl font-bold text-gray-900">{lowStockProducts}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-red-100 p-3 mr-4">
                <span className="text-red-600 text-xl">✗</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <h3 className="text-2xl font-bold text-gray-900">{outOfStockProducts}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'products' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'alerts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Inventory Alerts
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Inventory Analytics
              </button>
            </nav>
          </div>
          
          <div className="flex space-x-3">
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
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center">
              <span className="mr-2">+</span> Add Product
            </button>
          </div>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
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
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                            <span className="text-gray-500">🛒</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.sku}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <input
                            type="number"
                            min="0"
                            value={product.stock}
                            onChange={(e) => updateStock(product.id, parseInt(e.target.value) || 0)}
                            className="w-20 border border-gray-300 rounded-md px-2 py-1"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 
                            product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {product.status}
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
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Inventory Alerts</h3>
              <p className="mt-1 text-sm text-gray-600">Recent inventory notifications that require your attention</p>
            </div>
            <ul className="divide-y divide-gray-200">
              {inventoryAlerts.map((alert) => (
                <li key={alert.id} className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center
                      ${alert.type === 'low_stock' ? 'bg-yellow-100' : 
                        alert.type === 'out_of_stock' ? 'bg-red-100' : 'bg-blue-100'}`}>
                      <span className={
                        alert.type === 'low_stock' ? 'text-yellow-600' : 
                        alert.type === 'out_of_stock' ? 'text-red-600' : 'text-blue-600'
                      }>
                        {alert.type === 'low_stock' ? '⚠️' : alert.type === 'out_of_stock' ? '✗' : '🔄'}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{alert.productName}</div>
                      <div className="text-sm text-gray-500">{alert.message}</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500">{alert.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory Analytics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Total Inventory Value</h4>
                <p className="text-2xl font-bold text-gray-900">${totalInventoryValue.toFixed(2)}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Low Stock Threshold</h4>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={lowStockThreshold}
                    onChange={(e) => setLowStockThreshold(parseInt(e.target.value))}
                    className="w-full mr-3"
                  />
                  <span className="text-sm font-medium text-gray-900">{lowStockThreshold}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-4">Stock Levels by Category</h4>
              <div className="space-y-3">
                {Array.from(new Set(products.map(p => p.category))).map(category => {
                  const categoryProducts = products.filter(p => p.category === category);
                  const inStockCount = categoryProducts.filter(p => p.status === 'In Stock').length;
                  const lowStockCount = categoryProducts.filter(p => p.status === 'Low Stock').length;
                  const outOfStockCount = categoryProducts.filter(p => p.status === 'Out of Stock').length;
                  
                  return (
                    <div key={category} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{category}</span>
                        <span className="text-sm text-gray-500">{categoryProducts.length} products</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-green-600 h-2.5 rounded-full" 
                          style={{ width: `${(inStockCount / categoryProducts.length) * 100}%` }}
                        ></div>
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full -mt-2.5" 
                          style={{ 
                            width: `${(lowStockCount / categoryProducts.length) * 100}%`, 
                            marginLeft: `${(inStockCount / categoryProducts.length) * 100}%` 
                          }}
                        ></div>
                        <div 
                          className="bg-red-600 h-2.5 rounded-full -mt-2.5" 
                          style={{ 
                            width: `${(outOfStockCount / categoryProducts.length) * 100}%`, 
                            marginLeft: `${((inStockCount + lowStockCount) / categoryProducts.length) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsInventory;