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
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="#b7c1cc">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--left"
              contentStyle={{
                background: "#1c1c20",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#1c1c20",
                color: "#b7c1cc",
                fontSize: "1.5rem",
                boxShadow: "revert",
                border: "2px solid black",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1c1c20 " }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold">
                {item.institution}
              </h4>
              <h4 className="font-medium capitalize">{item.location}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
