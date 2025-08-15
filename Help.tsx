import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You will also receive tracking information via email and SMS once your order is shipped.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer different return policies based on the product type. Most electrical appliances have a 7-15 day return window, while accessories may have up to 45 days. Please check the specific return policy mentioned on each product page.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by location and product availability. Typically, orders are delivered within 3-7 business days for most locations. Express delivery options are available for major cities.'
    },
    {
      question: 'Are your products covered by warranty?',
      answer: 'Yes, all our products come with manufacturer warranties. The warranty period varies by product and manufacturer. You can find warranty information on each product page.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be cancelled within 24 hours of placement, provided they have not been shipped. Please contact our customer service team immediately if you need to cancel an order.'
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes, we offer professional installation services for major appliances like refrigerators, water heaters, and electrical panels. Installation charges vary by product and location.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, net banking, UPI, and cash on delivery for eligible orders. All payments are processed securely through our encrypted payment gateway.'
    },
    {
      question: 'How do I get technical support for my product?',
      answer: 'For technical support, you can contact our customer service team via phone, email, or live chat. We also have product manuals and troubleshooting guides available on our website.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600">Find answers to your questions or get in touch with our support team</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Talk to our experts</p>
            <p className="text-blue-600 font-medium">+91 1800-123-4567</p>
            <p className="text-sm text-gray-500">Mon-Sat: 9AM-8PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us an email</p>
            <p className="text-green-600 font-medium">support@3kr.com</p>
            <p className="text-sm text-gray-500">24/7 Response</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our team</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Start Chat
            </button>
            <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order & Shipping</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Order tracking</li>
              <li>• Delivery information</li>
              <li>• Shipping charges</li>
              <li>• Order modifications</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Returns & Refunds</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Return policy</li>
              <li>• Refund process</li>
              <li>• Exchange options</li>
              <li>• Warranty claims</li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-blue-600 mr-2" size={24} />
            <h3 className="text-xl font-bold text-blue-800">Business Hours</h3>
          </div>
          <div className="text-center text-blue-700">
            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
            <p>Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
