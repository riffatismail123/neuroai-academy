'use client'

import { motion } from 'framer-motion'
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineEnvironment,
  AiOutlineSend,
  AiOutlineClockCircle,
  AiOutlineMessage
} from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Touch
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about our AI courses? We're here to help you start your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: <AiOutlineMail className="text-2xl" />, title: "Email", value: "info@neuroai.academy", link: "mailto:info@neuroai.academy" },
                { icon: <AiOutlinePhone className="text-2xl" />, title: "Phone", value: "+92 (300) 123-4567", link: "tel:+923001234567" },
                { icon: <AiOutlineEnvironment className="text-2xl" />, title: "Address", value: "street 6, sector F-9, Islamabad", link: null },
                { icon: <AiOutlineClockCircle className="text-2xl" />, title: "Hours", value: "Mon-Fri: 9AM - 6PM PST", link: null }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <BsChatDots className="text-blue-600" />
                <span className="font-semibold text-gray-800">Quick Response</span>
              </div>
              <p className="text-gray-600">
                Our team, led by AI expert <span className="font-semibold text-blue-600">Riffat Ismail</span>, typically responds within 2 hours during business hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Fahad Ali"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="fahad@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  title="Select message subject"
                >
                  <option value="course">Course Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group"
                type="submit"
              >
                <AiOutlineSend className="group-hover:translate-x-2 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-96 bg-linear-to-r from-blue-100 to-purple-100 rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <AiOutlineEnvironment className="text-6xl text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">street 6, sector F-9, Islamabad </p>
                <p className="text-sm text-gray-500 mt-2">Interactive map would be embedded here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}