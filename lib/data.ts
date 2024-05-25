import React from "react";

import project1 from "@/public/project2.png";
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
    name: "Contact",
    link: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    title: "Login Authentication",
    description:
      "I'm making some Advance Login Authentication with OAuth, Jwt and 2FA",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Typescript", "Next-Auth"],
    linkGit: "https://github.com/Oracle4me/login-page-react",
    imageUrl: project1,
  },
  {
    title: "Login Authentication",
    description:
      "I'm making some Advance Login Authentication with OAuth, Jwt and 2FA",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Typescript", "Next-Auth"],
    linkGit: "https://github.com/Oracle4me/login-page-react",
    imageUrl: project1,
  },
  {
    title: "Login Authentication",
    description:
      "I'm making some Advance Login Authentication with OAuth, Jwt and 2FA",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Typescript", "Next-Auth"],
    linkGit: "",
    imageUrl: project1,
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
    title: "Bachelor of Informatics",
    institution: "Universitas PGRI Semarang",
    location: "Jl. Sidodadi Timur, Jalan Dokter Cipto No.24",
    description: "Currently pursuing a degree in Informatics",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
];
