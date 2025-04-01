
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Vision', path: '/vision' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Approach', path: '/approach' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-adastra-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="AdAstra Logo" className="h-12 w-12 pr-0"/>
            <span className="text-adastra-red font-display text-2xl font-bold pl-0">
              AdAstra
            </span>
            <span className="text-adastra-light font-display text-2xl font-bold">
              Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-adastra-light hover:text-adastra-red transition-colors duration-300 relative animated-line"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-adastra-red text-white px-4 py-2 rounded hover:bg-adastra-red/40 transition-colors duration-300 hover:scale-105"
            >
              Launch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-adastra-light focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <span className={cn(
                "w-6 h-0.5 bg-adastra-light transition-transform duration-300",
                isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
              )}></span>
              <span className={cn(
                "w-6 h-0.5 bg-adastra-light transition-opacity duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "w-6 h-0.5 bg-adastra-light transition-transform duration-300",
                isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              )}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-adastra-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-adastra-light hover:text-adastra-red py-2 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="bg-adastra-red text-white px-4 py-2 rounded text-center hover:bg-adastra-red/80 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Launch
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
