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
        I'm MrPugPug and I'm a developer
      </h1>
      <div className="mt-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 h-40 w-96 justify-items-center rounded-xl">
          <dd className="text-white font-medium mt-2 font-mono">
            I'm a developer of many things
          </dd>
          <dd className="text-white font-medium mt-6 font-mono">
            I'm a web, game, and software developer
          </dd>
          <button className="h-16 w-32 bg-gradient-to-r from-purple-900 to-red-900 justify-self-center rounded-xl hover:from-purple-500 hover:to-red-700" onClick={() => router.push('/about')}>
            <dd className="text-white font-medium font-mono">
              More about me!
            </dd>
          </button>
        </div>
      </div>
      <div className="mt-24">
        <button className="rounded-xl bg-gradient-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggle" onClick={() => router.push('/projects')}>
          <dd className="text-white font-medium font-mono">
            My projects!
          </dd>
        </button>
      </div>
      <div className="mt-36">
        <button className="rounded-xl bg-gradient-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-40 h-36 transition duration-500 animate-wiggleotherone" onClick={() => router.push('/contact')}>
          <dd className="text-white font-medium font-mono">
            Contact me
          </dd>
        </button>
      </div>
    </div>
  );
}
