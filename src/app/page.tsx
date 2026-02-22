'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AiOutlineRobot, 
  AiOutlineCode, 
  AiOutlineSafetyCertificate,
  AiOutlineArrowRight,
  AiOutlineStar,
  AiOutlineTeam
} from 'react-icons/ai'
import { BsCpu, BsGraphUp, BsPeople } from 'react-icons/bs'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 via-purple-400 to-purple-600 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 2px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Become an{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                AI Expert
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Learn Artificial Intelligence with Real Projects & Industry Experts
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link 
                href="/courses"
                className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Browse Courses
                <AiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Expert Badge */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <AiOutlineStar className="text-yellow-400" />
              <span className="font-medium text-white">AI Expert: Riffat Ismail</span>
              <AiOutlineStar className="text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/40 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from the best in the industry with our comprehensive AI programs
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <AiOutlineRobot className="text-4xl" />,
              title: "AI Experts",
              desc: "Learn from Riffat Ismail and industry professionals with 10+ years experience",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: <AiOutlineCode className="text-4xl" />,
              title: "Real Projects",
              desc: "Hands-on practical learning with 20+ real-world AI projects",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <AiOutlineSafetyCertificate className="text-4xl" />,
              title: "Certification",
              desc: "Get professional certificates recognized by top tech companies",
              color: "from-orange-500 to-red-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-2xl mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <BsCpu className="text-4xl" />, number: "50+", label: "AI Courses" },
              { icon: <BsPeople className="text-4xl" />, number: "10K+", label: "Students" },
              { icon: <BsGraphUp className="text-4xl" />, number: "95%", label: "Success Rate" },
              { icon: <AiOutlineStar className="text-4xl" />, number: "4.9", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}