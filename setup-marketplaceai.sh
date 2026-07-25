#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(pwd)"
APP_DIR="$PROJECT_ROOT/app"

echo "Creating Marketplace AI project structure in:"
echo "$PROJECT_ROOT"

# Prevent accidental overwrite
if [ -d "$APP_DIR" ]; then
    echo "Error: The app folder already exists:"
    echo "$APP_DIR"
    echo "Remove or rename it before running this script again."
    exit 1
fi

# Root-level folders
mkdir -p \
    docs \
    assets/images \
    assets/logos \
    assets/videos \
    assets/models \
    design \
    prompts \
    scripts

# Create React + Vite + TypeScript application
echo "Creating React/Vite application..."

npm create vite@latest app -- --template react-ts

cd "$APP_DIR"

echo "Installing application dependencies..."
npm install

echo "Installing website packages..."
npm install \
    react-router-dom \
    framer-motion \
    three \
    @react-three/fiber \
    @react-three/drei \
    lucide-react

# TypeScript support for Three.js
npm install -D @types/three

echo "Creating application folders..."

mkdir -p \
    public/images \
    public/icons \
    public/videos \
    public/models \
    src/assets/images \
    src/assets/icons \
    src/components/common \
    src/components/navigation \
    src/components/ui \
    src/layouts \
    src/pages \
    src/sections \
    src/animations \
    src/three \
    src/demos/crm \
    src/demos/ecommerce \
    src/demos/chatbot \
    src/demos/automation \
    src/hooks \
    src/data \
    src/styles \
    src/utils \
    src/types

# Create starter files without overwriting existing Vite files
touch \
    src/components/common/SectionContainer.tsx \
    src/components/navigation/Header.tsx \
    src/components/navigation/Footer.tsx \
    src/layouts/MainLayout.tsx \
    src/pages/HomePage.tsx \
    src/pages/ServicesPage.tsx \
    src/pages/AboutPage.tsx \
    src/pages/ContactPage.tsx \
    src/sections/HeroSection.tsx \
    src/sections/ServicesSection.tsx \
    src/sections/SolutionsSection.tsx \
    src/sections/CRMShowcase.tsx \
    src/sections/EcommerceShowcase.tsx \
    src/sections/AIChatbotShowcase.tsx \
    src/sections/AutomationSection.tsx \
    src/sections/ProcessSection.tsx \
    src/sections/ContactSection.tsx \
    src/three/HeroScene.tsx \
    src/three/SceneLighting.tsx \
    src/three/FloatingElements.tsx \
    src/data/navigation.ts \
    src/data/services.ts \
    src/data/solutions.ts \
    src/styles/global.css \
    src/types/index.ts

cd "$PROJECT_ROOT"

# Root documentation files
touch \
    docs/architecture.md \
    docs/branding.md \
    docs/services.md \
    docs/website-content.md \
    docs/roadmap.md \
    design/design-system.md \
    prompts/website-content-prompts.md

# Root .gitignore
cat > .gitignore <<'EOF'
# Dependencies
node_modules/
app/node_modules/

# Production builds
dist/
app/dist/

# Environment variables
.env
.env.*
!.env.example

# Logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Editor settings
.vscode/
.idea/

# Operating system files
.DS_Store
Thumbs.db

# Temporary files
tmp/
temp/
*.tmp
EOF

echo
echo "Marketplace AI project created successfully."
echo
echo "Project structure:"
echo "$PROJECT_ROOT"
echo "└── app"
echo
echo "To start the application:"
echo "cd $APP_DIR"
echo "npm run dev -- --host 0.0.0.0"
