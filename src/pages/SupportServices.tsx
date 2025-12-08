import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const SupportServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('support');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setSubject("");
          setMessage("");
        }, 3000);
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong.");
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How do I track my travel bookings?",
      answer: "You can track all your travel bookings from the Dashboard page. The Travel Hub provides detailed insights including booking status, itinerary details, and real-time updates. You can also set up automated notifications for booking confirmations and travel alerts."
    },
    {
      question: "What travel destinations are available?",
      answer: "We offer access to 500+ destinations across India including beach resorts, mountain getaways, heritage sites, and adventure locations. Our platform integrates with premium hotels, local guides, and transportation services. Check the Destinations page for complete details and travel guides."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer tiered pricing based on your travel needs: Explorer (₹999/month), Adventurer (₹2,999/month), and Globetrotter (₹7,999/month). All plans include core features with varying levels of support, destination access, and premium capabilities. Visit the Pricing page for detailed information and custom group solutions."
    },
    {
      question: "How do I create a travel itinerary?",
      answer: "Use our AI Trip Planner to create customized itineraries based on your preferences. Simply select your destination, travel dates, budget, and interests. Our smart system will generate optimized travel plans with activities, accommodations, and transportation options."
    },
    {
      question: "What support channels are available?",
      answer: "We offer multiple support channels: 24/7 live chat for urgent travel issues, email support with 4-hour response time, scheduled video calls for complex itineraries, and comprehensive travel guides with video tutorials."
    },
    {
      question: "How secure are my payments and personal data?",
      answer: "We employ enterprise-grade security measures including SSL encryption, PCI compliance for payments, regular security audits, and data protection protocols. Your personal information and payment details are protected with multiple layers of security."
    },
    {
      question: "Can I customize travel packages for my specific needs?",
      answer: "Yes! Our platform offers extensive customization options through our travel consultants and custom packages. Group travelers and enterprise customers can work with our travel team to build tailored solutions that match their specific requirements."
    },
    {
      question: "What documents are required for booking?",
      answer: "For domestic travel, you typically need a valid ID proof. For international packages, passport and visa requirements vary by destination. Our system provides complete documentation checklists and automated reminders for required documents."
    }
  ];

  const serviceItems: ServiceItem[] = [
    {
      title: "Personal Travel Consultant",
      description: "Dedicated travel expert to help plan your perfect itinerary, provide destination insights, and ensure you're getting the best travel experiences from our platform",
      icon: "👤"
    },
    {
      title: "24/7 Travel Support",
      description: "Round-the-clock travel assistance for any emergencies, itinerary changes, or travel issues, with guaranteed response times and local support contacts",
      icon: "🔧"
    },
    {
      title: "Group Travel Management",
      description: "Comprehensive group booking tools and coordinator support for family trips, corporate travel, and large group adventures",
      icon: "👥"
    },
    {
      title: "Travel Planning Sessions",
      description: "One-on-one travel consultation sessions, destination workshops, and customized itinerary planning to maximize your travel experience",
      icon: "🎓"
    },
    {
      title: "Custom Travel Packages",
      description: "Tailored travel experiences and specialized packages designed to meet your specific interests, budget, and travel preferences",
      icon: "💼"
    },
    {
      title: "Travel Analytics & Insights",
      description: "Advanced travel analytics with personalized recommendations, spending reports, and travel pattern insights for better planning",
      icon: "📊"
    }
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
        <div className="flex-1 overflow-auto bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Support & Services</h1>
              <p className="text-lg text-gray-600">Get help and explore additional services to enhance your travel experience</p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('support')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'support' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Support Center
                  </button>
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'services' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Premium Services
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'contact' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            </div>

            {activeTab === 'support' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                  <div className="max-h-96 overflow-y-auto space-y-4 pr-4">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg"
                        >
                          <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openFAQIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openFAQIndex === index && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-5 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Need more help?</h3>
                    <p className="text-gray-600 mb-4">Our travel knowledge base contains detailed articles and guides on all destinations and travel features.</p>
                    <button 
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      onClick={() => setActiveTab('contact')}
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Travel Services</h2>
                  <p className="text-gray-600 mb-6">Enhance your SmartTourist experience with our premium services designed to create unforgettable travel experiences.</p>
                  
                  <div className="max-h-96 overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {serviceItems.map((service, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
                          <div className="flex items-start space-x-4">
                            <div className="text-3xl flex-shrink-0">{service.icon}</div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Group & Corporate Solutions</h3>
                    <p className="text-gray-600 mb-4">Planning a group trip or corporate travel? Our team can create custom travel solutions integrated directly with your SmartTourist platform for seamless group management.</p>
                    <button 
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      onClick={() => setActiveTab('contact')}
                    >
                      Request Consultation
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Travel Team</h2>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Thank you for your message! Our travel team will get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  <div className="max-h-96 overflow-y-auto pr-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="What can we help you with?"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Please provide details about your travel inquiry, preferred destinations, dates, and any specific requirements..."
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">📧</div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email Support</h4>
                      <p className="text-sm text-gray-600">support@smarttourist.com</p>
                      <p className="text-xs text-gray-500">Response within 4 hours</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">💬</div>
                      <h4 className="font-semibold text-gray-800 mb-1">24/7 Travel Helpline</h4>
                      <p className="text-sm text-gray-600">Always Available</p>
                      <p className="text-xs text-gray-500">Emergency travel support</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">📞</div>
                      <h4 className="font-semibold text-gray-800 mb-1">Travel Consultant</h4>
                      <p className="text-sm text-gray-600">+91 (555) 123-4567</p>
                      <p className="text-xs text-gray-500">Mon-Sun, 8AM-10PM IST</p>
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

export default SupportServices;
