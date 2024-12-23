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
        These are my projects
      </h1>
      <div className="h-auto w-auto bg-gradient-to-r from-red-500 to-blue-600 justify-items-center rounded-xl p-4">
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
          <button className="bg-gradient-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 rounded-xl ml-4" onClick={() => router.push('/projects/AstroCat')}>
            <dd className="text-white font-medium font-mono">
              Astro cat
            </dd>
          </button>
          <button className="bg-gradient-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 rounded-xl ml-4 p-8" onClick={() => router.push('https://modrinth.com/mod/day-countr')}>
            <dd className="text-white font-medium font-mono">
              DayCountr Minecraft mod
            </dd>
          </button>
          <button className="bg-gradient-to-r from-purple-900 to-amber-950 h-24 w-48 hover:from-purple-600 hover:to-amber-500 rounded-xl ml-4 p-2" onClick={() => router.push('https://puggamedev.itch.io/scale-to-form')}>
            <dd className="text-white font-medium font-mono">
              Scale to form, A game made for GMTK Game jam 2024
            </dd>
          </button>
        </div>
      </div>
    </div>
  );
}
