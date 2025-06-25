import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, Utensils } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' },
  viewport: { once: true, amount: 0.3 }
};

const AboutPage: React.FC = () => {
  console.log('AboutPage loaded');

  return (
    <div className="bg-black text-neutral-200 font-sans">
      <Header />
      <main>
        {/* Page Header Section */}
        <motion.section 
          className="py-20 md:py-28 text-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Culinary Philosophy
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-300">
              At CloudKitchen Luxe, we believe dining is an art form. It's a symphony of passion, precision, and the finest ingredients, crafted to create unforgettable moments.
            </p>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section {...fadeIn} className="py-16 md:py-24 bg-neutral-950">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Utensils className="h-5 w-5" />
                  <h3 className="font-semibold tracking-wide uppercase">The Luxe Story</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crafting the Future of Fine Dining</h2>
                <p className="text-neutral-400 mb-4">
                  Born from a desire to blend culinary excellence with the convenience of modern technology, CloudKitchen Luxe was founded to bring the gourmet restaurant experience directly to you. We've stripped away the physical confines of a traditional restaurant to focus purely on the quality of the food.
                </p>
                <p className="text-neutral-400">
                  Our journey is one of constant innovation, driven by a passion for flavor and a commitment to perfection. Each dish is a testament to our dedication to this new era of dining.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop"
                  alt="A beautifully plated dish"
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Meet the Chefs Section */}
        <motion.section {...fadeIn} className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 text-primary mb-3">
                <ChefHat className="h-5 w-5" />
                <h3 className="font-semibold tracking-wide uppercase">The Artisans</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Master Chefs</h2>
              <p className="mt-4 text-neutral-400">The visionaries behind every dish, dedicated to pushing the boundaries of taste.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Chef Card 1 */}
              <Card className="bg-neutral-900 border-neutral-800 text-white overflow-hidden text-center">
                <CardHeader className="p-0">
                  <img src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop" alt="Chef Elena Moreau" className="w-full h-64 object-cover object-center" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold mb-1">Elena Moreau</CardTitle>
                  <p className="text-sm text-primary font-medium mb-3">Executive Chef</p>
                  <p className="text-neutral-400 text-sm">With 15 years of experience in Michelin-starred kitchens, Chef Elena brings a touch of classic French technique to modern culinary creations.</p>
                </CardContent>
              </Card>
              {/* Chef Card 2 */}
              <Card className="bg-neutral-900 border-neutral-800 text-white overflow-hidden text-center">
                <CardHeader className="p-0">
                  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1920&auto=format&fit=crop" alt="Chef Kenji Tanaka" className="w-full h-64 object-cover object-center" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold mb-1">Kenji Tanaka</CardTitle>
                  <p className="text-sm text-primary font-medium mb-3">Head of Pastry & Fusion</p>
                  <p className="text-neutral-400 text-sm">Chef Kenji is a master of flavor science, blending Asian ingredients with global traditions to create dishes that are both innovative and comforting.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Ingredients Section */}
        <motion.section {...fadeIn} className="py-16 md:py-24 bg-neutral-950">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop"
                  alt="Fresh, high-quality ingredients"
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Leaf className="h-5 w-5" />
                  <h3 className="font-semibold tracking-wide uppercase">Our Promise</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sourced with Integrity</h2>
                <p className="text-neutral-400">
                  The soul of a great dish lies in the quality of its ingredients. We partner with local artisans, farmers, and purveyors who share our commitment to sustainability and excellence. From farm-fresh produce to ethically sourced proteins, every component is chosen with intention and care to ensure unparalleled flavor and freshness.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;