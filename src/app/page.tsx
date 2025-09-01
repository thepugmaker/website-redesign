'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";

const metadata: Metadata = {
  title: "MrPugPugs website",
  description: "This is MrPugPugs website!",
};

console.log("%c" + "Hey you looking through my code?", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()
    const [commitMessage, setCommitMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showAboutMeDivs, setShowAbout] = useState(false);
    const [showWorkDivs, setShowWork] = useState(false);
    const [showContactDivs, setShowContact] = useState(false);
    const [showExtraDivs, setExtraLinks] = useState(false);

    const today = new Date();

    const isBirthday =
      today.getMonth() === 7 && today.getDate() === 24; 
   
    useEffect(() => {
      const repoUrl = 'https://api.github.com/repos/thepugmaker/website-redesign/commits';
  
      const fetchCommitMessage = async () => {
          const response = await fetch(repoUrl);
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          setCommitMessage(data[0].commit.message); // Fetches the message of the latest commit
          setLoading(false);
      };
  
      fetchCommitMessage();
    }, []);

    const showAboutMeDiv = () => {
      setShowAbout(true);
    };

    const unShowAboutMeDiv = () => {
      setShowAbout(false);
    };

    const toggleWorkDiv = () => {
      setShowWork(!showWorkDivs);
    };

    const toggleContactDiv = () => {
      setShowContact(!showContactDivs);
    };
    
    const toggleExtraLink = () => {
      setExtraLinks(!showExtraDivs);
    };

  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono ">
        Welcome to https://mrpugpug.com 
      </h1>
      {isBirthday && (
        <h1 className="mt-6 text-black dark:text-white font-medium font-mono">
          Today is my Birthday as well!
        </h1>
      )}
      <div className="mt-16">
        <div className="bg-linear-to-r from-blue-500 to-purple-700 h-52 w-96 p-6 justify-items-center items-center rounded-xl border-red-500 border-2">
          <dd className="text-white font-medium mt-2 font-mono">
            I'm a developer
          </dd>
          <dd className="text-white font-medium mt-6 font-mono">
            I create website, applcations, and games
          </dd>
          <div className="justify-items-center items-center">
            <button className="h-16 w-36 bg-linear-to-r from-purple-900 to-red-900 rounded-xl hover:from-purple-500 hover:to-red-700 transition duration-500" onMouseEnter={showAboutMeDiv} onMouseLeave={unShowAboutMeDiv}>
              <dd className="text-white font-medium font-mono">
                More about me!
              </dd>
            </button>
          </div>
        </div>
      </div>
      {showAboutMeDivs && (
        <div className="h-auto w-auto bg-linear-to-r from-red-500 to-blue-600 justify-items-center rounded-xl m-12 p-6">
            <dd className="text-white font-medium font-mono mt-4">
                I develop websites, software, and games. My game downloads are at https://puggamedev.itch.io/
            </dd>
            <dd className="text-white font-medium font-mono mt-10">
                Linux is another thing I like, I've used Arch Linux, Ubuntu, and Fedora.
            </dd>
            <dd className="text-white font-medium font-mono mt-8">
                Designer of websites, software, and games (Based on my favorite genre of games). Designs are existing in Figma or my head, sometimes on paper.
            </dd>
            <dd className="text-white font-medium font-mono mt-10">
                Programming skills I own.
                Web development - React, Tailwind css, HTML and CSS, NextJS, and Typescript.
                Software development - .NET, C++, and Java.
                Game development - Unity, Unreal Engine, and Roblox Studio.
                These langauges are the ones I have experience with.
            </dd>
            <dd className="text-white font-medium font-mono mt-20">
                This website was made with React, NextJS, Tailwind CSS, and the NextJS app router.
                If you want to see the behind of the site look here! https://github.com/thepugmaker/website-redesign
            </dd>
        </div>
      )}
      <div className="mt-24 gird grid-flow-col">
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggle" onClick={toggleWorkDiv}>
          <dd className="text-white font-medium font-mono">
            Check out my projects
          </dd>
        </button>
        {showWorkDivs && (
          <div className="h-auto w-auto bg-linear-to-r from-red-500 to-blue-600 justify-items-center rounded-xl p-4 ml-8">
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
              <button className="bg-linear-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 transition duration-500 rounded-xl ml-4" onClick={() => router.push('/projects/AstroCat')}>
                <dd className="text-white font-medium font-mono">
                  Astro cat
                </dd>
              </button>
              <button className="bg-linear-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 transition duration-500 rounded-xl ml-4 p-8" onClick={() => router.push('https://modrinth.com/mod/day-countr')}>
                <dd className="text-white font-medium font-mono">
                  DayCountr Minecraft mod
                </dd>
              </button>
              <button className="bg-linear-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 transition duration-500 rounded-xl ml-4 p-2" onClick={() => router.push('https://puggamedev.itch.io/scale-to-form')}>
                <dd className="text-white font-medium font-mono">
                  Scale to form, A game made for GMTK Game jam 2024
                </dd>
              </button>
            </div>
          </div>
        )}
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggletwo" onClick={toggleContactDiv}>
          <dd className="text-white font-medium font-mono">
            Contact me
          </dd>
        </button>
        {showContactDivs && (
          <div className="mt-16">
            <div className="bg-linear-to-r from-blue-500 to-purple-700 justify-items-center rounded-xl w-160 h-64">
                <h1 className="mt-4 text-black dark:text-white font-medium font-mono ">
                  Discord username is mr.pugpug
                </h1>
                <a className="h-16 w-32 bg-linear-to-r from-purple-900 to-red-900 justify-self-center rounded-xl hover:from-purple-500 hover:to-red-700 mt-10" href="mailto:contact@mrpugpug.com">
                    <dd className="text-white font-medium mt-2 font-mono p-8">
                        Email me!
                    </dd>
                </a>
                <h1 className=" text-black dark:text-white font-medium font-mono mt-12">
                  My email is contact@mrpugpug.com if the button doesn't work
                </h1>
            </div>
          </div>
        )}
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggleotherone" onClick={toggleExtraLink}>
          <dd className="text-white font-medium font-mono">
            Extra links
          </dd>
        </button>
        {showExtraDivs && (
          <div className="items-center justify-items-center">
            <button className="rounded-xl bg-blue-500 w-40 h-10 mt-12" onClick={() => router.push('https://github.com/thepugmaker')}>
              <dd className="text-white font-medium font-mono">
                  Github account
              </dd>
            </button>
            <button className="rounded-xl bg-blue-500 w-40 h-10 mt-16" onClick={() => router.push('https://youtube.com/@mrpugpug')}>
              <dd className="text-white font-medium font-mono">
                  YouTube channel
              </dd>
            </button>
          </div>
        )}
        <div className="items-center justify-items-center min-h-screen w-auto h-auto">
          <h1 className="mt-4 text-black dark:text-white font-medium font-mono">
            Recent commit
          </h1>
          <div className="bg-white rounded-xl h-32 w-72 p-6 mt-20">
            <span className="text-black font-medium font-mono">{commitMessage}</span>
          </div>
        </div>
    </div>
  </div>
  );
}
