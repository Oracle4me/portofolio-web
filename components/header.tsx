"use client";

import Link from "next/link";
import clsx from "clsx";

import { links } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSectionContext } from "@/components/section-active-context";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeLastClick } =
    useActiveSectionContext();

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="fixed flex px-12 xl:px-32 py-6 md:py-4 items-center justify-between border-b w-full z-50 bg-transparent backdrop-blur-sm">
      <motion.div
        className=""
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>
      <nav className="items-center justify-start w-full md:flex">
        {/* Mobile Menu */}
        <div
          className="md:hidden text-black flex cursor-pointer"
          onClick={handleClick}>
          <GiHamburgerMenu className="w-6 h-6" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-12 left-0 w-full bg-gray-100 shadow-lg z-50">
              <ul className="flex flex-col gap-2 p-4 text-gray-900 ">
                {links.map((link) => (
                  <li key={link.link}>
                    <Link
                      href={link.link}
                      className={clsx("block py-2 px-4 rounded-md", {
                        "bg-gray-200 font-bold": activeSection === link.name,
                      })}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeLastClick(Date.now());
                        setOpen(false);
                      }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <ul
          className="md:flex w-[22rem] flex-wrap gap-y-1 mt-4 sm:mt-0
        gap-2 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 hidden">
          {links.map((links) => (
            <motion.li
              key={links.link}
              className="relative flex items-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                className={clsx("flex w-full px-0 py-3 text-gray-950", {
                  "text-black font-bold": activeSection === links.name,
                })}
                href={links.link}
                onClick={() => {
                  setActiveSection(links.name);
                  // Last Click for navbar setting scroll smooth
                  setTimeLastClick(Date.now());
                }}>
                {links.name}
                {links.name === activeSection && (
                  <motion.span
                    className="bg-gray-900/90 absolute inset-0 z-10 h-[2px] left-0 top-8"
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
      {/* Social Media */}
      <div className="flex items-center justify-center">
        <nav className="flex items-center text-gray-950">
          <motion.li
            className="relative flex items-center gap-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              className="transition-colors hover:text-gray-900/70 duration-200"
              href="https://www.linkedin.com/in/nur-muhammad-kevin-453157292/">
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              className="transition-colors hover:text-gray-900/70 duration-200"
              href="https://www.instagram.com/nurmuhkevin/">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              className="transition-colors hover:text-gray-900/70 duration-200"
              href="https://github.com/oracle4me">
              <FaGithub className="h-6 w-6" />
            </Link>
          </motion.li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
