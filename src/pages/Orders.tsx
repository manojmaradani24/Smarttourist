import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface Booking {
  id: number;
  bookingNumber: string;
  traveler: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Active' | 'Completed' | 'Cancelled';
  travelers: number;
  total: number;
  payment: 'Paid' | 'Pending' | 'Refunded';
  packageType: string;
}

interface BookingItem {
  id: number;
  service: string;
  quantity: number;
  price: number;
  image: string;
}

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      bookingNumber: 'TRV-001',
      traveler: 'John Smith',
      date: '2025-09-18',
      status: 'Confirmed',
      travelers: 3,
      total: 899.97,
      payment: 'Paid',
      packageType: 'Premium'
    },
    {
      id: 2,
      bookingNumber: 'TRV-002',
      traveler: 'Emma Johnson',
      date: '2025-09-17',
      status: 'Active',
      travelers: 2,
      total: 499.98,
      payment: 'Paid',
      packageType: 'Express'
    },
    {
      id: 3,
      bookingNumber: 'TRV-003',
      traveler: 'Michael Brown',
      date: '2025-09-16',
      status: 'Completed',
      travelers: 5,
      total: 1249.95,
      payment: 'Paid',
      packageType: 'Standard'
    },
    {
      id: 4,
      bookingNumber: 'TRV-004',
      traveler: 'Sarah Davis',
      date: '2025-09-15',
      status: 'Pending',
      travelers: 1,
      total: 249.99,
      payment: 'Pending',
      packageType: 'Standard'
    },
    {
      id: 5,
      bookingNumber: 'TRV-005',
      traveler: 'Robert Wilson',
      date: '2025-09-14',
      status: 'Cancelled',
      travelers: 2,
      total: 399.98,
      payment: 'Refunded',
      packageType: 'Standard'
    },
    {
      id: 6,
      bookingNumber: 'TRV-006',
      traveler: 'Jennifer Lee',
      date: '2025-09-13',
      status: 'Confirmed',
      travelers: 4,
      total: 999.96,
      payment: 'Paid',
      packageType: 'Express'
    },
    {
      id: 7,
      bookingNumber: 'TRV-007',
      traveler: 'David Miller',
      date: '2025-09-12',
      status: 'Completed',
      travelers: 2,
      total: 599.98,
      payment: 'Paid',
      packageType: 'Standard'
    },
    {
      id: 8,
      bookingNumber: 'TRV-008',
      traveler: 'Lisa Anderson',
      date: '2025-09-11',
      status: 'Active',
      travelers: 3,
      total: 799.97,
      payment: 'Paid',
      packageType: 'Express'
    },
    {
      id: 9,
      bookingNumber: 'TRV-009',
      traveler: 'James Taylor',
      date: '2025-09-10',
      status: 'Confirmed',
      travelers: 1,
      total: 299.99,
      payment: 'Paid',
      packageType: 'Standard'
    },
    {
      id: 10,
      bookingNumber: 'TRV-010',
      traveler: 'Maria Garcia',
      date: '2025-09-09',
      status: 'Pending',
      travelers: 4,
      total: 1199.96,
      payment: 'Pending',
      packageType: 'Standard'
    },
    {
      id: 11,
      bookingNumber: 'TRV-011',
      traveler: 'Thomas Clark',
      date: '2025-09-08',
      status: 'Completed',
      travelers: 2,
      total: 499.98,
      payment: 'Paid',
      packageType: 'Express'
    },
    {
      id: 12,
      bookingNumber: 'TRV-012',
      traveler: 'Susan White',
      date: '2025-09-07',
      status: 'Cancelled',
      travelers: 1,
      total: 199.99,
      payment: 'Refunded',
      packageType: 'Standard'
    }
  ]);

  const [bookingItems] = useState<BookingItem[]>([
    {
      id: 1,
      service: 'Goa Beach Resort Stay',
      quantity: 2,
      price: 249.99,
      image: 'resort'
    },
    {
      id: 2,
      service: 'Scuba Diving Adventure',
      quantity: 1,
      price: 149.99,
      image: 'diving'
    },
    {
      id: 3,
      service: 'Local Sightseeing Tour',
      quantity: 3,
      price: 99.99,
      image: 'tour'
    }
  ]);

  const filteredBookings = bookings.filter(booking => {
    const matchesTab = activeTab === 'all' || booking.status === activeTab;
    const matchesSearch = 
      booking.bookingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.traveler.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(o => o.status === 'Pending').length;
  const confirmedBookings = bookings.filter(o => o.status === 'Confirmed').length;
  const activeBookings = bookings.filter(o => o.status === 'Active').length;
  const revenue = bookings
    .filter(o => o.payment === 'Paid')
    .reduce((sum, booking) => sum + booking.total, 0);

  const updateBookingStatus = (bookingId: number, newStatus: Booking['status']) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  const closeBookingDetails = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        <div className="flex-1 overflow-auto bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Bookings Management</h1>
              <p className="text-lg text-gray-600 mt-2">Manage and track all traveler bookings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    <span className="text-blue-600 text-xl">🏨</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                    <h3 className="text-2xl font-bold text-gray-900">{totalBookings}</h3>
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
                    <h3 className="text-2xl font-bold text-gray-900">{pendingBookings}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-100 p-3 mr-4">
                    <span className="text-green-600 text-xl">✈️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active</p>
                    <h3 className="text-2xl font-bold text-gray-900">{activeBookings}</h3>
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

            <div className="bg-white shadow rounded-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    All Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab('Pending')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setActiveTab('Confirmed')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Confirmed' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Confirmed
                  </button>
                  <button
                    onClick={() => setActiveTab('Active')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setActiveTab('Completed')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'Completed' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Completed
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search bookings..."
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

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <div className="max-h-96 overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Booking ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Traveler
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Travelers
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBooking(booking)}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {booking.bookingNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.traveler}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.travelers}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${booking.total.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' : 
                                booking.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                booking.status === 'Completed' ? 'bg-purple-100 text-purple-800' : 
                                'bg-red-100 text-red-800'}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${booking.payment === 'Paid' ? 'bg-green-100 text-green-800' : 
                                booking.payment === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'}`}>
                              {booking.payment}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button 
                              className="text-blue-600 hover:text-blue-900 mr-3"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedBooking(booking);
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
            </div>

            {selectedBooking && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
                <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-start justify-between p-5 border-b rounded-t sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Booking Details: {selectedBooking.bookingNumber}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      onClick={closeBookingDetails}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-2">Traveler Information</h4>
                        <p className="text-sm text-gray-600">{selectedBooking.traveler}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-2">Booking Information</h4>
                        <p className="text-sm text-gray-600">Date: {selectedBooking.date}</p>
                        <p className="text-sm text-gray-600">Travelers: {selectedBooking.travelers}</p>
                        <p className="text-sm text-gray-600">Total: ${selectedBooking.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-600">Package: {selectedBooking.packageType}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Booking Services</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        {bookingItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                                <span className="text-gray-500">🏨</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{item.service}</p>
                                <p className="text-xs text-gray-500">Travelers: {item.quantity}</p>
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
                          value={selectedBooking.status}
                          onChange={(e) => updateBookingStatus(selectedBooking.id, e.target.value as Booking['status'])}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Active">Active</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-2">Payment Status</h4>
                        <div className={`px-3 py-2 rounded-md text-sm font-medium inline-block
                          ${selectedBooking.payment === 'Paid' ? 'bg-green-100 text-green-800' : 
                            selectedBooking.payment === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {selectedBooking.payment}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b sticky bottom-0 bg-white">
                    <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={closeBookingDetails}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                      onClick={closeBookingDetails}
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

export default Bookings;
