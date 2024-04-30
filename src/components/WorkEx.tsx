"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import rivach from './../../public/courses/rivach.png'
import { title } from "process";

const content = [
  {
    title: "Fronent Developer/Designer Intern",
    title2:"Rivach (Jan 2021 - Mar 2022)",
    description1:
      "Worked directly with Clients to design and construct extremely engaging websites and unique user interfaces that resulted in outstanding company development, including a 54% increase in revenue. With my design experience, I designed bespoke business cards and mockups for my clients, resulting in a 43% increase in consumer reach and a substantial influence on their company performance.",
    description2:
      "Created dynamic web pages with HTML, CSS, ReactJS, and JavaScript. Improved optimization and SEO for a 72% boost in browser search exposure.",
    description3:
      "I developed websites such as Rivach.com, Magnusdesigners.com, and Ubiqlogix.com while managing many projects concurrently at Rivach.",
    techstack: "HTML/CSS, React, JavaScript, OOPS, VS Code",
    content: (
      <div className="h-full p-4 w-full  bg-gray-100 flex items-center justify-center text-white" >
        <Image src={rivach} alt="Rivach"/>
       
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-20">
      <h1 className="mt-10 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content}/>
    </div>
  );
}

export default WorkEx;
