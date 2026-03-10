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
        Work in progress conlony sim game page
      </h1>
      <div className="h-auto w-auto bg-linear-to-r from-red-500 to-blue-600 justify-items-center rounded-xl p-8 m-14">
        <dd className="text-white font-medium font-mono mt-4 ">
            Work in progress, developed with Unity 6. 2D Side view. Smooth, Not a grid.
        </dd>
      </div>
    </div>
  );
}
