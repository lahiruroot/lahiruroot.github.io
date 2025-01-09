'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedBackgroundIcons from './res/AnimatedBackgroundIcons'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
}

export default function Profile() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            <AnimatedBackgroundIcons />
            <Image
                src="/cover.JPG"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary/30 z-10"></div>
            <motion.div
                className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="md:w-1/2 text-center md:text-left text-white">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        Lahiru Udawaththa
                    </motion.h1>
                    <motion.h2
                        className="text-md font-semibold md:text-2xl text-secondary-foreground mb-2"
                        variants={itemVariants}
                    >
                        Software Engineer
                    </motion.h2>
                    <motion.p
                        className="mb-8 text-lg"
                        variants={itemVariants}
                    >
                        Passionate about creating elegant solutions to complex problems. With over 5 years of experience in full-stack development, I specialize in building scalable and efficient web applications.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold mr-4"
                        >
                            Download Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    variants={itemVariants}
                >
                    <Image
                        src="/profile.png"
                        alt="John Doe"
                        width={400}
                        height={400}
                        className="rounded-full mx-auto border-4 border-gray-300"
                    />

                </motion.div>
            </motion.div>
        </section>
    )
}

