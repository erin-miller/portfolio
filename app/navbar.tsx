"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="text-cbrown text-nowrap w-2/3 h1">
      <div className="container flex min-w-min">
        <div className="text-4xl font-bold w-full text-moss pr-12">
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
              <Link
                href="/contact"
                className="hover:text-darkmoss filled-border"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="hover:text-darkmoss filled-border"
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 18.32H22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.32001H22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {isVisible && (
            <div className="absolute right-1 text-cbrown font-bold rounded-xl shadow-md bg-darkolive border-moss border-2 text-left md:hidden">
              <ul className="space-y-2 p-2">
                <li className="hover:text-darkmoss">
                  <Link href="/contact">CONTACT</Link>
                </li>
                <li className="hover:text-darkmoss">
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
