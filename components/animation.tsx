'use client';

import { AnimatePresence } from 'framer-motion'

export function Animation({children}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}