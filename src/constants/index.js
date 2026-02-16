import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";\
import project5 from "../assets/projects/project-2.jpg";
import project6 from "../assets/projects/project-4.jpg";
import Kavach from "../assets/projects/Kavach.png";
import MyLeakWatch from "../assets/projects/MyLeakWatch.png";
import CivicFlow from "../assets/projects/CivicFlow.png";

// Hero Section
export const HERO_CONTENT = `Hi, I’m Uday Mordharya — a final-year Information Technology student passionate about full stack development. I specialize in building seamless web applications that integrate clean user interfaces with powerful backends. My toolkit includes HTML, CSS, JavaScript, React, Next.js, Express, Java, and Python. I enjoy turning ideas into real-world projects that are both functional and elegant.`;

// About Section
export const ABOUT_TEXT = "I’m Uday Mordharya, a final-year Information Technology student with a strong passion for full-stack web development. I specialize in building modern, responsive, and scalable web applications using technologies like React.js, TypeScript, Redux Toolkit, Tailwind CSS, Node.js, and Express. With a solid understanding of frontend architecture and a keen eye for user experience, I strive to build interfaces that are both functional and intuitive. During my internship at GetFly Technologies, I contributed to the development of an ERP system. My responsibilities included designing reusable UI components, integrating REST APIs, and managing application state with Redux. I further enhanced my skills through hands-on projects like a real-time chat forum system using React, Socket.IO, and Redux, and took part in building tools like a climate change data aggregator and stock market prediction visualizer. These experiences allowed me to combine my frontend expertise with backend integration and real-time communication systems. Driven by curiosity and a problem-solving mindset, I’m constantly learning new technologies and improving my craft. I'm passionate about creating impactful solutions, collaborating in team environments, and growing as a developer who can contribute to both technical innovation and user satisfaction.";

// Experience Section
export const EXPERIENCES = [
  {
    year: "June - August 2025",
    role: "Frontend Intern",
    company: "Getfly Technologies",
    description: "Frontend Development with Redux, ShadCN UI, and Socket.IO Tech Stack: React.js, TypeScript, Redux Toolkit, ShadCN UI, Axios, Socket.IO, REST APIs Developed responsive and modular frontend components using React and TypeScript, ensuring cross-device compatibility and clean UI structure. Built dynamic, accessible UI elements using ShadCN UI with Tailwind CSS, following design system principles. Integrated Redux Toolkit for scalable and efficient global state management, replacing local component states where applicable. Implemented real-time features like chat messaging, user presence, and notifications using Socket.IO, enhancing interactivity and user experience. Connected frontend to backend using Axios for RESTful API calls, managing CRUD operations with robust error handling and loading states. Refactored legacy components and reorganized codebase to follow modern best practices—modular folder structure, reusable hooks, and clean component design.",
    technologies: ["Sockit.io", "Reduxjs", "REST API", "React", "TailwindCSS", "TypeScript"],
  },
  {
    year: "March - April 2025",
    role: "Web Developer Intern",
    company: "RV Tech Learn",
    description:
      "Intern at RV Tech Learn Tech Stack: React.js, TypeScript, Tailwind CSS. Designed and developed key pages for the company’s official website using React and Tailwind CSS, ensuring responsive design and clean UI/UX. Built core modules of a Learning Management System (LMS) such as student dashboards and course listings using React, TypeScript, and Redux Toolkit. Integrated REST APIs via Axios for dynamic data handling and improved frontend-backend communication. Collaborated with the team using Git and GitHub for version control, feature branching, and seamless code sharing and reviews.",
    technologies: ["React", "Typscript", "TailwindCSS", "Nextjs", "Figma"],
  },
];

// Projects Section
export const PROJECTS = [
  {
    title: "Alumni Hub Platform",
    image: project1,
    description:
      "A full-stack MERN application enabling alumni to connect, share job opportunities, and participate in forum discussions. Implemented JWT authentication, role-based access control, and real-time messaging features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    githubLink: "https://github.com/udaymordharya/Alumni-Connect-Project-codequest",
  },

  {
    title: "kavach",
    image: Kavach,
    description:
      "A scalable enterprise-grade web platform designed to handle high-volume data operations and secure user workflows. Built with modular architecture, optimized API performance, and implemented secure authentication mechanisms.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Sequelize"],
    githubLink: "https://github.com/yourusername/goliath",
  },

  {
    title: "MyLeakWatch",
    image: MyLeakWatch,
    description:
      "A smart civic reporting platform that allows users to report water leakages with image uploads and real-time status tracking. Integrated role-based dashboards for authorities and implemented complaint lifecycle management.",
    technologies: ["React", "Express", "MongoDB", "Cloudinary", "JWT"],
    githubLink: "https://github.com/Virus2hell/MyLeakWatch",
  },

  {
    title: "CivicFlow",
    image: CivicFlow,
    description:
      "A digital workflow management system for handling civic complaints efficiently. Features include complaint tracking, admin assignment system, status updates, and analytics dashboard for performance monitoring.",
    technologies: ["React", "Redux", "Node.js", "MySQL", "Socket.io"],
    githubLink: "https://github.com/udaymordharya/CivicFlow",
  },

  {
    title: "Climate Change Data Aggregator",
    image: project5,
    description:
      "A data visualization platform aggregating climate metrics such as temperature trends, carbon emissions, and sea-level rise using REST APIs. Displays insights through interactive charts and dashboards.",
    technologies: ["React", "Express", "REST API", "Chart.js"],
    githubLink: "https://github.com//climate-aggregator",
  },

  {
    title: "Stock Market Prediction App",
    image: project6,
    description:
      "A machine learning application predicting stock price trends using historical market data and regression models. Performed data preprocessing, feature engineering, and model evaluation using Python libraries.",
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/udaymordharya/Stock-Prediction-using-LSTM-and-Sentiment-Analysis",
  },
];


// Contact Section
export const CONTACT = {
  address: "Chembur, Mumbai",
  phoneNo: "+91 9920778363",
  email: "udaymordharya@gmail.com",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/uday-mordharya",
  github: "https://github.com/udaymordharya",
  twitter: "https://twitter.com/your_handle", // Replace with actual
  instagram: "https://www.instagram.com/your_handle", // Replace with actual
};
