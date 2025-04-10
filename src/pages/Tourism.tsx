import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toursData from '../data/tours.json';

interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  inclusions: string[];
  gallery: string[];
  featured: boolean;
}

const Tourism = () => {
  const tours = (toursData.tours as unknown) as Tour[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
            Discover Amazing Tours
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the beauty of Pakistan with our carefully curated tours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link key={tour.id} to={`/tours/${tour.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                      <p className="text-secondary">{tour.location}</p>
                    </div>
                    <p className="text-2xl font-bold text-white">${tour.price}</p>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{tour.duration}</span>
                    <span className="text-secondary">View Details →</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tourism; 