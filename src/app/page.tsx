"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = /* provided JSON array */;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          brandName="Peak" 
          buttonText="Join Now" 
          logoSrc="/assets/logo.svg" 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroBillboard
            title="Elevate Your Business with Peak"
            description="Transform your operations with our top-tier SaaS solutions."
            tagIcon={Sparkles}
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <TextSplitAbout
            title="Who We Are"
            description={[
              "Peak is a leader in innovative SaaS solutions.",
              "Our mission is to empower businesses through technology."
            ]}
            buttons={[{ text: "More About Us", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardThree
            title="Our Features"
            features={[
              {
                id: "01",
                title: "Advanced Analytics",
                description: "Get insights into your business performance.",
                imageSrc: assetMap.find(a => a.id === "feature-img1")?.url
              },
              {
                id: "02",
                title: "Data Visualization",
                description: "Make sense of complex data with clear visuals.",
                imageSrc: assetMap.find(a => a.id === "feature-img2")?.url
              }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <TestimonialCardOne
            testimonials={[
              {
                id: "1",
                name: "Alex Johnson",
                role: "CEO",
                company: "TechCorp",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonials-bg")?.url
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactCenter
            tag="Newsletter"
            title="Stay Informed"
            description="Subscribe to our updates for the latest in technology."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" },
                ],
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Blog", href: "blog" },
                ],
              },
              {
                title: "Support",
                items: [
                  { label: "Contact", href: "contact" },
                  { label: "FAQ", href: "faq" },
                ],
              },
            ]}
            logoSrc="/brand/logowhite.svg"
            copyrightText="© 2025 | Peak"
            onPrivacyClick={() => console.log('Privacy clicked')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}