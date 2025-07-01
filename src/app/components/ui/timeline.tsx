"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left mb-8 lg:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl -mt-12 sm:-mt-16 lg:-mt-24 font-sans font-light max-w-4xl">
            Experience
          </h2>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 lg:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 sm:pt-10 lg:pt-20 xl:pt-40 gap-4 sm:gap-6 lg:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-20 sm:top-30 lg:top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-8 sm:h-10 absolute left-2 sm:left-3 lg:left-3 w-8 sm:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1 sm:p-2" />
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-3xl xl:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-16 lg:pl-4 pr-4 w-full">
              <h3 className="lg:hidden block text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-8 lg:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};