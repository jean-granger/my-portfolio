import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Email",
      handle: "jeannange001@gmail.com",
      link: "mailto:jeannange001@gmaul.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      platform: "GitHub",
      handle: "@jean-granger",
      link: "https://github.com/jean-granger"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      platform: "LinkedIn",
      handle: "Jean Granger",
      link: "https://linkedin.com/in/ange-granger-jean-365b94320"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "+225 01 02 579 579",
      link: "https://wa.me/2250102579579"
    }
  ];

  return (
    <section id="contact" className="py-20 mt-20 bg-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold mb-6">
            Get In <span className="text-white">Touch</span>
          </h3>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.platform}
                href={method.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="block bg-cyan-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group hover:bg-cyan-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{method.platform}</div>
                    <div className="text-cyan-100">{method.handle}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-cyan-700 rounded-2xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6">Why Collaborate With Me?</h4>
            
            <div className="space-y-4 mb-8">
              {[
                "Cloud deployment and MLOps experience", 
                "Research-driven approach to problem solving",
                "Clean, maintainable code and documentation",
                "Leadership, teamworking and hardwork"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-cyan-100">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4 pt-6 border-t border-cyan-500"
            >
              <div className="flex items-center gap-3 text-cyan-100">
                <MapPin className="w-5 h-5 text-white" />
                <span>Available for remote positions worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-100">
                <Calendar className="w-5 h-5 text-white" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8"
            >
              <a
                href="mailto:jeannange001@gmail.com"
                className="block w-full bg-white text-cyan-600 text-center font-semibold py-4 px-6 rounded-xl hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;