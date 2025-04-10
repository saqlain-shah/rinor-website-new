import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Icon, { IconName } from '../shared/Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: 'Home' as IconName },
    { name: 'Air Ticketing', href: '/air-ticketing', icon: 'AirTicket' as IconName },
    { name: 'Tours', href: '/tourism', icon: 'Tourism' as IconName },
    { name: 'Visa Assistance', href: '/visa-assistance', icon: 'Visa' as IconName },
    { name: 'About', href: '/about', icon: 'About' as IconName },
    { name: 'Projects', href: '/projects', icon: 'Projects' as IconName },
    { name: 'Contact', href: '/contact', icon: 'Contact' as IconName },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="public/logo-white.png"
                alt="RINOR"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Icon name={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://wa.me/923400596665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Icon name="WhatsApp" className="w-5 h-5" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Icon name={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://wa.me/923400596665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Icon name="WhatsApp" className="w-5 h-5" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 