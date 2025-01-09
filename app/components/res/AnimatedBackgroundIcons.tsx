'use client'

import { motion } from 'framer-motion'
import { FaAws, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiFirebase, SiFlutter, SiMeta } from 'react-icons/si'

const icons = [
  FaAws, FaReact, SiMongodb, SiNextdotjs, SiFirebase, SiFlutter, FaHtml5, FaCss3Alt, FaJs, SiMeta
]

const iconVariants = {
  initial: { opacity: 0, scale: 0 },
 animate: { opacity: 0.2, scale: 1 },
 hover: { opacity: 0.8, scale: 1.2, transition: { duration: 0.3 } }
}

export default function AnimatedBackgroundIcons() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconVariants}
          transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute text-primary/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  )
}

