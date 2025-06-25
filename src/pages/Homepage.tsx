import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxHero from '@/components/ParallaxHero';

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <ParallaxHero />
        {/* The ParallaxHero component is designed to be the main content of the homepage. */}
        {/* Additional sections could be added here if needed in the future. For example: */}
        {/* 
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Dishes</h2>
            <p>A glimpse of what awaits you.</p>
            // A grid of DishCards could go here
          </div>
        </section>
        */}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;