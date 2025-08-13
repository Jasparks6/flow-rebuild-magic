import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Stats from "@/components/site/Stats";
import Experience from "@/components/site/Experience";
import Process from "@/components/site/Process";
import WorkTogether from "@/components/site/WorkTogether";
import Testimonials from "@/components/site/Testimonials";
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
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Experience />
        <Process />
        <WorkTogether />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
