import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const About = () => {
  const stats = [
    { number: "90+", label: "Projects" },
    { number: "400+", label: "Customers" },
    { number: "80+", label: "Reviews" }
  ];

  const values = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our work and always strive for excellence."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to deliver better results."
    },
    {
      title: "Reliability",
      description: "Our customers can count on us to deliver on time, every time."
    },
    {
      title: "Teamwork",
      description: "We believe in collaboration and working together to achieve common goals."
    },
    {
      title: "Passion",
      description: "We are passionate about what we do and it shows in every project."
    },
    {
      title: "Leadership",
      description: "We lead by example and set the standards for our industry."
    }
  ];

  const team = [
    {
      name: "John Collins",
      role: "Co-Founder",
      image: "/lovable-uploads/729579d7-ddb0-4e21-acc6-4126b364166d.png"
    },
    {
      name: "Sophie Moore",
      role: "Co-Founder", 
      image: "/lovable-uploads/729579d7-ddb0-4e21-acc6-4126b364166d.png"
    },
    {
      name: "Matt Carson",
      role: "Co-Founder",
      image: "/lovable-uploads/729579d7-ddb0-4e21-acc6-4126b364166d.png"
    }
  ];

  const faqs = [
    {
      question: "What is a handyman and what types of jobs can they help with?",
      answer: "Lorem ipsum dolor sit amet consectetur curabitur denant vestibulum mauris neque cursus vitae risus etiam."
    },
    {
      question: "What is the experience and training of your handyman team?",
      answer: "Lorem ipsum dolor sit amet consectetur curabitur denant vestibulum mauris neque cursus vitae risus etiam."
    },
    {
      question: "What are the most common services you offer as a handyman?",
      answer: "Lorem ipsum dolor sit amet consectetur curabitur denant vestibulum mauris neque cursus vitae risus etiam."
    },
    {
      question: "What is your service area? Do you serve my location?",
      answer: "Lorem ipsum dolor sit amet consectetur curabitur denant vestibulum mauris neque cursus vitae risus etiam."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-4">/ABOUT/</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Learn about our story
                </h1>
                <p className="text-muted-foreground mb-8">
                  Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. Sit habitant.
                </p>
                <Button>ABOUT US</Button>
                
                <div className="flex gap-8 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/hero-handyman.jpg" 
                  alt="Handyman professionals" 
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/OUR STORY/</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More than 20 years leading the industry
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. 
                Sit habitant mauris neque cursus vitae risus etiam lorem. Integer quis eget mauris convallis. 
                Etiam et tempus lorem lorem mauris. Lorem cursus cursus sit lorem mauris lorem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/src/assets/hero-handyman-professional.jpg" 
                  alt="Professional handyman" 
                  className="rounded-2xl w-full"
                />
              </div>
              
              <Card className="bg-primary text-primary-foreground p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">
                    Our mission is to simplify your everyday life
                  </h3>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. 
                    Sit habitant mauris neque cursus vitae risus etiam lorem.
                  </p>
                  <Button variant="secondary">ABOUT US</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The values that dive everything we do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/OUR TEAM/</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The team behind our company
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Follow us on social media
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. 
                Sit habitant mauris neque cursus vitae risus etiam lorem.
              </p>
              <div className="flex justify-center gap-6">
                <Facebook className="h-8 w-8 text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter className="h-8 w-8 text-muted-foreground hover:text-primary cursor-pointer" />
                <Instagram className="h-8 w-8 text-muted-foreground hover:text-primary cursor-pointer" />
                <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/FAQ/</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have any question?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. 
                Sit habitant mauris neque cursus vitae risus etiam lorem.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 shadow-soft">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10"></div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a quote today for your new project!
                </h2>
                <p className="text-primary-foreground/90 mb-8">
                  Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. Sit habitant.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  GET A QUOTE
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;