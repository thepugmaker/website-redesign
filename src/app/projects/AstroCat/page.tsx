'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'

const metadata: Metadata = {
  title: "MrPugPugs projects",
  description: "These are MrPugPugs projects!",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()

  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono">
        Astro cat
      </h1>
      <div className="h-auto w-auto bg-gradient-to-r from-red-500 to-blue-600 justify-items-center rounded-xl">
        <dd className="text-white font-medium font-mono mt-4">
            Astro cat is my survival game. You play as a cat and yuo have to put in effort to do things but the game won't help you. You can make it a slower game or a faster pase game. 
            Astro cat was developed in Unity 2022.3.14f1. Its still in development.
        </dd>
        <a className="mt-8 bg-gradient-to-r from-purple-900 to-emerald-950 h-24 w-48 hover:from-purple-600 hover:to-emerald-500 rounded-xl" href="https://puggamedev.itch.io/astro-cat">
            <dd className="text-white font-medium font-mono">
                Game page
            </dd>
        </a>
      </div>
    </div>
  );
}
