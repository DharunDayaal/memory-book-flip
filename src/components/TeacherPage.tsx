import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";

interface Teacher {
  name: string;
  photo: string;
  message: string;
}

interface TeacherPageProps {
  teachers: Teacher[];
}

export const TeacherPage = ({ teachers }: TeacherPageProps) => {
  return (
    <div className="p-8 md:p-12 h-full min-h-[600px] flex flex-col relative">
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4">
        <Heart className="w-6 h-6 text-accent/30 fill-accent/20" />
      </div>

      {/* Page header */}
      <div className="mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2" />
        <h2 className="font-script text-3xl text-center text-accent">Teacher's Messages</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-2" />
      </div>

      {/* Messages section */}
      <div className="space-y-6 flex-1">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="relative"
          >
            {/* Message card with handwritten style */}
            <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-lg p-5 border border-border/30 page-shadow hover:shadow-lg transition-shadow">
              {/* Teacher info header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">{teacher.name}</h4>
                  <p className="text-xs text-muted-foreground font-serif">Beloved Teacher</p>
                </div>
              </div>

              {/* Message content */}
              <div className="relative">
                {/* Opening quote mark */}
                <div className="absolute -top-2 -left-2 text-4xl text-accent/20 font-serif">"</div>
                
                <p className="font-handwritten text-base leading-relaxed text-foreground/90 pl-4 pt-2">
                  {teacher.message}
                </p>
                
                {/* Closing quote mark */}
                <div className="text-right text-4xl text-accent/20 font-serif -mt-4">"</div>
              </div>

              {/* Decorative underline */}
              <div className="mt-3 flex items-center justify-end gap-2">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent/30" />
              </div>
            </div>

            {/* Random decorative elements */}
            {index === 0 && (
              <div className="absolute -top-3 -right-3">
                <svg width="25" height="25" viewBox="0 0 25 25" className="text-accent/20 fill-current">
                  <path d="M 12.5 0 L 15 10 L 25 12.5 L 15 15 L 12.5 25 L 10 15 L 0 12.5 L 10 10 Z" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom note section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <div className="inline-block bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
          <p className="font-handwritten text-sm text-accent">
            With love and best wishes for your future ✨
          </p>
        </div>
      </motion.div>

      {/* Decorative bottom corner */}
      <div className="absolute bottom-4 right-4">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent/20 fill-current">
          <path d="M 5 35 Q 20 25 35 35 L 35 40 L 5 40 Z" />
        </svg>
      </div>
    </div>
  );
};
