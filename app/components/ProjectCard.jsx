import React from "react";

import { DocumentIcon, EyeIcon } from "@heroicons/react/solid";

import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="justify-items-center text-center  px-10 md:px-3">
      <div className="mx-10 sm:mx-0 px-10  ">
        <div
          className=" mx-10  sm:mx-0 w-72 h-72 md:h-72 rounded-t-xl relative group  overflow-hidden "
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  ">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white  group/link"
            >
              <DocumentIcon className="h-10 w-10 text-[#6bb0e2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#d66c69] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
        <div className=" mx-10 sm:mx-0 text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
