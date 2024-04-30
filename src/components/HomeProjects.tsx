"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Foodify",
    link: "https://gomoonbeam.com",
    thumbnail: "/courses/foodify.png",
  },
  {
    title: "Rivach",
    link: "https://cursor.so",
    thumbnail: "/courses/rivach2.png",
  },
  {
    title: "UbixLogix",
    link: "https://userogue.com",
    thumbnail: "/courses/ubiq.png",
  },

  {
    title: "Magnus",
    link: "https://editorially.org",
    thumbnail: "/courses/magnus.png",
  },
  {
    title: "Dashboard",
    link: "https://editrix.ai",
    thumbnail: "/courses/dashboard.png",
  },
  {
    title: "UbiqLogix2",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/courses/ubiq2.png",
  },
  {
    title: "Dashboard",
    link: "https://editrix.ai",
    thumbnail: "/courses/dashboard.png",
  },
  {
    title: "Foodify",
    link: "https://gomoonbeam.com",
    thumbnail: "/courses/foodify.png",
  },
  {
    title: "UbiqLogix2",
    link: "https://editrix.ai",
    thumbnail: "/courses/ubiq2.png",
  },
  


];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
