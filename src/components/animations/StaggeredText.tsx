
import { motion } from 'framer-motion';

interface StaggeredTextProps {
  text: string;
  delay?: number;
  className?: string;
  charDelay?: number;
}

const StaggeredText = ({ text, delay = 0, className = "", charDelay = 0.03 }: StaggeredTextProps) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * charDelay),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default StaggeredText;
