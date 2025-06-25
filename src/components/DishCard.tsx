import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DishCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart?: (id: string | number) => void;
}

const DishCard: React.FC<DishCardProps> = ({ id, name, price, imageUrl, onAddToCart }) => {
  console.log('DishCard loaded for:', name);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent any parent link navigation if this card is wrapped in <a>
    toast.success(`${name} added to your order!`);
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="w-full"
    >
      <Card className="w-full overflow-hidden group relative border-2 border-transparent hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-black/20 backdrop-blur-sm">
        <div className="overflow-hidden">
          <img
            src={imageUrl || 'https://via.placeholder.com/400x400'}
            alt={name}
            className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute top-4 right-4">
          <Button
            size="icon"
            className="rounded-full w-12 h-12 bg-primary/80 backdrop-blur-sm text-primary-foreground opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-in-out hover:bg-primary active:scale-90"
            onClick={handleAddToCartClick}
            aria-label={`Add ${name} to cart`}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
            <p className="text-lg font-semibold text-primary">${price.toFixed(2)}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default DishCard;