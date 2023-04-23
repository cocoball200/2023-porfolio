import {
  camen,
  reware,
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
];

const services = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Frontend Engineer",
  },
  {
    title: "Full Stack Developer",
  },
  {
    title: "React Developer",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS 3",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    name: "React JS",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Redux Toolkit",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: "https://img.icons8.com/color/48/000000/tailwind-css.png",
  // },
  {
    name: "Node JS",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  // {
  //   name: "Three JS",
  //   icon: "https://img.icons8.com/color/48/000000/threejs.png",
  // },
  {
    name: "git",
    icon: "https://img.icons8.com/color/48/000000/git.png",
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Paggi",
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Building an interactive website for the residential property with Typescript, Next.js, React.js, and Node.js and so on",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Recore",
    iconBg: "#E6DEDD",
    date: "May 2021 - February 2023",
    points: [
      "Developed a real estate platform for commercial properties and B2B SaaS Warehouse Management System(WMS) using React.js, Next.js,Redux, TypeScript, and so on",
      "Implemented a primary revenue model feature by developing visualization of commercial properties with a Map API based on location and predicted data from AI",
      "Built a new project from scratch by architecting a technical scaffolding for the product and developing the ground technical work for roducts, resulting in a faster time to market.",
      "Developed proficiency in utilizing Cypress and Jest, actively creating and executing automated test scripts to ensure comprehensive code coverage",
    ],
  },
  {
    title: "Frontend Developer-Intern",
    company_name: "UITI",
    iconBg: "#383E56",
    date: "April 2021 - May 2021",
    points: [
      "Developed a real estate and residential properties sales platform using React, Typescript, Redux, HTML/CSS, and more",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Daol Construction",
    iconBg: "#E6DEDD",
    date: "July 2019 - August 2020",
    points: [
      "Produce wireframes and sample page layouts",
      "Made prints using Adobe Photoshop and Illustrator"
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
    name: "Career Mentors",
    description:
      "Matching Mentors and Mentees based on their career interests and goals",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: camen,
    source_code_link: "https://camen.co.kr",
  },
  {
    name: "Reware",
    description:
      "Real Estate Platform for Commercial Properties and B2B SaaS Warehouse Management System",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: reware,
    source_code_link: "https://reware.co.kr",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
