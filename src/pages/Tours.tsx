import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Icon from '../components/shared/Icons';
import toursData from '../data/tours.json';

interface Tour {
  id: string;
  title: string;
  descr: string;
  images: string[];
  price: string;
  internay: {
    [key: string]: string;
  };
  seesighting: {
    [key: string]: string[];
  };
  inclusion: string[];
  exclusion: string[];
  coverImage?: string;
  location?: string;
  duration?: string;
}

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const tours = (toursData.tours as unknown) as Tour[];

  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.descr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Explore Our Tours
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the beauty of Gilgit-Baltistan with our carefully curated tours
          </p>
        </motion.div>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search tours..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl mx-auto block bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg overflow-hidden"
            >
              <Link to={`/tours/${tour.id}`}>
                <img
                  src={tour.images[0]} // Use first image as cover
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {tour.title}
                      </h3>
                      <span className="text-secondary">
                        {Object.keys(tour.internay).length} Days
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">
                        {tour.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {tour.descr}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span>{Object.keys(tour.internay).length} Days</span>
                    </div>
                    <button className="text-secondary hover:text-secondary-light transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours; 