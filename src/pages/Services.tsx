
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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
                <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">04</div>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="section-title">GALACTIC SERVICES</h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-gray-300 text-xl mb-10">
                  Our comprehensive suite of digital services is designed to propel your brand beyond the digital atmosphere and into orbit around your target audience.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-red mb-6">
                  ORBITING AROUND YOUR NEEDS
                </h2>
                <p className="text-gray-400 text-lg">
                  Services designed to cover every dimension of your digital journey—from strategic planning to implementation and ongoing optimization.
                </p>
              </div>
            </FadeInUpSection>
          </div>
        </section>

        {/* Strategic Consulting */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">SERVICE 01</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    Strategic Consulting
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We provide strategic consulting that acts as your navigation chart, guiding your brand through the digital cosmos with purpose and precision.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Brand Strategy Development</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Market Research & Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Digital Transformation Roadmaps</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Competitive Positioning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Growth Strategy & Planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/06126218-95fc-4246-b7d5-8c85e32cc1bc.png" 
                    alt="Strategic Consulting" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Creative Design */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/e988da9b-014d-4f29-81a3-66178402e879.png" 
                    alt="Creative Design" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2} className="order-1 lg:order-2">
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">SERVICE 02</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    Creative Design
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We craft bold, eye-catching visuals and unforgettable brand identities that set you apart in a crowded digital landscape, ensuring your brand shines brightly in the vast digital universe.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Brand Identity Design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>UI/UX Design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Visual Content Creation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Motion Graphics & Animation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Marketing Collateral Design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Web Development */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">SERVICE 03</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    Web Development
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We design, build, and maintain high-performing websites—handling everything from development and hosting to ongoing support—ensuring your online presence is seamless and robust.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Responsive Website Development</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>E-Commerce Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Content Management Systems</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Website Maintenance & Support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Performance Optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/78d8fbb1-1498-4700-9456-fc4ec588226a.png" 
                    alt="Web Development" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Digital Marketing */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black/90 to-adastra-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/4ef19db3-129a-40ba-93b1-0a62dccbfb17.png" 
                    alt="Digital Marketing" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2} className="order-1 lg:order-2">
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">SERVICE 04</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    Digital Marketing
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our expertise in social and paid media marketing ensures your message reaches audiences across the vast digital expanse, driving engagement and growth that is truly out-of-this-world.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Social Media Marketing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Search Engine Marketing (SEM)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Email Marketing Campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Content Marketing Strategy</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Influencer Marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* SEO & Analytics */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">SERVICE 05</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    SEO & Analytics
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We employ advanced SEO strategies and data analytics to increase your brand's visibility in search results and provide actionable insights for continuous growth and improvement.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Search Engine Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Performance Analytics & Reporting</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Conversion Rate Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Competitive Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>User Behavior Analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="relative">
                  <img 
                    src="public/lovable-uploads/7eb81545-c2cb-4495-89d7-bdd42bc39330.png" 
                    alt="SEO & Analytics" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">OUR COSMIC PROCESS</h2>
                <p className="text-gray-400 text-lg">
                  Our proven process ensures stellar results for every project we undertake.
                </p>
              </div>
            </FadeInUpSection>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <FadeInUpSection delay={0.1}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">01</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Discovery</h3>
                    <p className="text-gray-400">
                      We explore your brand, goals, and challenges to understand your unique position in the digital universe.
                    </p>
                  </div>
                </FadeInUpSection>

                {/* Step 2 */}
                <FadeInUpSection delay={0.2}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">02</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Strategy</h3>
                    <p className="text-gray-400">
                      We develop a customized roadmap that aligns with your objectives and sets a clear trajectory for success.
                    </p>
                  </div>
                </FadeInUpSection>

                {/* Step 3 */}
                <FadeInUpSection delay={0.3}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">03</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Creation</h3>
                    <p className="text-gray-400">
                      Our team brings your vision to life with compelling design and development, crafting digital experiences that captivate.
                    </p>
                  </div>
                </FadeInUpSection>

                {/* Step 4 */}
                <FadeInUpSection delay={0.4}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">04</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Launch</h3>
                    <p className="text-gray-400">
                      We deploy your digital assets with precision, ensuring a smooth and impactful entry into the market.
                    </p>
                  </div>
                </FadeInUpSection>

                {/* Step 5 */}
                <FadeInUpSection delay={0.5}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">05</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Optimize</h3>
                    <p className="text-gray-400">
                      We continuously analyze performance data and refine strategies to maximize results and ROI.
                    </p>
                  </div>
                </FadeInUpSection>

                {/* Step 6 */}
                <FadeInUpSection delay={0.6}>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 hover:border-adastra-red/40 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-adastra-red font-display font-bold">06</span>
                    </div>
                    <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">Evolve</h3>
                    <p className="text-gray-400">
                      We adapt to changing market dynamics and technology advancements, ensuring your brand remains at the forefront.
                    </p>
                  </div>
                </FadeInUpSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-adastra-red mb-6">
                  READY TO LAUNCH YOUR BRAND TO NEW HEIGHTS?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Contact us today for a free consultation and discover how AdAstra Media can propel your brand into a new orbit of success.
                </p>
                <Link to="/contact">
                  <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-8 py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
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

export default Services;
