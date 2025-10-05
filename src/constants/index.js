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
    icon: shopify,
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
    icon: meta,
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
    icon: tesla,
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
    image: carrent,
    source_code_link: "https://github.com/prerit0007",
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
    image: jobit,
    source_code_link: "https://github.com/prerit0007",
  },
  {
    name: "Daksh (Client Project)",
    description:
      "Developed and maintained modules using Angular, TypeScript, and Ionic, ensuring scalable and high-performance UI. Worked on complex components like Assign Rate in HXP, gaining hands-on experience in debugging, optimization, and cross-team collaboration. Focused on delivering within tight timelines while maintaining quality standards.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ionic",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/prerit0007",
  },
    {
    name: "HXP (Client Project)",
    description:
      "Collaborated with the team to implement reusable Angular components to speed up development and improve maintainability. Integrated MongoDB and SQL databases for data storage, ensuring efficient data handling and retrieval. Enhanced UI/UX through responsive designs and performance tuning for seamless client usage.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/prerit0007",
  },
  {
    name: "FBO (Client Project)",
    description:
      "Contributed to full-stack development with Angular, TypeScript, MongoDB, and SQL. Actively communicated with service clients, identified bugs, and resolved issues in production-based environments. Improved product stability and client satisfaction by ensuring timely delivery of fixes and features.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
       {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/prerit0007",
  },
];

export { services, technologies, experiences, testimonials, projects };
