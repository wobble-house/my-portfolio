'use client';
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <section className="pb-[320px] overscroll-contain" ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }