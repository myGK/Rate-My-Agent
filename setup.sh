#!/bin/bash

echo "🚀 Setting up Rate My Agent - Redesign"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create placeholder video file
echo "🎥 Creating placeholder video file..."
mkdir -p public/videos
if [ ! -f "public/videos/hero-loop.mp4" ]; then
    echo "# Placeholder for hero video" > public/videos/hero-loop.mp4
    echo "✅ Placeholder video file created"
else
    echo "✅ Video file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "📝 Note: Replace public/videos/hero-loop.mp4 with your actual hero video"
echo "📝 Note: Update placeholder images with real agent photos"
