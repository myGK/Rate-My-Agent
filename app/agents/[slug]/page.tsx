'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Phone, Mail, Calendar, MessageCircle, Award, TrendingUp, Users, Clock } from 'lucide-react'

// Demo agent data
const agentData = {
  id: '1',
  name: 'Sarah Johnson',
  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
  rating: 4.9,
  reviewCount: 127,
  city: 'Brantford',
  specialty: 'First-time Buyers',
  phone: '(519) 555-0101',
  email: 'sarah@example.com',
  slug: 'sarah-johnson',
  bio: 'With over 8 years of experience in the Brantford real estate market, Sarah specializes in helping first-time buyers navigate the complex process of purchasing their dream home. Her patient approach and deep market knowledge have earned her recognition as one of the top agents in the region.',
  experience: '8 years',
  languages: ['English', 'French'],
  certifications: ['CREA Member', 'OREA Certified'],
  stats: {
    totalSales: 156,
    avgDaysOnMarket: 28,
    listToSaleRatio: 98.5,
    repeatClients: 45
  },
  reviews: [
    {
      id: 1,
      clientName: 'John & Mary Smith',
      rating: 5,
      date: '2024-01-15',
      comment: 'Sarah was absolutely fantastic! She helped us find our first home and made the entire process stress-free. Her knowledge of the market and attention to detail were outstanding.',
      verified: true
    },
    {
      id: 2,
      clientName: 'David Wilson',
      rating: 5,
      date: '2023-12-08',
      comment: 'Professional, knowledgeable, and always available when we needed her. Sarah went above and beyond to ensure we got the best deal possible.',
      verified: true
    },
    {
      id: 3,
      clientName: 'Lisa Chen',
      rating: 4,
      date: '2023-11-22',
      comment: 'Great experience working with Sarah. She was patient with all our questions and helped us understand every step of the buying process.',
      verified: true
    }
  ]
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
      }`}
    />
  ))
}

export default function AgentProfilePage({ params }: { params: { slug: string } }) {
  const agent = agentData // In a real app, this would be fetched based on params.slug

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {agent.name}
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(agent.rating)}
                    <span className="ml-2 text-lg font-semibold text-gray-900">
                      {agent.rating}
                    </span>
                  </div>
                  <span className="text-gray-600">
                    ({agent.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{agent.city}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>{agent.specialty}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="border-bubblegum-blue text-bubblegum-blue hover:bg-bubblegum-blue hover:text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="about" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* About Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle>About {agent.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {agent.bio}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Stats */}
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle>Performance Statistics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-gradient">{agent.stats.totalSales}</div>
                            <div className="text-sm text-gray-600">Total Sales</div>
                          </div>
                          <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-gradient">{agent.stats.avgDaysOnMarket}</div>
                            <div className="text-sm text-gray-600">Avg Days on Market</div>
                          </div>
                          <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-gradient">{agent.stats.listToSaleRatio}%</div>
                            <div className="text-sm text-gray-600">List to Sale Ratio</div>
                          </div>
                          <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-gradient">{agent.stats.repeatClients}</div>
                            <div className="text-sm text-gray-600">Repeat Clients</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle>Agent Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-bubblegum-pink" />
                          <div>
                            <div className="font-medium">Experience</div>
                            <div className="text-gray-600">{agent.experience}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-bubblegum-blue" />
                          <div>
                            <div className="font-medium">Languages</div>
                            <div className="text-gray-600">{agent.languages.join(', ')}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-bubblegum-purple" />
                          <div>
                            <div className="font-medium">Certifications</div>
                            <div className="text-gray-600">{agent.certifications.join(', ')}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-bubblegum-pink" />
                          <div>
                            <div className="font-medium">Phone</div>
                            <div className="text-gray-600">{agent.phone}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-bubblegum-blue" />
                          <div>
                            <div className="font-medium">Email</div>
                            <div className="text-gray-600">{agent.email}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Client Reviews</h2>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(agent.rating)}
                    </div>
                    <span className="text-xl font-semibold text-gray-900">{agent.rating}</span>
                    <span className="text-gray-600">({agent.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {agent.reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="shadow-lg border-0">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-gray-900">{review.clientName}</h3>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-gray-600">{review.date}</span>
                                {review.verified && (
                                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                    Verified
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-6 w-6 text-bubblegum-pink" />
                          <div>
                            <div className="font-medium text-gray-900">Phone</div>
                            <div className="text-gray-600">{agent.phone}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="h-6 w-6 text-bubblegum-blue" />
                          <div>
                            <div className="font-medium text-gray-900">Email</div>
                            <div className="text-gray-600">{agent.email}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Button className="w-full bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white">
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now
                        </Button>
                        
                        <Button variant="outline" className="w-full border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white">
                          <Mail className="h-5 w-5 mr-2" />
                          Send Email
                        </Button>
                        
                        <Button variant="outline" className="w-full border-bubblegum-blue text-bubblegum-blue hover:bg-bubblegum-blue hover:text-white">
                          <Calendar className="h-5 w-5 mr-2" />
                          Schedule Meeting
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
              Ready to Work with {agent.name}?
            </h2>
            <p className="text-lg text-gray-600">
              Contact {agent.name} today to start your real estate journey. With {agent.experience} of experience and a {agent.rating}-star rating, you're in excellent hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call {agent.name}
              </Button>
              <Link href="/agents">
                <Button variant="outline" className="border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white px-8 py-3">
                  Browse Other Agents
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
