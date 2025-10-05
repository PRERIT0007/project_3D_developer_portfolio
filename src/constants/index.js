import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  ionic,
  daksh,
  daksh_platform,
  fbo,
  fbo_platform,
  hxp,
  hxp_platform,
  library_platform,
  velora,
  velora_platform,
  weather_platform,
  ht,
  dzone,
  learn_build,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "SDE – 1",
    company_name: "Hidden Talent",
    icon: ht,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Worked on two client projects, actively developing and maintaining production-based products.",
      "Responsible for frontend development using Angular framework and TypeScript.",
      "Developed an Ionic app, gaining hands-on experience in mobile application development.",
      "Utilized MongoDB for database management.",
      "Debugged and identified bugs, communicated with service clients, and fixed product issues.",
    ],
  },
  {
    title: "MERN Stack Web Developer Intern",
    company_name: "Learn And Build",
    icon: learn_build,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sept 2023",
    points: [
      "Designed and implemented a modern and user-friendly interface for the website.",
      "Successfully integrated feature focused on sharing files by generating URL and sharing with the person who need that file.",
      "Implemented a seamless way to upload and share file through URl.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Dzone Private Limited",
    icon: dzone,
    iconBg: "#383E56",
    date: "July 2022 - Aug 2022",
    points: [
      "Conducted comprehensive data analysis to understand patterns and trends in diabetes-related datasets, laying the foundation for model development.",
      "Implemented data preprocessing techniques including cleaning, normalization, and feature engineering to prepare raw healthcare data for predictive modeling.",
      "Iteratively optimized model performance through experimentation with various machine learning algorithms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Velora (Event Management Platform)",
    description:
      "A comprehensive event management platform featuring community and group management, event planning and organization tools, and vendor proposal management. Built with modern web technologies to streamline event operations from registration to post-event analytics through an intuitive dashboard interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "aws-lambda",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
    ],
    image: velora_platform,
  },
  {
    name: "FBO Master (Aviation Management System)",
    description:
      "A sophisticated Fixed Base Operator (FBO) management system for aviation industry. Features include instructor & pilot management, flight & booking management, fuel & inventory tracking, data analytics and reporting, document management, and comprehensive help & support modules for seamless aviation operations.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "syncfusion",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
    ],
    image: fbo_platform,
  },
  {
    name: "Daksh (Employee Management System)",
    description:
      "An intelligent employee management platform with attendance tracking through quick check-in/check-out systems, work optimization tools for enhanced productivity, insightful reports for performance analysis, and real-time location tracking to ensure accurate field visibility and workforce management.",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "syncfusion",
        color: "blue-text-gradient",
      },
    ],
    image: daksh_platform,
  },
  {
    name: "HXP (Human Experience Platform)",
    description:
      "A comprehensive HR management platform covering the complete employee lifecycle including recruitment & onboarding, performance management, employee management, learning & development, time & attendance, career progression, rewards & recognition, financial analytics, compensation & benefits, offboarding & separation, and employee engagement & surveys with dedicated help & support.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "syncfusion",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hxp_platform,
  },
  {
    name: "Weather App",
    description:
      "Developed a weather app using HTML, CSS, and JavaScript to display real-time weather data. Implemented a user-friendly interface with responsive design for seamless user experience across devices, and integrated with a weather API to provide accurate and up-to-date weather forecasts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather_platform,
    source_code_link: "https://github.com/prerit0007",
  },
  {
    name: "Library Management System",
    description:
      "Designed and implemented a relational database schema for a library management system, ensuring efficient organization and retrieval of book inventory, member information, and transaction records. Developed SQL queries and stored procedures to enable seamless interaction with the database, enhancing user experience and streamlining library operations.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "database",
        color: "green-text-gradient",
      },
    ],
    image: library_platform,
    source_code_link: "https://github.com/prerit0007",
  },
];

export { services, technologies, experiences, testimonials, projects };
