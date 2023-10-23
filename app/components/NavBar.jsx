"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1f1c1f] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 ">
        <Link href="/">
          <Image
            src="/images/misgana.png"
            alt="hero image"
            className="rounded-full justify-start"
            width={80}
            height={80}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex  items-center px-3 py-2 text-slate-200  rounded hover:text-white  "
            >
              <CheckCircleIcon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex  items-center px-3 py-2 text-slate-200  rounded hover:text-white "
            >
              <XCircleIcon className="h-7 w-7" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0  ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
