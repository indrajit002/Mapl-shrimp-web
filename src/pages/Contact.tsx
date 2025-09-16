import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactMap from "@/components/ContactMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 48 hours.",
    });
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
            <div className="max-w-3xl">
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6 animate-fade-in-up">
                Get in Touch
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                We'd love to hear from you. Reach out for inquiries, partnerships, or to visit our facilities
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-500/20 to-ocean-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Phone className="h-8 w-8 text-ocean-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Phone</h3>
                  <p className="text-muted-foreground">+261 20 22 123 45</p>
                  <p className="text-muted-foreground">+261 33 11 234 56</p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-500/20 to-coral-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Mail className="h-8 w-8 text-coral-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Email</h3>
                  <p className="text-muted-foreground">info@maplshrimp.mg</p>
                  <p className="text-muted-foreground">sales@maplshrimp.mg</p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Location</h3>
                  <p className="text-muted-foreground">Mahajanga Province</p>
                  <p className="text-muted-foreground">Madagascar</p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                  <p className="text-muted-foreground">Sat: 9AM-2PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up group">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50 group-hover:scale-105 transition-all duration-300 ease-out">
                  <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-6 group-hover:text-ocean-700 transition-colors duration-300">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="mt-1 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="mt-1 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="mt-1 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="mt-1 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry..."
                        rows={5}
                        required
                        className="mt-1 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-300"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-ocean-700 hover:bg-ocean-900 hover:scale-105 transition-all duration-300">
                      Send Message
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      We'll reply within 48 hours
                    </p>
                  </form>
                </div>
              </div>

              {/* Map */}
              <div className="animate-scale-in group">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50 group-hover:scale-105 transition-all duration-300 ease-out">
                  <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-6 group-hover:text-ocean-700 transition-colors duration-300">
                    Visit Our Facilities
                  </h2>
                  <ContactMap />
                  <div className="mt-6 p-6 bg-gradient-to-br from-ocean-50/50 to-coral-50/50 rounded-lg border border-ocean-100/50">
                    <h3 className="font-bold text-ocean-900 mb-2">Schedule a Tour</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Experience our sustainable farming practices firsthand. Tours available for 
                      business partners, researchers, and educational groups.
                    </p>
                    <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300">
                      Request Tour Information
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;