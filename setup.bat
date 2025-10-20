@echo off
echo 🚀 Setting up Rate My Agent - Redesign
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create placeholder video file
echo 🎥 Creating placeholder video file...
if not exist "public\videos" mkdir "public\videos"
if not exist "public\videos\hero-loop.mp4" (
    echo # Placeholder for hero video > "public\videos\hero-loop.mp4"
    echo ✅ Placeholder video file created
) else (
    echo ✅ Video file already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
echo 📝 Note: Replace public/videos/hero-loop.mp4 with your actual hero video
echo 📝 Note: Update placeholder images with real agent photos
pause
