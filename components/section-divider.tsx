"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-900 my-24 h-12 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}></motion.div>
  );
};

export default SectionDivider;
