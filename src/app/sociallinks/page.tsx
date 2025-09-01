'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'
import pfpimage from "../images/pfpimage.jpeg";

const metadata: Metadata = {
  title: "MrPugPug's social links",
  description: "Social links",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()

  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="mt-50 h-32">
        <div className="bg-linear-to-r from-blue-500 to-purple-700 h-120 w-200 p-6 rounded-xl border-red-500 border-2">
          <h1 className="text-white font-medium font-mono">
            MrPugPug
            <img src={pfpimage.src} alt="Logo" className="h-32 w-32 rounded-full mx-auto mb-4"></img>
          </h1>
          <h1 className="text-white font-medium font-mono mt-4">
            I am a developer I create websites, software, and games.
            You can contact me on Discord, and email.
            Here are my social links:
          </h1>
          <div className="mt-4 to-blue-500 from-purple-700 rounded-xl">
            <a href="https://mrpugpug.com" className="text-white font-medium font-mono" target="_self">
              Main Site
            </a>
          </div>
          <div className="mt-4 to-blue-500 from-purple-700 rounded-xl">
            <a href="https://github.com/thepugmaker" className="text-white font-medium font-mono" target="_self">
              Github
            </a>
          </div>
          <div className="mt-4 to-blue-500 from-purple-700 rounded-xl">
            <a href="https://www.youtube.com/@MrPugPug" className="text-white font-medium font-mono" target="_self">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
