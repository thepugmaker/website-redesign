'use client'

import Image from "next/image";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";

console.log("https://github.com/thepugmaker/website-redesign");

export default function Home() {
  const router = useRouter()
    const [commitMessage, setCommitMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const maininfo = useRef(null);

    const today = new Date();
   
    useEffect(() => {
      const repoUrl = 'https://api.github.com/repos/thepugmaker/website-redesign/commits';
  
      const fetchCommitMessage = async () => {
          const response = await fetch(repoUrl);
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          setCommitMessage(data[0].commit.message);
          setLoading(false);
      };
  
      fetchCommitMessage();
    }, []);
    
    useEffect(() => {
      const elements = gsap.utils.toArray(".animate");

      elements.forEach((el, i) => {
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            delay: i * 0.2 
          }
        );
      });
    }, []);

  return (
    <div>
      <AboutMe />
      <Contact />

      <div className="min-h-screen w-auto h-auto ml-2">
          <div className="bg-white rounded-xl h-auto w-100 p-6 mt-1">
            <h1 className="text-black font-medium font-mono mb-2">
              Most recent commit on main:
            </h1>
            <span className="text-black font-medium font-mono">{commitMessage}</span>
          </div>
        </div>
    </div>
  );
}
