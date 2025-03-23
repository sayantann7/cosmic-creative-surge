
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const RevealText = ({ children, delay = 0, duration = 0.5 }: RevealTextProps) => {
  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
