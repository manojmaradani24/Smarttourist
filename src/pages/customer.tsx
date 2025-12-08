import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Mail, User } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface Customer {
  id: string;
  name: string;
  emailSubscribed: boolean;
  location: string;
  bookings: number;
  amountSpent: string;
}

const Customer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const customers: Customer[] = [
    { id: '1', name: 'gagan.sai', emailSubscribed: true, location: 'West Godavari AP, India', bookings: 2, amountSpent: '¥4.74' },
    { id: '2', name: 'Kankatala', emailSubscribed: false, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥499.10' },
    { id: '3', name: 'Bhupathiraju', emailSubscribed: true, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥1,295.60' },
    { id: '4', name: 'anuradha titumalaraju', emailSubscribed: false, location: 'Hyderabad TG, India', bookings: 1, amountSpent: '¥506.16' },
    { id: '5', name: 'Raju R A', emailSubscribed: false, location: 'Hyderabad TG, India', bookings: 1, amountSpent: '¥0.00' },
    { id: '6', name: 'Siri Champati', emailSubscribed: false, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥1,120.10' },
    { id: '7', name: 'Varshitha Vegesna', emailSubscribed: false, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥1,025.14' },
    { id: '8', name: 'Gopala Raju Gadiraju', emailSubscribed: false, location: 'Hyderabad TG, India', bookings: 1, amountSpent: '¥426.64' },
    { id: '9', name: 'RARaju', emailSubscribed: false, location: 'Hyderabad TG, India', bookings: 1, amountSpent: '¥1,234.05' },
    { id: '10', name: 'Indukuri Venkata narasimharaju', emailSubscribed: false, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥854.05' },
    { id: '11', name: 'ananyavarma06@gmail.com', emailSubscribed: true, location: '', bookings: 0, amountSpent: '¥0.00' },
    { id: '12', name: 'gagan.sai', emailSubscribed: true, location: 'West Godavari AP, India', bookings: 1, amountSpent: '¥0.00' },
    { id: '13', name: 'sriramgangumaila@gmail.com', emailSubscribed: false, location: '', bookings: 0, amountSpent: '¥0.00' },
    { id: '14', name: 'Traveler Fourteen', emailSubscribed: true, location: 'Mumbai MH, India', bookings: 3, amountSpent: '¥2,500.00' },
    { id: '15', name: 'Tourist Fifteen', emailSubscribed: false, location: 'Delhi DL, India', bookings: 2, amountSpent: '¥1,800.50' },
    { id: '16', name: 'Explorer Sixteen', emailSubscribed: true, location: 'Bangalore KA, India', bookings: 5, amountSpent: '¥4,200.75' },
    { id: '17', name: 'Visitor Seventeen', emailSubscribed: false, location: 'Chennai TN, India', bookings: 1, amountSpent: '¥750.25' },
    { id: '18', name: 'Adventurer Eighteen', emailSubscribed: true, location: 'Kolkata WB, India', bookings: 4, amountSpent: '¥3,100.00' },
    { id: '19', name: 'Vacationer Nineteen', emailSubscribed: false, location: 'Pune MH, India', bookings: 2, amountSpent: '¥1,450.80' },
    { id: '20', name: 'Globetrotter Twenty', emailSubscribed: true, location: 'Ahmedabad GJ, India', bookings: 6, amountSpent: '¥5,600.40' },
    { id: '21', name: 'Backpacker Twenty One', emailSubscribed: false, location: 'Jaipur RJ, India', bookings: 1, amountSpent: '¥920.15' },
    { id: '22', name: 'Nomad Twenty Two', emailSubscribed: true, location: 'Lucknow UP, India', bookings: 3, amountSpent: '¥2,300.60' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Travelers</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-gray-600">{customers.length} travelers • 100% of your traveler base</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors w-full sm:w-auto">
                Add traveler
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search travelers"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center w-full sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
              </div>
            </div>

            <div className="sticky top-0 z-10 grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
              <div className="col-span-2">Traveler name</div>
              <div>Newsletter subscription</div>
              <div>Location</div>
              <div className="grid grid-cols-2 gap-4">
                <span>Bookings</span>
                <span>Amount spent</span>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              <div className="divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <div key={customer.id} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="col-span-2 flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-900 truncate">{customer.name}</span>
                    </div>

                    <div className="flex items-center">
                      {customer.emailSubscribed ? (
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          <Mail className="h-3 w-3 mr-1" />
                          Subscribed
                        </span>
                      ) : (
                        <span className="text-gray-500">Not subscribed</span>
                      )}
                    </div>

                    <div className="text-gray-600 truncate">{customer.location}</div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-gray-600">
                        {customer.bookings} booking{customer.bookings !== 1 ? 's' : ''}
                      </div>
                      <div className="text-gray-600">{customer.amountSpent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-gray-700 text-center sm:text-left">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredCustomers.length}</span> of{' '}
                  <span className="font-medium">{filteredCustomers.length}</span> travelers
                </div>
                <div className="flex justify-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
