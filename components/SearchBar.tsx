'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by agent name, location, or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-white/20 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-bubblegum-pink"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <Button
        onClick={handleSearch}
        className="h-12 px-8 bg-gradient-to-r from-bubblegum-pink to-bubblegum-blue hover:from-bubblegum-pink/90 hover:to-bubblegum-blue/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </div>
  )
}

export default SearchBar
