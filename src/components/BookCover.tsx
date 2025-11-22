import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover = ({ onOpen }: BookCoverProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen p-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-2xl aspect-[3/4] bg-gradient-to-br from-book-cover to-book-spine rounded-lg book-shadow overflow-hidden cursor-pointer"
        onClick={onOpen}
      >
        {/* Ornate border */}
        <div className="absolute inset-4 border-2 border-book-gold rounded-sm">
          {/* Corner ornaments */}
          <div className="absolute -top-1 -left-1 w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-book-gold opacity-80">
              <path d="M 0 0 Q 30 0 50 20 Q 30 40 0 50 Q 0 30 20 10 Q 0 0 0 0 Z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-12 h-12 rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-book-gold opacity-80">
              <path d="M 0 0 Q 30 0 50 20 Q 30 40 0 50 Q 0 30 20 10 Q 0 0 0 0 Z" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-1 w-12 h-12 -rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-book-gold opacity-80">
              <path d="M 0 0 Q 30 0 50 20 Q 30 40 0 50 Q 0 30 20 10 Q 0 0 0 0 Z" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-book-gold opacity-80">
              <path d="M 0 0 Q 30 0 50 20 Q 30 40 0 50 Q 0 30 20 10 Q 0 0 0 0 Z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-script text-6xl md:text-8xl text-book-gold mb-4 drop-shadow-lg"
          >
            GradStream
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-script text-5xl md:text-7xl text-book-gold mb-12 drop-shadow-lg"
          >
            Chronicles
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="font-serif text-2xl md:text-3xl text-primary-foreground italic">
              Echoes of CSE —
            </p>
            <p className="font-serif text-2xl md:text-3xl text-primary-foreground italic">
              Class of 2026
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <svg width="60" height="40" viewBox="0 0 60 40" className="fill-book-gold opacity-60">
              <path d="M 10 20 Q 30 0 50 20" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="30" cy="15" r="3" />
            </svg>
          </motion.div>
        </div>

        {/* Click indicator */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-8 flex items-center gap-2 text-book-gold"
        >
          <span className="font-serif text-sm tracking-wide">Open Book</span>
          <ChevronRight className="w-5 h-5" />
        </motion.div>

        {/* Leather texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-br from-transparent via-primary/10 to-primary/30" />
      </motion.div>
    </motion.div>
  );
};
