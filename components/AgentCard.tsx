'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Phone, Mail } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface AgentCardProps {
  agent: {
    id: string
    name: string
    image: string
    rating: number
    reviewCount: number
    city: string
    specialty: string
    phone: string
    email: string
    slug: string
  }
}

const AgentCard = ({ agent }: AgentCardProps) => {
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

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-foreground">{agent.rating}</span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-card-foreground">{agent.name}</h3>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{agent.city}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                {renderStars(agent.rating)}
                <span className="text-sm text-muted-foreground ml-2">
                  ({agent.reviewCount} reviews)
                </span>
              </div>
              <p className="text-sm text-muted-foreground bg-muted rounded-md px-3 py-2">
                <span className="font-medium">Specialty:</span> {agent.specialty}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 space-y-3">
          <div className="flex space-x-2 w-full">
            <Button asChild className="flex-1 bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white">
              <Link href={`/agents/${agent.slug}`}>
                View Profile
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink hover:text-white">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-bubblegum-blue text-bubblegum-blue hover:bg-bubblegum-blue hover:text-white">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default AgentCard
