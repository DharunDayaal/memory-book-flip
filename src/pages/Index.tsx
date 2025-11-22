import { useState } from "react";
import { BookCover } from "@/components/BookCover";
import { FlipBook } from "@/components/FlipBook";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Google Fonts - Dancing Script and Kalam for handwritten effects */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="min-h-screen">
        {!isOpen ? (
          <BookCover onOpen={() => setIsOpen(true)} />
        ) : (
          <FlipBook onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Index;
