'use client';

import { AnimatePresence } from 'framer-motion'

export function Animation({children, mode, initial}) {
  return (
    <AnimatePresence mode={mode} initial={initial}>
      {children}
    </AnimatePresence>
  );
}
