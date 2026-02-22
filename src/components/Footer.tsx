'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineRobot,
  AiOutlineHeart
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
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
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <AiOutlineRobot className="w-8 h-8 text-blue-400" />
              </motion.div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NeuroAI Academy
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Master Artificial Intelligence with industry experts and real-world projects.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#60A5FA' }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <AiOutlineGithub size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#60A5FA' }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <AiOutlineLinkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#60A5FA' }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <AiOutlineTwitter size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Courses', 'About', 'Contact', 'Blog'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link 
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest AI news and course updates
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2026 NeuroAI Academy. All rights reserved. Created with{' '}
            <AiOutlineHeart className="inline text-red-400 mx-1 animate-pulse" />{' '}
            by Riffat Ismail
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}