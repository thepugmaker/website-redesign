import Image from "next/image";
import localFont from "next/font/local";
import React, { Component } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

class PageTitle extends Component {
  componentDidMount() {
    document.title = 'Title';
  }
}

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="h-auto w-auto">
        <a className="hover:bg-slate-900 ease-in-out flex justify-center items-center shadow-md rounded-xl w-40 h-36 bg-black transform rotate-12 translate-y-72" href="">
          <dd className="font-medium font-mono text-white">
            Projects
          </dd>
        </a>
      </div>
      <div className="" id="projectsdiv">

      </div>
      <footer>
      </footer>
    </div>
  );
}
