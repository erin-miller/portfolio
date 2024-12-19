"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const homeLink = "/";
  const resumeLink = "/resume.pdf";

  return (
    <nav className="h1 text-darkmoss text-nowrap w-2/3">
      <div className="container flex min-w-min">
        <div className="text-4xl font-bold w-full text-olive">
          <Link
            href="/"
            className="title hover:text-darkolive bg-cbrown border-cbrown border-2 rounded-3xl inline-block pb-2 px-2"
          >
            ERIN MILLER
          </Link>
        </div>

        <div className="hidden md:flex font-bold text-xl">
          <ul className="flex space-x-4">
            <li>
              <Link href={homeLink} className="nav-btn">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn"
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>

        {/* menu btn */}
        <div className="relative inline-block">
          <button
            className="md:hidden filled-border hover:text-cpurple"
            onClick={toggleMenu}
          >
            <svg
              width="25"
              height="25"
              stroke="currentColor"
              fill="currentColor"
              viewBox="-0.5 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12.32H22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 18.32H22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 6.32001H22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isVisible && (
            <div className="absolute right-1 p-1 text-cbrown text-center font-bold rounded-xl shadow-md bg-darkolive border-darkmoss border-2 text-left md:hidden">
              <ul className="space-y-2 p-2">
                <li className="hover:text-darkmoss hover:bg-olive rounded-full">
                  <Link href="/">HOME</Link>
                </li>
                <li className="hover:text-darkmoss hover:bg-olive rounded-full">
                  <Link href="/resume">RESUME</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
