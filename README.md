# Rate My Agent - Redesign

A modern, responsive Next.js 15 application for finding and rating real estate agents in Brantford, Ontario.

## Features

- **Modern Design**: Built with TailwindCSS and shadcn/ui components using the Bubblegum theme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations powered by Framer Motion
- **Agent Profiles**: Detailed agent profiles with reviews, ratings, and contact information
- **Search & Filter**: Advanced search and filtering capabilities
- **Contact Forms**: Integrated contact forms for inquiries
- **SEO Optimized**: Built with Next.js 15 App Router for optimal SEO

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui with Bubblegum theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rate-my-agent-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── mission/            # Mission page
│   ├── services/           # Services page
│   ├── contact/            # Contact page
│   ├── agents/             # Agents listing
│   │   └── [slug]/        # Dynamic agent profiles
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── AgentCard.tsx      # Agent card component
│   └── ...                # Other components
├── lib/                   # Utility functions
└── public/                # Static assets
    ├── videos/            # Video files
    └── images/            # Image files
```

## Pages

- **Homepage** (`/`): Hero section with featured agents and stats
- **About** (`/about`): Company story and team information
- **Mission** (`/mission`): Mission statement and values
- **Services** (`/services`): Service offerings and features
- **Agents** (`/agents`): Agent listing with search and filters
- **Agent Profile** (`/agents/[slug]`): Individual agent profiles
- **Contact** (`/contact`): Contact form and information

## Components

### Core Components
- `Hero`: Full-width hero section with video background
- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Site footer with links and contact info
- `AgentCard`: Agent display card with ratings and contact
- `SearchBar`: Search input with filters
- `SectionHeader`: Reusable section headers
- `StatsGrid`: Animated statistics display

### UI Components
All shadcn/ui components are available:
- Button, Card, Input, Textarea
- Tabs, Dialog, Dropdown
- And more...

## Styling

The project uses a custom Bubblegum color palette:
- **Bubblegum Pink**: #FFB6C1
- **Bubblegum Blue**: #A2D2FF  
- **Bubblegum Purple**: #CDB4DB
- **Bubblegum Accent**: #FF80AB

## Animations

Framer Motion is used for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Adding New Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Follow existing patterns for styling
4. Add animations with Framer Motion

### Adding New Pages

1. Create page file in `app/` directory
2. Follow App Router conventions
3. Add to navigation if needed
4. Include proper metadata

## Deployment

The project is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## Future Enhancements

- CMS integration (Sanity/Contentlayer)
- User authentication
- Review submission system
- Advanced search filters
- Map integration
- Analytics integration
- Mobile app

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
