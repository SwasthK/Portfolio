"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
const tags = ["Website", "App", "Design", "Backend"];

export function ProfileTag({}) {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % tags.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-28 animated-text-100 light:tx1 dark:text-[#9CA3AF]">
      <p>
        I Make{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={tags[tagIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-semibold text-custom-tertiary dark:text-[#fff]"
          >
            {tags[tagIndex]}
          </motion.span>
        </AnimatePresence>
        <span className="dark:text-[#fff]">s</span>
      </p>
    </div>
  );
}
