import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Lock, 
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Star,
  BadgeCheck
} from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  
  const navigate = useNavigate();

  const bookingDetails = {
    trip: "Goa Beach Adventure - 7 Days",
    duration: "7 Days / 6 Nights",
    travelers: 2,
    date: "15 Mar 2025 - 21 Mar 2025",
    hotel: "Seaside Resort & Spa",
    rating: 4.8,
    reviews: 1247,
    inclusions: [
      "Luxury Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "City Tour",
      "Beach Activities",
      "Travel Insurance"
    ]
  };

  const pricing = {
    basePrice: 45999,
    discount: 9200,
    tax: 3679,
    serviceFee: 599,
    total: 41077
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay securely with your card',
      popular: true
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Shield,
      description: 'Instant payment with UPI',
      popular: false
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: BadgeCheck,
      description: 'Transfer from your bank',
      popular: false
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Lock,
      description: 'Paytm, PhonePe, Google Pay',
      popular: false
    }
  ];

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      setTimeout(() => {
        navigate('/booking-confirmation');
      }, 3000);
    }, 3000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  if (paymentSuccess) {
    return (
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header isDashboard={true} />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                  Payment Successful!
                </h1>
                <p className="text-slate-600 mb-6 text-lg">
                  Your booking for <strong>{bookingDetails.trip}</strong> has been confirmed.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-green-800 mb-2">₹{pricing.total.toLocaleString()}</div>
                  <div className="text-green-700">Payment completed successfully</div>
                </div>
                
                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div>Booking ID: ST-{Date.now().toString().slice(-8)}</div>
                  <div>We've sent the confirmation to your email</div>
                  <div>You'll receive itinerary details within 15 minutes</div>
                </div>
                
                <div className="flex space-x-4 justify-center">
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
                  >
                    Back to Dashboard
                  </button>
                  <button 
                    onClick={() => navigate('/itinerary')}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    View Itinerary
                  </button>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center text-slate-600 hover:text-slate-900 mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Booking
              </button>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Your Booking</h1>
              <p className="text-slate-600">Secure payment - Your trip to Goa is just one step away!</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-slate-900">Payment Method</h2>
                    <div className="flex items-center text-green-600">
                      <Shield className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Secure SSL Encryption</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          onClick={() => setActivePaymentMethod(method.id)}
                          className={`p-4 border-2 rounded-xl text-left transition-all ${
                            activePaymentMethod === method.id
                              ? 'border-indigo-500 bg-indigo-50'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Icon className="h-5 w-5 text-slate-700" />
                            {method.popular && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="font-medium text-slate-900">{method.name}</div>
                          <div className="text-xs text-slate-500 mt-1">{method.description}</div>
                        </button>
                      );
                    })}
                  </div>

                  {activePaymentMethod === 'card' && (
                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handlePayment}
                    >
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Card Number
                          </label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                              type="text"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              value={expiryDate}
                              onChange={(e) => setExpiryDate(e.target.value)}
                              placeholder="MM/YY"
                              maxLength={5}
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              CVV
                            </label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                              <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                placeholder="123"
                                maxLength={3}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={saveCard}
                            onChange={(e) => setSaveCard(e.target.checked)}
                            className="rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-slate-600">
                            Save this card for future payments
                          </span>
                        </label>
                      </div>
                    </motion.form>
                  )}

                  {activePaymentMethod !== 'card' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.createElement(paymentMethods.find(m => m.id === activePaymentMethod)?.icon, {
                          className: "h-8 w-8 text-indigo-600"
                        })}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {paymentMethods.find(m => m.id === activePaymentMethod)?.name}
                      </h3>
                      <p className="text-slate-600 mb-6">
                        You'll be redirected to complete your payment securely
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Your payment is secure with us</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">SSL Secure</div>
                    </div>
                    <div>
                      <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">256-bit Encryption</div>
                    </div>
                    <div>
                      <BadgeCheck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">PCI DSS Compliant</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Booking Summary</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-slate-900">{bookingDetails.trip}</h4>
                        <div className="flex items-center text-sm text-slate-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          Goa, India
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {bookingDetails.rating} ({bookingDetails.reviews})
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{bookingDetails.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travelers:</span>
                        <span>{bookingDetails.travelers} adults</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dates:</span>
                        <span>{bookingDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hotel:</span>
                        <span className="text-right">{bookingDetails.hotel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-3">What's Included</h4>
                    <div className="space-y-2">
                      {bookingDetails.inclusions.map((inclusion, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {inclusion}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Base Price</span>
                        <span>₹{pricing.basePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{pricing.discount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Tax & Fees</span>
                        <span>₹{(pricing.tax + pricing.serviceFee).toLocaleString()}</span>
                      </div>
                      <div className="border-t border-slate-200 pt-3">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span className="text-indigo-600">₹{pricing.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-white transition-colors ${
                      isProcessing 
                        ? 'bg-indigo-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      `Pay ₹${pricing.total.toLocaleString()}`
                    )}
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center mt-3">
                    By completing this booking, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentPage;
