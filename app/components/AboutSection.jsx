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
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/pc.png"
          alt="about image"
          className="rounded-3xl ml-12 md:ml-0 "
          width={300}
          height={300}
        />
        <div className="mt-6 md:mt-0 text-left  flex flex-col h-full">
          <span className=" mb-3 text-center text-4xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-700 via-purple-700 to-red-700 transition-all duration-500 ease-in-out hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 ">
            {"About me "}
            &nbsp; <br />
          </span>

          <p className="text-base lg:text-lg text-transparent bg-clip-text  bg-gradient-to-r  from-cyan-300 via-purple-300 to-pink-300 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            architecto earum, ad voluptatibus rep udiandae ab repellat
            exercitationem! Autem, unde doloribus? Aliquid repellendus unde
            quidem, rerum itaque minima? Aperiam, nam ab. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vero officia error temporibus
            repellat perspiciatis dignissimos quas, esse labore commodi tempora.
          </p>
          <div className=" flex flex-row  justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              certification
            </TabButton>
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
