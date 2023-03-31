'use client';
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Section({ children }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false });
  
    return (
      <motion.section layout className="py-[320px] overscroll-auto sticky-top-0" ref={sectionRef}>
        <motion.div
        layout
        initial={false}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
    );
  }