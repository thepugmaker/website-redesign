'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'

const metadata: Metadata = {
  title: "MrPugPugs website",
  description: "This is MrPugPugs website!",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()

  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono ">
        Some links that are important
      </h1>
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
    </div>
  );
}
