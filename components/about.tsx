"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";
import useSectionContext from "@/hooks/hook";

const About = () => {
  const { ref } = useSectionContext("About", 0.6);
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] sm:text-center  text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi, I'm Kevin, and I'm a college student who wants to become as {""}
        <span className="font-medium">Software Engineer</span>. I decided to
        pursue my passion for programming. I am a self-taught person learning{" "}
        {""}
        <span className="font-medium">full-stack web development.</span> {""}
        <span>My favorite part of programming</span> is the problem-solving
        aspect. I <span>love</span> every part of finally figuring out a
        solution to a problem. <br />
        My core stack includes {""}
        <span className="font-semibold">
          React, Next.js, Node.js, Express.js, MongoDB, MySQL
        </span>
        . I'm also familiar with{" "}
        <span className="font-semibold">TypeScript and Prisma</span>. I am
        always looking forward to learning new technologies. I am currently
        looking for a{" "}
        <span className="font-semibold">full-time or freelance</span> position
        as a software developer.
      </p>
      <p className="font-medium">
        I have some hobbies to pass the time, like programming, singing, playing
        video games, working with Arduino, and exploring cybersecurity.
      </p>
    </motion.section>
  );
};

export default About;
