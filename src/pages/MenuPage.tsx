import React from 'react';
import { motion } from 'framer-motion';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import DishCard from '@/components/DishCard';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Placeholder data for the menu
const menuData = {
  appetizers: [
    { id: 'app1', name: 'Artisanal Bruschetta', price: 14.50, imageUrl: 'https://images.unsplash.com/photo-1505253716362-afb74bf60d44?q=80&w=1920&auto=format&fit=crop' },
    { id: 'app2', name: 'Scallop & Citrus Ceviche', price: 18.00, imageUrl: 'https://images.unsplash.com/photo-1625944228741-cf3b9b485973?q=80&w=1920&auto=format&fit=crop' },
    { id: 'app3', name: 'Truffle & Parmesan Arancini', price: 16.00, imageUrl: 'https://images.unsplash.com/photo-1615394239855-de42a3e9c5f5?q=80&w=1920&auto=format&fit=crop' },
  ],
  main_courses: [
    { id: 'main1', name: 'Grilled Atlantic Salmon', price: 32.00, imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1920&auto=format&fit=crop' },
    { id: 'main2', name: 'Prime Ribeye Steak', price: 45.00, imageUrl: 'https://images.unsplash.com/photo-1598515213692-5f282438d10c?q=80&w=1920&auto=format&fit=crop' },
    { id: 'main3', name: 'Wild Mushroom Risotto', price: 28.00, imageUrl: 'https://images.unsplash.com/photo-1598866594240-a3b5a4562066?q=80&w=1920&auto=format&fit=crop' },
    { id: 'main4', name: 'Duck Confit with Cherry Sauce', price: 38.50, imageUrl: 'https://images.unsplash.com/photo-1630911073816-86364e6a031d?q=80&w=1920&auto=format&fit=crop' },
  ],
  desserts: [
    { id: 'des1', name: 'Molten Chocolate Lava Cake', price: 15.00, imageUrl: 'https://images.unsplash.com/photo-1586985289942-f633b3a39b1e?q=80&w=1920&auto=format&fit=crop' },
    { id: 'des2', name: 'Basque Burnt Cheesecake', price: 14.00, imageUrl: 'https://images.unsplash.com/photo-1604321943834-3d027e85a4f3?q=80&w=1920&auto=format&fit=crop' },
    { id: 'des3', name: 'Deconstructed Tiramisu', price: 16.50, imageUrl: 'https://images.unsplash.com/photo-1571115332238-9a30d2095209?q=80&w=1920&auto=format&fit=crop' },
  ]
};

// Animation variants for the grid container and items
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const MenuPage = () => {
  console.log('MenuPage loaded');

  const handleAddToCart = (id: string | number) => {
    // In a real app, this would dispatch an action to a state manager like Redux or Zustand
    console.log(`Added item ${id} to cart`);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-12 md:py-20 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Discover a symphony of flavors, crafted with passion and the finest ingredients.
            </p>
          </motion.div>

          <Tabs defaultValue="main_courses" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-neutral-900 border border-neutral-800">
                <TabsTrigger value="main_courses">Main Courses</TabsTrigger>
                <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="main_courses">
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuData.main_courses.map((dish) => (
                  <motion.div key={dish.id} variants={gridItemVariants}>
                    <DishCard {...dish} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="appetizers">
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuData.appetizers.map((dish) => (
                  <motion.div key={dish.id} variants={gridItemVariants}>
                    <DishCard {...dish} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="desserts">
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuData.desserts.map((dish) => (
                  <motion.div key={dish.id} variants={gridItemVariants}>
                    <DishCard {...dish} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;