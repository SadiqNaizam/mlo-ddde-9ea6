import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ParallaxHero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    console.log('ParallaxHero loaded');
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop')`, // A high-quality food image
          y: offsetY * 0.5, // This creates the parallax effect
          backgroundPositionY: 'center', // Keep the image centered as it moves
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 p-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-shadow-md"
          style={{ fontFamily: "'Cormorant Garamond', serif" }} // Example of a premium font
        >
          CloudKitchen Luxe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200 text-shadow"
        >
          An unparalleled dining experience, delivered to your door.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Link to="/menu">
              View The Menu
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxHero;