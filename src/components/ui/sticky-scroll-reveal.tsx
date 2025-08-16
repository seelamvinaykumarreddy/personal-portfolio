"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    title2:string;
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
    description5?: string;
    techstack: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Simple and reliable scroll detection
    if (cardLength === 0) return;
    
    // Calculate which card should be active based on scroll position
    let newActiveCard = 0;
    
    if (latest <= 0.33) {
      newActiveCard = 0; // First card
    } else if (latest <= 0.66) {
      newActiveCard = 1; // Second card
    } else {
      newActiveCard = 2; // Third card (Rivach)
    }
    
    // Ensure we don't go beyond the last card
    newActiveCard = Math.min(newActiveCard, cardLength - 1);
    
    // Debug logging
    console.log(`Scroll: ${latest.toFixed(2)}, Active Card: ${newActiveCard}, Title: ${content[newActiveCard]?.title}`);
    
    // Only update if the card actually changed
    if (newActiveCard !== activeCard) {
      setActiveCard(newActiveCard);
    }
  });

  const backgroundColors = [
    // "var(--slate-900)",
    "var(--black)",
    // "var(--neutral-900)",
    "var(--black)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    "linear-gradient(to bottom right, var(--purple-500), var(--teal-500))",
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] overflow-y-auto flex justify-center  relative space-x-20 rounded-md p-14"
      ref={ref}
    >
      <div className="div relative flex  items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-30 mb-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >

                ⚡ {item.title}
                
              </motion.h2>
              {item.title2}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-4xl mt-4"
              >
                - {item.description1}
                <br />- {item.description2}
                <br />- {item.description3}
                {item.description4 && <><br />- {item.description4}</>}
                {item.description5 && <><br />- {item.description5}</>}
                <br />- Techstack: {item.techstack}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-black sticky top-2  overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
