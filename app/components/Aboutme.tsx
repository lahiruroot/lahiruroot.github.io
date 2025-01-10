'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const statsVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#B4EDE3]">
              <Image
                src="/Ab1.jpeg"
                alt="Developer portrait 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFD93D] mt-8">
              <Image
                src="/Ab1.jpeg"
                alt="Developer portrait 2"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFD93D]">
              <Image
                src="/Ab1.jpeg"
                alt="Developer portrait 3"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#E6E6FA] mt-8">
              <Image
                src="/Ab1.jpeg"
                alt="Developer portrait 4"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Decorative circles */}
            <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full bg-[#FFD93D] dark:opacity-80" />
            <div className="absolute -right-4 bottom-1/4 w-8 h-8 rounded-full bg-[#B4EDE3] dark:opacity-80" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                ABOUT ME.
                <span className="block w-12 h-1 bg-emerald-500 mt-2"></span>
              </h2>
            </motion.div>

            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              I&apos;m a Freelancer Front-end Developer with over 3 years of experience.
            </motion.h3>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            >
              I&apos;m from San Francisco. I code and create web elements for amazing people around the world. 
              I like work with new people. New people new Experiences.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-8 mb-8"
              variants={containerVariants}
            >
              <motion.div variants={statsVariants}>
                <h4 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">5k</h4>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed.</p>
              </motion.div>
              <motion.div variants={statsVariants}>
                <h4 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">3k</h4>
                <p className="text-gray-600 dark:text-gray-300">Satisfied Clients.</p>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="#contact">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#projects">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-8 py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
                  >
                    Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

