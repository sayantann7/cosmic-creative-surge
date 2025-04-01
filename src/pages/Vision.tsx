
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import StaggeredText from '@/components/animations/StaggeredText';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-adastra-black relative">
        <StarField starCount={300} />
        <div className="grainy"></div>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <RevealText>
                <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">01</div>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="section-title">STELLAR VISION</h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-gray-300 text-xl mb-10">
                  At AdAstra Media, we believe that every brand has the potential to shine. Our mission is to empower businesses to break free of gravity—transcending ordinary limits and reaching new digital heights.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <img 
                  src="/lovable-uploads/4648ee99-9729-4c2c-bf81-0dd0522f1fbc.png" 
                  alt="Space Nebula" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-red mb-6">
                    TO INFINITY AND BEYOND (WELL, ALMOST!)
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our vision extends beyond conventional digital marketing. We see a universe where brands don't just exist online—they thrive, captivate, and inspire.
                    </p>
                    <div className="bg-adastra-red/10 border border-adastra-red/20 p-4 rounded-lg">
                      <p className="text-adastra-light font-display font-medium text-lg">
                        "We are not just another digital partner—we are your ticket to an extraordinary future."
                      </p>
                    </div>
                    <p>
                      By combining cutting-edge technology with creative strategy, we launch brands into a new orbit of success. Our approach is characterized by bold innovation, meticulous attention to detail, and a relentless commitment to excellence.
                    </p>
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">OUR COSMIC VALUES</h2>
                <p className="text-gray-400 text-lg">
                  These core principles guide our journey through the digital cosmos.
                </p>
              </div>
            </FadeInUpSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
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
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-400">
                    We reach for the stars in everything we do, setting high standards and exceeding expectations. We're not satisfied with "good enough"—we aim for exceptional.
                  </p>
                </div>
              </FadeInUpSection>

              {/* Value 2 */}
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
                      <path d="M12 22v-5" />
                      <path d="M9 7V2" />
                      <path d="M15 7V2" />
                      <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-2a3 3 0 1 1 6 0v7" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400">
                    We push boundaries and explore uncharted digital territories. We embrace new technologies and creative approaches to solve complex problems.
                  </p>
                </div>
              </FadeInUpSection>

              {/* Value 3 */}
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Partnership</h3>
                  <p className="text-gray-400">
                    We see our clients as co-pilots on a shared journey to success. We value collaboration, transparency, and mutual growth.
                  </p>
                </div>
              </FadeInUpSection>

              {/* Value 4 */}
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
                      <path d="M2 12h5" />
                      <path d="M17 12h5" />
                      <path d="M12 2v5" />
                      <path d="M12 17v5" />
                      <path d="m4.93 4.93 3.54 3.54" />
                      <path d="m15.54 15.54 3.54 3.54" />
                      <path d="m15.54 8.46 3.54-3.54" />
                      <path d="m4.93 19.07 3.54-3.54" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Adaptability</h3>
                  <p className="text-gray-400">
                    The digital landscape is constantly evolving, and so are we. We stay agile, learning from each mission and refining our approach.
                  </p>
                </div>
              </FadeInUpSection>

              {/* Value 5 */}
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
                      <path d="M3 6V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
                      <path d="M3 10v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1" />
                      <path d="M11 6V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
                      <path d="M11 10v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1" />
                      <path d="M4 22V6" />
                      <path d="M12 22v-6" />
                      <path d="M20 22V6" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Results</h3>
                  <p className="text-gray-400">
                    We measure our success by our clients' outcomes. We focus on delivering tangible results that drive growth and create real business impact.
                  </p>
                </div>
              </FadeInUpSection>

              {/* Value 6 */}
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
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.48-8.48l8.48-8.48a4 4 0 0 1 5.66 5.66l-7.78 7.78a2 2 0 0 1-2.83-2.83l6.37-6.37" />
                    </svg>
                  </div>
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Creativity</h3>
                  <p className="text-gray-400">
                    We harness the power of imagination to create memorable, impactful digital experiences that resonate with audiences and elevate brands.
                  </p>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-10 text-center">
                <svg className="w-12 h-12 text-adastra-red mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl font-display font-medium text-adastra-light mb-6">
                  "We are not just another digital partner—we are your ticket to an extraordinary future. By combining cutting-edge technology with creative strategy, we launch brands into a new orbit of success."
                </p>
                <p className="text-adastra-red font-display font-bold">
                  AdAstra Media Team
                </p>
              </div>
            </FadeInUpSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black/90 to-adastra-black">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title mb-6">JOIN OUR MISSION</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Ready to break free of digital gravity and reach new heights? Let's embark on this cosmic journey together.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/approach">
                    <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                      Explore Our Approach
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-adastra-red text-adastra-red hover:bg-adastra-red/10 px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                      Contact Mission Control
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeInUpSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Vision;
