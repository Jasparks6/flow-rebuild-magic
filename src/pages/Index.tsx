import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Stats from "@/components/site/Stats";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Blog from "@/components/site/Blog";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import WhyUs from "@/components/site/WhyUs";
import Experience from "@/components/site/Experience";
import ReviewsGoogle from "@/components/site/ReviewsGoogle";

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
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Experience />
        <Stats />
        <Process />
        <ReviewsGoogle />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
