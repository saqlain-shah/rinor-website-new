import  { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../components/shared/Icons';
import visasData from '../data/visas.json';

interface Visa {
  id: string;
  country: string;
  type: string;
  price: number;
  processing_time: string;
  requirements: string[];
  features: string[];
  duration?: string;
  documents_needed?: string[];
}

const VisaAssistance = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleWhatsAppClick = (visa: Visa) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in applying for a visa:\n` +
      `Country: ${visa.country}\n` +
      `Type: ${visa.type}\n` +
      `Price: $${visa.price}\n` +
      `Processing Time: ${visa.processing_time}`
    );
    window.open(`https://wa.me/923400596665?text=${message}`, '_blank');
  };

  const uniqueCountries = Array.from(
    new Set(visasData.visas.map((visa: Visa) => visa.country))
  ).sort();

  const uniqueTypes = Array.from(
    new Set(visasData.visas.map((visa: Visa) => visa.type))
  ).sort();

  const filteredVisas = (visasData.visas as Visa[]).filter(visa =>
    (!selectedCountry || visa.country === selectedCountry) &&
    (!selectedType || visa.type === selectedType)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Visa Assistance Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-300"
            >
              Professional visa assistance for hassle-free international travel. Expert guidance through every step of your visa application process.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                >
                  <option value="">All Countries</option>
                  {uniqueCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Visa Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                >
                  <option value="">All Types</option>
                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Visa Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredVisas.map((visa) => (
              <motion.div
                key={visa.id}
                variants={item}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{visa.country}</h3>
                      <p className="text-secondary">{visa.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Starting from</p>
                      <p className="text-2xl font-bold text-white">${visa.price}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center text-white mb-2">
                        <Icon name="Calendar" className="w-5 h-5 mr-2 text-secondary" />
                        <h4 className="font-semibold">Processing Time</h4>
                      </div>
                      <p className="text-gray-300">{visa.processing_time}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-white mb-2">
                        <Icon name="DocumentText" className="w-5 h-5 mr-2 text-secondary" />
                        <h4 className="font-semibold">Requirements</h4>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {visa.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center text-white mb-2">
                        <Icon name="Star" className="w-5 h-5 mr-2 text-secondary" />
                        <h4 className="font-semibold">Features</h4>
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {visa.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleWhatsAppClick(visa)}
                      className="mt-6 w-full bg-secondary hover:bg-secondary-light text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                      <span>Apply via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Steps */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Visa Application Process
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: 'Initial Consultation',
                  description: 'Free consultation to understand your requirements, assess eligibility, and recommend the best visa type.',
                  icon: 'Chat'
                },
                {
                  title: 'Document Collection',
                  description: 'Comprehensive guidance on required documents, verification process, and document preparation.',
                  icon: 'Document'
                },
                {
                  title: 'Application Preparation',
                  description: 'Professional preparation and thorough review of your visa application to ensure accuracy.',
                  icon: 'Edit'
                },
                {
                  title: 'Visa Processing',
                  description: 'Regular updates on application status and assistance with embassy requirements.',
                  icon: 'Check'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 text-center relative"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <Icon name="Tourism" className="w-8 h-8 text-secondary" />
                    </div>
                  )}
                  <div className="bg-secondary/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Check" className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Visa Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Our experienced team provides professional guidance throughout your visa application process.',
                  icon: 'Star'
                },
                {
                  title: 'Fast Processing',
                  description: 'We ensure quick and efficient processing of your visa application with regular status updates.',
                  icon: 'Clock'
                },
                {
                  title: 'High Success Rate',
                  description: 'We maintain a high visa approval rate through our meticulous application process.',
                  icon: 'Check'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6"
                >
                  <div className="bg-secondary/20 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Icon name="Check" className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-24">
            <div className="bg-gray-800/50 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help with Your Visa Application?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation. Our visa experts are ready to assist you with your application process.
              </p>
              <button
                onClick={() => window.open('https://wa.me/923400596665', '_blank')}
                className="bg-secondary hover:bg-secondary-light text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 flex items-center justify-center mx-auto"
              >
                <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                <span>Contact Us on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaAssistance; 