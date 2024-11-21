import Image from "next/image";
import Head from "next/head";
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

<head>
  <title>MrPugPug</title>
</head>

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const [projectsDiv, setProjectsDivVisible] = useState(false);
  const [astrocatProjectDiv, setAstroCatDivVisible] = useState(false);

  const handleProjectShowClick = () => {
    setProjectsDivVisible(true);
  };

  const handleAstroCatProjectClick = () => {
    setAstroCatDivVisible(true);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="mt-[46rem]">
        <button className="hover:bg-slate-900 flex justify-center items-center shadow-md rounded-xl w-40 h-36 bg-black transition duration-500 animate-wiggle" id="openprojectsbutton" onClick={handleProjectShowClick}>
          <dd className="font-medium font-mono text-white">
            Projects
          </dd>
        </button>
      </div>
      <div className={ `transition-opacity duration-500 ${projectsDiv ? 'opacity-100' : 'opacity-0'} `} id="projectsdiv"></div>
        <div className="fixed top-[10rem] left-[68rem]" id="astrocatprojectmain">
          <div className="rounded-xl flex shadow-md w-96 h-48 bg-gradient-to-r from-slate-600 to-slate-800">
            <dd className="font-medium font-mono justify-self-start text-white mt-20 pl-8">
              Astro cat
            </dd>
            <button className="rounded-lg flex justify-center items-center justify-self-end shadow-xl bg-slate-500 hover:bg-slate-600 transition duration-500 mt-14 ml-24 h-20 w-32" id="astrocatprojectinfo" onClick={handleAstroCatProjectClick}>
              <dd className="font-small font-mono text-white">
                Tell me about it!
              </dd> 
            </button>
          </div>
      </div>
    </div>
  );
}