// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "Telegram",
    title: "Telegram",
    link: "https://t.me/DmOwner",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "APK Modding & Reverse App Editing",
    icon: mobile,
  },
  {
    title: "Telegram Bot Engineer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
     title: "Telegram AutoFilter Bot Developer",
    company_name: "Personal / Freelance Project",
    icon: backend, // or any relevant icon you use
    iconBg: "#1E2A38",
    date: "2024 - Present",
    points: [
       "Developed a Telegram AutoFilter bot using Python and Pyrogram with channel/file indexing support.",
    "Integrated MongoDB for database storage enabling fast search and retrieval of files.",
    "Implemented features like AutoFilter, Force Subscribe, Inline Search, Group/Channel Support, and Admin Commands.",
    "Optimized bot performance for large media databases with efficient caching and search queries.",
    "Improved user experience with fast auto-reply results & customizable configurations for admins.",
    ],
  },
  {
   title: "Electron App Developer",
  company_name: "DhanpalTube Project",
  icon: web, // replace with your chosen icon
  iconBg: "#E6DEDD",
  date: "2025 - Present",
  points: [
    "Developed a full-feature desktop YouTube Downloader application using Electron.js and yt-dlp.",
    "Implemented features like video/audio quality selection, auto UI wallpapers, and a clean glass-frosted UI design.",
    "Added a settings panel, dynamic backgrounds powered via API, and user-configurable intervals.",
    "Packaged the application into Windows .exe installer with a professional installation experience.",
    "Working on continuous improvements including UI refinement, stability, and performance optimization.",
    ],
  },
  {
    title: "APK Modding & Reverse Engineering",
  company_name: "Self-Project / Freelance Work",
  icon: mobile, // replace with your icon
  iconBg: "#383E56",
  date: "2024 - Present",
  points: [
    "Modifying Android APKs including UI changes, logo replacement, and resource editing.",
    "Exploring decompiled source structure to locate features such as login handling, branding, and text strings.",
    "Experimenting with patching logic, feature unlocking, and internal configuration edits.",
    "Testing modified APKs on emulators and real Android devices for compatibility and stability.",
    ],
  },
  {
    title: "Backend Automation Developer",
  company_name: "Independent / Projects",
  icon: backend,
  iconBg: "#E6DEDD",
  date: "2023 - Present",
  points: [
    "Developing backend automation scripts and tools using Python.",
    "Building Telegram bots capable of indexing, filtering and automating media operations.",
    "Integrating MongoDB databases for persistent, scalable data handling.",
    "Optimizing logic for faster response time and reduced system load.",
    "Deploying and maintaining projects across cloud/VPS environments.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I never imagined a Telegram bot could automate so much, but Dhanpal built one that handles everything flawlessly. The speed, accuracy, and polish genuinely impressed me.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a developer who builds practical tools the way Dhanpal does. Every bot and app he creates feels genuinely useful, not just impressive. He focuses on results, not just code.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Dhanpal deployed our AutoFilter bot, our file management became effortless. Searches are instant, uptime is stable, and user engagement increased significantly.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Telegram AutoFilter Bot",
    description:
      "A Telegram Bot built using Python + Pyrogram that automatically indexes and filters media files from channels and groups. It supports MongoDB search, admin commands, force-subscribe, and instant results for users with clean and fast response time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyrogram",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/LastPerson07/AutoFilterBotFinal-LP",
    live_site_link: "https://t.me/THEUPDATEDGUYS_Bot",
  },
  {
    name: "Telegram Request Forwarder Bot",
    description:
      "A Telegram bot built to automatically forward user requests/messages from one chat to another. Helps admins handle content flow efficiently, supports filtering logic and customizable forwarding behavior for channels or groups.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyrogram",
        color: "green-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/LastPerson07/telegram-request-bot",
    live_site_link: "https://t.me/MoviesTagEdit_bot",
  },
  {
    name: "Netflix Clone",
    description:
      "A modern streaming UI inspired by Netflix, featuring real-time movie listings, category browsing, hover previews, cinematic banners, and a fully responsive layout powered by TMDB API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/LastPerson07/netflix-clone",
    live_site_link: "https://github.com/LastPerson07/netflix-clone",
  },
  {
    name: "Modern Shoe Store",
    description:
      "A stylish and responsive shoe e-commerce website that showcases trending footwear collections with clean product cards, modern layouts, and a smooth shopping UI experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/LastPerson07/shoe-website",
    live_site_link: "https://github.com/LastPerson07/shoe-website",
  },
  {
    name: "BrainSpace Clone",
    description:
      "A modern futuristic UI website cloned from Brain.Space, showcasing smooth scrolling, GSAP animations, a video-based hero section, and multiple neural-technology themed sections built using pure HTML, CSS, and JavaScript.",
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
    image: project5,
    source_code_link: "https://github.com/LastPerson07/BrainSpace-Clone",
    live_site_link: "https://github.com/LastPerson07/BrainSpace-Clone",
  },
  {
    name: "DhanpalTube",
    description:
      "A modern YouTube Video Downloader built using Electron and yt-dlp, featuring multi-quality downloads, MP3 extraction, dynamic wallpapers, and a sleek frosted UI with real-time progress feedback.",
    tags: [
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/LastPerson07/DhanpalTube",
    live_site_link: "https://github.com/LastPerson07/DhanpalTube",
  },
] as const;

export const SOCIALS = [
  {
    name: "Telegram",
    icon: youtube,
    link: "https://t.me/DmOwner.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/last-person-12b61237b/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://github.com/LastPerson07",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/LastPerson07",
  },
] as const;
