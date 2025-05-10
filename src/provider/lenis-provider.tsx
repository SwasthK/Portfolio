"use client";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useRef(null);
  return (
    <ReactLenis ref={lenis} root>
      {children}
    </ReactLenis>
  );
}
