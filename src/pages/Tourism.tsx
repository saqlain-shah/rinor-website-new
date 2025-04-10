import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import toursData from '../data/tours.json';

interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  highlights: { [key: string]: string[] };
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
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const tours = (toursData.tours as unknown) as Tour[];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Function to get the correct image path
  const getImagePath = (tourId: string, imageIndex: number) => {
    // Use modulo to cycle through numbers 1-19 based on tourId and imageIndex
    const imageNumber = (parseInt(tourId.replace(/\D/g, '')) + imageIndex) % 19 + 1;
    return `/images/${imageNumber}.JPG`;
  };

  const handleImageError = (tourId: string) => {
    setImageError(prev => ({ ...prev, [tourId]: true }));
  };

  const filteredTours = tours.filter(tour =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Structured data for the tourism page
  const tourListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": tours.map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": tour.title,
        "description": tour.description,
        "url": `/tour/${tour.id}`,
        "price": {
          "@type": "PriceSpecification",
          "price": tour.price,
          "priceCurrency": "PKR"
        }
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Tourism Packages - RINOR SMC PVT LTD"
        description="Discover amazing tour packages in Pakistan. Experience the beauty of Gilgit Baltistan with our carefully curated tourism packages. Book your adventure today!"
        keywords="tourism, Pakistan tours, Gilgit Baltistan, travel packages, adventure tours, cultural tours, Skardu, Hunza"
        type="website"
        structuredData={tourListStructuredData}
      />
      <main className="min-h-screen bg-background pt-20 pb-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Tourism Packages</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the breathtaking beauty of Pakistan with our carefully curated tour packages.
              From majestic mountains to cultural heritage sites, we offer unforgettable experiences.
            </p>
          </header>

          <div className="mb-8">
            <input
              type="search"
              placeholder="Search tours by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Search tours"
            />
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <Link key={tour.id} to={`/tour/${tour.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {tour.id && !imageError[tour.id] ? (
                      <img
                        src={getImagePath(tour.id, index)}
                        alt={tour.title || 'Tour Image'}
                        onError={() => handleImageError(tour.id)}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">Image not available</span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          {tour.title && (
                            <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                          )}
                        </div>
                        {typeof tour.price === 'number' && (
                          <p className="text-2xl font-bold text-white">PKR {tour.price.toLocaleString()}</p>
                        )}
                      </div>
                      {tour.description && (
                        <p className="text-gray-300 mb-4 line-clamp-2">{tour.description}</p>
                      )}
                      <div className="flex items-center justify-between text-sm">
                    
                        <span className="text-secondary">View Details →</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredTours.length === 0 && (
            <div className="text-center text-gray-300 py-12">
              <p>No tours found matching your search criteria.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Tourism; 