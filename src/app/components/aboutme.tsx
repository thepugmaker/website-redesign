import pfpimage from '../images/pfpimage.jpeg';

export default function AboutMe() {
    return (
      <div className="justify-left flex flex-col items-start ml-4 text-white font-mono">
          <img src={pfpimage.src} alt="Logo" className="h-32 w-32 rounded-full mx-auto" />
          <p className="font-bold mt-2">
            I'm a Software Developer, CAD designer, Robot Programmer, and IT professional.
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
            Software Wise
          </p>
          <p className="font-medium mt-1">
              I create websites, software, and games. <br />
              <a
                  href="https://mrpugpug.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  Codexflow a documentation template I created
              </a>
              <a
                  href="https://modrinth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  Day Countr a Minecraft mod I made to test fabric development
              </a>
              <a
                  href="https://itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  Games I've created are at itch.io
              </a>
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              I do things server-side, including setting up and managing servers.
          </p>
          <p className="font-medium mt-1">
              This website is hosted on Vercel (So is the Codexflow Documentation), 
              So I have experience using user friendly hosting platforms with serverless functions. <br />
              I run a self-hosted server for testing things which using Ubuntu Server LTS and Docker.
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              I manage Google Workspace accounts and services, along side other cloud-based tools and platforms.
          </p>
          <p className="font-medium mt-1">
              I have experience with Google Workspace - I can manage users, applications, groups, and other services that Google Workspace provides. <br />
              Cloudflare is what I use to register this domain and manage all DNS records 
              - I also manage Cloudflare workers and Cloudflare access servers. <br />
              Github I use to host and manage my code repositories - Everything code related I do is on there either public or private. <br />
              I use Azure Cloud services for hosting and managing applications and backends. <br />
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              I am currently in the First Tech Challenge (FTC) Program.
          </p>
          <p className="font-medium mt-1">
              I do programming and IT management on a First Tech Challenge (FTC) team. <br />
              As the BioBuzz season goes on I plan to help other teams with programming needs if help is needed. <br />
              For CAD designing I do not do major tasks within the robot cad but I do assist with minor modifications and adjustments as needed. 
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              Other CAD things I do.
          </p>
          <p className="font-medium mt-1">
              I create small things and fun stuff but I don't do big projects, my skill is more in managing Fusion 360 Hubs. <br />
              I do know how to design working parts and moving objects in Fusion 360. <br />
              <img src="/images/cad/battlebot2026.png" alt="Fusion 360 battlebot 2026" className="w-80 h-auto" />
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              Programming skills I have experience with.
          </p>
          <p className="font-medium mt-1">
              Web development - React, Tailwind css, HTML and CSS, NextJS, and Typescript. <br />
              Software development - .NET, C++, and Java. <br />
              Game development - Unity (C#), Unreal Engine (C++/Blueprint), and Roblox Studio (LUA).
          </p>
          <hr className="my-4 w-full border-t border-white" />
          <p className="font-bold mt-0">
              Operating Systems
          </p>
          <p className="font-medium mt-1">
              I have experience with various operating systems including Windows, Linux (Ubuntu, Arch, Kubuntu, Fedora, Debian), and macOS. <br />
              I've used all 3 of these as a daily driver for mutiple months, I am comfortable navigating and managing them on a technical level. <br />
              Right now I daily drive a Macbook Air M5 running macOS 27. Though in the past I have daily driven Windows 10/11 for long periods of time and kubuntu as well.
          </p>
          <hr className="my-4 w-full border-t border-white" />
    </div>
    );
}
