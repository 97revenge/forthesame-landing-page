import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const RotateText = () => {
  const words = ["Corredores", "Atletas", "Jogadores"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Determine color based on the current word
  const getColor = (word: unknown) => {
    if (word === "Corredores")
      return "text-4xl animate-gradient bg-gradient-to-r from-green-600 via-lime-200 to-green-300 bg-clip-text text-transparent";
    if (word === "Atletas")
      return " text-4xl  animate-gradient bg-gradient-to-r from-blue-600 via-sky-200 to-blue-300 bg-clip-text text-transparent";
    if (word === "Jogadores")
      return " text-4xl  animate-gradient bg-gradient-to-r from-red-600 via-yellow-200 to-red-300 bg-clip-text text-transparent";
    return "text-black"; // default color
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`text-start font-display text-7xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem] ${getColor(
            words[index]
          )}`}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </>
  );
};
