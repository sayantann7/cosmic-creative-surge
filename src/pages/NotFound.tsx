
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/animations/PageTransition';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-adastra-black relative">
        <StarField starCount={300} />
        <div className="grainy"></div>
        <Navbar />

        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-adastra-red font-display text-9xl font-bold mb-4">404</h1>
            <h2 className="text-adastra-light font-display text-3xl mb-6">Lost in Space</h2>
            <p className="text-gray-400 mb-8">
              The page you're looking for has drifted beyond our cosmic reach. Let's navigate back to a known destination.
            </p>
            <Link to="/">
              <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                Return to Mission Control
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
