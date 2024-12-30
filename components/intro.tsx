"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "./section-active-context";
import useSectionContext from "@/hooks/hook";

const Intro = () => {
  const { ref } = useSectionContext("Home", 0.4);
  const { setActiveSection, setTimeLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mt-28 w-full text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex justify-center items-center !leading-[1.5] sm:text-4xl">
        <div className="relative mt-20">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"></motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}>
        <span className="font-bold text-gray-950 text-6xl">
          Welcome To My Portofolio
          <br />
        </span>
        <span className="font-semibold text-2xl text-slate-950">
          I'm Nur Muhammad Kevin
          <br />
        </span>
        <span className="font-medium text-xl text-gray-950 px-12">
          A passionate web developer dedicated to crafting modern, responsive,
          and user-friendly websites.
          <br />
        </span>
        <span className="italic text-gray-800 text-xl">
          Explore my portfolio to see how I turn ideas into impactful digital
          experiences
          <br />
        </span>

        <span className="text-xl text-gray-900 font-bold">
          For now, my focus is Next.js
        </span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}>
        <Link
          href="#get_in_touch"
          className="group flex items-center bg-gray-900 px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition">
          Contact Me{" "}
          <BsArrowRight
            className="opacity-75 group-hover:translate-x-1 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeLastClick(Date.now());
            }}
          />
        </Link>
        <a
          href="https://drive.google.com/file/d/1XwPSRuLlZktR8qz5ecfnfhjxYlm-yKYv/view?usp=drive_link"
          className="group flex items-center bg-white text-slate-900 px-7 py-3 gap-2 rounded-full hover:scale-105 focus:scale-110 active:scale-105 transistion cursor-pointer border border-black/10">
          Download CV{" "}
          <HiDownload className="opacity-75 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
