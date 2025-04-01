
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import PageTransition from '@/components/animations/PageTransition';
import RevealText from '@/components/animations/RevealText';
import FadeInUpSection from '@/components/animations/FadeInUpSection';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Strategic Consulting'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll be in touch with you shortly to discuss your project.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Strategic Consulting'
      });
    }, 1500);
  };

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
                <div className="inline-block py-1 px-3 bg-adastra-red/10 text-adastra-red rounded-full text-sm font-medium mb-4">05</div>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="section-title">CONTACT MISSION CONTROL</h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-gray-300 text-xl mb-10">
                  Ready to blast off? Get in touch with our team to start your journey to the stars. We're excited to hear about your project and help propel your brand to new heights.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeInUpSection>
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-adastra-light mb-6">
                    READY TO BLAST OFF?
                  </h2>
                  <div className="space-y-6 text-gray-300">
                    <p>
                      Whether you're looking to launch a new digital presence, boost your brand's visibility, or completely transform your online strategy, we're here to help.
                    </p>
                    <p>
                      Fill out the form, and our team will contact you for a free consultation to discuss how we can propel your brand to stellar success.
                    </p>
                    
                    <div className="space-y-4 mt-10">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-adastra-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-adastra-light font-display font-semibold text-xl">Phone</h3>
                          <p className="text-gray-400">+91-8404920213</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-adastra-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-adastra-light font-display font-semibold text-xl">Email</h3>
                          <p className="text-gray-400">contactadastramedia@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-adastra-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-adastra-light font-display font-semibold text-xl">Location</h3>
                          <p className="text-gray-400">Digital Universe</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-adastra-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-adastra-light font-display font-semibold text-xl">Website</h3>
                          <p className="text-gray-400">adastra-media.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUpSection>
              
              <FadeInUpSection delay={0.2}>
                <form onSubmit={handleSubmit} className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-8">
                  <h3 className="text-2xl font-display font-bold text-adastra-light mb-6">Send Us a Message</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-adastra-light font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-adastra-light font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-adastra-light font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                          placeholder="Your Phone (Optional)"
                        />
                      </div>
                      
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-adastra-light font-medium mb-2">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                          placeholder="Your Company (Optional)"
                        />
                      </div>
                    </div>
                    
                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-adastra-light font-medium mb-2">Interested Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                      >
                        <option value="Strategic Consulting">Strategic Consulting</option>
                        <option value="Creative Design">Creative Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO & Analytics">SEO & Analytics</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-adastra-light font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-adastra-black/80 border border-gray-700 rounded-md px-4 py-2 text-adastra-light focus:outline-none focus:border-adastra-red transition-colors"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-adastra-red hover:bg-adastra-red/90 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : 'Send Message'}
                      </Button>
                    </div>
                  </div>
                </form>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-adastra-black to-adastra-black/90">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
                <p className="text-gray-400 text-lg">
                  Common questions about working with AdAstra Media.
                </p>
              </div>
            </FadeInUpSection>

            <div className="max-w-4xl mx-auto space-y-6">
              <FadeInUpSection delay={0.1}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">What is the typical project timeline?</h3>
                  <p className="text-gray-400">
                    Project timelines vary depending on the scope and complexity. A basic website might take 4-6 weeks, while a comprehensive digital marketing strategy could span 8-12 weeks. During our initial consultation, we'll provide a detailed timeline specific to your project.
                  </p>
                </div>
              </FadeInUpSection>

              <FadeInUpSection delay={0.2}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">How do you charge for your services?</h3>
                  <p className="text-gray-400">
                    We offer both project-based and retainer pricing models. For one-time projects like website development, we provide a fixed quote based on requirements. For ongoing services like digital marketing, we offer monthly retainer packages. All pricing is transparent and tailored to your specific needs.
                  </p>
                </div>
              </FadeInUpSection>

              <FadeInUpSection delay={0.3}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">What industries do you specialize in?</h3>
                  <p className="text-gray-400">
                    While we have experience across various sectors, we have particular expertise in technology, e-commerce, professional services, education, and healthcare. However, our approach is adaptable to any industry, and we pride ourselves on quickly understanding new markets.
                  </p>
                </div>
              </FadeInUpSection>

              <FadeInUpSection delay={0.4}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">How do you measure success?</h3>
                  <p className="text-gray-400">
                    We establish clear, measurable KPIs at the beginning of each project. Depending on your goals, these might include website traffic, conversion rates, lead generation, social engagement, or revenue growth. We provide regular reports and analyze results to continuously optimize performance.
                  </p>
                </div>
              </FadeInUpSection>

              <FadeInUpSection delay={0.5}>
                <div className="bg-adastra-black/50 backdrop-blur-sm border border-adastra-red/20 rounded-lg p-6">
                  <h3 className="text-adastra-light text-xl font-display font-semibold mb-2">What makes AdAstra Media different?</h3>
                  <p className="text-gray-400">
                    Our interstellar approach combines strategic thinking, creative excellence, and technical expertise with a deep commitment to results. We don't just execute tasks—we become partners in your success, creating custom solutions that elevate your brand above the competition. Our cosmic perspective helps us see beyond conventional approaches to discover unique opportunities for your brand.
                  </p>
                </div>
              </FadeInUpSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUpSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title mb-6">START YOUR COSMIC JOURNEY</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Contact us today for a free consultation and take the first step toward digital excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+918404920213" className="bg-adastra-red hover:bg-adastra-red/90 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call Us
                  </a>
                  <a href="mailto:email@adastramedia.com" className="border border-adastra-red text-adastra-red hover:bg-adastra-red/10 px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email Us
                  </a>
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

export default Contact;
