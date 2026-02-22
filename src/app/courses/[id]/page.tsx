'use client'

import { motion } from 'framer-motion'
import { 
  AiOutlineStar, 
  AiOutlineClockCircle,
  AiOutlineTeam,
  AiOutlineBarChart,
  AiOutlineCheckCircle,
  AiOutlinePlayCircle,
  AiOutlineSafetyCertificate,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const coursesData: any = {
  '1': {
    id: '1',
    title: 'AI Fundamentals',
    description: 'Master the core concepts of Artificial Intelligence with hands-on projects and real-world applications. This comprehensive course covers everything from basic principles to practical implementation.',
    longDescription: 'Dive into the exciting world of Artificial Intelligence with our flagship AI Fundamentals course. Led by industry expert Riffat Ismail, you\'ll build a solid foundation in AI concepts, tools, and techniques used by leading tech companies.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    level: 'Beginner',
    duration: '8 weeks',
    students: 2345,
    rating: 4.8,
    price: 49,
    instructor: 'Riffat Ismail',
    curriculum: [
      'Introduction to AI and Machine Learning',
      'Python for AI Programming',
      'Data Preprocessing and Analysis',
      'Supervised Learning Basics',
      'Unsupervised Learning Concepts',
      'AI Ethics and Best Practices',
      'Capstone Project'
    ],
    includes: [
      '8 weeks of on-demand video',
      '20+ coding exercises',
      '3 real-world projects',
      'Certificate of completion',
      'Lifetime access',
      'Community forum access'
    ]
  },
  '2': {
    id: '2',
    title: 'Machine Learning',
    description: 'Comprehensive ML course covering algorithms, model training, and deployment strategies for real-world applications.',
    longDescription: 'Take your AI skills to the next level with our in-depth Machine Learning course. Learn to build, train, and deploy ML models that solve real business problems under the guidance of expert instructor Riffat Ismail.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    level: 'Intermediate',
    duration: '12 weeks',
    students: 1876,
    rating: 4.9,
    price: 79,
    instructor: 'Riffat Ismail',
    curriculum: [
      'Advanced Python for ML',
      'Linear and Logistic Regression',
      'Decision Trees and Random Forests',
      'Support Vector Machines',
      'Neural Networks Fundamentals',
      'Model Evaluation and Tuning',
      'ML Pipeline Development',
      'Model Deployment Strategies'
    ],
    includes: [
      '12 weeks of expert instruction',
      '30+ hands-on exercises',
      '5 industry projects',
      'ML certification',
      '1-on-1 mentorship session',
      'Career guidance'
    ]
  },
  '3': {
    id: '3',
    title: 'Deep Learning',
    description: 'Advanced neural networks, transformers, and cutting-edge deep learning architectures for complex AI applications.',
    longDescription: 'Master the most advanced AI techniques with our Deep Learning specialization. From convolutional networks to transformers, learn the architectures powering today\'s AI revolution from expert Riffat Ismail.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    level: 'Advanced',
    duration: '10 weeks',
    students: 1456,
    rating: 4.9,
    price: 99,
    instructor: 'Riffat Ismail',
    curriculum: [
      'Neural Network Architectures',
      'Convolutional Neural Networks (CNN)',
      'Recurrent Neural Networks (RNN)',
      'Long Short-Term Memory (LSTM)',
      'Transformers and Attention',
      'BERT and GPT Models',
      'Computer Vision Applications',
      'Natural Language Processing'
    ],
    includes: [
      '10 weeks of advanced training',
      '25+ complex exercises',
      '4 cutting-edge projects',
      'Deep Learning certification',
      'Research paper review sessions',
      'Industry networking opportunities'
    ]
  }
}

export default function CourseDetail() {
  const params = useParams()
  const course = coursesData[params.id as string]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <Link href="/courses" className="text-blue-600 hover:text-blue-700">
            ← Back to Courses
          </Link>
        </div>
      </div>
    )
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/courses" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors group">
              <span className="mr-2 group-hover:-translate-x-2 transition-transform">←</span> Back to Courses
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Image and Stats */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Course</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {course.longDescription}
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">Curriculum</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {course.curriculum.map((item: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <AiOutlineCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">This Course Includes</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {course.includes.map((item: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-2 p-2 hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    <AiOutlinePlayCircle className="text-blue-500 mt-1 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">${course.price}</span>
                <span className="text-gray-500"> / course</span>
              </div>

              {/* Enroll Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold text-lg mb-4 flex items-center justify-center gap-2 group"
              >
                <AiOutlineShoppingCart className="group-hover:rotate-12 transition-transform" />
                Enroll Now
              </motion.button>

              {/* Course Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AiOutlineBarChart className="text-blue-600" />
                    <span className="text-gray-600">Level</span>
                  </div>
                  <span className="font-semibold text-gray-800">{course.level}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AiOutlineClockCircle className="text-blue-600" />
                    <span className="text-gray-600">Duration</span>
                  </div>
                  <span className="font-semibold text-gray-800">{course.duration}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AiOutlineTeam className="text-blue-600" />
                    <span className="text-gray-600">Students</span>
                  </div>
                  <span className="font-semibold text-gray-800">{course.students}+</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AiOutlineStar className="text-blue-600" />
                    <span className="text-gray-600">Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-800">{course.rating}</span>
                    <AiOutlineStar className="text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Instructor</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    RI
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{course.instructor}</p>
                    <p className="text-sm text-gray-500">AI Expert</p>
                  </div>
                </div>
              </div>

              {/* Certificate Badge */}
              <div className="mt-6 p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AiOutlineSafetyCertificate className="text-blue-600 text-xl" />
                  <span className="font-semibold text-gray-800">Certificate Included</span>
                </div>
                <p className="text-sm text-gray-600">
                  Get a professional certificate upon completion
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Related Courses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(coursesData)
              .filter((c: any) => c.id !== course.id)
              .slice(0, 2)
              .map((relatedCourse: any) => (
                <motion.div
                  key={relatedCourse.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <Link href={`/courses/${relatedCourse.id}`}>
                    <img 
                      src={relatedCourse.image} 
                      alt={relatedCourse.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{relatedCourse.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{relatedCourse.level}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-bold">${relatedCourse.price}</span>
                        <span className="text-sm text-gray-500">{relatedCourse.duration}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}