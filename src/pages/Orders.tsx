import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// Define types for our data
interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: number;
  total: number;
  payment: 'Paid' | 'Pending' | 'Refunded';
  shippingMethod: string;
}

interface OrderItem {
  id: number;
  product: string;
  quantity: number;
  price: number;
  image: string;
}

const Orders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample orders data
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      orderNumber: 'ORD-001',
      customer: 'John Smith',
      date: '2025-09-18',
      status: 'Processing',
      items: 3,
      total: 89.97,
      payment: 'Paid',
      shippingMethod: 'Standard'
    },
    {
      id: 2,
      orderNumber: 'ORD-002',
      customer: 'Emma Johnson',
      date: '2025-09-17',
      status: 'Shipped',
      items: 2,
      total: 49.98,
      payment: 'Paid',
      shippingMethod: 'Express'
    },
    {
      id: 3,
      orderNumber: 'ORD-003',
      customer: 'Michael Brown',
      date: '2025-09-16',
      status: 'Delivered',
      items: 5,
      total: 124.95,
      payment: 'Paid',
      shippingMethod: 'Standard'
    },
    {
      id: 4,
      orderNumber: 'ORD-004',
      customer: 'Sarah Davis',
      date: '2025-09-15',
      status: 'Pending',
      items: 1,
      total: 24.99,
      payment: 'Pending',
      shippingMethod: 'Standard'
    },
    {
      id: 5,
      orderNumber: 'ORD-005',
      customer: 'Robert Wilson',
      date: '2025-09-14',
      status: 'Cancelled',
      items: 2,
      total: 39.98,
      payment: 'Refunded',
      shippingMethod: 'Standard'
    },
    {
      id: 6,
      orderNumber: 'ORD-006',
      customer: 'Jennifer Lee',
      date: '2025-09-13',
      status: 'Processing',
      items: 4,
      total: 99.96,
      payment: 'Paid',
      shippingMethod: 'Express'
    }
  ]);

  // Sample order items for order details view
  const [orderItems] = useState<OrderItem[]>([
    {
      id: 1,
      product: 'Custom Printed T-Shirt',
      quantity: 2,
      price: 24.99,
      image: 'tshirt'
    },
    {
      id: 2,
      product: 'Personalized Mug',
      quantity: 1,
      price: 14.99,
      image: 'mug'
    },
    {
      id: 3,
      product: 'Engraved Keychain',
      quantity: 3,
      price: 9.99,
      image: 'keychain'
    }
  ]);

  // Filter orders based on active tab and search term
  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Calculate order metrics
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pending').length;
  const processingOrders = orders.filter(o => o.status === 'Processing').length;
  const shippedOrders = orders.filter(o => o.status === 'Shipped').length;
  const revenue = orders
    .filter(o => o.payment === 'Paid')
    .reduce((sum, order) => sum + order.total, 0);

  // Update order status
  const updateOrderStatus = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  // Close order details
  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-lg text-gray-600 mt-2">Manage and track all customer orders</p>
        </div>

        {/* Order Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <span className="text-blue-600 text-xl">📦</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-900">{totalOrders}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <span className="text-yellow-600 text-xl">⏳</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <h3 className="text-2xl font-bold text-gray-900">{pendingOrders}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <span className="text-green-600 text-xl">🚚</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Shipped</p>
                <h3 className="text-2xl font-bold text-gray-900">{shippedOrders}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <span className="text-purple-600 text-xl">💰</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900">${revenue.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Orders
              </button>
              <button
                onClick={() => setActiveTab('Pending')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab('Processing')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Processing
              </button>
              <button
                onClick={() => setActiveTab('Shipped')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Shipped' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Shipped
              </button>
              <button
                onClick={() => setActiveTab('Delivered')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Delivered' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Delivered
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedOrder(order)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                          order.status === 'Shipped' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Delivered' ? 'bg-purple-100 text-purple-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.payment === 'Paid' ? 'bg-green-100 text-green-800' : 
                          order.payment === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        className="text-blue-600 hover:text-blue-900 mr-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOrder(order);
                        }}
                      >
                        View
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-900"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
              <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Order Details: {selectedOrder.orderNumber}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={closeOrderDetails}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-2">Customer Information</h4>
                    <p className="text-sm text-gray-600">{selectedOrder.customer}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-2">Order Information</h4>
                    <p className="text-sm text-gray-600">Date: {selectedOrder.date}</p>
                    <p className="text-sm text-gray-600">Items: {selectedOrder.items}</p>
                    <p className="text-sm text-gray-600">Total: ${selectedOrder.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Shipping: {selectedOrder.shippingMethod}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-900 mb-2">Order Items</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                            <span className="text-gray-500">📦</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.product}</p>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-2">Update Status</h4>
                    <select
                      value={selectedOrder.status}
                      onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value as Order['status'])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-2">Payment Status</h4>
                    <div className={`px-3 py-2 rounded-md text-sm font-medium inline-block
                      ${selectedOrder.payment === 'Paid' ? 'bg-green-100 text-green-800' : 
                        selectedOrder.payment === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {selectedOrder.payment}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={closeOrderDetails}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  onClick={closeOrderDetails}
                >
                  Close
                </button>
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

export default Orders;