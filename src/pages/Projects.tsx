import React from 'react';
import { motion, Variants } from 'framer-motion';
import Icon, { IconName } from '../components/shared/Icons';
// import WhatsAppLink from '../components/shared/WhatsAppLink';

interface Project {
  id: string;
  title: string;
  description: string;
  achievements: string[];
  futureProspects?: string[];
  stats?: { label: string; value: string }[];
  icon: IconName;
}

const Projects: React.FC = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projects: Project[] = [
    {
      id: 'ticketing',
      title: 'Ticketing & Visa Services',
      description: 'No.1 Ticketing Agency in Gilgit Baltistan offering domestic and international ticketing services.',
      achievements: [
        'Market leader in Gilgit Baltistan region',
        '24.5% Growth Rate in International Sales',
        '13.7% Growth Rate in Domestic Sales',
        'Comprehensive visa assistance services'
      ],
      stats: [
        { label: 'Domestic Tickets', value: '170,000+' },
        { label: 'International Tickets', value: '125,000+' },
        { label: 'Visa Services', value: '105,000+' }
      ],
      futureProspects: [
        'Digitalization in 2024',
        'DDP implementation in 2025',
        'OTA launch by 2026',
        'International airline agreements by 2025',
        'RINOR EXPO in 2026'
      ],
      icon: 'AirTicket'
    },
    {
      id: 'tourism',
      title: 'Tourism & Destination Development',
      description: 'Pioneering sustainable tourism and destination development in Gilgit-Baltistan.',
      achievements: [
        '7% share of Domestic Market',
        '5% share of International Market',
        'Completed need assessment',
        'Developed comprehensive implementation plan',
        'Raised $15,000 against 0.5% Equity'
      ],
      futureProspects: [
        '6 Huts, 13 Camping Sites, 29 Rest Areas development',
        '5 Bridges, 3 Renovations, 2 Trails construction',
        'Integration of Technology with Control Room',
        'Expected +0.8M Domestic & +0.03M International Tourists by 2030',
        'Projected +235M$ Revenue with 32.9M$ Service Charge'
      ],
      icon: 'Tourism'
    },
    {
      id: 'stone',
      title: 'Stone Processing',
      description: 'Processing and marketing of premium Karakoram Granites and river stones.',
      achievements: [
        'Successful pilot testing completion',
        'Designed sinks from Granites',
        'Developed Multicolor River Stone products',
        'Initial investment of 3 million PKR'
      ],
      futureProspects: [
        'Establishment of Processing Unit in Skardu',
        'Expansion to Luxury Items',
        '+35K orders projected by 2030',
        '+29M Revenue expected by 2030',
        'Development of Website by 2027',
        '+5 Sales points in GULF Countries'
      ],
      icon: 'Shield'
    },
    {
      id: 'consultancy',
      title: 'R&D & Consultancy',
      description: 'Comprehensive research, development, and consultancy services.',
      achievements: [
        '16 Digital Marketing Workshops',
        '21 Soft Skills Seminars',
        '24 MERN Stack Development Courses',
        '150+ Translation Services',
        '150+ Data Analysis Projects'
      ],
      stats: [
        { label: 'PhD/Affiliates', value: '40+' },
        { label: 'Courses & Workshops', value: '70+' }
      ],
      icon: 'Projects'
    },
    {
      id: 'retail',
      title: 'RINOS D-Mart',
      description: 'Premium cash-and-carry mart in Skardu city.',
      achievements: [
        'Value: PKR 25M',
        'High-quality service standards',
        'Wide product range',
        'Strategic location in Skardu'
      ],
      icon: 'Check'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
            Our Projects & Initiatives
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving innovation and excellence across multiple sectors through our diverse portfolio of projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-gray-800/50 rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-full p-3">
                  <Icon name={project.icon} className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {project.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, index) => (
                        <div key={index} className="text-center bg-gray-700/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Achievements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {project.futureProspects && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Future Prospects</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {project.futureProspects.map((prospect, index) => (
                          <li key={index}>{prospect}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 bg-gray-800/50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Destination Development Project</h3>
              <p className="text-gray-300">
                Phase 1 completed with $15,000 raised. Currently raising $120,000 from IPA & local communities.
                Expansion opportunities in KHANJOR, SHILA, DEOSAI, GHANDUS, STAK, BILAMIK, SHAGHARTHANG, and ARANDO.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Stone Processing</h3>
              <p className="text-gray-300">
                Seeking investment of $318,000 for Processing Unit 1 and $272,000 for Unit 2.
                Pilot phase successfully completed with 3 million PKR investment.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Online Travel Agency (OTA)</h3>
              <p className="text-gray-300">
                Development in collaboration with NetBots and Imran Developers.
                Total investment requirement of $0.63 million for implementation by 2027-8.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Import & Export</h3>
              <p className="text-gray-300">
                Open to collaborate with national and international agencies for import and export of approved items.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 