"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import rivach from './../../public/courses/rivach.png';
import sitek from './../../public/courses/sitek.jpeg'
import ascent from './../../public/courses/ascent.jpeg';
import { title } from "process";

const content = [
  {
    title: "Junior Developer",
    title2:"Sitek, KY, USA (Feb 2025 - Present)",
    description1:
      "Developed a website handling posts and users with C#, .NET , and EntityFramework with efficient data management, API services, and secure authentication.",
    description2:
      "Implemented CRUD functionality with Entity Framework with ASP .NET MVC and implemented sorting, filtering, and paging with Entity Framework in MVC and MVVM architecture.",
    description3:
      "Developed SPA (Single Page Application) by using Angular features like pipes, routing, data binding, events binding, components, service, Dependency Injection, directive, Observable, Forms, Reactive Form.",
     description4:
      "Developed complex MVC controllers, views, and models linked to the backend database and worked on Razor Pages.",
    description5:
      "Extensive understanding in creating and managing View Models, Views, and Partial Views using .NET MVC.",
    description6:
      "Created Forms-Based Authentication to enforce security in the application and implemented Role security to control user access.",
    techstack: "Angular, C#, .NET, EntityFramework, Razor Pages, DevOps, Azure, Git, ASP.NET, HTML/CSS, React, JavaScript, OOPS, VS Code",
    content: (
      <div className="h-full p-4 w-full  bg-gray-100 flex items-center justify-center text-white" >
        <Image src={sitek} alt="Sitek"/>
       
      </div>
    ),
  },
  {
    title: "Junior Developer",
    title2:"Ascent, US (Sep 2024 - Jan 2025)",
    description1:
      "Optimized a responsive internal dashboard using React.js & Javascript, improving load times and employee engagement by 40% and reducing type-related bugs by 30%.",
    description2:
      "Worked extensively with Git and GitHub for version control, managing code repositories, branching strategies, and collaboration in a team environment.",
    description3:
      "Manage Java and Java EE application development, and develop documentation to help users.",
    techstack: "Java, Git, React, JavaScript, OOPS, VS Code",
    content: (
      <div className="h-full p-4 w-full  bg-gray-100 flex items-center justify-center text-white" >
        <Image src={ascent} alt="Ascent"/>
       
      </div>
    ),
  },
  {
    title: "Frontend Developer/ UI/UX Designer ",
    title2:"Rivach, Hyderabad, India (Jan 2021 - July 2022)",
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
