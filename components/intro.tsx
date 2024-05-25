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
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex justify-center items-center !leading-[1.5] sm:text-4xl">
        <div className="relative mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src="/profil.jpg"
              alt="Personal"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
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
        <span className="font-bold">
          Hello, I'm Kevin.
          <br />
        </span>
        I'm a{" "}
        <span className="font-bold">
          Beginner's in full stack developer
          <br />
        </span>
        I really enjoy
        <span className="italic">
          make some sites.
          <br />
        </span>
        My focus is {""}
        <span className="underline">React (Next.js)</span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}>
        <Link
          href="#contact"
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
          href="/"
          className="group flex items-center bg-white text-slate-900 px-7 py-3 gap-2 rounded-full hover:scale-105 focus:scale-110 active:scale-105 transistion cursor-pointer border border-black/10">
          Download CV{" "}
          <HiDownload className="opacity-75 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white text-black p-4 flex items-center gap-2 rounded-full hover:scale-110 focus:scale-110 active:scale-105 transistion cursor-pointer border border-black/10"
            href="https://www.linkedin.com/in/nur-muhammad-kevin-453157292/"
            target="_blank">
            <BsLinkedin />
          </a>
          <a
            className="bg-white text-black p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] focus:scale-[1.15] active:scale-105 transistion cursor-pointer border border-black/10"
            href="https://github.com/oracle4me"
            target="_blank">
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
