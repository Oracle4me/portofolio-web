"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import useSectionContext from "@/hooks/hook";

const Education = () => {
  const { ref } = useSectionContext("Education", 0.4);
  return (
    <section
      ref={ref}
      id="education"
      className="mb-32 sm:min-w-[52rem] scroll-mt-28">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor="black">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1c1c20",
                boxShadow: "none",
                borderRight: "1px solid rgba(0,0,0,0.05)",
                padding: "1.3rem 1rem",
              }}
              date={item.date}
              dateClassName="ml-4 text-gray-950"
              icon={item.icon}
              iconStyle={{
                background: "#1c1c20",
                color: "white",
                fontSize: "1rem",
                boxShadow: "revert",
                border: "2px solid black",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1c1c20 " }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold">
                {item.institution}
              </h4>
              <h4 className="font-medium capitalize">{item.location}</h4>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
