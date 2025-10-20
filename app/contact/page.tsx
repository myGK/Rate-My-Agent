'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Us"
            subtitle="Get in touch with our team. We're here to help you find the perfect real estate agent."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="border-gray-300 focus:border-bubblegum-pink focus:ring-bubblegum-pink"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white font-semibold py-3"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our platform or need help finding the right agent? 
                  We're here to help! Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-bubblegum-pink/20 flex-shrink-0">
                    <Mail className="h-6 w-6 text-bubblegum-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@ratemyagent.ca</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-bubblegum-blue/20 flex-shrink-0">
                    <Phone className="h-6 w-6 text-bubblegum-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(519) 555-0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-bubblegum-purple/20 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-bubblegum-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Main Street<br />Brantford, ON N3T 1A1</p>
                    <p className="text-sm text-gray-500">Visit us by appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-bubblegum-accent/20 flex-shrink-0">
                    <Clock className="h-6 w-6 text-bubblegum-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-bubblegum-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Brantford, our office is easily accessible by car or public transit.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Interactive Map</h3>
                  <p className="text-gray-600">Google Maps integration would go here</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Main Street, Brantford, ON N3T 1A1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our platform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">How do you verify agents?</h3>
                <p className="text-gray-600">
                  All agents undergo thorough background checks, license verification, and client reference checks before being listed on our platform.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Are reviews authentic?</h3>
                <p className="text-gray-600">
                  Yes, all reviews are verified by our team to ensure they come from real clients who have worked with the agents.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Is your service free?</h3>
                <p className="text-gray-600">
                  Yes, our platform is completely free for home buyers and sellers to use. We make money through agent partnerships.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">How do I contact an agent?</h3>
                <p className="text-gray-600">
                  You can contact agents directly through their profile pages using the provided phone numbers and email addresses.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Do you cover other cities?</h3>
                <p className="text-gray-600">
                  Currently, we focus on Brantford and surrounding areas, but we're expanding to other cities in Ontario.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Can I leave a review?</h3>
                <p className="text-gray-600">
                  Yes, if you've worked with an agent listed on our platform, you can leave a verified review through their profile.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
