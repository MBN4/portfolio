import type { Project, Skill, Experience } from './types';
import { MongoDBIcon, ExpressIcon, ReactIcon, NodeJsIcon, NextJsIcon, JavaScriptIcon, TailwindIcon, GitIcon, FirebaseIcon, ReactNativeIcon } from './components/Icons';

const resumeText = `M.Bilal
bn73147@gmail.com | (+92)3174311618 | Lahore, Pakistan

BS(Computer Science)
The Orbit Institute
BS IN COMPUTER SCIENCE
GPA: 3.09
Lahore
November 2020 - November 2024

1+Year Experience

Clustox
ASSOCIATE SOFTWARE ENGINEER
Clustox, 30, Shah Jamal Rd near Ichhra, Ichhra Police Station, Lahore, 54000, Pakistan
November 2023 - Present
Develop, maintain, and optimize the Clustox website using MERN stack (MongoDB, Express, React, Node.js) and Next.js. Collaborate with UI/UX designers to implement responsive, user-friendly web pages and interactive components. Write clean, modular, and main-tainable code following best practices and coding standards. Manage website performance, implement optimization strategies, and ensure fast page load times. Integrate APIs and third-party services for enhanced website functionality. Troubleshoot, debug, and resolve technical issues across frontend and backend components. Participate in code reviews, sprint planning, and agile develop-ment processes. Maintain version control using Git, ensuring proper collaboration with the development team. Stay updated with latest web technologies and frameworks to continuously improve the website.

Akhuwat
WEB & MOBILE APP DEVELOPMENT
Lahore
Jun 2023 - Dec 2023
Develop and maintain mobile applications for iOS and Android using Google's development platform Flutter. Optimize application performance for better user experience.

Technical Skills
MERN, JavaScript, React, FireBase, Next.JS, TailwindCss, ExpressJS, HTML, CSS, n8n, ai-automation, Vibe Coding, Unity, C#, Git

Projects
ReelBite
Node JS, Express JS, Mongo DB, Java Script, CSS
REELBITE IS A FULL-STACK WEB APPLICATION DESIGNED TO REVOLUTIONIZE FOOD DISCOVERY. THE PLATFORM ALLOWS VERIFIED "FOOD PARTNERS" (RESTAURANTS, CHEFS, ETC.) TO CREATE ACCOUNTS, LOG IN, AND UPLOAD SHORT-FORM VIDEOS-OR "REELS"-OF THEIR CULINARY CREATIONS. FOR USERS, IT OFFERS AN IMMERSIVE, VIDEO-FIRST BROWSING EXPERIENCE TO DISCOVER LOCAL FOOD IN A MORE ENGAGING WAY THAN STATIC PHOTOS AND TEXT REVIEWS. THE BACKEND IS BUILT WITH NODE.JS AND EXPRESS, FEATUREING JWT AUTHENTICATION FOR SECURE PARTNER ACCESS, AND INTEGRATES WITH A CLOUD MEDIA SERVICE FOR ROBUST VIDEO FILE HANDLING AND DELIVERY.
https://github.com/MBN4/ReelBite

cost-calculator
React Js, Next Js, Ant Design Css, JS
QUICKLY ESTIMATE THE DEVELOPMENT COSTS FOR YOUR MOBILE APP IDEA. GET A CLEAR AND TRANSPARENT BREAKDOWN OF EXPENSES FOR POPULAR APPS LIKE UBER AND TINDER, OR CALCULATE THE COST OF YOUR OWN CUSTOM APP. OUR INTUITIVE INTERFACE, BUILT WITH NEXT.JS AND REACT, MAKES IT EASY TO PLAN YOUR BUDGET AND MAKE INFORMED DECISIONS.
https://github.com/MBN4/cost-calculator-project

Ai-Business-Analyst
React Js, Next JS, Fire Base, Chat GPT
TRANSFORM YOUR APP OR WEB IDEA INTO A REALITY. OUR AI BUSINESS ANALYST, POWERED BY GPT TECHNOLOGY, ACTS AS YOUR PERSONAL SENIOR CONSULTANT. IT WILL INTELLIGENTLY ASK THE RIGHT QUESTIONS TO UNDERSTAND YOUR VISION, PROVIDE REALISTIC BUDGET GUIDANCE, AND HELP YOU REFINE YOUR CONCEPT. AT THE END OF YOUR CONVERSATION, YOU'LL RECEIVE A COMPREHENSIVE SUMMARY DETAILING EVERYTHING YOU NEED TO MOVE FORWARD WITH YOUR PROJECT.
https://github.com/MBN4/Ai-Business-Analyst

Health Portal
React Js, Next Js, JS, Mongo DB, Express Js
CONNECT WITH THE RIGHT DOCTOR, RIGHT WHEN YOU NEED THEM. OUR INTELLIGENT HEALTH PORTAL DASHBOARD SIMPLIFIES THE PROCESS OF BOOKING APPOINTMENTS. JUST ENTER YOUR CONDITION, AND OUR SYSTEM WILL MATCH YOU WITH THE MOST SUITABLE SPECIALIST AND SCHEDULE YOUR CONSULTATION, MAKING YOUR HEALTHCARE JOURNEY SEAMLESS AND EFFICIENT.
https://github.com/MBN4/health-portal

Awards
Aug 2022 - Azure AI Fundamentals, Microsoft
Dec 2023 - Web & Mobile APP Development, Akhwat
`;

