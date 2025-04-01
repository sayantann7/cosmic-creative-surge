
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import OrbitingSphere from '@/components/3d/OrbitingSphere';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Approach = () => {
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
                <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">03</div>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="section-title">INTERSTELLAR APPROACH</h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-gray-300 text-xl mb-10">
                  Our unique methodology combines creativity, strategy, and advanced technology to help your brand break free from digital gravity and achieve extraordinary results.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Approach Overview */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-red mb-6">
                    FUELING YOUR BRAND'S ROCKET
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our interstellar approach is designed to overcome the gravitational pull of digital challenges and propel your brand toward stellar success. We combine strategic thinking, creative excellence, and technical expertise to create a complete launch system for your digital presence.
                    </p>
                    <div className="bg-adastra-red/10 border border-adastra-red/20 p-4 rounded-lg">
                      <p className="text-adastra-light font-display font-medium text-lg">
                        "We are not just another digital partner—we are your ticket to an extraordinary future."
                      </p>
                    </div>
                    <p>
                      Each aspect of our approach is carefully calibrated to work in harmony, creating a powerful force that elevates your brand above the competition and into orbit around your target audience.
                    </p>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <div className="relative">
                  <div className="absolute -left-10 -top-10 w-32 h-32 bg-adastra-red/10 rounded-full blur-3xl"></div>
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-adastra-red/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-full h-[400px]">
                    <OrbitingSphere />
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Key Approach Elements */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">OUR LAUNCH SEQUENCE</h2>
                <p className="text-gray-400 text-lg">
                  Our comprehensive approach follows a proven sequence to maximize your brand's potential.
                </p>
              </div>
            </FadeInUpSection>

            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <FadeInUpSection delay={0.1}>
                <div className="relative pl-10 pb-16 border-l-2 border-adastra-red/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">01</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Discovery & Analysis</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Our journey begins with a deep dive into your brand, audience, and competitive landscape. We analyze your current digital presence, identify strengths, weaknesses, and untapped opportunities.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Comprehensive brand audit</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Competitor analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Audience research and segmentation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Performance data review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>

              {/* Step 2 */}
              <FadeInUpSection delay={0.2}>
                <div className="relative pl-10 pb-16 border-l-2 border-adastra-red/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">02</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Strategic Planning</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Based on our findings, we develop a comprehensive strategy that aligns with your business goals and resonates with your target audience, creating a roadmap for digital success.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Brand positioning and messaging</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Channel strategy and prioritization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Content and campaign planning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Budget allocation and ROI forecasting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>

              {/* Step 3 */}
              <FadeInUpSection delay={0.3}>
                <div className="relative pl-10 pb-16 border-l-2 border-adastra-red/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">03</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Creative Development</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Our team of cosmic creatives designs visually stunning assets that capture attention and communicate your brand message effectively across all platforms.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Brand identity development/refinement</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Website design and UX optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Content creation and copywriting</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Visual asset production</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>

              {/* Step 4 */}
              <FadeInUpSection delay={0.4}>
                <div className="relative pl-10 pb-16 border-l-2 border-adastra-red/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">04</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Technical Implementation</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Our technical team brings creative concepts to life with cutting-edge development and optimization, ensuring your digital presence is not just beautiful but also high-performing.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Website development</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>SEO optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Platform integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Analytics setup and tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>

              {/* Step 5 */}
              <FadeInUpSection delay={0.5}>
                <div className="relative pl-10 pb-16 border-l-2 border-adastra-red/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">05</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Launch & Amplification</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      We orchestrate strategic launches and deploy targeted campaigns to maximize reach, engagement, and conversions, ensuring your message resonates across the digital universe.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Content distribution</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Social media campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Paid advertising management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>PR and outreach</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>

              {/* Step 6 */}
              <FadeInUpSection delay={0.6}>
                <div className="relative pl-10">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-adastra-red"></div>
                  <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6 ml-6">
                    <div className="flex items-center mb-4">
                      <span className="text-adastra-red font-display font-bold text-xl mr-3">06</span>
                      <h3 className="text-adastra-light text-2xl font-display font-bold">Analyze & Evolve</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Our work doesn't end at launch. We continuously monitor performance, gather insights, and refine strategies to ensure sustained growth and improved results over time.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Performance monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Data analysis and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Optimization and refinement</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-adastra-red flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Growth strategy evolution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">MISSION SUCCESSES</h2>
                <p className="text-gray-400 text-lg">
                  See what our clients say about their journey with AdAstra Media.
                </p>
              </div>
            </FadeInUpSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              {/* <FadeInUpSection delay={0.1}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-adastra-red font-bold text-xl">JT</span>
                    </div>
                    <div>
                      <h4 className="text-adastra-light font-display font-semibold">James Thompson</h4>
                      <p className="text-gray-400 text-sm">CEO, Stellar Solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "AdAstra Media completely transformed our digital presence. Their strategic approach and creative execution helped us stand out in a crowded market and significantly increased our lead generation."
                  </p>
                  <div className="flex text-adastra-red">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </FadeInUpSection> */}

              {/* Testimonial 2 */}
              {/* <FadeInUpSection delay={0.2}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-adastra-red/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-adastra-red font-bold text-xl">SR</span>
                    </div>
                    <div>
                      <h4 className="text-adastra-light font-display font-semibold">Sofia Rodriguez</h4>
                      <p className="text-gray-400 text-sm">Marketing Director, Orbit Innovations</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The team at AdAstra Media doesn't just deliver projects—they deliver results. Their data-driven approach combined with exceptional creativity has elevated our brand and driven measurable business growth."
                  </p>
                  <div className="flex text-adastra-red">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </FadeInUpSection>
            </div> 
          </div> 
        </section>*/}

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black/90 to-adastra-black">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title mb-6">READY TO LAUNCH?</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Let's apply our interstellar approach to elevate your brand to new heights.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/services">
                    <Button variant="outline" className="border-adastra-red/10 hover:border-adastra-red/20 hover:text-adastra-light bg-adastra-red hover:bg-adastra-red/40 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                      Explore Our Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-adastra-red text-adastra-red hover:bg-adastra-red/10 px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:text-adastra-light">
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

export default Approach;
