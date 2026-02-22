'use client'

import { motion } from 'framer-motion'
import { 
  AiOutlineRobot, 
  AiOutlineTeam, 
  AiOutlineTrophy,
  AiOutlineBook,
  AiOutlineStar,
  AiOutlineBulb
} from 'react-icons/ai'
import { BsPeople, BsGraphUp } from 'react-icons/bs'

export default function About() {
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-32 overflow-hidden">
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
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                NeuroAI Academy
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Empowering the next generation of AI innovators with cutting-edge education and real-world expertise
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At NeuroAI Academy, we're dedicated to making artificial intelligence education accessible, practical, and industry-relevant. Founded by AI expert <span className="font-semibold text-blue-600">Riffat Ismail</span>, we bridge the gap between theoretical knowledge and real-world application.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our comprehensive programs are designed to transform beginners into confident AI practitioners through hands-on projects, expert mentorship, and cutting-edge curriculum.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: <AiOutlineRobot className="text-3xl" />, value: "50+", label: "AI Courses" },
              { icon: <BsPeople className="text-3xl" />, value: "10K+", label: "Students" },
              { icon: <AiOutlineTrophy className="text-3xl" />, value: "95%", label: "Success Rate" },
              { icon: <BsGraphUp className="text-3xl" />, value: "4.9", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What makes NeuroAI Academy the preferred choice for AI education
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
                icon: <AiOutlineBulb className="text-4xl" />,
                title: "Innovation First",
                desc: "Stay ahead with cutting-edge AI curriculum and technologies",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <AiOutlineTeam className="text-4xl" />,
                title: "Expert Mentorship",
                desc: "Learn directly from industry professionals led by Riffat Ismail",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <AiOutlineBook className="text-4xl" />,
                title: "Practical Learning",
                desc: "Build real-world projects that matter for your career",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Lead Expert
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-linear-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <AiOutlineStar className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Riffat Ismail</h3>
                <p className="text-blue-100">Lead AI Expert & Founder</p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-600 text-lg leading relaxed text-justify mb-4">
              With over 10 years of administrative experience & 5 years in artificial intelligence and machine learning, Riffat Ismail has pioneered AI education programs that have transformed thousands of careers. As the founder of NeuroAI Academy, she brings real-world expertise from leading tech companies and research institutions.
            </p>
            <div className="flex gap-4">
              {['OpenAI', 'Google AI', 'MIT'].map((org, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                  {org}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}