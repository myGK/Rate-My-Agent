'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Shield, Users, TrendingUp, Star, MapPin, Phone, Mail } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const services = [
  {
    icon: <Search className="h-8 w-8 text-bubblegum-pink" />,
    title: "Agent Discovery",
    description: "Search and connect with verified local agents who specialize in your specific needs and location.",
    features: [
      "Advanced search filters",
      "Location-based matching",
      "Specialty expertise matching",
      "Availability calendar"
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-bubblegum-blue" />,
    title: "Verified Reviews",
    description: "Access authentic, human-verified experiences from real clients to make informed decisions.",
    features: [
      "Verified client reviews",
      "Detailed rating breakdowns",
      "Response time tracking",
      "Success rate metrics"
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-bubblegum-purple" />,
    title: "Agent Matching",
    description: "Get matched with agents that fit your goals, budget, and timeline through our smart algorithm.",
    features: [
      "AI-powered matching",
      "Goal-based recommendations",
      "Budget compatibility",
      "Timeline alignment"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-bubblegum-accent" />,
    title: "Insights & Rankings",
    description: "Explore market trends, agent performance data, and comprehensive rankings to stay informed.",
    features: [
      "Market trend analysis",
      "Performance rankings",
      "Sales volume data",
      "Market insights reports"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive tools and insights to help you find the perfect real estate agent"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-to-r from-bubblegum-pink/20 to-bubblegum-blue/20">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                            <Star className="h-4 w-4 text-bubblegum-pink flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How It Works"
            subtitle="Simple steps to find your perfect real estate agent"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Search & Filter</h3>
              <p className="text-gray-600">
                Use our advanced search tools to find agents based on location, specialty, ratings, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Compare & Review</h3>
              <p className="text-gray-600">
                Compare agents side-by-side, read verified reviews, and analyze their performance metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Connect & Collaborate</h3>
              <p className="text-gray-600">
                Reach out to your chosen agent directly through our platform and start your real estate journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
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
                Why Choose Our Platform?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-bubblegum-pink/20 flex-shrink-0">
                    <Shield className="h-6 w-6 text-bubblegum-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Professionals</h3>
                    <p className="text-gray-600">All agents undergo thorough verification and background checks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-bubblegum-blue/20 flex-shrink-0">
                    <Star className="h-6 w-6 text-bubblegum-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real Reviews</h3>
                    <p className="text-gray-600">Authentic reviews from verified clients who have worked with these agents.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-bubblegum-purple/20 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-bubblegum-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market Insights</h3>
                    <p className="text-gray-600">Access to comprehensive market data and agent performance analytics.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-bubblegum-pink/10 to-bubblegum-blue/10 rounded-2xl p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-gradient">500+</div>
                  <div className="text-gray-600">Verified Agents</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-bubblegum-pink">10K+</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-bubblegum-blue">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Find Your Perfect Agent?
            </h2>
            <p className="text-lg text-gray-600">
              Start your search today and connect with verified real estate professionals in Brantford.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/agents"
                className="px-8 py-3 bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Browse Agents
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-bubblegum-pink text-bubblegum-pink font-semibold rounded-lg hover:bg-bubblegum-pink hover:text-white transition-all duration-300"
              >
                Get Help
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
