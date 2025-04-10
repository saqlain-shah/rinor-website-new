import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
import Icon, { IconName } from '../components/shared/Icons';
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

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  // First cast to unknown, then to Tour[]
  const tours = (toursData.tours as unknown) as Tour[];
  const tour = tours.find((t) => t.id === id);

  // Function to get the correct image path
  const getImagePath = (imagePath: string) => {
    // Extract just the number from the image path (e.g., "1" from "public/images/1.jpg")
    const imageNumber = imagePath.match(/\d+/)?.[0];
    if (!imageNumber) return '';
    
    // Construct the correct path with uppercase extension
    return `/images/${imageNumber}.JPG`;
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Tour Not Found</h2>
          <button
            onClick={() => navigate('/tours')}
            className="text-secondary hover:text-secondary-light"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  const handleBookViaWhatsApp = () => {
    const message = `Hi, I'm interested in the ${tour.title}!\n\n` +
      `Details:\n` +
      `- Tour: ${tour.title}\n` +
      `- Price: ${tour.price}\n` +
      `- Duration: ${tour.duration}\n\n` +
      `Please provide more information about availability and booking.`;
    
    const whatsappUrl = `https://wa.me/923400596665?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const itineraryDays = Object.entries(tour.itinerary);
  const sightseeingByDay = Object.entries(tour.highlights);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          {tour.gallery.length > 0 && !imageError[0] ? (
            <img
              src={getImagePath(tour.gallery[0])}
              alt={tour.title}
              onError={() => handleImageError(0)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl font-bold text-white mb-2">{tour.title}</h1>
            <div className="flex items-center text-gray-200 space-x-4">
              <div className="flex items-center">
                <Icon name="Map" className="w-5 h-5 mr-2" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <div className="flex space-x-4 mb-6">
                {['overview', 'itinerary', 'inclusions', 'gallery'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg capitalize ${
                      activeTab === tab
                        ? 'bg-secondary text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'overview' && (
                <div>
                  <p className="text-gray-300 mb-6">{tour.description}</p>
                  <h3 className="text-xl font-semibold text-white mb-4">Sightseeing Highlights</h3>
                  <div className="space-y-4">
                    {sightseeingByDay.map(([day, sights]) => (
                      sights.length > 0 && (
                        <div key={day} className="border-l-2 border-secondary pl-4">
                          <h4 className="text-lg font-semibold text-white mb-2">{day}</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {((sights as unknown) as string[]).map((sight: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <Icon name="Tourism" className="w-5 h-5 text-secondary mt-1 mr-3" />
                                <span className="text-gray-300">{sight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div className="space-y-6">
                  {itineraryDays.map(([day, { title, description }]) => (
                    <div key={day} className="border-l-2 border-secondary pl-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-300">{description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'inclusions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Inclusions</h3>
                    <ul className="space-y-3">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Check" className="w-5 h-5 text-green-500 mt-1 mr-3" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.gallery.map((image, index) => (
                    !imageError[index] && (
                      <div key={index} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img
                          src={getImagePath(image)}
                          alt={`${tour.title} - Image ${index + 1}`}
                          onError={() => handleImageError(index)}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-white">
                  {tour.price}
                </p>
                <p className="text-gray-400">per person</p>
              </div>
              <button
                onClick={handleBookViaWhatsApp}
                className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
              >
                <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </button>
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-300">
                  <Icon name="Calendar" className="w-5 h-5 text-secondary mr-3" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon name="Map" className="w-5 h-5 text-secondary mr-3" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon name={"Phone" as IconName} className="w-5 h-5 text-secondary mr-3" />
                  <a href="tel:+923400596665" className="hover:text-white transition-colors">
                    +92 340 0596665
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Follow us for more updates:</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.facebook.com/Rinor.pakistan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon name={"Facebook" as IconName} className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/rinor.pakistan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon name={"Instagram" as IconName} className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rinordotpk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon name={"LinkedIn" as IconName} className="w-6 h-6" />
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="https://chat.whatsapp.com/E4fY7Ofi6yXIoHjof3fuDp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <Icon name="WhatsApp" className="w-4 h-4 mr-2" />
                    Join our WhatsApp Community
                  </a>
                </div>
              </div>

              {/* Contact Address */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white mb-2">Our Office:</p>
                  <p>RINOR SMC PVT LTD</p>
                  <p>Near Women Degree College</p>
                  <p>Jama Masjid Rd, Skardu</p>
                  <p>Gilgit Baltistan</p>
                  <a
                    href="https://g.co/kgs/rfLr2ay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-secondary hover:text-secondary-light transition-colors"
                  >
                    <Icon name="Map" className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail; 