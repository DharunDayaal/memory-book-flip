import { motion } from "framer-motion";
import { Mail, Hash, Star, Sparkles } from "lucide-react";

interface Student {
  name: string;
  nickname: string;
  rollNo: string;
  email: string;
  department: string;
  photo: string;
  description: string;
}

interface StudentPageProps {
  student: Student;
}

export const StudentPage = ({ student }: StudentPageProps) => {
  return (
    <div className="p-8 md:p-12 h-full min-h-[600px] flex flex-col relative">
      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4">
        <Star className="w-6 h-6 text-accent/30 fill-accent/20" />
      </div>
      <div className="absolute top-8 right-12">
        <Sparkles className="w-4 h-4 text-accent/20" />
      </div>

      {/* Page header with decorative line */}
      <div className="mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2" />
        <h2 className="font-script text-3xl text-center text-accent">Student Profile</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-2" />
      </div>

      {/* Photo section with polaroid effect */}
      <motion.div
        initial={{ rotate: -2, y: 20 }}
        animate={{ rotate: 0, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-6 mx-auto"
      >
        <div className="bg-white p-3 pb-8 rotate-[-2deg] photo-shadow">
          <img
            src={student.photo}
            alt={student.name}
            className="w-48 h-48 md:w-56 md:h-56 object-cover"
          />
          {/* Tape effect */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-book-tape/60 rotate-[-3deg] backdrop-blur-sm" />
        </div>
        {/* Small decorative leaf */}
        <div className="absolute -bottom-4 -right-4">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent/30 fill-current">
            <path d="M 10 30 Q 15 20 20 15 Q 25 20 30 30 Q 20 35 10 30 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Name and details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <h3 className="font-script text-4xl mb-2 text-foreground">{student.name}</h3>
        {student.nickname && (
          <p className="font-handwritten text-lg text-muted-foreground italic">
            "{student.nickname}"
          </p>
        )}
      </motion.div>

      {/* Info cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-3 mb-6"
      >
        <div className="flex items-center gap-3 text-sm">
          <Hash className="w-4 h-4 text-accent" />
          <span className="font-serif">
            <span className="text-muted-foreground">Roll No:</span>{" "}
            <span className="font-semibold">{student.rollNo}</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 text-accent" />
          <span className="font-serif text-muted-foreground break-all">{student.email}</span>
        </div>
        <div className="text-sm">
          <p className="font-serif text-muted-foreground">{student.department}</p>
        </div>
      </motion.div>

      {/* Description box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-auto"
      >
        <div className="border-l-4 border-accent/50 pl-4 py-2 bg-secondary/30 rounded-r">
          <p className="font-handwritten text-base leading-relaxed text-foreground/90">
            {student.description}
          </p>
        </div>
      </motion.div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-4 left-4">
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-accent/20 fill-current">
          <circle cx="15" cy="15" r="3" />
          <circle cx="7" cy="15" r="2" />
          <circle cx="23" cy="15" r="2" />
        </svg>
      </div>
    </div>
  );
};
