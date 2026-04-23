"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8"
          >
            {profile.location}
          </motion.p>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-[1.02] mb-5">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-7">
            {profile.title}
          </p>

          <div className="w-12 h-0.5 bg-primary mb-8" />

          <p className="text-base text-muted-foreground max-w-md mb-12 leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#experience"
              className={buttonVariants({ variant: "default" }) + " text-sm font-medium px-5"}
            >
              View work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" }) + " text-sm font-medium px-5 border-border text-muted-foreground hover:text-foreground"}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
