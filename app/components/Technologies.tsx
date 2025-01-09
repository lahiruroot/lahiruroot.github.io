'use client';

import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiMongodb, SiNextdotjs, SiFlutter, SiGit, SiLinux, SiMeta } from 'react-icons/si';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'AWS', icon: FaAws },
  { name: 'Git', icon: SiGit },
  { name: 'Linux', icon: SiLinux },
  { name: 'Meta', icon: SiMeta },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-primary">Technologies I Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center items-center"
            >
              <Card className="w-40 h-40 shadow-md bg-primary-foreground hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-col items-center pt-6">
                  <tech.icon className="text-6xl mb-4 text-primary" />
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-base font-semibold text-muted-foreground">{tech.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

