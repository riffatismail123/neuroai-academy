'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiOutlineStar, AiOutlineClockCircle, AiOutlineTeam, AiOutlineArrowRight } from 'react-icons/ai'

interface Course {
  id: number
  title: string
  description: string
  price: number
  image: string
  level?: string
  duration?: string
  students?: number
  rating?: number
  instructor?: string
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
    >
      <Link href={`/courses/${course.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${course.price}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Course Meta */}
          <div className="flex flex-wrap gap-3 mb-4">
            {course.level && (
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                {course.level}
              </span>
            )}
            {course.duration && (
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full flex items-center gap-1">
                <AiOutlineClockCircle /> {course.duration}
              </span>
            )}
          </div>

          {/* Instructor and Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {course.instructor?.charAt(0) || 'RI'}
              </div>
              <span className="text-sm text-gray-600">
                {course.instructor || 'Riffat Ismail'}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {course.rating && (
                <div className="flex items-center gap-1 text-sm">
                  <AiOutlineStar className="text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
              )}
              {course.students && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <AiOutlineTeam />
                  <span>{course.students}k</span>
                </div>
              )}
            </div>
          </div>

          {/* View Details Link */}
          <div className="mt-4 flex items-center justify-end text-blue-600 font-medium group-hover:gap-2 transition-all">
            <span>View Details</span>
            <AiOutlineArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}