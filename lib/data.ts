import React from "react";

import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import project4 from "@/public/project4.png";
import project5 from "@/public/project5.png";

import Project, { Skill } from "@/utils/type";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Get In Touch",
    link: "#get_in_touch",
  },
];

export const projectsData: Project[] = [
  {
    title: "Login Authentication (MERN Stack)",
    description: "I'm making some MERN stack login Authentication",
    tags: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    linkGit: "https://github.com/Oracle4me/login-page-react",
    imageUrl: project1,
  },
  {
    title: "Simple Authentication wit Next Auth (NextJs 14)",
    description:
      "I'm making some simple Authentication with Next Auth and NextJs",
    tags: [
      "React",
      "Next.js",
      "Prisma",
      "Tailwind",
      "Typescript",
      "Next-Auth",
      "MongoDB",
      "Potsgresql",
    ],
    linkGit: "https://github.com/Oracle4me/nextjs14-simple-auth",
    imageUrl: project2,
  },
  {
    title: "To Do List (MERN Stack)",
    description:
      "I'm making a To-Do List with a Persona 5 theme that implements CRUD functionality, but it's not responsive yet.",
    tags: ["Mongo DB", "Express JS", "React", "Node JS"],
    linkGit: "https://github.com/Oracle4me/todolist_p5",
    imageUrl: project3,
  },
  {
    title: "Enchance Shop",
    description:
      "I'm creating an e-commerce site using HTML, CSS, and JavaScript. This site is one of my client projects, and thanks to their permission, I am able to showcase this work.",
    tags: ["Html", "Css", "JavaScript"],
    linkGit: "https://github.com/Oracle4me/enchance-shop",
    imageUrl: project4,
  },
  {
    title: "Oracle Shop",
    description:
      "A modern E-commerce website with a responsive front end and robust backend, offering seamless shopping. [Development is ongoing - Comming Soon]",
    tags: ["NextJS", "TypeScript", "Tailwind", "MySQL", "Prisma", "Clerk"],
    linkGit: "",
    imageUrl: "",
  },
  {
    title: "Gemini Clone",
    description:
      "Clone of the Gemini platform, offering similar features and functionality, built with modern web technologies.",
    tags: ["React", "JavaScript", "Tailwind"],
    linkGit: "https://github.com/Oracle4me/gemini-clone",
    imageUrl: project5,
  },
];

export const skillsData = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
  },
  {
    label: "JavaScript",
    icon: FaJsSquare,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "NextJS",
    icon: SiNextdotjs,
  },
  {
    label: "NodeJS",
    icon: FaNode,
  },
  {
    label: "ExpressJS",
    icon: SiExpress,
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "ScSS",
    icon: SiSass,
  },
  {
    label: "MongoDB",
    icon: SiMongodb,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "Prisma",
    icon: SiPrisma,
  },
  {
    label: "Git",
    icon: FaGitAlt,
  },
  {
    label: "Python",
    icon: FaPython,
  },
];

export const educationData = [
  {
    title: "S1 - Informatika",
    institution: "Universitas PGRI Semarang",
    location: "Jl. Sidodadi Timur, Jalan Dokter Cipto No.24",
    description: "Currently pursuing a degree in Informatics",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
];
