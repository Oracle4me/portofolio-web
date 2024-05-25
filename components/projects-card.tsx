"use client";

import Image, { StaticImageData } from "next/image";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  linkGit: string;
  imageUrl: StaticImageData | string;
};

const ProjectCard = ({
  title,
  description,
  tags,
  linkGit,
  imageUrl,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 group-even:pl-8">
      <section className="relative dark:bg-white/10 h-[20rem] sm:max-w-[42rem] min-w-[25rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] hover:dark:bg-white/15 rounded-lg transition">
        <div className="flex flex-col justify-betweebn h-full pl-4 pr-28 py-6 sm:py-8 sm:pb-7 sm:px-4 sm:pr-2 sm:pt-2 sm:max-w-[50%] group-even:pr-4 group-even:pl-28 sm:group-even:ml-[20rem] sm:group-even:pl-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-justify">{description}</p>
          <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto ">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                {tag}
              </li>
            ))}
          </ul>
          <Link href={linkGit} className="sm:mt-3 max-w-fit rounded-full">
            <FaGithub className="w-6 h-6 hover:text-gray-100 hover:scale-110" />
          </Link>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="
          absolute sm:top-8 top-0 sm:-right-40 -right-64 
          w-[22rem] 
          h-full
          sm:w-[28.25rem]
          rounded-t-lg shadow-2xl 
          group-active:scale-[1.04]
          group-focus:-translate-y-12
          group-active:-translate-x-28
          sm:group-hover:scale-[1.04]
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:-rotate-2
          group-even:right-[initial] 

          sm:group-even:-left-40 
          group-even:-left-64 
          group-even:group-active:scale-[1.04]
          group-even:group-active:translate-x-28
          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:translate-y-3
          sm:group-even:group-hover:rotate-2
          sm:group-even:group-hover:scale-[1.04]
          transition
          "
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
