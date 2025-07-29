'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'

const metadata: Metadata = {
  title: "About MrPugPug",
  description: "This is about MrPugPug",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()

  return (
    <div className="items-center justify-items-center min-h-screen">
        <h1 className="text-black dark:text-white font-medium font-mono rounded-xl">
            Here is some stuff about me!
        </h1>
        <div className="h-auto w-auto bg-linear-to-r from-red-500 to-blue-600 justify-items-center rounded-xl m-12 p-6">
            <dd className="text-white font-medium font-mono mt-4">
                I develop websites, software, and games. My game downloads are at https://puggamedev.itch.io/
            </dd>
            <dd className="text-white font-medium font-mono mt-10">
                Linux is another thing I like, I've used Arch Linux, Ubuntu, Kbuntu, Fedora, and Qubes.
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
    </div>
  );
}
