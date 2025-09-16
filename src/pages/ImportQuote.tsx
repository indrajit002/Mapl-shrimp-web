import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send, Package, Truck, Globe, Shield } from "lucide-react";

const ImportQuote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    
    // Import Requirements
    productType: "",
    quantity: "",
    frequency: "",
    deliveryTimeframe: "",
    packagingPreference: "",
    
    // Quality & Certifications
    qualityStandards: [] as string[],
    certifications: [] as string[],
    specialRequirements: "",
    
    // Logistics
    preferredPort: "",
    incoterms: "",
    paymentTerms: "",
    budget: "",
    
    // Additional Information
    message: "",
    urgency: "",
    previousExperience: false,
    source: ""
  });

  const qualityOptions = [
    "ASC Certified",
    "BAP Certified", 
    "HACCP Certified",
    "BRC Certified",
    "SQF Certified",
    "Organic Certified",
    "Halal Certified",
    "Kosher Certified"
  ];

  const frequencyOptions = [
    "One-time",
    "Monthly",
    "Quarterly", 
    "Bi-annually",
    "Annually",
    "As needed"
  ];

  const deliveryOptions = [
    "ASAP",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Flexible"
  ];

  const incotermsOptions = [
    "EXW (Ex Works)",
    "FOB (Free on Board)",
    "CIF (Cost, Insurance & Freight)",
    "CFR (Cost and Freight)",
    "DAP (Delivered at Place)",
    "DDP (Delivered Duty Paid)"
  ];

  const paymentOptions = [
    "T/T in advance",
    "T/T at sight",
    "L/C at sight",
    "L/C 30 days",
    "L/C 60 days",
    "Open account",
    "Other"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Quote Request Submitted!",
        description: "Thank you for your interest. Our team will contact you within 24 hours with a detailed quote.",
      });

      // Reset form
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        website: "",
        productType: "",
        quantity: "",
        frequency: "",
        deliveryTimeframe: "",
        packagingPreference: "",
        qualityStandards: [],
        certifications: [],
        specialRequirements: "",
        preferredPort: "",
        incoterms: "",
        paymentTerms: "",
        budget: "",
        message: "",
        urgency: "",
        previousExperience: false,
        source: ""
      });

      // Redirect after successful submission
      setTimeout(() => {
        navigate("/importer");
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />
      <main role="main">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-slate-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <Button
                variant="ghost"
                onClick={() => navigate("/importer")}
                className="mb-6 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Import Services
              </Button>
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6 animate-fade-in-up">
                Request Import Quote
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Get a personalized quote for our premium shrimp import services. Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-serif text-ocean-900 mb-4">
                    Import Quote Request Form
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Please provide detailed information about your import requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-ocean-900 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Company Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="website">Website (Optional)</Label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Import Requirements */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-ocean-900 flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Import Requirements
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="productType">Product Type *</Label>
                          <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="black-tiger">Black Tiger Prawns</SelectItem>
                              <SelectItem value="vannamei">Vannamei Shrimp</SelectItem>
                              <SelectItem value="value-added">Value-Added Products</SelectItem>
                              <SelectItem value="custom">Custom Products</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="quantity">Quantity (kg/month) *</Label>
                          <Input
                            id="quantity"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange("quantity", e.target.value)}
                            placeholder="e.g., 1000"
                            required
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="frequency">Order Frequency *</Label>
                          <Select value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              {frequencyOptions.map((option) => (
                                <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="deliveryTimeframe">Delivery Timeframe *</Label>
                          <Select value={formData.deliveryTimeframe} onValueChange={(value) => handleInputChange("deliveryTimeframe", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              {deliveryOptions.map((option) => (
                                <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="packagingPreference">Packaging Preference</Label>
                          <Input
                            id="packagingPreference"
                            value={formData.packagingPreference}
                            onChange={(e) => handleInputChange("packagingPreference", e.target.value)}
                            placeholder="e.g., 1kg vacuum packs, 5kg boxes"
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range (USD)</Label>
                          <Input
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => handleInputChange("budget", e.target.value)}
                            placeholder="e.g., $10,000 - $50,000"
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quality & Certifications */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-ocean-900 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Quality & Certifications
                      </h3>
                      <div>
                        <Label className="text-base font-medium">Required Quality Standards</Label>
                        <div className="grid md:grid-cols-2 gap-3 mt-3">
                          {qualityOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={option}
                                checked={formData.qualityStandards.includes(option)}
                                onCheckedChange={(checked) => 
                                  handleArrayChange("qualityStandards", option, checked as boolean)
                                }
                              />
                              <Label htmlFor={option} className="text-sm font-normal">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="specialRequirements">Special Requirements</Label>
                        <Textarea
                          id="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                          placeholder="Any specific quality requirements, processing methods, or special handling needs..."
                          rows={3}
                          className="mt-1 focus:ring-2 focus:ring-ocean-500"
                        />
                      </div>
                    </div>

                    {/* Logistics */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-ocean-900 flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Logistics & Payment
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="preferredPort">Preferred Port of Delivery</Label>
                          <Input
                            id="preferredPort"
                            value={formData.preferredPort}
                            onChange={(e) => handleInputChange("preferredPort", e.target.value)}
                            placeholder="e.g., Port of Los Angeles, Port of Hamburg"
                            className="mt-1 focus:ring-2 focus:ring-ocean-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="incoterms">Preferred Incoterms</Label>
                          <Select value={formData.incoterms} onValueChange={(value) => handleInputChange("incoterms", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select incoterms" />
                            </SelectTrigger>
                            <SelectContent>
                              {incotermsOptions.map((option) => (
                                <SelectItem key={option} value={option.split(' ')[0].toLowerCase()}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="paymentTerms">Payment Terms</Label>
                          <Select value={formData.paymentTerms} onValueChange={(value) => handleInputChange("paymentTerms", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select payment terms" />
                            </SelectTrigger>
                            <SelectContent>
                              {paymentOptions.map((option) => (
                                <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                            <SelectTrigger className="mt-1 focus:ring-2 focus:ring-ocean-500">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - No rush</SelectItem>
                              <SelectItem value="medium">Medium - Within 2 weeks</SelectItem>
                              <SelectItem value="high">High - ASAP</SelectItem>
                              <SelectItem value="urgent">Urgent - Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-ocean-900">Additional Information</h3>
                      <div>
                        <Label htmlFor="message">Additional Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Any additional information, questions, or special requests..."
                          rows={4}
                          className="mt-1 focus:ring-2 focus:ring-ocean-500"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="previousExperience"
                          checked={formData.previousExperience}
                          onCheckedChange={(checked) => handleInputChange("previousExperience", checked as boolean)}
                        />
                        <Label htmlFor="previousExperience" className="text-sm">
                          I have previous experience importing seafood products
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-ocean-700 hover:bg-ocean-900 hover:scale-105 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Quote Request
                          </>
                        )}
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        By submitting this form, you agree to our terms of service and privacy policy.
                        Our team will contact you within 24 hours.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImportQuote;
