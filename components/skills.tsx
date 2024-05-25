"use client";

import useSectionContext from "@/hooks/hook";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionContext("Skills", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] text-center xs:mb-40 scroll-mt-28">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap items-center justify-center  gap-2 text-md">
        {skillsData.map((skill, index) => {
          const Icons = skill.icon;
          return (
            <motion.li
              key={index}
              className="flex items-center gap-1 dark:bg-white/10 px-5 py-1 rounded-xl "
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}>
              <Icons />
              {skill.label}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
