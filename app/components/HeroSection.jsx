"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-300 via-purple-300 to-pink-300 ">
              {" "}
              Hello! i am &nbsp; <br />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-700 via-purple-700 to-red-700">
              {" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Misgana",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "Cybersecurity Specialist",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />{" "}
            </span>
          </h1>
          {/* <p className=" mb-6 mx-2 text-base text-transparent bg-clip-text  bg-gradient-to-r  from-cyan-300 via-purple-300 to-pink-300 sm:text-lg lg:text-xl ">
            {" "}
            My passion lies in turning ideas into reality and pushing the
            boundaries of what’s possible. Here, you’ll find a collection of my
            work that showcases my skills, experiences, and the value I bring.
            Feel free to explore and reach out if you’d like to connect or
            collaborate.{" "}
          </p> */}
          <div>
            <button className="w-fit text-black bg-gradient-to-br from-blue-700 via-purple-700 to-red-700  hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 hover:text-white hover:font-extrabold  px-6 py-3 rounded-full mr-4">
              {" "}
              Hire me
            </button>
            <a
              href="https://drive.google.com/file/d/1GpyKJIxXwTeop7EYtCQyc7v1-Brcoldm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-fit bg-transparent hover:bg-green-200 mt-4 hover:text-black hover:font-bold border border-white text-yellow-50 px-6 py-3 rounded-full mr-4">
                {" "}
                Download CV{" "}
              </button>
            </a>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0s">
          <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
