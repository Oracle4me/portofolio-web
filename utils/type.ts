import { StaticImageData } from "next/image";
import { links } from "@/lib/data";
import { IconType } from "react-icons";

type Project = {
  title: string;
  description: string;
  tags: string[];
  linkGit: string;
  imageUrl: StaticImageData | string;
};

export default Project;

// Section name
export type SectionName = (typeof links)[number]["name"];

// Skill Type

export type Skill = {
  label: string;
  icon: IconType;
};
