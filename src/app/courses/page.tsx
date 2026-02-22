'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { 
  AiOutlineSearch, 
  AiOutlineFilter,
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineTeam
} from 'react-icons/ai'

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Master the core concepts of Artificial Intelligence with hands-on projects and real-world applications',
    price: 49,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    level: 'Beginner',
    duration: '8 weeks',
    students: 2345,
    rating: 4.8,
    instructor: 'Riffat Ismail'
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Comprehensive ML course covering algorithms, model training, and deployment strategies',
    price: 79,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    level: 'Intermediate',
    duration: '12 weeks',
    students: 1876,
    rating: 4.9,
    instructor: 'Riffat Ismail'
  },
  {
    id: 3,
    title: 'Deep Learning',
    description: 'Advanced neural networks, transformers, and cutting-edge deep learning architectures',
    price: 99,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    level: 'Advanced',
    duration: '10 weeks',
    students: 1456,
    rating: 4.9,
    instructor: 'Riffat Ismail'
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLevel === 'All' || course.level === selectedLevel)
  )

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
              AI{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Courses
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Choose from our comprehensive AI programs designed by industry expert Riffat Ismail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <label htmlFor="search" className="sr-only">Search courses</label>
              <AiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="search"
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                aria-label="Search courses"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <label htmlFor="level-filter" className="sr-only">Filter by level</label>
                <AiOutlineFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <select
                  id="level-filter"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="pl-12 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                  aria-label="Filter courses by difficulty level"
                  title="Select course level"
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No courses found matching your criteria</p>
          </motion.div>
        )}
      </section>

      {/* Features Banner */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <AiOutlineStar className="text-3xl" />, title: "Expert Instruction", desc: "All courses led by Riffat Ismail" },
              { icon: <AiOutlineClockCircle className="text-3xl" />, title: "Lifetime Access", desc: "Learn at your own pace" },
              { icon: <AiOutlineTeam className="text-3xl" />, title: "Community Support", desc: "Join 10,000+ students" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}