'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AgentCard from '@/components/AgentCard'
import SectionHeader from '@/components/SectionHeader'
import StatsGrid from '@/components/StatsGrid'
import { Users, Star, Shield, TrendingUp } from 'lucide-react'

// Demo data for agents
const featuredAgents = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 127,
    city: 'Brantford',
    specialty: 'First-time Buyers',
    phone: '(519) 555-0101',
    email: 'sarah@example.com',
    slug: 'sarah-johnson'
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    rating: 4.8,
    reviewCount: 89,
    city: 'Brantford',
    specialty: 'Luxury Homes',
    phone: '(519) 555-0102',
    email: 'michael@example.com',
    slug: 'michael-chen'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 156,
    city: 'Brantford',
    specialty: 'Investment Properties',
    phone: '(519) 555-0103',
    email: 'emily@example.com',
    slug: 'emily-rodriguez'
  },
  {
    id: '4',
    name: 'David Thompson',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    rating: 4.7,
    reviewCount: 203,
    city: 'Brantford',
    specialty: 'Family Homes',
    phone: '(519) 555-0104',
    email: 'david@example.com',
    slug: 'david-thompson'
  }
]

const stats = [
  {
    number: '500+',
    label: 'Verified Agents',
    icon: <Users className="h-8 w-8 text-bubblegum-pink" />
  },
  {
    number: '10K+',
    label: 'Reviews',
    icon: <Star className="h-8 w-8 text-bubblegum-blue" />
  },
  {
    number: '98%',
    label: 'Satisfaction Rate',
    icon: <Shield className="h-8 w-8 text-bubblegum-purple" />
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Top Rated Agents Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Top Rated Agents"
            subtitle="Meet our highest-rated real estate professionals in Brantford"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {featuredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We're committed to helping you find the perfect real estate agent"
          />
          
          <div className="mt-16">
            <StatsGrid stats={stats} />
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-background/50 mx-auto w-fit">
                <Shield className="h-8 w-8 text-bubblegum-pink" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Verified Reviews</h3>
              <p className="text-muted-foreground">
                All reviews are verified by our team to ensure authenticity and help you make informed decisions.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-background/50 mx-auto w-fit">
                <Users className="h-8 w-8 text-bubblegum-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Agents</h3>
              <p className="text-muted-foreground">
                Our agents are carefully vetted professionals with proven track records in the Brantford market.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-background/50 mx-auto w-fit">
                <TrendingUp className="h-8 w-8 text-bubblegum-purple" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Market Insights</h3>
              <p className="text-muted-foreground">
                Get access to comprehensive market data and insights to make the best real estate decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
