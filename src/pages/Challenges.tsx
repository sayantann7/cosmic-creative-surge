
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Challenges = () => {
  // Array of challenges data
  const challenges = [
    {
      id: "01",
      title: "LOST IN THE NOISE OF CROWDED CHANNELS",
      description: [
        "The digital universe is expanding at an exponential rate, with millions of brands competing for attention. Many businesses struggle to stand out amidst the cosmic noise, their messages lost in the vastness of social media feeds, search results, and content platforms.",
        "Without a distinctive voice and strategic visibility, even the most valuable offerings can remain undiscovered by potential customers navigating through the digital cosmos."
      ]
    },
    {
      id: "02",
      title: "LOW ENGAGEMENT AND LIMITED REACH",
      description: [
        "Creating content is not enough—it needs to resonate, engage, and drive action. Many brands struggle with low engagement rates, minimal sharing, and limited organic reach, causing their digital presence to stagnate in a vast sea of content.",
        "This challenge is often compounded by algorithm changes, shifting user behaviors, and increasing competition for attention spans, making it harder to build meaningful connections with target audiences."
      ]
    },
    {
      id: "03",
      title: "BUDGET BLACK HOLES THAT DRAIN POTENTIAL",
      description: [
        "Digital marketing budgets can quickly disappear into black holes of inefficiency without proper strategy and tracking. Many businesses invest in platforms, campaigns, and content without clear ROI measures, leading to wasted resources and missed opportunities.",
        "This challenge is particularly acute for small and medium businesses trying to compete with larger entities that have gravitational pull in the market due to their substantial resources."
      ]
    },
    {
      id: "04",
      title: "INCONSISTENT BRAND MESSAGING",
      description: [
        "In a multi-platform universe, maintaining consistent brand voice, visuals, and messaging across all touchpoints becomes increasingly complex. Many businesses struggle with fragmented communications that confuse customers and dilute brand recognition.",
        "This inconsistency can create a disjointed customer experience, undermining trust and preventing the formation of strong brand gravity that naturally attracts and retains customers in orbit."
      ]
    }
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {challenges.map((challenge) => (
                <FadeInUpSection key={challenge.id} delay={0.1}>
                  <Card className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-adastra-red font-display font-bold text-4xl">{challenge.id}</span>
                        <div className="bg-adastra-red px-4 py-2">
                          <h3 className="text-adastra-black font-display font-bold text-sm md:text-base">{challenge.title}</h3>
                        </div>
                      </div>
                      <div className="space-y-4 text-gray-300">
                        {challenge.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInUpSection>
              ))}
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
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
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
