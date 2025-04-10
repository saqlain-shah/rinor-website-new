import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon, { IconName } from '../components/shared/Icons';
import WhatsAppLink from '../components/shared/WhatsAppLink';

interface FareData {
  's.no': string;
  airline: string;
  to: string;
  from: string;
  date: string;
  price: string;
  discount: string;
  fare_update_date: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const handleBooking = (fare: FareData) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in booking a flight:\n` +
    `From: ${fare.from}\n` +
    `To: ${fare.to}\n` +
    `Airline: ${fare.airline}\n` +
    `Date: ${fare.date}\n` +
    `Price: Rs. ${fare.price}\n` +
    `Updated: ${fare.fare_update_date}`
  );
  window.open(`https://wa.me/923400596665?text=${message}`, '_blank');
};

const AirTicketing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [fares, setFares] = useState<FareData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFares = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://sheetdb.io/api/v1/b0yuf0m355i9q');
        if (!response.ok) {
          throw new Error('Failed to fetch fare data');
        }
        const data = await response.json();
        setFares(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFares();
  }, []);

  const filteredFares = fares.filter(fare =>
    fare.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fare.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fare.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const features: { title: string; description: string; icon: IconName }[] = [
    {
      title: 'Best Prices',
      description: 'Guaranteed lowest fares on all flights',
      icon: 'Price' as IconName
    },
    {
      title: 'Flexible Booking',
      description: 'Easy changes and cancellations',
      icon: 'Calendar' as IconName
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
      icon: 'Phone' as IconName
    },
    {
      title: 'Secure Booking',
      description: 'Safe and reliable transactions',
      icon: 'Shield' as IconName
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Flight Tickets & Airfares
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book your flights with Gilgit-Baltistan's leading ticketing agency
          </p>
        </motion.div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city or airline..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 pl-12 focus:outline-none focus:border-secondary"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Icon name="Search" className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Loading and Error Messages */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading fare updates...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Airfares Grid */}
        {!loading && !error && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredFares.map((fare) => (
              <motion.div
                key={fare['s.no']}
                variants={itemVariants}
                className="card hover-lift"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">{fare.airline}</h3>
                      <p className="text-sm text-gray-400">Updated: {fare.fare_update_date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">Rs. {fare.price}</p>
                      {fare.discount !== 'N/A' && (
                        <p className="text-sm text-green-500">Discount: {fare.discount}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">From:</span>
                      <span className="font-medium">{fare.from}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">To:</span>
                      <span className="font-medium">{fare.to}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Date:</span>
                      <span className="font-medium">{fare.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBooking(fare)}
                    className="btn-primary w-full"
                  >
                    Book via WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && !error && filteredFares.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No fares found matching your search.</p>
          </div>
        )}

        {/* Features Section */}
        <section className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 text-center"
              >
                <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Icon name={feature.icon} className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-800/50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help with Your Booking?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our travel experts are available 24/7 to assist you with your flight bookings
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppLink
              message="Hi, I need assistance with flight booking."
              className="px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Icon name="WhatsApp" className="w-5 h-5" />
              Chat on WhatsApp
            </WhatsAppLink>
            <button
              onClick={() => window.open(`tel:+923400596665`, '_blank')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Icon name="Phone" className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AirTicketing; 