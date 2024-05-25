"use client";

import { projectsData } from "@/lib/data";

import ProjectCard from "@/components/projects-card";
import SectionHeading from "@/components/section-heading";
import useSectionContext from "@/hooks/hook";

const Projects = () => {
  const { ref } = useSectionContext("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
