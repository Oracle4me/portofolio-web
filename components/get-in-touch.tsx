"use client";

import React from "react";
import SectionHeading from "./section-heading";
import useSectionContext from "@/hooks/hook";

import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";
import { SubmitButton } from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionContext("Get In Touch", 0.4);
  return (
    <motion.section
      ref={ref}
      id="get_in_touch"
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>GET IN TOUCH</SectionHeading>
      <p className="-mt-6 text-center text-gray-950">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nurmkevin532@gmail.com">
          email
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          if (data) {
            toast.success("Success send message!");
          }
        }}
        className="mt-10 flex flex-col">
        <input
          name="email"
          type="email"
          className="h-12 px-4 rounded border border-slate-950/5 outline-none text-gray-900 bg-gray-950/10"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="mt-2 h-52 rounded-lg p-4 border-slate-950/5 border-black text-gray-900 bg-slate-950/10 outline-none"
          placeholder="Your message"
          required
          maxLength={225}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
