'use client'

import { motion } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
  const words: string[] = text.split(' ')

  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }
  const child = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className='text-6xl flex items-center justify-between overflow-hidden'
    >
      {words.map((word, i) => (
        <motion.span variants={child} className='mr-2' key={i}>
          {word}
        </motion.span>
      ))}
    </motion.main>
  )
}
