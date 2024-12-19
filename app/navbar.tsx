"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="text-white p-2 w-2/3 font-[family-name:var(--font-merriweather)]">
      <div className="container flex justify-between items-center">
        <div className="text-4xl font-bold w-full">
          <Link href="/">ERIN MILLER</Link>
        </div>

        {/* menu btn */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex text-xl">
          <ul className="flex space-x-4">
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
          </ul>
        </div>

        {isVisible && (
          <div className="absolute top-12 right-0 bg-gray-200 text-black font-bold rounded-sm text-center md:hidden">
            <ul className="space-y-2 p-4">
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
              <li>
                <Link href="/resume">RESUME</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
