"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-6 items-center justify-between w-fit mx-auto bg-accent px-3 border py-1 mt-8 cursor-pointer rounded-md">
      <Sun onClick={() => setTheme("light")} size={14}></Sun>
      <Moon onClick={() => setTheme("dark")} size={14}></Moon>
    </div>
  );
}
