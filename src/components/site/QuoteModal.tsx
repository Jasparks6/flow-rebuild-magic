import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon, Upload, ArrowRight, ArrowLeft, Sparkles, Clock, DollarSign, CheckCircle } from "lucide-react";
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
    urgency: "",
    propertyType: "",
    problemDescription: "",
    roomType: "",
    timePreference: "",
    budget: "",
    images: [] as File[],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    preferredDate: undefined as Date | undefined,
    preferredTime: "",
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

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
    if (formData.budget === "premium") multiplier += 0.2;

    return Math.round(basePrice * multiplier);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const resetModal = () => {
    setStep(1);
    setFormData({
      serviceType: "",
      urgency: "",
      propertyType: "",
      problemDescription: "",
      roomType: "",
      timePreference: "",
      budget: "",
      images: [],
      contactInfo: { name: "", email: "", phone: "", address: "" },
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
              <RadioGroup 
                value={formData.serviceType} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
              >
                {[
                  "General repairs & maintenance",
                  "Plumbing repairs",
                  "Electrical work",
                  "Painting & decorating",
                  "Carpentry & furniture assembly",
                  "Emergency repair"
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <RadioGroupItem value={service} id={service} />
                    <Label htmlFor={service}>{service}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How urgent is this repair?</h3>
              <RadioGroup 
                value={formData.urgency} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
              >
                {[
                  { value: "emergency", label: "Emergency (same day)", desc: "Water leak, electrical hazard, etc." },
                  { value: "urgent", label: "Urgent (within 2-3 days)", desc: "Affecting daily life" },
                  { value: "normal", label: "Normal (within a week)", desc: "Can wait but needs attention" },
                  { value: "flexible", label: "Flexible timing", desc: "When convenient" }
                ].map((option) => (
                  <div key={option.value} className="flex items-start space-x-2 p-3 rounded-lg border hover:bg-muted/50">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div>
                      <Label htmlFor={option.value} className="font-medium">{option.label}</Label>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tell us about the problem</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Describe the issue in detail</Label>
                  <Textarea 
                    id="description"
                    placeholder="e.g., Kitchen sink is leaking under the cabinet, water pooling on floor..."
                    value={formData.problemDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, problemDescription: e.target.value }))}
                    rows={4}
                  />
                </div>
                
                <div>
                  <Label>Property type</Label>
                  <RadioGroup 
                    value={formData.propertyType} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {["apartment", "house", "condo", "commercial"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="capitalize">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>Which room/area?</Label>
                  <Input 
                    placeholder="e.g., Kitchen, Bathroom, Living room..."
                    value={formData.roomType}
                    onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upload photos or videos</h3>
              <p className="text-muted-foreground">Help us understand the issue better with visual references</p>
              
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

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your contact information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
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
                
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <RadioGroup 
                    value={formData.budget} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  >
                    {[
                      "under-200",
                      "200-500", 
                      "500-1000",
                      "1000-plus",
                      "premium"
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <RadioGroupItem value={range} id={range} />
                        <Label htmlFor={range} className="capitalize">
                          {range === "under-200" ? "Under $200" :
                           range === "200-500" ? "$200 - $500" :
                           range === "500-1000" ? "$500 - $1,000" :
                           range === "1000-plus" ? "$1,000+" :
                           "Premium service (no budget limit)"}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Service Address</Label>
                <Textarea 
                  id="address"
                  placeholder="Full address where service is needed"
                  value={formData.contactInfo.address}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    contactInfo: { ...prev.contactInfo, address: e.target.value }
                  }))}
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
                  <CheckCircle className="h-5 w-5" />
                  Quote Generated Successfully!
                </div>
              </div>

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
                    <li>✓ Professional {formData.serviceType.toLowerCase()}</li>
                    <li>✓ All materials and supplies</li>
                    <li>✓ Cleanup after completion</li>
                    <li>✓ 1-year warranty on work</li>
                    <li>✓ Licensed and insured technician</li>
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
                          className={cn("p-3 pointer-events-auto")}
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
                  (step === 2 && !formData.urgency) ||
                  (step === 3 && !formData.problemDescription) ||
                  (step === 5 && (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.phone))
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