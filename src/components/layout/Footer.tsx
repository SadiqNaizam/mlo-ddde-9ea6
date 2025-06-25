import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400">
      <div className="container py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-white">CloudKitchen Luxe</span>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-sm">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="mailto:contact@cloudkitchen.luxe" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-800 pt-6 text-center text-xs">
          <p>&copy; {currentYear} CloudKitchen Luxe. All Rights Reserved.</p>
          <p className="mt-1">A premium digital dining experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;