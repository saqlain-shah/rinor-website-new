import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../components/shared/Icons';
import WhatsAppLink from '../components/shared/WhatsAppLink';

const Home: React.FC = () => {
  const coreServices = [
    {
      title: 'Air Ticketing',
      description: 'No.1 Ticketing Agency in Gilgit Baltistan offering domestic and international flights.',
      stats: [
        '170,000+ Domestic Tickets',
        '125,000+ International Tickets',
        '13.7% Growth Rate',
        '24/7 Support Available'
      ],
      features: [
        'Best Price Guarantee',
        'Instant Booking Confirmation',
        'Free Flight Changes',
        'Corporate Deals'
      ],
      icon: 'AirTicket',
      link: '/air-ticketing'
    },
    {
      title: 'Tourism Services',
      description: 'Experience the beauty of Gilgit-Baltistan with our customized tour packages.',
      stats: [
        '7% Domestic Market Share',
        '5% International Market Share',
        '24.5% Growth Rate',
        'Top-Rated Service'
      ],
      features: [
        'Customized Tour Packages',
        'Professional Local Guides',
        'Luxury Accommodations',
        'Adventure Activities'
      ],
      icon: 'Tourism',
      link: '/tourism'
    },
    {
      title: 'Visa Assistance',
      description: 'Comprehensive visa services for hassle-free international travel.',
      stats: [
        '105,000+ Visas Processed',
        '98% Success Rate',
        'Multiple Countries',
        'Fast Processing'
      ],
      features: [
        'Document Preparation',
        'Application Processing',
        'Embassy Appointments',
        'Status Tracking'
      ],
      icon: 'Visa',
      link: '/visa-assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Your Trusted Travel Partner
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            No.1 Travel Agency in Gilgit-Baltistan for Ticketing, Tourism & Visa Services
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <WhatsAppLink
              message="Hi, I would like to inquire about your services."
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
              Quick Inquiry
            </WhatsAppLink>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-gray-300">Experience excellence in travel services</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/20 rounded-full p-3 mr-4">
                    <Icon name={service.icon as IconName} className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <p className="text-secondary text-sm font-medium">{stat}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <Icon name="Check" className="w-5 h-5 text-secondary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <Link
                    to={service.link}
                    className="flex-1 bg-secondary hover:bg-secondary-light text-white text-center py-3 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                  <WhatsAppLink
                    message={`Hi, I'm interested in your ${service.title} services. Can you provide more information?`}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-3 rounded-lg transition-colors"
                  >
                    Inquire Now
                  </WhatsAppLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-white">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">400K+</div>
              <div className="text-white">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white">Customer Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">#1</div>
              <div className="text-white">In Gilgit-Baltistan</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8">
              Let us help you plan your perfect trip with our expert travel services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppLink
                message="Hi, I would like to plan my trip with RINOR."
                className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                Start Planning
              </WhatsAppLink>
              <Link
                to="/contact"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 