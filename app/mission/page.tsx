'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Users, Shield, Star, TrendingUp } from 'lucide-react'

export default function MissionPage() {
  const missionPoints = [
    {
      icon: <Shield className="h-8 w-8 text-bubblegum-pink" />,
      title: "Verified Reviews",
      description: "Every review is verified by our team to ensure authenticity and help you make informed decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-bubblegum-blue" />,
      title: "Expert Agents",
      description: "Our agents are carefully vetted professionals with proven track records in the Brantford market."
    },
    {
      icon: <Star className="h-8 w-8 text-bubblegum-purple" />,
      title: "Quality Service",
      description: "We maintain high standards for all agents on our platform to ensure exceptional service delivery."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bubblegum-accent" />,
      title: "Market Insights",
      description: "Get access to comprehensive market data and insights to make the best real estate decisions."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-white/50">
                <Target className="h-12 w-12 text-bubblegum-pink" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our Mission
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Rate My Agent, our mission is to help home buyers and sellers find the most trusted, transparent, and client-focused real estate agents in their community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-bubblegum-pink" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empowering Real Estate Decisions
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We believe that finding the right real estate agent shouldn't be a guessing game. That's why we've created a platform that brings transparency, trust, and data-driven insights to one of life's most important decisions.
                </p>
                
                <p>
                  Our mission goes beyond just connecting buyers and sellers with agents. We're building a community where honesty, professionalism, and exceptional service are the foundation of every real estate transaction.
                </p>
                
                <p>
                  Whether you're buying your first home, selling a family property, or investing in real estate, we're here to ensure you have all the information you need to make confident decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Achieve Our Mission */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Achieve Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through innovative technology, rigorous verification processes, and a commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-white/50 mx-auto w-fit">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">500+</div>
                  <div className="text-gray-600">Verified Agents</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">10K+</div>
                  <div className="text-gray-600">Successful Transactions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mt-8">
                These numbers represent more than just statistics—they represent thousands of families who found their perfect home, 
                sellers who achieved their goals, and agents who built lasting relationships with their clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're looking for an agent or you're an agent looking to grow your business, 
              we invite you to be part of our mission to transform the real estate industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/agents"
                className="px-8 py-3 bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Find an Agent
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-bubblegum-pink text-bubblegum-pink font-semibold rounded-lg hover:bg-bubblegum-pink hover:text-white transition-all duration-300"
              >
                Join as Agent
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
