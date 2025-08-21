import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon, Upload, ArrowRight, ArrowLeft, Sparkles, Clock, DollarSign, CheckCircle, Wrench, Droplets, Zap, Paintbrush, Hammer, AlertTriangle, Home, Building } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    followUpQuestion: "",
    urgency: "",
    propertyType: "",
    roomType: "",
    problemDescription: "",
    images: [] as File[],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    preferredDate: undefined as Date | undefined,
    preferredTime: "",
  });

  const totalSteps = 9;
  const progress = (step / totalSteps) * 100;

  const serviceTypes = [
    { value: "general", label: "General Repairs", icon: Wrench, desc: "Maintenance & small fixes" },
    { value: "plumbing", label: "Plumbing", icon: Droplets, desc: "Pipes, leaks, fixtures" },
    { value: "electrical", label: "Electrical", icon: Zap, desc: "Wiring, outlets, lighting" },
    { value: "painting", label: "Painting", icon: Paintbrush, desc: "Interior & exterior painting" },
    { value: "carpentry", label: "Carpentry", icon: Hammer, desc: "Wood work & assembly" },
    { value: "emergency", label: "Emergency", icon: AlertTriangle, desc: "Urgent repairs needed" },
  ];

  const getFollowUpQuestions = (serviceType: string) => {
    switch (serviceType) {
      case "plumbing":
        return [
          "Leaky faucet or pipes",
          "Clogged drain or toilet",
          "Water heater issues",
          "Installation/replacement",
          "Other plumbing issue"
        ];
      case "electrical":
        return [
          "Outlet not working",
          "Light fixture installation",
          "Circuit breaker issues",
          "Wiring problems", 
          "Other electrical issue"
        ];
      case "painting":
        return [
          "Interior room painting",
          "Exterior house painting",
          "Touch-up work",
          "Cabinet refinishing",
          "Other painting work"
        ];
      case "carpentry":
        return [
          "Furniture assembly",
          "Cabinet installation",
          "Door/window repair",
          "Custom woodwork",
          "Other carpentry work"
        ];
      case "general":
        return [
          "Small repairs",
          "Maintenance work",
          "Multiple small tasks",
          "Preventive maintenance",
          "Other general work"
        ];
      case "emergency":
        return [
          "Water leak emergency",
          "Electrical hazard",
          "Structural damage",
          "Security issue",
          "Other emergency"
        ];
      default:
        return [];
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const generateQuote = () => {
    // Simulated AI quote generation based on answers
    const basePrice = 150;
    let multiplier = 1;
    
    if (formData.serviceType.includes("electrical") || formData.serviceType.includes("plumbing")) multiplier += 0.3;
    if (formData.urgency === "emergency") multiplier += 0.5;
    if (formData.propertyType === "commercial") multiplier += 0.4;

    return Math.round(basePrice * multiplier);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const resetModal = () => {
    setStep(1);
    setFormData({
      serviceType: "",
      followUpQuestion: "",
      urgency: "",
      propertyType: "",
      roomType: "",
      problemDescription: "",
      images: [],
      contactInfo: { name: "", email: "", phone: "", street: "", city: "", state: "", zipCode: "" },
      preferredDate: undefined,
      preferredTime: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      if (!open) resetModal();
      onOpenChange(open);
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI-Powered Instant Quote Generator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What service do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceTypes.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.value}
                      className={cn(
                        "p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50",
                        formData.serviceType === service.value 
                          ? "border-primary bg-primary/5" 
                          : "border-muted hover:bg-muted/50"
                      )}
                      onClick={() => setFormData(prev => ({ ...prev, serviceType: service.value }))}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">{service.label}</h4>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && formData.serviceType && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What specific issue are you facing?</h3>
              <RadioGroup 
                value={formData.followUpQuestion} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, followUpQuestion: value }))}
              >
                {getFollowUpQuestions(formData.serviceType).map((question) => (
                  <div key={question} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50">
                    <RadioGroupItem value={question} id={question} />
                    <Label htmlFor={question} className="cursor-pointer flex-1">{question}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How urgent is this repair?</h3>
              <div className="space-y-3">
                {[
                  { value: "emergency", label: "Emergency (same day)", desc: "Water leak, electrical hazard, etc." },
                  { value: "urgent", label: "Urgent (within 2-3 days)", desc: "Affecting daily life" },
                  { value: "normal", label: "Normal (within a week)", desc: "Can wait but needs attention" },
                  { value: "flexible", label: "Flexible timing", desc: "When convenient" }
                ].map((option) => (
                  <div 
                    key={option.value} 
                    className={cn(
                      "p-4 rounded-lg border-2 cursor-pointer transition-all",
                      formData.urgency === option.value
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50 hover:bg-muted/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0",
                        formData.urgency === option.value
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      )}>
                        {formData.urgency === option.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <p className="text-sm text-muted-foreground">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What type of property is this?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "apartment", label: "Apartment", icon: Building },
                  { value: "house", label: "House", icon: Home },
                  { value: "condo", label: "Condo", icon: Building },
                  { value: "commercial", label: "Commercial", icon: Building }
                ].map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <div
                      key={type.value}
                      className={cn(
                        "p-4 rounded-lg border-2 cursor-pointer transition-all text-center",
                        formData.propertyType === type.value 
                          ? "border-primary bg-primary/5" 
                          : "border-muted hover:border-primary/50 hover:bg-muted/50"
                      )}
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: type.value }))}
                    >
                      <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-medium">{type.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Which room or area needs service?</h3>
              <Input 
                placeholder="e.g., Kitchen, Bathroom, Living room, Basement..."
                value={formData.roomType}
                onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                className="text-lg p-4"
              />
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Describe the problem in detail</h3>
              <Textarea 
                placeholder="Please provide as much detail as possible about the issue you're experiencing. For example: 'Kitchen sink is leaking under the cabinet, water pooling on floor, started 2 days ago...'"
                value={formData.problemDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, problemDescription: e.target.value }))}
                rows={6}
                className="text-base"
              />
            </div>
          )}

          {step === 7 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upload photos or videos</h3>
              <p className="text-muted-foreground">Help us understand the issue better with visual references (optional)</p>
              
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                <p className="mb-2">Drag & drop files here, or click to select</p>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="fileUpload"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
              </div>

              {formData.images.length > 0 && (
                <div className="space-y-2">
                  <Label>Uploaded files:</Label>
                  {formData.images.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 8 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your contact information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    value={formData.contactInfo.name}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, name: e.target.value }
                    }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, email: e.target.value }
                    }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, phone: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Service Address</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="street">Street Address *</Label>
                    <Input 
                      id="street"
                      placeholder="123 Main Street"
                      value={formData.contactInfo.street}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        contactInfo: { ...prev.contactInfo, street: e.target.value }
                      }))}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city"
                        placeholder="City"
                        value={formData.contactInfo.city}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, city: e.target.value }
                        }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input 
                        id="state"
                        placeholder="State"
                        value={formData.contactInfo.state}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, state: e.target.value }
                        }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input 
                        id="zipCode"
                        placeholder="12345"
                        value={formData.contactInfo.zipCode}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, zipCode: e.target.value }
                        }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 9 && (
            <div className="space-y-6">

              <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Your Personalized Quote
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">${generateQuote()}</div>
                    <div className="text-sm text-muted-foreground">Estimated cost</div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold flex items-center gap-1">
                      <Clock className="h-5 w-5" />
                      {formData.urgency === "emergency" ? "Same day" :
                       formData.urgency === "urgent" ? "2-3 days" :
                       formData.urgency === "normal" ? "Within a week" :
                       "Flexible"}
                    </div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>✓ Professional {serviceTypes.find(s => s.value === formData.serviceType)?.label.toLowerCase()}</li>
                    <li>✓ All materials and supplies</li>
                    <li>✓ Cleanup after completion</li>
                    <li>✓ 1-year warranty on work</li>
                    <li>✓ Licensed and insured technician</li>
                    {formData.followUpQuestion && (
                      <li>✓ Specialized service for: {formData.followUpQuestion.toLowerCase()}</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Schedule your appointment</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.preferredDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, preferredDate: date }))}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <RadioGroup 
                      value={formData.preferredTime} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                    >
                      {["morning", "afternoon", "evening"].map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <RadioGroupItem value={time} id={time} />
                          <Label htmlFor={time} className="capitalize">
                            {time === "morning" ? "Morning (8AM - 12PM)" :
                             time === "afternoon" ? "Afternoon (12PM - 5PM)" :
                             "Evening (5PM - 8PM)"}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    // Simulate booking confirmation
                    alert("Appointment booked! We'll call you within 15 minutes to confirm details.");
                    onOpenChange(false);
                  }}
                >
                  Book Appointment & Accept Quote
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
            
            {step < totalSteps && (
              <Button 
                onClick={nextStep} 
                disabled={
                  (step === 1 && !formData.serviceType) ||
                  (step === 2 && !formData.followUpQuestion) ||
                  (step === 3 && !formData.urgency) ||
                  (step === 4 && !formData.propertyType) ||
                  (step === 5 && !formData.roomType) ||
                  (step === 6 && !formData.problemDescription) ||
                  (step === 8 && (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.phone || !formData.contactInfo.street || !formData.contactInfo.city || !formData.contactInfo.state || !formData.contactInfo.zipCode))
                }
                className="ml-auto"
              >
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};