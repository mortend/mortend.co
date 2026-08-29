'use client'

import type { ReactNode } from 'react'
import { MotionConfig, motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.main
        className="pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.main>
    </MotionConfig>
  )
}

export function PageTransitionItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
