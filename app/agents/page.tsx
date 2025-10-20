'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AgentCard from '@/components/AgentCard'
import SectionHeader from '@/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Star, MapPin } from 'lucide-react'

// Extended demo data for agents
const allAgents = [
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
  },
  {
    id: '5',
    name: 'Lisa Wang',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    rating: 4.8,
    reviewCount: 94,
    city: 'Brantford',
    specialty: 'Condos & Townhouses',
    phone: '(519) 555-0105',
    email: 'lisa@example.com',
    slug: 'lisa-wang'
  },
  {
    id: '6',
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    rating: 4.6,
    reviewCount: 178,
    city: 'Brantford',
    specialty: 'Commercial Properties',
    phone: '(519) 555-0106',
    email: 'james@example.com',
    slug: 'james-wilson'
  },
  {
    id: '7',
    name: 'Maria Garcia',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 142,
    city: 'Brantford',
    specialty: 'Senior Living',
    phone: '(519) 555-0107',
    email: 'maria@example.com',
    slug: 'maria-garcia'
  },
  {
    id: '8',
    name: 'Robert Brown',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
    rating: 4.7,
    reviewCount: 165,
    city: 'Brantford',
    specialty: 'Rural Properties',
    phone: '(519) 555-0108',
    email: 'robert@example.com',
    slug: 'robert-brown'
  }
]

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const specialties = ['All', 'First-time Buyers', 'Luxury Homes', 'Investment Properties', 'Family Homes', 'Condos & Townhouses', 'Commercial Properties', 'Senior Living', 'Rural Properties']

  const filteredAgents = allAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All' || agent.specialty === selectedSpecialty
    const matchesRating = agent.rating >= minRating
    
    return matchesSearch && matchesSpecialty && matchesRating
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Find Your Perfect Agent"
            subtitle="Browse our verified real estate professionals in Brantford"
          />
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by agent name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                />
              </div>

              {/* Filter Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6 border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-gray-50 rounded-lg space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialty
                    </label>
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                    >
                      {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Rating
                    </label>
                    <select
                      value={minRating}
                      onChange={(e) => setMinRating(Number(e.target.value))}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                    >
                      <option value={0}>Any Rating</option>
                      <option value={4.0}>4.0+ Stars</option>
                      <option value={4.5}>4.5+ Stars</option>
                      <option value={4.8}>4.8+ Stars</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredAgents.length} Agent{filteredAgents.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-gray-600">
                Showing results for {searchTerm ? `"${searchTerm}"` : 'all agents'}
                {selectedSpecialty && selectedSpecialty !== 'All' && ` in ${selectedSpecialty}`}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>Sorted by rating</span>
            </div>
          </div>

          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAgents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AgentCard agent={agent} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="space-y-4">
                <Search className="h-12 w-12 text-gray-400 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900">No agents found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters to find more results.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedSpecialty('')
                    setMinRating(0)
                  }}
                  variant="outline"
                  className="border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our Agents?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  )
}
