import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedPageTransitionProps {
  children: React.ReactNode;
  locationKey: string; // This unique key, typically location.pathname, tells AnimatePresence when a new page is mounting.
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

/**
 * A high-level wrapper component that manages the mounting and unmounting of pages.
 * It applies fluid, seamless transitions when the user navigates between different pages.
 *
 * This component should be used in a layout component that also has access to react-router's `useLocation` hook.
 *
 * Example Usage (in a layout component):
 * ```
 * const location = useLocation();
 * return (
 *   <AnimatedPageTransition locationKey={location.pathname}>
 *     <Outlet />
 *   </AnimatedPageTransition>
 * );
 * ```
 */
const AnimatedPageTransition: React.FC<AnimatedPageTransitionProps> = ({ children, locationKey }) => {
  console.log('AnimatedPageTransition loaded');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPageTransition;