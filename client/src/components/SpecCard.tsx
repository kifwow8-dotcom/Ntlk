import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  delay?: number;
  colorClass?: string;
}

export function SpecCard({ icon: Icon, title, value, delay = 0, colorClass = "text-primary" }: SpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, translateY: -5 }}
      className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className={`p-4 rounded-full bg-secondary/80 mb-4 group-hover:scale-110 transition-transform duration-300 ${colorClass}`}>
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-xl text-muted-foreground font-bold mb-2 font-sans">{title}</h3>
      <p className="text-2xl font-display leading-tight">{value}</p>
    </motion.div>
  );
}
