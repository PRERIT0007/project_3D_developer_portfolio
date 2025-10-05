# Prerit Goyal - Portfolio Website

A modern, interactive 3D portfolio website built with React.js, Three.js, and Tailwind CSS. This portfolio showcases my skills, experience, and projects with stunning 3D animations and responsive design.

## 🌟 Features

- **3D Interactive Elements**: Beautiful 3D models and animations using Three.js and React Three Fiber
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Fluid animations powered by Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Modern UI/UX**: Clean, professional design with dark theme
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Live Demo

[View Live Portfolio](https://prerit-goyal-portfolio.netlify.app)

## 🛠️ Built With

### Frontend Framework
- **React.js** (v18.2.0) - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js** (v0.149.0) - JavaScript 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for React Three Fiber
- **Framer Motion** - Animation library for React

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

### Additional Libraries
- **React Router Dom** - Navigation and routing
- **EmailJS** - Email service for contact form
- **React Parallax Tilt** - Tilt effects for cards
- **React Vertical Timeline** - Timeline component for experience section
- **Maath** - Math utilities for 3D graphics

## 📁 Project Structure

```
prerit_goyal_portfolio/
│
├── public/                     # Static assets
│   ├── logo.svg               # Portfolio logo
│   ├── desktop_pc/            # 3D desktop computer model files
│   │   ├── scene.gltf         # 3D model file
│   │   ├── scene.bin          # Binary data for 3D model
│   │   ├── license.txt        # Model license
│   │   └── textures/          # Texture files for 3D model
│   └── planet/                # 3D planet model files
│       ├── scene.gltf
│       ├── scene.bin
│       ├── license.txt
│       └── textures/
│
├── src/                       # Source code
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles
│   ├── styles.js             # Tailwind CSS style configurations
│   │
│   ├── components/           # React components
│   │   ├── About.jsx         # About section component
│   │   ├── Contact.jsx       # Contact form component
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Feedbacks.jsx     # Testimonials section
│   │   ├── Footer.jsx        # Footer with copyright
│   │   ├── Hero.jsx          # Hero/landing section
│   │   ├── Loader.jsx        # Loading component
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Snackbar.jsx      # Notification component
│   │   ├── Tech.jsx          # Technologies section
│   │   ├── Works.jsx         # Projects showcase
│   │   ├── index.js          # Component exports
│   │   └── canvas/           # 3D canvas components
│   │       ├── Ball.jsx      # 3D ball animations
│   │       ├── Computers.jsx # 3D computer model
│   │       ├── Earth.jsx     # 3D earth model
│   │       ├── Stars.jsx     # Particle stars background
│   │       └── index.js      # Canvas component exports
│   │
│   ├── constants/            # Static data and configurations
│   │   └── index.js          # Navigation links, services, technologies, experiences, projects data
│   │
│   ├── hoc/                  # Higher-order components
│   │   ├── SectionWrapper.jsx # Wrapper for section animations
│   │   └── index.js          # HOC exports
│   │
│   ├── utils/                # Utility functions
│   │   └── motion.js         # Framer Motion animation variants
│   │
│   └── assets/               # Images and icons
│       ├── index.js          # Asset exports
│       ├── tech/             # Technology icons
│       ├── company/          # Company logos
│       └── [various images]  # Project screenshots, icons, etc.
│
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.cjs      # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Project documentation
```

## 🎯 Component Overview

### Core Components

- **App.jsx**: Main application component that orchestrates all sections
- **Hero.jsx**: Landing section with 3D computer model and introduction
- **About.jsx**: Personal introduction and services offered
- **Experience.jsx**: Professional experience timeline
- **Tech.jsx**: Technology stack with 3D ball animations
- **Works.jsx**: Project showcase with tilt effects
- **Contact.jsx**: Contact form with 3D earth model
- **Footer.jsx**: Copyright footer section

### 3D Canvas Components (src/components/canvas/)

