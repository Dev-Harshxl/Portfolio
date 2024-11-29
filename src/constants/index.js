import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
} from "../assets";

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#proj',
    },
    {
      id: 4,
      name: 'Work',
      href: '#work',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  

  export const myProjects = [

    //1st boardify
    {
      title: 'Boardify - A Kanban Board Application',
      desc: 'A Kanban application built with React.js, Firebase, Drag & Drop, Material-UI (MUI) v5, and Zustand. This application allows users to manage tasks and workflows with a user-friendly interface.',
      subdesc:
        'The Kanban board provides a comprehensive solution for task and workflow management, offering personalized user access through a secure login system. Its responsive design ensures a seamless experience across devices, while the intuitive drag-and-drop functionality simplifies task movement between workflow stages. Users can create multiple boards, lists, and cards to structure tasks effectively, assign responsibilities, set deadlines, and add detailed descriptions or attachments to enhance task clarity. Additional features like customizable tags, progress tracking, and priority settings enable efficient organization. The platforms user-centric design makes it ideal for personal productivity, team collaboration, and project management',
      href: 'https://github.com/Dev-Harshxl/Boardify',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/logo.svg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Firebase',
          path: '/assets/firebase.png',
        },
        {
          id: 4,
          name: 'Zustand',
          path: '/assets/zustand.jpg',
        },
      ],
    },
    //2nd MeetNest
    {
      title: 'MeetNest - Video Conferencing App',
      desc: 'Designed a full-featured video conferencing app with real-time chat, scheduling, and seamless user authentication using Clerk and Stream.',
      subdesc:
        'Developed a secure and responsive video conferencing application designed to provide a seamless and feature-rich meeting experience. The platform offers a familiar video setup with intuitive controls, allowing users to record meetings, share screens, send emoji reactions, and manage participants effectively. Users can adjust audio and video settings in real time for a personalized experience. The app supports scheduling future meetings with detailed configurations, accessing recordings of past meetings for reference, and hosting instant meetings using unique personal room links for quick collaboration. Integrated Clerk for robust user authentication, ensuring secure access and personalized profiles, and Stream to enable real-time, high-quality video and audio communication. Built with TypeScript, Next.js 14, and Sass, the application combines modern styling, responsive design, and advanced functionality.',
      href: 'https://meet-nest-ten.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/meetnest.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Next',
          path: '/assets/next.png',
        },
      ],
    },
    //3rd Agro
    {
      title: 'Agrofy India : Organic Products E-commerece',
      desc: 'Created an organic e-commerce website with a focus on seamless product browsing and management. Built using **HTML**, **CSS**, **JavaScript**, **PHP**, and **MySQL**, the site enables users to view and purchase organic products while offering an **Admin Panel** for managing content, product details, categories, and customer testimonials with secure access.',
      subdesc:
        'Developed an organic e-commerce website, built using HTML, CSS, JavaScript, PHP, MySQL, jQuery, Bootstrap, and Ajax. The platform features robust product management capabilities, allowing users to view and browse a variety of organic products, categorized for easy navigation, with detailed product information such as descriptions, prices, and availability.Implemented an intuitive Admin Panel to facilitate easy management of the websites content, including functionalities for updating and organizing product listings, managing product categories, displaying customer testimonials, and handling certifications. The admin panel ensures secure access, allowing only authorized personnel to make updates and changes to the website.',
      href: 'https://github.com/Dev-Harshxl/AgroFYIndia',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/agrro.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'html',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'javascript',
          path: 'assets/javascript.jpg',
        },
        {
          id: 3,
          name: 'php',
          path: '/assets/php.png',
        },
        {
          id: 4,
          name: 'MySQL',
          path: '/assets/Myq.png',
        },
      ],
    }
  ];
  
  export const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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


  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4.2, -3.8, -3] : isMobile ? [3, -4, 0] : isTablet ? [7, 0, 0] : [11, -3.5, 0],
      reactLogoPosition: isSmall ? [2.5, 10, -7] : isMobile ? [3, 3.5, 0] : isTablet ? [5, 6.6, 0] : [9, 3, 6],
      ringPosition: isSmall ? [-6, 9, -7] : isMobile ? [-10, 10, 0] : isTablet ? [-14.4, 8.5, 0] : [-20, 9.4, 5],
      targetPosition: isSmall ? [-5, -13, -10] : isMobile ? [-6.5, -13.5, -10] : isTablet ? [-11, -12, -8] : [-11, -10, -4],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Celebal Technologies',
      pos: 'React JS Intern',
      duration: 'May 2024 - Sept 2024',
      title: `Developed a Spotify Clone with a dynamic UI.\nCreated a Full-stack Kanban task management app for visual workflow.\nBuilt a responsive E-Commerce Store with product listings and a cart.`,

      icon: '/assets/celebal.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Unanimous Technologies',
      pos: 'Web Developer',
      duration: 'May 2023 - July 2023',
      title: "Demonstrated strong problem-solving and coding skills throughout the projects Contributed in two end-to-end web development projects from inception to deployment.",
      icon: '/assets/unanimous.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Freelancer',
      pos: 'Web Developer',
      duration: '2022 - present',
      title: `Developed 'Dharti,' a feature-rich dynamic real estate website with property listings and search functionality, using PHP and MySQL.
      \nDesigned and built a professional static landing page for a consultancy, leveraging PHP and WordPress for a seamless user experience.`,
      icon: '/assets/star.png',
      animation: 'salute',
    },
  ];