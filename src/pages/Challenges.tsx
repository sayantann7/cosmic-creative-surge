
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Challenges = () => {
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
                <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">02</div>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="section-title">UNIVERSE OF CHALLENGES</h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-gray-300 text-xl mb-10">
                  In today's vast digital galaxy, many brands face cosmic challenges that hinder their growth and visibility. Understanding these obstacles is the first step toward overcoming them.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Main Challenges Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-20">
              {/* Challenge 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <FadeInUpSection>
                  <img 
                    src="public/lovable-uploads/78d8fbb1-1498-4700-9456-fc4ec588226a.png" 
                    alt="Crowded Digital Space" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </FadeInUpSection>
                
                <FadeInUpSection delay={0.2}>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-adastra-red font-display font-bold text-4xl">01</span>
                      <div className="bg-adastra-red px-4 py-2">
                        <h3 className="text-adastra-black font-display font-bold">LOST IN THE NOISE OF CROWDED CHANNELS</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        The digital universe is expanding at an exponential rate, with millions of brands competing for attention. Many businesses struggle to stand out amidst the cosmic noise, their messages lost in the vastness of social media feeds, search results, and content platforms.
                      </p>
                      <p>
                        Without a distinctive voice and strategic visibility, even the most valuable offerings can remain undiscovered by potential customers navigating through the digital cosmos.
                      </p>
                    </div>
                  </div>
                </FadeInUpSection>
              </div>

              {/* Challenge 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <FadeInUpSection className="order-2 md:order-1">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-adastra-red font-display font-bold text-4xl">02</span>
                      <div className="bg-adastra-red px-4 py-2">
                        <h3 className="text-adastra-black font-display font-bold">LOW ENGAGEMENT AND LIMITED REACH</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        Creating content is not enough—it needs to resonate, engage, and drive action. Many brands struggle with low engagement rates, minimal sharing, and limited organic reach, causing their digital presence to stagnate in a vast sea of content.
                      </p>
                      <p>
                        This challenge is often compounded by algorithm changes, shifting user behaviors, and increasing competition for attention spans, making it harder to build meaningful connections with target audiences.
                      </p>
                    </div>
                  </div>
                </FadeInUpSection>

                <FadeInUpSection delay={0.2} className="order-1 md:order-2">
                  <img 
                    src="public/lovable-uploads/bb69b9cd-34ef-4dc8-a753-cadd0512b4cb.png" 
                    alt="Digital Engagement" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </FadeInUpSection>
              </div>

              {/* Challenge 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <FadeInUpSection>
                  <img 
                    src="public/lovable-uploads/cbe5e7e5-e7fd-4958-87f6-717a12087174.png" 
                    alt="Budget Challenge" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </FadeInUpSection>
                
                <FadeInUpSection delay={0.2}>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-adastra-red font-display font-bold text-4xl">03</span>
                      <div className="bg-adastra-red px-4 py-2">
                        <h3 className="text-adastra-black font-display font-bold">BUDGET BLACK HOLES THAT DRAIN POTENTIAL</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        Digital marketing budgets can quickly disappear into black holes of inefficiency without proper strategy and tracking. Many businesses invest in platforms, campaigns, and content without clear ROI measures, leading to wasted resources and missed opportunities.
                      </p>
                      <p>
                        This challenge is particularly acute for small and medium businesses trying to compete with larger entities that have gravitational pull in the market due to their substantial resources.
                      </p>
                    </div>
                  </div>
                </FadeInUpSection>
              </div>

              {/* Challenge 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <FadeInUpSection className="order-2 md:order-1">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-adastra-red font-display font-bold text-4xl">04</span>
                      <div className="bg-adastra-red px-4 py-2">
                        <h3 className="text-adastra-black font-display font-bold">INCONSISTENT BRAND MESSAGING</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        In a multi-platform universe, maintaining consistent brand voice, visuals, and messaging across all touchpoints becomes increasingly complex. Many businesses struggle with fragmented communications that confuse customers and dilute brand recognition.
                      </p>
                      <p>
                        This inconsistency can create a disjointed customer experience, undermining trust and preventing the formation of strong brand gravity that naturally attracts and retains customers in orbit.
                      </p>
                    </div>
                  </div>
                </FadeInUpSection>

                <FadeInUpSection delay={0.2} className="order-1 md:order-2">
                  <img 
                    src="public/lovable-uploads/4ef19db3-129a-40ba-93b1-0a62dccbfb17.png" 
                    alt="Brand Consistency" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </FadeInUpSection>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Teaser Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="section-title">NAVIGATING THE COSMIC CHALLENGES</h2>
                <p className="text-gray-400 text-lg">
                  These challenges may seem daunting, but with the right interstellar approach, your brand can overcome gravitational pulls and launch into digital success.
                </p>
              </div>
            </FadeInUpSection>

            <FadeInUpSection delay={0.2}>
              <div className="max-w-4xl mx-auto bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-adastra-light text-2xl font-display font-bold mb-4">Our Interstellar Approach</h3>
                    <p className="text-gray-300 mb-6">
                      At AdAstra Media, we've developed strategies and solutions specifically designed to overcome these digital challenges and propel your brand beyond limitations.
                    </p>
                    <Link to="/approach">
                      <Button className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                        Discover Our Approach
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <img 
                      src="public/lovable-uploads/7eb81545-c2cb-4495-89d7-bdd42bc39330.png" 
                      alt="Space Explorer" 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute -inset-0.5 bg-adastra-red/10 rounded-lg blur-md z-[-1]"></div>
                  </div>
                </div>
              </div>
            </FadeInUpSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black/90 to-adastra-black">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title mb-6">READY TO OVERCOME CHALLENGES?</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Let's navigate these cosmic challenges together and chart a course for your brand's success.
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

export default Challenges;
