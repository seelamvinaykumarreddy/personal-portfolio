"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Foodify",
    link: "https://forkifycooks.netlify.app",
    thumbnail: "/courses/foodify.png",
  },
  {
    title: "Rivach",
    link: "https://rivach.com/",
    thumbnail: "/courses/rivach2.png",
  },
  {
    title: "UbixLogix",
    link: "https://ubiqlogix.com/",
    thumbnail: "/courses/ubiq.png",
  },

  {
    title: "Magnus",
    link: "https://magnusdesigners.com/",
    thumbnail: "/courses/magnus.png",
  },
  {
    title: "Dashboard",
    link: "https://shoppy-dashboard-sync.netlify.app",
    thumbnail: "/courses/dashboard.png",
  },
  {
    title: "UbiqLogix2",
    link: "https://ubiqlogix.com/",
    thumbnail: "/courses/ubiq2.png",
  },
  {
    title: "Dashboard",
    link: "https://shoppy-dashboard-sync.netlify.app",
    thumbnail: "/courses/dashboard.png",
  },
  {
    title: "Foodify",
    link: "https://forkifycooks.netlify.app",
    thumbnail: "/courses/foodify.png",
  },
  {
    title: "UbiqLogix2",
    link: "https://ubiqlogix.com/",
    thumbnail: "/courses/ubiq2.png",
  },
  


];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
