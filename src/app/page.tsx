'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

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
  
  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono ">
        I'm MrPugPug and I'm a developer
      </h1>
      <div className="mt-16">
        <div className="bg-linear-to-r from-blue-500 to-purple-700 h-52 w-96 p-6 justify-items-center items-center rounded-xl border-red-500 border-2">
          <dd className="text-white font-medium mt-2 font-mono">
            I'm a developer of many things
          </dd>
          <dd className="text-white font-medium mt-6 font-mono">
            I'm a web, game, and software developer
          </dd>
          <div className="justify-items-center items-center">
            <button className="h-16 w-36 bg-linear-to-r from-purple-900 to-red-900 rounded-xl hover:from-purple-500 hover:to-red-700 transition duration-500" onClick={() => router.push('/about')}>
              <dd className="text-white font-medium font-mono">
                More about me!
              </dd>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24 gird grid-flow-col">
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggle" onClick={() => router.push('/projects')}>
          <dd className="text-white font-medium font-mono">
            My projects!
          </dd>
        </button>
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggletwo" onClick={() => router.push('/contact')}>
          <dd className="text-white font-medium font-mono">
            Contact me
          </dd>
        </button>
        <button className="rounded-xl bg-linear-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggleotherone" onClick={() => router.push('/morelinks')}>
          <dd className="text-white font-medium font-mono">
            More links
          </dd>
        </button>
        <div className="items-center justify-items-center min-h-screen">
        <h1 className="mt-4 text-black dark:text-white font-medium font-mono">
          Website updates
        </h1>
        <div className="bg-white rounded-xl h-32 w-72 p-6 mt-20">
          <span className="text-black font-medium font-mono">{commitMessage}</span>
        </div>
      </div>
      </div>
    </div>
  );
}
