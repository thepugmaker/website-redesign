'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'

const metadata: Metadata = {
  title: "Contact MrPugPug",
  description: "Contact MrPugPug INFO",
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
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 h-auto w-auto justify-items-center rounded-xl">
            <a className="h-16 w-32 bg-gradient-to-r from-purple-900 to-red-900 justify-self-center rounded-xl hover:from-purple-500 hover:to-red-700" href="mailto:contact@mrpugpug.com">
                <dd className="text-white font-medium mt-2 font-mono">
                    Email me!
                </dd>
            </a>
        </div>
      </div>
    </div>
  );
}