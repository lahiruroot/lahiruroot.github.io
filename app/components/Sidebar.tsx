'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'



const menuItems = [
  { icon: FaHome, text: 'Home', href: '#home' },
  { icon: FaUser, text: 'About', href: '#about' },
  { icon: FaBriefcase, text: 'Experience', href: '#experience' },
  { icon: FaCode, text: 'Projects', href: '#projects' },
  { icon: FaEnvelope, text: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    menuItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [])

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 dark:bg-gray-200 rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.aside
            className="fixed top-0 left-0 z-40 w-64 h-screen"
            variants={sidebarVariants}
            initial={isMobile ? 'closed' : 'open'}
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-900 transition-colors duration-200">
              <div className="flex flex-col items-center mb-6">
                <div className="relative p-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="rounded-full bg-white p-1"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Lahiru <span className="text-sfont-quicksand rounded-lg">Root</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-quicksand">Software Engineer</p>
              </div>

              <ul className="space-y-2">
  {menuItems.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        className={`flex items-center p-2 text-base font-quicksand rounded-lg transition-colors duration-200 relative ${
          activeSection === item.href.slice(1)
            ? 'text-purple-600 dark:text-purple-400 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-purple-400 after:via-pink-500 after:to-red-500 after:scale-x-100 after:transition-all after:duration-500'
            : 'text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-purple-400 after:via-pink-500 after:to-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-500'
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleClick(item.href);
        }}
      >
        <item.icon className="w-3 h-3" />
        <span className="ml-3">{item.text}</span>
      </a>
    </li>
  ))}
</ul>



              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                      >
                        <link.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

