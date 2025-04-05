'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const metadata: Metadata = {
  title: "Website update",
  description: "These are MrPugPugs projects!",
};

console.log("%c" + "Hey you looking through my code???", "color: #0077ff; font-size: 24px; font-weight: bold;");
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
      <h1 className="mt-4 text-black dark:text-white font-medium font-mono">
        Website updates
      </h1>
      <div className="bg-white rounded-xl h-20 w-72 p-6 mt-20">
        <span className="text-black font-medium font-mono">{commitMessage}</span>
      </div>
    </div>
  );
}
