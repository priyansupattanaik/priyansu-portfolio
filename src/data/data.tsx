import React from "react";
import {
  BookOpen,
  Code,
  Database,
  GitGraphIcon,
  Linkedin,
  Mail,
  Monitor,
  Paintbrush,
  Video,
} from "lucide-react";

export type SectionType = {
  id: string;
  title: string;
  subtitle?: string;
};

export type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export type Skill = {
  name: string;
  image: string; // URL to the skill's image
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string; // URL to project image
  liveUrl?: string; // Optional URL to live project
  codeUrl?: string; // Optional URL to code repository
  technologies: string[];
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string; // URL to certification image
  url: string; // URL to certification page
};

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
};

// Replace with your actual data
const data = {
  personalInfo: {
    name: "Priyansu Pattanaik",
    title: "Full Stack Developer",
    description:
      "I’m Priyansu Pattanaik, a passionate tech enthusiast and creative problem-solver, building innovative solutions.",
    resumeUrl: "/resume/Priyansu.pdf", // Replace with actual URL to your resume
    profileImage: "/profile-image/me.JPG", // Replace with your image URL
  },

  sections: [
    { id: "home", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    // { id: "certifications", title: "Certifications" },
  ],

  skills: [
    {
      name: "Web Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        {
          name: "HTML",
          image:
            "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000",
        },
        {
          name: "CSS",
          image:
            "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        },
        {
          name: "JavaScript",
          image:
            "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        },
        {
          name: "TypeScript",
          image:
            "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
        {
          name: "React",
          image:
            "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
        },
        {
          name: "React Native",
          image:
            "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
        },
        {
          name: "Next.js",
          image:
            "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        },
        {
          name: "Tailwind CSS",
          image:
            "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        },
        {
          name: "Node.js",
          image:
            "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        },
        {
          name: "Express.js",
          image:
            "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
        },
      ],
    },
    {
      name: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: "MySQL",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      name: "Video Editing",
      icon: <Video className="w-6 h-6" />,
      skills: [
        {
          name: "Adobe Premiere Pro",
          image:
            "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000",
        },
        {
          name: "After Effects",
          image:
            "https://img.icons8.com/?size=100&id=108781&format=png&color=000000",
        },
      ],
    },
    {
      name: "Graphics Design",
      icon: <Paintbrush className="w-6 h-6" />,
      skills: [
        {
          name: "Photoshop",
          image:
            "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
        },
        {
          name: "Figma",
          image:
            "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
        },
        {
          name: "Canva",
          image:
            "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
        },
      ],
    },
  ],

  projects: [
    {
      id: "project1",
      name: "AI-Powered Resume Scanner",
      description:
        "Upload your resume to ResuScanner for a quick ATS score. Get insights on how well your resume stacks up and tips to make it shine, helping you stand out to recruiters.",
      image: "/project-image/resuscannerai-project.jpeg",
      liveUrl: "https://resuscanner.netlify.app",
      codeUrl: "https://github.com/priyansupattanaik/resuscanner.ai",
      technologies: ["Python", "Streamlit", "NLP"],
    },
    {
      id: "project2",
      name: "AI Chat Bot",
      description:
        "Aura AI is a smart and friendly chatbot built with the Gemini API.",
      image: "/project-image/auraai-project.jpeg",
      liveUrl: "https://theauraai.netlify.app/",
      // codeUrl: "https://github.com/username/project2",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API",
      ],
    },
    {
      id: "project3",
      name: "Vitamin Deficiency Detection",
      description:
        "Engineered a system to detect vitamin deficiencies using ML and image processing.",
      image: "/project-image/vitamin-project.png",
      // liveUrl: "https://example.com/project3",
      codeUrl: "https://github.com/priyansupattanaik/VitaminDeficiencyML",
      technologies: ["Python", "OpenCV", "Deep Learning", "Machine Learning"],
    },
    {
      id: "project4",
      name: "Meteor Drift",
      description:
        "Control a rocket with hand gestures to dodge meteors and navigate space. Experience intuitive, immersive gameplay and stunning visuals in this thrilling space adventure.",
      image: "/project-image/meteordrift-project.jpg",
      liveUrl: "https://meteordrift.netlify.app/",
      // codeUrl: "https://github.com/priyansupattanaik/VitaminDeficiencyML",
      technologies: ["TypeScript", "OpenCV", "JavaScript"],
    },
    {
      id: "project5",
      name: "Arcade Game",
      description:
        "Dive into a fun, retro gaming experience with our Pong game, built using HTML, CSS, and JavaScript. It’s a simple yet addictive way to relive the classic arcade action right in your browser.",
      image: "/project-image/arcade-project.jpeg",
      liveUrl: "https://thepandorabox.netlify.app/",
      // codeUrl: "https://github.com/priyansupattanaik/VitaminDeficiencyML",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],

  experience: [
    {
      id: "exp1",
      title: "Full Stack Developer Intern",
      company: "Indoplus",
      location: "Odisha, India",
      duration: "August/2024 - April/2025",
      description: [
        "Developed full-stack applications using the MERN stack and optimized mobile apps with React Native for high performance.",
        "Built and deployed SiwaConnect (event management app) and an HRMS with admin panels and SQL backends",
        "Designed RESTful APIs for improved response times and collaborated with teams to meet project deadlines.",
        "Conducted testing and debugging to ensure application reliability.",
        "Contributed to the development of My Job, a job-finding application, enhancing its functionality and user experience.",
      ],
      logo: "https://www.indoplus.net/_next/static/media/IP-Logo-Hori.86db063b.86db063b.png",
      website: "https://www.indoplus.net/",
    },
  ],

  // certifications: [
  //   {
  //     id: "cert1",
  //     name: "Introduction to Generative AI",
  //     issuer: "Google Cloud Training",
  //     // date: "2023",
  //     image:
  //       "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=",
  //     url: "https://coursera.org/verify/F7L29BV6YLSS",
  //   },
  //   {
  //     id: "cert2",
  //     name: "Introduction to Artificial Intelligence",
  //     issuer: "LinkedIn Learning",
  //     // date: "2023",
  //     image: "https://nercomp.org/wp-content/uploads/2018/01/LiL.Logo_.png",
  //     url: "https://www.linkedin.com/learning/certificates/bf3439734d5edbeb764f2d704efc915d0d95f762f2aa70108779235e45fe3c44?trk=share_certificate",
  //   },
  // ],

  socialLinks: [
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/priyansupattanaik",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:priyansupattanaikwork@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ],
};

export default data;
