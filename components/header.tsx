"use client";

import Link from "next/link";
import clsx from "clsx";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/components/section-active-context";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeLastClick } =
    useActiveSectionContext();

  return (
    <div className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray-300 bg-black/25 border-opacity-40 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] -translate-x-1/2 sm:top-6 sm:h-[3.35rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 text-[#4a4a4a] ">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 mt-4 sm:mt-0
        gap-2
        text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((links) => (
            <motion.li
              key={links.link}
              className="relative flex justify-center items-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                className={clsx(
                  "flex w-full px-0 py-3 justify-center items-center text-gray-300 hover:text-white transition sm:px-3",
                  {
                    "text-white": activeSection === links.name,
                  }
                )}
                href={links.link}
                onClick={() => {
                  setActiveSection(links.name);
                  // Last Click for navbar setting scroll smooth
                  setTimeLastClick(Date.now());
                }}>
                {links.name}
                {links.name === activeSection && (
                  <motion.span
                    className="bg-gray-700/30 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
