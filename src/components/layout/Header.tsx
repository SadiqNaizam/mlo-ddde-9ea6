import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, UtensilsCrossed } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const cartItemCount = 3; // Placeholder for cart item count

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors hover:text-white ${
      isActive ? 'text-white' : 'text-neutral-400'
    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } hover:after:scale-x-100 after:origin-center`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-neutral-200 transition-colors">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-wider">CloudKitchen Luxe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/menu" className={navLinkClasses}>
            Menu
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </nav>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="relative text-neutral-300 hover:text-white hover:bg-neutral-800">
            <Link to="/checkout">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;