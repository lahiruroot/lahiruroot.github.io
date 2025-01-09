'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    logo: '/algoarts.jpeg',
    position: 'Senior Software Engineer',
    period: 'Jan 2020 - Present',
    description: 'Led development of scalable microservices architecture, improving system performance by 40%.',
  },
  {
    company: 'Digital Solutions LLC',
    logo: '/fiverr.png',
    position: 'Full Stack Developer',
    period: 'Mar 2017 - Dec 2019',
    description: 'Developed and maintained multiple client-facing web applications using React and Node.js.',
  },
]

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Journey</h2>
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 z-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              } items-center w-full`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full z-10 flex items-center justify-center">
                <FaBriefcase className="text-primary-foreground text-sm" />
              </div>

              {/* Content */}
              <motion.div
                className="sm:w-5/12 w-full text-left px-4 sm:px-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>

              {/* Spacer for layout */}
              <div className="hidden sm:block sm:w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
