'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, Mail, Sun, Moon, Monitor, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/johndoe',
    color: 'hover:text-[#333]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/johndoe',
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/johndoe',
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/johndoe',
    color: 'hover:text-[#E4405F]'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:john@doe.com',
    color: 'hover:text-primary'
  }
]

const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const buttonVariants = {
  initial: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [year] = useState(new Date().getFullYear())

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <footer className="border-t bg-background">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">John Doe</span>
            </motion.div>
            <p className="text-muted-foreground">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Blog', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 2 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Connect & Customize</h3>
            
            {/* Theme Toggles */}
            <div className="flex space-x-2">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme('light')}
                  className={`${theme === 'light' ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  <Sun className="h-5 w-5" />
                  <span className="sr-only">Light theme</span>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme('dark')}
                  className={`${theme === 'dark' ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  <Moon className="h-5 w-5" />
                  <span className="sr-only">Dark theme</span>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme('system')}
                  className={`${theme === 'system' ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  <Monitor className="h-5 w-5" />
                  <span className="sr-only">System theme</span>
                </Button>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`text-muted-foreground ${social.color} transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {year} LahiruRoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

