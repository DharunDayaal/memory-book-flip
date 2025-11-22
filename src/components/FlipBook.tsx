import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StudentPage } from "./StudentPage";
import { TeacherPage } from "./TeacherPage";
import { Button } from "@/components/ui/button";

// Sample data - in a real app, this would come from a database
const students = [
  {
    id: 1,
    name: "Arun Kumar",
    nickname: "AK",
    rollNo: "20C3123",
    email: "arun.kumar@email.com",
    department: "Computer Science & Engineering",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Always ready with a solution and a smile. Your enthusiasm for coding inspired us all!",
    teachers: [
      {
        name: "Dr. Sarah Johnson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        message: "Arun, your dedication to learning and helping others has been remarkable. Keep that curiosity alive!"
      },
      {
        name: "Prof. Michael Chen",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        message: "Your project presentations were always outstanding. Wishing you great success ahead!"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Sharma",
    nickname: "Priya",
    rollNo: "20C3145",
    email: "priya.sharma@email.com",
    department: "Computer Science & Engineering",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "A brilliant mind with a creative spirit. Your innovative projects amazed everyone!",
    teachers: [
      {
        name: "Dr. Sarah Johnson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        message: "Priya, your analytical thinking and problem-solving skills are exceptional. Keep shining!"
      },
      {
        name: "Prof. Emily White",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        message: "It's been a pleasure teaching someone so passionate about technology. Best wishes!"
      }
    ]
  },
  {
    id: 3,
    name: "Rahul Verma",
    nickname: "Rahul",
    rollNo: "20C3167",
    email: "rahul.verma@email.com",
    department: "Computer Science & Engineering",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "The team player everyone wanted to work with. Your leadership skills are inspiring!",
    teachers: [
      {
        name: "Prof. Michael Chen",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        message: "Rahul, your ability to bring teams together is remarkable. You'll go far in your career!"
      },
      {
        name: "Dr. Sarah Johnson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        message: "Your dedication and hard work have always stood out. Congratulations on graduating!"
      }
    ]
  }
];

interface FlipBookProps {
  onClose: () => void;
}

export const FlipBook = ({ onClose }: FlipBookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPage = () => {
    if (currentPage < students.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background via-secondary to-background">
      <div className="relative w-full max-w-7xl">
        {/* Book container */}
        <div className="relative perspective-2000">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 book-shadow rounded-lg overflow-hidden">
            {/* Left page - Student profile */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`student-${currentPage}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.4 },
                }}
                className="bg-book-page paper-texture relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <StudentPage student={students[currentPage]} />
              </motion.div>
            </AnimatePresence>

            {/* Right page - Teacher comments */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`teacher-${currentPage}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.4 },
                }}
                className="bg-book-page paper-texture relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <TeacherPage teachers={students[currentPage].teachers} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <div className="text-center">
            <p className="font-serif text-sm text-muted-foreground">
              Page {currentPage + 1} of {students.length}
            </p>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === students.length - 1}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Close button */}
        <div className="text-center mt-4">
          <Button onClick={onClose} variant="outline">
            Close Book
          </Button>
        </div>
      </div>
    </div>
  );
};
