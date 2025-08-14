import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import TeamBanner from "@/components/site/TeamBanner";
import Process from "@/components/site/Process";
import CTABand from "@/components/site/CTABand";
import ReviewsGoogle from "@/components/site/ReviewsGoogle";
import Blog from "@/components/site/Blog";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import StickyBuyBar from "@/components/site/StickyBuyBar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const teamBannerRef = useScrollAnimation();
  const whyUsRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const ctaBandRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const blogRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "HandyFlow",
    url: "/",
    description:
      "HandyFlow provides fast, affordable home repair and handyman services.",
    areaServed: "US",
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Header />
      <main className="pb-20"> {/* Add bottom padding for sticky bar */}
        <section ref={heroRef}>
          <Hero />
        </section>
        <section ref={servicesRef}>
          <Services />
        </section>
        <section ref={teamBannerRef}>
          <TeamBanner />
        </section>
        <section ref={whyUsRef}>
          <WhyUs />
        </section>
        <section ref={processRef}>
          <Process />
        </section>
        <section ref={ctaBandRef}>
          <CTABand />
        </section>
        <section ref={reviewsRef}>
          <ReviewsGoogle />
        </section>
        <section ref={blogRef}>
          <Blog />
        </section>
        <section ref={ctaRef}>
          <CTA />
        </section>
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
      <StickyBuyBar />
    </div>
  );
};

export default Index;
