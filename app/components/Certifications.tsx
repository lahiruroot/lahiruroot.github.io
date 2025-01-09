'use client'

import { motion } from 'framer-motion'

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'May 2022',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'November 2021',
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'August 2021',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-primary mb-2">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

