import React from 'react';
import { Award, Shield, Truck, Users, Star, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About 3KR Electrical</h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner in electrical solutions since 2010
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, 3KR Electrical has been at the forefront of providing high-quality electrical 
                appliances and solutions to customers across India. What started as a small family business has 
                grown into a trusted name in the electrical industry.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred 
                choice for thousands of customers. We believe in building lasting relationships through 
                reliable products and exceptional service.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to expand our product range and enhance our services to meet the evolving 
                needs of our customers in the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We source only the best electrical products from trusted manufacturers to ensure durability and performance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Trust & Reliability</h3>
              <p className="text-gray-600">
                Building trust through transparent business practices and keeping our promises to customers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Putting our customers at the center of everything we do, providing personalized solutions and support.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose 3KR Electrical?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">Premium Quality</h3>
              </div>
              <p className="text-gray-600">
                All our products undergo rigorous quality checks and come with manufacturer warranties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Truck className="text-blue-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">Fast Delivery</h3>
              </div>
              <p className="text-gray-600">
                Quick and reliable delivery across India with real-time tracking and secure packaging.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="text-green-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">24/7 Support</h3>
              </div>
              <p className="text-gray-600">
                Round-the-clock customer support to help you with any queries or technical assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="text-sm opacity-90">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