export const personalData = {
  name: "M. Bilal",
  designation: "Full-Stack Developer",
  roles: ["MERN Stack Expert", "Next.js Specialist", "Mobile App Developer"],
  about: "A passionate Full-Stack Developer with 1+ years of experience specializing in the MERN stack and mobile development with React Native. Skilled in building and optimizing responsive, user-friendly web and mobile applications, from UI implementation to backend integration. Eager to tackle new challenges and continuously improve by staying updated with the latest web technologies.",
  cvUrl: `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`,
  githubProfileUrl: "https://github.com/MBN4",
};

export const projectsData: Project[] = [
  {
    title: "ReelBite",
    techStack: ["Node.js", "Express", "MongoDB", "JavaScript"],
    description: "A full-stack web app for food discovery through short-form videos. Built with Node.js, it allows restaurants and chefs to upload content, offering users an engaging, video-first browsing experience.",
    imageUrl: "https://picsum.photos/seed/reelbite/600/400",
    githubUrl: "https://github.com/MBN4/ReelBite",
    liveUrl: "#",
  },
  {
    title: "Cost Calculator",
    techStack: ["React", "Next.js", "Ant Design", "JavaScript"],
    description: "An intuitive Next.js and React app to quickly estimate mobile app development costs. It provides a transparent breakdown for popular app templates or custom projects to help with budget planning.",
    imageUrl: "https://picsum.photos/seed/costcalc/600/400",
    githubUrl: "https://github.com/MBN4/cost-calculator-project",
    liveUrl: "#",
  },
  {
    title: "AI Business Analyst",
    techStack: ["React", "Next.js", "Firebase", "GPT"],
    description: "A personal senior consultant powered by GPT. The app intelligently asks questions to understand a user's vision for a web or app idea, providing budget guidance and refining the concept.",
    imageUrl: "https://picsum.photos/seed/aibiz/600/400",
    githubUrl: "https://github.com/MBN4/Ai-Business-Analyst",
    liveUrl: "#",
  },
  {
    title: "Health Portal",
    techStack: ["React", "Next.js", "MongoDB", "Express"],
    description: "An intelligent dashboard to simplify booking medical appointments. The system matches users with the most suitable specialist based on their condition and schedules the consultation seamlessly.",
    imageUrl: "https://picsum.photos/seed/health/600/400",
    githubUrl: "https://github.com/MBN4/health-portal",
    liveUrl: "#",
  },
];

export const skillsData: Skill[] = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Git", icon: GitIcon },
];

export const experienceData: Experience[] = [
  {
    year: "Nov 2023 - Present",
    role: "Associate Software Engineer",
    company: "Clustox",
    description: "Developing and optimizing a MERN stack website, collaborating with UI/UX teams, and integrating third-party APIs to enhance functionality and performance.",
  },
  {
    year: "Jun 2023 - Dec 2023",
    role: "Web & Mobile App Development",
    company: "Akhuwat",
    description: "Developed and maintained mobile applications for both iOS and Android using Flutter, focusing on optimizing application performance for a better user experience.",
  },
  {
    year: "2020 - 2024",
    role: "BS in Computer Science",
    company: "The Orbit Institute",
    description: "Graduated with a GPA of 3.09, gaining a strong foundation in computer science principles, algorithms, and software development methodologies.",
  },
];