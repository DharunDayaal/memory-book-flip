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

  // Realistic page flip animation - pages flip from right to left
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      rotateY: direction > 0 ? -180 : 180,
      transformOrigin: direction > 0 ? "left" : "right",
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      transformOrigin: "center",
      opacity: 1,
      zIndex: 10,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      rotateY: direction > 0 ? 180 : -180,
      transformOrigin: direction > 0 ? "right" : "left",
      opacity: 0.5,
      zIndex: 5,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background via-secondary to-background">
      <div className="relative w-full max-w-7xl">
        {/* Book container with 3D perspective */}
        <div className="relative" style={{ perspective: "2500px" }}>
          <div className="grid md:grid-cols-2 gap-0 md:gap-1 book-shadow rounded-lg overflow-visible relative">
            {/* Left page - Student profile */}
            <div className="relative bg-book-page" style={{ transformStyle: "preserve-3d" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`student-${currentPage}`}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="bg-book-page paper-texture absolute inset-0 overflow-hidden rounded-l-lg"
                  style={{ 
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <StudentPage student={students[currentPage]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right page - Teacher comments */}
            <div className="relative bg-book-page" style={{ transformStyle: "preserve-3d" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`teacher-${currentPage}`}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="bg-book-page paper-texture absolute inset-0 overflow-hidden rounded-r-lg"
                  style={{ 
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <TeacherPage teachers={students[currentPage].teachers} />
                </motion.div>
              </AnimatePresence>
            </div>
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
