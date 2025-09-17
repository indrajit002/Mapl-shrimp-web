import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactMap = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks! We'll be in touch within 48 hours.",
      description: "Our team will review your inquiry and respond promptly.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mahajanga, Madagascar",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+261 32 11 234 56",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@maplshrimp.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Hours",
      value: "Mon-Fri 8AM-6PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-ocean-50 via-slate-50 to-coral-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl eb-garamond font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto eb-garamond-text">
            Ready to experience premium Madagascar shrimp? Contact our team for samples, 
            pricing, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Button type="submit" size="lg" className="w-full bg-gradient-ocean hover:bg-gradient-aqua text-white shadow-lg hover:shadow-xl border-0">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  We'll reply within 48 hours
                </p>
              </div>
            </form>
          </Card>

          {/* Map & Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl eb-garamond font-semibold text-foreground mb-6">
                Visit Our Farm
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden border-border/50">
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237855.0360248468!2d72.57394798437498!3d21.3313591148347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be1ca13dd8bbb35%3A0x31829df1617753ff!2sDandi%2C%20Gujarat%20394540%2C%20India!5e0!3m2!1sen!2sus!4v1757847510908!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAPL Shrimp Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;