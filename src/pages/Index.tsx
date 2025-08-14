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

const Index = () => {
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
      <main>
        <Hero />
        <Services />
        <TeamBanner />
        <WhyUs />
        <Process />
        <CTABand />
        <ReviewsGoogle />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
