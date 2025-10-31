import { motion } from 'framer-motion';
import { Award, Clock, Target, Users } from 'lucide-react';
import ProfilePhoto from '../assets/photo2.png';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "5+", label: "ML Projects" },
    { icon: <Clock className="w-6 h-6" />, value: "3+", label: "Years Learning" },
    { icon: <Target className="w-6 h-6" />, value: "5+", label: "Technologies" },
    { icon: <Users className="w-6 h-6" />, value: "2", label: "Research Papers" }
  ];

  return (
    <section id="about" className="py-20 mt-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about pushing the boundaries of artificial intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a computer science student with a deep passion for artificial intelligence and machine learning. 
                My journey in AI began with curiosity about how machines can learn and make decisions, and it has evolved 
                into a pursuit of creating intelligent systems that solve real-world problems.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                I believe in the power of AI to transform industries and improve lives. My work focuses on bridging the gap 
                between theoretical research and practical applications, ensuring that AI solutions are not only innovative 
                but also accessible and impactful.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                When I'm not coding or researching, I'm probably exploring new AI papers, contributing to open-source projects, 
                or thinking about the ethical implications of artificial intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-200"
                >
                  <div className="text-cyan-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 mt-8 border-t border-gray-300"
            >
              <p className="text-gray-600 italic text-lg text-center">
                "AI is probably the most important thing humanity has ever worked on. 
                I think of it as something more profound than electricity or fire."
              </p>
              <p className="text-gray-500 text-sm text-center mt-2">— Sundar Pichai, CEO of Google</p>
            </motion.div>
          </motion.div>

          {/* Your Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <motion.img
                  src={ProfilePhoto}
                  alt="Jean Granger"
                  className="w-64 h-64 rounded-full object-cover mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <p className="text-gray-600 font-medium">Jean Granger</p>
                <p className="text-gray-500 text-sm mt-1">ML & AI Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;