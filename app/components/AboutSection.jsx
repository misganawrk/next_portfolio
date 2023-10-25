"use client";

import React, { useTransition, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";
import BootstrapIcon from "../../public/icons8-bootstrap.svg";
import CssIcon from "../../public/icons8-css.svg";
import ExpressIcon from "../../public/icons8-express-js-50.png";
import HtmlIcon from "../../public/icons8-html.svg";
import JavascriptIcon from "../../public/icons8-javascript-50.png";
import LinuxIcon from "../../public/icons8-linux-50.png";
import MongoIcon from "../../public/icons8-mongodb-50.png";
import NetworkIcon from "../../public/icons8-network-50.png";
import NextIcon from "../../public/icons8-nextjs.svg";
import NodejsIcon from "../../public/icons8-nodejs-50.png";
import ReactIcon from "../../public/icons8-react-native-50.png";
import SqlIcon from "../../public/icons8-sql-50.png";
import TailwindIcon from "../../public/icons8-tailwindcss-50.png";
import TypescriptIcon from "../../public/icons8-typescript-50.png";
import JimmaIcon from "../../public/jimma.png";



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      
      <ul className="grid grid-cols-4 gap-4">
              <Link href="#logo">
            <Image src={HtmlIcon} alt="Html Icon" />
          </Link>
          <Link href="#logo">
            <Image src={CssIcon} alt="Css Icon" />
          </Link>
          <Link href="#logo">
            <Image src={JavascriptIcon} alt="Javascript Icon" />
          </Link>
          <Link href="#logo">
            <Image src={TypescriptIcon} alt="Typescript Icon" />
          </Link>
          <Link href="#logo">
            <Image src={ReactIcon} alt="React Icon" />
          </Link> 
            <Link href="#logo">
            <Image src={NextIcon} alt="Next Icon" />
          </Link>
          <Link href="#logo">
            <Image src={BootstrapIcon} alt="Bootstrap Icon" />
          </Link>
          <Link href="#logo">
            <Image src={TailwindIcon} alt="Tailwind Icon" />
          </Link>
          <Link href="#logo">
            <Image src={MongoIcon} alt="Mongo Icon" />
          </Link>
          <Link href="#logo">
            <Image src={SqlIcon} alt="SQL Icon" />
          </Link>
          <Link href="#logo">
            <Image src={LinuxIcon} alt="Linux Icon" />
          </Link>
          <Link href="#logo">
            <Image src={NetworkIcon} alt="Network Icon" />
          </Link>
          <Link href="#logo">
            <Image src={NodejsIcon} alt="Nodejs Icon" />
          </Link>
          <Link href="#logo">
            <Image src={ExpressIcon} alt="Express Icon" />
          </Link>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <Link href="#logo" className="flex flex-row justify-center">
      <Image src={JimmaIcon} alt="jimma  Icon" />
    </Link>
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

          <p id="logo"   className="text-base lg:text-lg text-transparent bg-clip-text  bg-gradient-to-r  from-cyan-300 via-purple-300 to-pink-300 ">
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
