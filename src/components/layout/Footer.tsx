import { Link } from 'react-router-dom';
import Icon, { IconName } from '../shared/Icons';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://facebook.com/rinor',
      label: 'Facebook',
      icon: 'Facebook' as IconName
    },
    {
      href: 'https://instagram.com/rinor',
      label: 'Instagram',
      icon: 'Instagram' as IconName
    },
    {
      href: 'https://linkedin.com/company/rinor',
      label: 'LinkedIn',
      icon: 'LinkedIn' as IconName
    },
    {
      href: 'https://wa.me/923400596665',
      label: 'WhatsApp',
      icon: 'WhatsApp' as IconName
    }
  ];

  const contactInfo = {
    phone1: '05815457424',
    phone2: '+92 340 0596665',
    whatsappGroup: 'https://chat.whatsapp.com/E4fY7Ofi6yXIoHjof3fuDp',
    googleBusiness: 'https://g.co/kgs/rfLr2ay',
    address: 'RINOR SMC PVT LTD, Near Women Degree College, Jama Masjid Rd, Skardu, Gilgit Baltistan'
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="public/logo-white.png"
                alt="RINOR"
              />
            </Link>
          </div>            <p className="text-gray-400">Your trusted partner for Air Ticketing, Tourism, and Visa Assistance services.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name={link.icon} className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-white transition-colors">Tours</Link>
              </li>
              <li>
                <Link to="/visa-assistance" className="text-gray-400 hover:text-white transition-colors">Visa Assistance</Link>
              </li>
              <li>
                <Link to="/air-ticketing" className="text-gray-400 hover:text-white transition-colors">Air Ticketing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                <a href={`tel:${contactInfo.phone1}`} className="hover:text-white transition-colors">
                  {contactInfo.phone1}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                <a href={`tel:${contactInfo.phone2}`} className="hover:text-white transition-colors">
                  {contactInfo.phone2}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                <a href={contactInfo.whatsappGroup} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Join WhatsApp Group
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="Map" className="w-5 h-5 mr-2" />
                <a href={contactInfo.googleBusiness} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Office</h3>
            <p className="text-gray-400">
              {contactInfo.address}
            </p>
            <div className="mt-4">
              <a
                href={contactInfo.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary-light transition-colors"
              >
                <Icon name="Map" className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} RINOR SMC PVT LTD. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href={contactInfo.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
                Join Our WhatsApp Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 