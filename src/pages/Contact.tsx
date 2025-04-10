import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon, { IconName } from '../components/shared/Icons';
import WhatsAppLink from '../components/shared/WhatsAppLink';

interface ContactInfo {
  icon: IconName;
  title: string;
  details: string[];
  link?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923400596665?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const createWhatsAppMessage = () => {
    return `*New Inquiry*\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: 'Map' as IconName,
      title: 'Head Office',
      details: [
        'RINOR (SMC-PVT) LTD',
        'Main Bazar, Near Masajid Chowk',
        'Skardu, Gilgit-Baltistan',
        'Pakistan'
      ]
    },
    {
      icon: 'Contact' as IconName,
      title: 'Email Addresses',
      details: [
        'info@rinor.pk (General Inquiries)',
        'khadim@rinor.pk (Executive Office)',
        'sales@rinor.pk (Sales Department)',
        'kazim@rinor.pk (Tourism Department)'
      ],
      link: 'mailto:info@rinor.pk'
    },
    {
      icon: 'WhatsApp' as IconName,
      title: 'WhatsApp Business',
      details: [
        'Executive Office: +92 313 5693011',
        'Tourism Department: +92 346 8505906'
      ],
      link: 'https://wa.me/923135693011'
    }
  ];

  const socialMedia = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/rinor.pakistan',
      icon: 'Facebook' as IconName,
      username: '@rinor.pakistan'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/rinor.pakistan',
      icon: 'Instagram' as IconName,
      username: '@rinor.pakistan'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/rinor-smc-pvt-ltd',
      icon: 'LinkedIn' as IconName,
      username: 'RINOR (SMC-PVT) LTD'
    }
  ];

  const departments = [
    {
      name: 'Executive Office',
      contact: 'Khadim Hussain (CEO)',
      phone: '+92 313 5693011',
      email: 'khadim@rinor.pk',
      role: 'Executive Decisions'
    },
    {
      name: 'Research & Strategy',
      contact: 'Yousuf',
      phone: '+92 347 5633025',
      email: 'info@rinor.pk',
      role: 'Research, Consultancy & Strategy Planning'
    },
    {
      name: 'Tourism Department',
      contact: 'Kazim',
      phone: '+92 346 8505906',
      email: 'kazim@rinor.pk',
      role: 'Tour Inquiries & Arrangements'
    },
    {
      name: 'International Ticketing',
      contact: 'Asghar',
      phone: '+92 313 2121202',
      email: 'sales@rinor.pk',
      role: 'International Fare Updates & Bookings'
    },
    {
      name: 'Domestic Ticketing',
      contact: 'Ibrahim',
      phone: '+92 348 5760620',
      email: 'sales@rinor.pk',
      role: 'Domestic Fare Updates & Bookings'
    },
    {
      name: 'Accounts Department',
      contact: 'Accounts Team',
      phone: '+92 344 8204143',
      email: 'info@rinor.pk',
      role: 'Account Related Queries'
    },
    {
      name: 'Technical Support',
      contact: 'Saqlain',
      phone: '+92 347 5484803',
      email: 'info@rinor.pk',
      role: 'Technical Queries & Support'
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
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help! Reach out to us through any of our contact channels.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-secondary/20 rounded-full p-3 mr-4">
                  <Icon name={info.icon} className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white">{info.title}</h3>
              </div>
              <div className="space-y-2">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-300">
                    {detail}
                  </p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light inline-block mt-2"
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <WhatsAppLink
              message={createWhatsAppMessage()}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <Icon name="WhatsApp" className="w-5 h-5 mr-2" />
              <span>Send via WhatsApp</span>
            </WhatsAppLink>
          </form>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Connect with Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon name={social.icon} className="w-6 h-6 text-secondary mr-3" />
                <div>
                  <h3 className="text-white font-medium">{social.platform}</h3>
                  <p className="text-gray-400 text-sm">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Our Departments</h2>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Department Contacts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <div key={index} className="p-6 bg-gray-700/50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">{dept.name}</h3>
                <div className="space-y-2">
                  <p className="text-secondary font-medium">{dept.contact}</p>
                  <p className="text-gray-300 text-sm">{dept.role}</p>
                  <p className="text-gray-300">
                    <a href={`tel:${dept.phone}`} className="hover:text-secondary">
                      {dept.phone}
                    </a>
                  </p>
                  <a href={`mailto:${dept.email}`} className="text-secondary hover:text-secondary-light text-sm block">
                    {dept.email}
                  </a>
                  <a
                    href={`https://wa.me/${dept.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-green-500 hover:text-green-400 mt-2"
                  >
                    <Icon name="WhatsApp" className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 