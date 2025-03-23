
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import StaggeredText from '@/components/animations/StaggeredText';
import OrbitingSphere from '@/components/3d/OrbitingSphere';
import { Button } from '@/components/ui/button';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-adastra-black relative">
        <StarField starCount={500} />
        <div className="grainy"></div>
        <Navbar />

        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-[100vh] flex items-center">
          <div className="absolute inset-0 z-0" ref={heroRef}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-adastra-black z-10"></div>
            <img 
              src="public/lovable-uploads/e194d5cc-139a-4580-b326-505965e9383e.png" 
              alt="Space Background" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2
                }}
              >
                <h1 className="text-adastra-red font-display text-6xl md:text-8xl font-bold mb-4">
                  AdAstra <span className="text-adastra-light">Media</span>
                </h1>
              </motion.div>
              
              <RevealText delay={0.4}>
                <div className="flex justify-center items-center space-x-4 mb-8">
                  <span className="text-adastra-light text-xl md:text-2xl">ELEVATING BRANDS</span>
                  <img 
                    src="public/lovable-uploads/ab7fc5ac-cb32-4daa-9a3f-11e23b8aad75.png" 
                    alt="Star icon" 
                    className="w-6 h-6 animate-pulse"
                  />
                  <span className="text-adastra-light text-xl md:text-2xl">TO THE STARS</span>
                </div>
              </RevealText>
              
              <RevealText delay={0.6}>
                <p className="text-gray-400 text-lg md:text-xl mb-10">
                  We are not just another digital partner—we are your ticket to an extraordinary future.
                </p>
              </RevealText>

              <RevealText delay={0.8}>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/vision">
                    <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
                      Explore Our Vision
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-adastra-red text-adastra-red hover:bg-adastra-red/10 px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
                      Contact Mission Control
                    </Button>
                  </Link>
                </div>
              </RevealText>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-adastra-light animate-bounce"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Services Overview */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">GALACTIC SERVICES</h2>
                <p className="text-gray-400 text-lg">
                  Our comprehensive suite of digital services designed to propel your brand beyond the digital atmosphere.
                </p>
              </div>
            </FadeInUpSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <FadeInUpSection delay={0.1}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <path d="M2 3h20" />
                      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                      <path d="m7 21 5-5 5 5" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Strategic Consulting</h3>
                  <p className="text-gray-400 mb-4">
                    We provide strategic consulting that acts as your navigation chart, guiding your brand through the digital cosmos.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>

              {/* Service 2 */}
              <FadeInUpSection delay={0.2}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Creative Design</h3>
                  <p className="text-gray-400 mb-4">
                    We craft bold, eye-catching visuals and unforgettable brand identities that set you apart in a crowded digital landscape.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>

              {/* Service 3 */}
              <FadeInUpSection delay={0.3}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Web Development</h3>
                  <p className="text-gray-400 mb-4">
                    We design, build, and maintain high-performing websites—handling everything from development and hosting to ongoing support.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>

              {/* Service 4 */}
              <FadeInUpSection delay={0.4}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Social Media Marketing</h3>
                  <p className="text-gray-400 mb-4">
                    Our expertise in social and paid media marketing ensures your message reaches audiences across the vast digital expanse.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>

              {/* Service 5 */}
              <FadeInUpSection delay={0.5}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">SEO & Analytics</h3>
                  <p className="text-gray-400 mb-4">
                    Our data-driven SEO strategies boost your visibility in search results, while detailed analytics provide insights for continuous improvement.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>

              {/* Service 6 */}
              <FadeInUpSection delay={0.6}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-adastra-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-adastra-red"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 4v4" />
                      <path d="M12 16v4" />
                      <path d="m4 12 4 0" />
                      <path d="m16 12 4 0" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Campaign Management</h3>
                  <p className="text-gray-400 mb-4">
                    Our strategic campaigns fuse creativity with data-driven insights to engage your audience, build trust, and accelerate your business growth.
                  </p>
                  <Link to="/services" className="text-adastra-red hover:text-adastra-red/80 inline-flex items-center space-x-1 animated-line">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -left-10 -top-10 w-32 h-32 bg-adastra-red/10 rounded-full blur-3xl"></div>
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-adastra-red/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-full h-[400px]">
                    <OrbitingSphere />
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection className="order-1 lg:order-2">
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">OUR STELLAR VISION</div>
                  <h2 className="section-title mb-6">TO INFINITY <br />AND BEYOND</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      At AdAstra Media, we believe that every brand has the potential to shine. Our mission is to empower businesses to break free of gravity—transcending ordinary limits and reaching new digital heights.
                    </p>
                    <p>
                      We are not just another digital partner—we are your ticket to an extraordinary future. By combining cutting-edge technology with creative strategy, we launch brands into a new orbit of success.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link to="/vision">
                      <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                        Discover Our Vision
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">UNIVERSE OF CHALLENGES</h2>
                <p className="text-gray-400 text-lg">
                  In today's vast digital galaxy, many brands face cosmic challenges that hinder their growth and visibility.
                </p>
              </div>
            </FadeInUpSection>

            <div className="max-w-4xl mx-auto">
              <FadeInUpSection delay={0.1}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4 bg-adastra-black border border-adastra-red/20 p-4 rounded-lg">
                    <span className="text-adastra-red font-display font-bold text-3xl">01</span>
                    <div className="bg-adastra-red px-4 py-2">
                      <h3 className="text-adastra-black font-display font-bold">LOST IN THE NOISE OF CROWDED CHANNELS</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-adastra-black border border-adastra-red/20 p-4 rounded-lg">
                    <span className="text-adastra-red font-display font-bold text-3xl">02</span>
                    <div className="bg-adastra-red px-4 py-2">
                      <h3 className="text-adastra-black font-display font-bold">LOW ENGAGEMENT AND LIMITED REACH</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-adastra-black border border-adastra-red/20 p-4 rounded-lg">
                    <span className="text-adastra-red font-display font-bold text-3xl">03</span>
                    <div className="bg-adastra-red px-4 py-2">
                      <h3 className="text-adastra-black font-display font-bold">BUDGET BLACK HOLES THAT DRAIN POTENTIAL</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-adastra-black border border-adastra-red/20 p-4 rounded-lg">
                    <span className="text-adastra-red font-display font-bold text-3xl">04</span>
                    <div className="bg-adastra-red px-4 py-2">
                      <h3 className="text-adastra-black font-display font-bold">INCONSISTENT BRAND MESSAGING</h3>
                    </div>
                  </div>
                </div>
              </FadeInUpSection>

              <FadeInUpSection delay={0.3} className="mt-10">
                <div className="text-center">
                  <Link to="/challenges">
                    <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                      Explore Challenges
                    </Button>
                  </Link>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">OUR INTERSTELLAR APPROACH</div>
                  <h2 className="section-title mb-6">FUELING YOUR BRAND'S ROCKET</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We craft bold, eye-catching visuals and unforgettable brand identities that set you apart in a crowded digital landscape.
                    </p>
                    <p>
                      We design, build, and maintain high-performing websites—handling everything from development and hosting to ongoing support—ensuring your online presence is seamless and robust.
                    </p>
                    <p>
                      Our strategic campaigns fuse creativity with data-driven insights to engage your audience, build trust, and accelerate your business growth.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link to="/approach">
                      <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                        Learn Our Approach
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/e988da9b-014d-4f29-81a3-66178402e879.png" 
                    alt="Cosmic Approach" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/20 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black/90 to-adastra-black">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title mb-6">READY TO BLAST OFF?</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Contact us for a free consultation and start your mission to success!
                </p>
                <Link to="/contact">
                  <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
                    Contact Mission Control
                  </Button>
                </Link>
              </div>
            </FadeInUpSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
