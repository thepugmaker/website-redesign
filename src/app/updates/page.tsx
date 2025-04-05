'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'

const metadata: Metadata = {
  title: "Updates",
  description: "Which updates do you want to see?",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Your looking in the wrong place you won't get far here!", "color: #0077ff; font-size: 24px; font-weight: bold;");
console.log("%c" + "Go to my GitHub REPO: https://github.com/thepugmaker/website-redesign", "color: #0077ff; font-size: 24px; font-weight: bold;");

export default function Home() {
  const router = useRouter()

  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono">
        Updates
      </h1>
      <button className="rounded-xl bg-gradient-to-r from-blue-950 to-purple-900 hover:from-blue-500 hover:to-purple-500 w-120 h-40 transition duration-500 " onClick={() => router.push('/updates/website')}>
        <dd className="text-white font-medium font-mono">
          Website updates
        </dd>
      </button>
    </div>
  );
}
