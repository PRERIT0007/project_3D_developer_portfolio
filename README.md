
- **Computers.jsx**: Interactive 3D desktop computer model
- **Ball.jsx**: Animated 3D balls for technology icons
- **Earth.jsx**: 3D rotating earth model for contact section
- **Stars.jsx**: Animated particle stars background

### Utility Components

- **Navbar.jsx**: Responsive navigation with mobile menu
- **Loader.jsx**: Loading spinner for 3D models
- **Snackbar.jsx**: Toast notifications
- **SectionWrapper.jsx**: HOC for section animations and layout

## 📊 Data Configuration

The `src/constants/index.js` file contains all the static data:

- **navLinks**: Navigation menu items
- **services**: Service offerings with icons
- **technologies**: Tech stack with icons
- **experiences**: Work experience data
- **projects**: Portfolio projects with details
- **testimonials**: Client feedback (if applicable)

## 🎨 Styling System

The project uses a custom styling system defined in `src/styles.js`:

- **paddingX/paddingY**: Responsive padding utilities
- **heroHeadText**: Large heading styles for hero section
- **heroSubText**: Subtitle styles for hero section
- **sectionHeadText**: Section heading styles
- **sectionSubText**: Section subtitle styles

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/preritgoyal/portfolio.git
   cd prerit_goyal_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

1. **Personal Information**: Update content in `src/constants/index.js`
2. **Assets**: Replace images in `src/assets/` with your own
3. **Colors**: Modify Tailwind theme in `tailwind.config.cjs`
4. **3D Models**: Replace 3D models in `public/` directory
5. **Styling**: Adjust styles in `src/styles.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🎭 3D Models Attribution
# Prerit Goyal - Portfolio Website
The 3D models used in this portfolio are located in the `public/` directory:
- Desktop PC model: Used in hero section
- Planet model: Used in contact section

License information can be found in the respective `license.txt` files.

## 📞 Contact

- **Email**: preritgoyal@example.com
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/preritgoyal)
- **GitHub**: [GitHub Profile](https://github.com/preritgoyal)

## 📄 License

© 2025 Prerit Goyal. All rights reserved.

This project is for portfolio purposes. Please contact me for usage permissions.

---

**Built with ❤️ by Prerit Goyal**

A modern, interactive 3D portfolio website built with React.js, Three.js, and Tailwind CSS. This portfolio showcases my skills, experience, and projects with stunning 3D animations and responsive design.

## 🌟 Features

- **3D Interactive Elements**: Beautiful 3D models and animations using Three.js and React Three Fiber
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Fluid animations powered by Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Modern UI/UX**: Clean, professional design with dark theme
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.netlify.app)

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

