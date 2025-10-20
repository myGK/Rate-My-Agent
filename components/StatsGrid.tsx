'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatItem {
  number: string
  label: string
  icon?: React.ReactNode
}

interface StatsGridProps {
  stats: StatItem[]
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center">
            {stat.icon && (
              <div className="p-4 rounded-full bg-gradient-to-r from-bubblegum-pink/20 to-bubblegum-blue/20">
                {stat.icon}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gradient"
            >
              {stat.number}
            </motion.div>
            <p className="text-lg text-gray-600 font-medium">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsGrid
