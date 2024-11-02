import Image from "next/image";
import localFont from "next/font/local";
import React, { Component } from 'react';
import { useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

class PageTitle extends Component {
  componentDidMount() {
    document.title = 'Title';
  }
}

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const [divVisible, setDivVisible] = useState(false);

  const handleButtonClick = () => {
    setDivVisible(true);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="mt-[46rem]">
        <button className="hover:bg-slate-900 flex justify-center items-center shadow-md rounded-xl w-40 h-36 bg-black transition duration-500 animate-wiggle" id="openprojectsbutton" onClick={handleButtonClick}>
          <dd className="font-medium font-mono text-white">
            Projects
          </dd>
        </button>
      </div>
      <div className={`transition-opacity duration-500 ${divVisible ? 'opacity-100' : 'opacity-0'} fixed top-[10rem] left-[68rem] p-4`} id="projectsdiv">
        <button className="hover:bg-slate-900 flex justify-center items-center shadow-md rounded-xl w-40 h-36 bg-black transition duration-500 animate-wiggle">
          <dd className="font-medium font-mono text-white">
            Astro cat
          </dd>
        </button>
      </div>
      <footer>
      </footer>
    </div>
  );
}