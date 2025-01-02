"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const homeLink = "/";
  const resumeLink = "/resume.pdf";
  const calcLink = "/projects/toonapicalc";
  const scoutLink = "/projects/toonscout";

  return (
    <nav className="nav-container">
      <div className="container flex justify-between items-center w-full">
        <div className="text-4xl font-bold w-full text-olive">
          <Link href="/" className="title">
            ERIN MILLER
          </Link>
        </div>

        <div className="nav-btn-container">
          <ul className="flex space-x-4">
            <li>
              <Link href={homeLink} className="nav-btn">
                HOME
              </Link>
            </li>
            <li>
              <Link href={resumeLink} target="_blank" className="nav-btn">
                RESUME
              </Link>
            </li>
            <li>
              <button onClick={toggleProjects} className="nav-btn">
                PROJECTS
              </button>
            </li>
          </ul>
          {showProjects && (
            <div className="dropdown-menu animate-fade-in mt-36">
              <ul className="space-y-2 p-2">
                <li className="dropdown-item">
                  <Link href={scoutLink}>ToonScout</Link>
                </li>
                <li className="dropdown-item px-1">
                  <Link href={calcLink}>Toon API Calculator</Link>
                </li>
              </ul>
            </div>
          )}
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
            <div className="dropdown-menu animate-fade-in md:hidden">
              <ul className="space-y-2 p-2">
                <li className="dropdown-item">
                  <Link href={homeLink}>HOME</Link>
                </li>
                <li className="dropdown-item px-1">
                  <Link href={resumeLink}>RESUME</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
