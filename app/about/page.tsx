'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import VideoBackground from '@/components/VideoBackground'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <VideoBackground src="/videos/hero-loop.mp4" className="h-96">
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Bringing transparency and trust to real estate
            </p>
          </motion.div>
        </div>
      </VideoBackground>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  We started Rate My Agent with one goal — to bring honesty, transparency, and data to the real estate world.
                </p>
                <p>
                  After experiencing the challenges of finding trustworthy real estate agents firsthand, our founders realized there was a gap in the market. Too many people were making one of the biggest financial decisions of their lives without proper information about the professionals they were working with.
                </p>
                <p>
                  Today, we're proud to be the leading platform for finding verified real estate agents in Brantford. We've helped thousands of home buyers and sellers connect with agents who truly understand their needs and deliver exceptional results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                  alt="Real estate team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-bubblegum rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-bubblegum rounded-full opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-white/50 mx-auto w-fit">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency. Every review, rating, and piece of data is verified and authentic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-white/50 mx-auto w-fit">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
              <p className="text-gray-600">
                Building trust between agents and clients is at the heart of everything we do. We verify every professional on our platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-white/50 mx-auto w-fit">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide better tools and insights for both agents and clients in the real estate market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The people behind Rate My Agent"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Alex Johnson</h3>
              <p className="text-bubblegum-pink font-medium">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Real estate veteran with 15+ years of experience in the Brantford market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Chen</h3>
              <p className="text-bubblegum-blue font-medium">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Technology expert focused on creating seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mike Rodriguez</h3>
              <p className="text-bubblegum-purple font-medium">Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Full-stack developer passionate about building scalable platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
