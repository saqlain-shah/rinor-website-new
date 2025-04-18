import { motion } from 'framer-motion';
import Icon, { IconName } from '../components/shared/Icons';

interface Milestone {
  year: number;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  designation: string;
}

const About = () => {
  const milestones: Milestone[] = [
    {
      year: 2015,
      title: "Company Founded",
      description: "RINOR (SMC-PVT) LTD was established with a vision to revolutionize travel services in Pakistan."
    },
    {
      year: 2018,
      title: "Expansion of Services",
      description: "Introduced comprehensive visa assistance and expanded our tourism packages."
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "Launched online booking systems and enhanced digital customer service."
    },
    {
      year: 2023,
      title: "Regional Leadership",
      description: "Became one of the leading travel agencies in Northern Pakistan."
    }
  ];

  const teamMembers: TeamMember[] = [
    { name: "Khadim Hussain", designation: "CEO" },
    { name: "Muhammad Kazim", designation: "COO" },
    { name: "Asghar Ali", designation: "Director Sales" },
    { name: "Muhammad Yousuf", designation: "R&D Lead" },
    { name: "Dr. Barkatullah", designation: "Strategy Officer" },
    { name: "Muhammad Iqbal", designation: "Director HR" },
    { name: "Imran Ali Asghar", designation: "CTO" },
    { name: "Sajjad Hussain", designation: "BOD" },
    { name: "Zaheer Abbas", designation: "VCR Manager" },
    { name: "Ali Naqi", designation: "Marketing Manager" },
    { name: "Syed Haider Abbas", designation: "Tourism Manager" },
    { name: "Muhammad Ibrahim", designation: "Director Sales" },
    { name: "Muhammad Nazir", designation: "Director Accounts" },
    { name: "Mohsin Raza", designation: "Accounts Manager" },
    { name: "Asghar Hussain", designation: "Supply Chain Manager" },
    { name: "Tanveer Abbas", designation: "Chef" },
    { name: "Muhammad Jawad", designation: "Sale Staff" },
    { name: "Javed Iqbal", designation: "Digital Marketing Manager" },
    { name: "Ghulam Muhammad", designation: "Iran Representative" },
    { name: "Muzammil Hussain", designation: "Office Boy" },
    { name: "Syed Taqi Mosvi", designation: "Sale Staff" },
    { name: "Sherjeel Ehtisham", designation: "Sale Staff" },
    { name: "Anwar Ali Najafi", designation: "Member BOD" },
    { name: "Ameen", designation: "KSA Representative" },
    { name: "Hussain Athar", designation: "UAE Representative" },
    { name: "Muhammad Jawad Haider", designation: "Dubai Representative" },
    { name: "Syed Mubarak Ali", designation: "Iraq Representative" },
    { name: "Saqlain Shah", designation: "DDP Manager" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
            About RINOR
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for travel, tourism, and visa services in Pakistan
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading travel and tourism company in Pakistan, known for excellence,
              innovation, and customer satisfaction in providing comprehensive travel solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To provide exceptional travel experiences and visa services while promoting
              Pakistan's tourism potential and facilitating seamless international travel for our clients.
            </p>
          </motion.div>
        </div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-gray-400">{member.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every service we provide",
                icon: "Star" as IconName
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency",
                icon: "Shield" as IconName
              },
              {
                title: "Innovation",
                description: "We continuously improve and adapt to changing needs",
                icon: "Lightbulb" as IconName
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6"
              >
                <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-secondary text-white px-4 py-2 rounded-lg">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to plan your next adventure or get assistance with visa applications.
            </p>
            <button
              onClick={() => window.open('https://wa.me/923400596665', '_blank')}
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 