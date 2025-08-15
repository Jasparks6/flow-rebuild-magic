import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import StickyBuyBar from "@/components/site/StickyBuyBar";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "contact@handyflow.com",
      link: "mailto:contact@handyflow.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "(555) 456 - 789",
      link: "tel:5554567890"
    }
  ];

  const departments = [
    {
      title: "Help & support",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.",
      email: "support@handyflow.com"
    },
    {
      title: "Press & media",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.",
      email: "press@handyflow.com"
    },
    {
      title: "Sales & enquiries",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.",
      email: "sales@handyflow.com"
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
        {/* Contact Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <p className="text-primary-foreground/80 font-medium mb-2">/CONTACT US/</p>
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                    Contact us
                  </CardTitle>
                  <p className="text-primary-foreground/90">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-t border-primary-foreground/20 pt-6">
                    <h3 className="text-xl font-semibold mb-4">More contact details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Contact us
                        </h4>
                        <p className="text-sm text-primary-foreground/80 mb-1">Email: contact@handyflow.com</p>
                        <p className="text-sm text-primary-foreground/80">Phone: (555) 456 - 789</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Our location
                        </h4>
                        <p className="text-sm text-primary-foreground/80">
                          2760 N Beachwood Dr.<br />
                          Los Angeles, CA 90068
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet consectetur in congue enim.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="First name" />
                    </div>
                    <div>
                      <Input placeholder="Last name" />
                    </div>
                  </div>
                  
                  <Input placeholder="Email address" type="email" />
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Subject</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet consectetur in congue enim.
                    </p>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="eg. General enquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General enquiry</SelectItem>
                        <SelectItem value="service">Service request</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="quote">Quote request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Message</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet consectetur in congue enim.
                    </p>
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Departments */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/GET IN TOUCH/</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reach us out directly
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. 
                Sit habitant mauris neque cursus vitae risus etiam lorem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-3">{dept.title}</h3>
                    <p className="text-muted-foreground mb-4">{dept.description}</p>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {dept.email} →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/VISIT US/</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit our locations
              </h2>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="p-4">
                      <h3 className="font-bold text-lg mb-2">New York, NY</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sit aliquam mauris non velit tellus condimentum.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4" />
                          <span>contact@handyflow.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>123 Main Street, New York, NY 10001</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Get in touch with us</h3>
                  <p className="text-muted-foreground mb-8">
                    Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique.
                  </p>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="text-primary">{info.icon}</div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center gap-4">
                      <div className="text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-muted-foreground">Mon-Fri: 9AM-6PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
        <section className="py-4">
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
      <StickyBuyBar />
    </div>
  );
};

export default Contact;