import React, { useState } from 'react';

const SupportServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('support');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ subject, message });
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSubject('');
      setMessage('');
    }, 3000);
  };

  const faqItems = [
    {
      question: "How do I track my manufacturing jobs?",
      answer: "You can track all manufacturing jobs from the Dashboard page. The Manufacturing Hub also provides detailed insights."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with popular e-commerce platforms, payment gateways, and shipping providers. Check the Integrations page for details."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer tiered pricing based on your business needs. Visit the Pricing page for detailed information."
    },
    {
      question: "How do I connect my store?",
      answer: "Use our Store Builder to connect your existing store or create a new one from scratch."
    }
  ];

  const serviceItems = [
    {
      title: "Account Management",
      description: "Dedicated account manager to help optimize your manufacturing workflow",
      icon: "👤"
    },
    {
      title: "Technical Support",
      description: "24/7 technical assistance for any platform issues",
      icon: "🔧"
    },
    {
      title: "API Access",
      description: "Comprehensive API documentation for custom integrations",
      icon: "🔌"
    },
    {
      title: "Training Sessions",
      description: "Regular training webinars to maximize platform usage",
      icon: "🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Support & Services</h1>
          <p className="text-lg text-gray-600">Get help and explore additional services to grow your business</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('support')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'support' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Support Center
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'services' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Premium Services
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'contact' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Need more help?</h3>
              <p className="text-gray-600 mb-4">Our knowledge base contains detailed articles and guides on all platform features.</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                onClick={() => setActiveTab('contact')}
              >
                Contact Support
              </button>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Services</h2>
            <p className="text-gray-600 mb-6">Enhance your SmartMerchant experience with our premium services designed to scale your manufacturing business.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceItems.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">Need something tailored to your specific business requirements? Our team can build custom solutions integrated directly with your SmartMerchant platform.</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                onClick={() => setActiveTab('contact')}
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Team</h2>
            
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
                      Thank you for your message! Our team will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Ways to Reach Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">📧</div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">support@smartmerchant.com</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">📞</div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="font-medium text-gray-800">Live Chat</p>
                  <p className="text-gray-600">Available 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportServices;