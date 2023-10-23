"use client";

import React, { useTransition, useState } from "react";

import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Linux OS</li>
        <li>Network Adminstration</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Jimma University</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2  justify-center  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/PC.png"
          alt="about image"
          className="rounded-3xl mx-12  md:ml-0 justify-center  "
          width={300}
          height={300}
        />

        <div className="mt-6 md:mt-0 text-left  flex flex-col h-full">
          <span className=" mb-3 text-center text-4xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-700 via-purple-700 to-red-700 transition-all duration-500 ease-in-out hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 ">
            {"About me "}
            &nbsp; <br />
          </span>

          <p className="text-base lg:text-lg text-transparent bg-clip-text  bg-gradient-to-r  from-cyan-300 via-purple-300 to-pink-300 ">
            Welcome! I’m Misgana Alewegziabher, a professional dedicated to
            transforming ideas into reality. This portfolio is a testament to my
            journey, showcasing my skills and the unique value I bring. Each
            project here represents an opportunity for learning and growth,
            pushing boundaries to make a positive impact. Feel free to explore
            and reach out for collaboration.
          </p>
          <div className=" font-semibold  flex flex-row  justify-center mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>{" "}
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certification
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
