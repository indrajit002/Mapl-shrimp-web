import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Globe, Shield, Clock, CheckCircle, Download, ExternalLink, Truck, Package, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shrimp-farm.jpg";

const Importer = () => {
  const importServices = [
    {
      id: 1,
      title: "Fresh Shrimp Import",
      description: "Premium fresh shrimp delivered within 24-48 hours of harvest",
      features: ["Temperature controlled shipping", "HACCP certified processing", "Real-time tracking"],
      price: "From $12/kg",
      minimum: "500kg",
      delivery: "24-48 hours",
      featured: true
    },
    {
      id: 2,
      title: "Frozen Shrimp Import",
      description: "Flash-frozen shrimp maintaining peak quality and freshness",
      features: ["IQF freezing technology", "12-month shelf life", "Bulk packaging options"],
      price: "From $8/kg",
      minimum: "1000kg",
      delivery: "5-7 days",
      featured: false
    },
    {
      id: 3,
      title: "Value-Added Products",
      description: "Processed shrimp products ready for retail and food service",
      features: ["Pre-cooked options", "Custom packaging", "Private labeling"],
      price: "From $15/kg",
      minimum: "2000kg",
      delivery: "7-10 days",
      featured: false
    }
  ];

  const requirements = [
    {
      category: "Documentation",
      items: [
        "Import license and permits",
        "Health certificates (HACCP, BRC)",
        "Origin certificates",
        "Commercial invoice",
        "Packing list",
        "Bill of lading"
      ]
    },
    {
      category: "Quality Standards",
      items: [
        "ASC or BAP certification",
        "No antibiotics or chemicals",
        "Size and grade specifications",
        "Temperature requirements",
        "Packaging standards"
      ]
    },
    {
      category: "Logistics",
      items: [
        "Cold chain management",
        "Customs clearance support",
        "Insurance coverage",
        "Delivery scheduling",
        "Quality inspection"
      ]
    }
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸", status: "Active", volume: "500 tons/month" },
    { name: "European Union", flag: "🇪🇺", status: "Active", volume: "300 tons/month" },
    { name: "Japan", flag: "🇯🇵", status: "Active", volume: "200 tons/month" },
    { name: "Canada", flag: "🇨🇦", status: "Active", volume: "150 tons/month" },
    { name: "Australia", flag: "🇦🇺", status: "Active", volume: "100 tons/month" },
    { name: "Singapore", flag: "🇸🇬", status: "Active", volume: "80 tons/month" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Inquiry & Quotation",
      description: "Submit your requirements and receive detailed pricing",
      icon: <FileText className="h-6 w-6" />,
      duration: "24 hours"
    },
    {
      step: 2,
      title: "Order Confirmation",
      description: "Confirm specifications and place your order",
      icon: <CheckCircle className="h-6 w-6" />,
      duration: "Same day"
    },
    {
      step: 3,
      title: "Production & Processing",
      description: "Harvest and process according to your specifications",
      icon: <Package className="h-6 w-6" />,
      duration: "2-3 days"
    },
    {
      step: 4,
      title: "Quality Inspection",
      description: "Comprehensive quality checks and certification",
      icon: <Shield className="h-6 w-6" />,
      duration: "1 day"
    },
    {
      step: 5,
      title: "Shipping & Logistics",
      description: "Temperature-controlled shipping to your destination",
      icon: <Truck className="h-6 w-6" />,
      duration: "1-7 days"
    },
    {
      step: 6,
      title: "Delivery & Support",
      description: "Delivery confirmation and ongoing support",
      icon: <Globe className="h-6 w-6" />,
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6">
                Import Premium Shrimp
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Direct import of sustainably-farmed shrimp from Madagascar to your market
              </p>
            </div>
          </div>
        </section>

        {/* Import Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Import Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {importServices.map((service, index) => (
                <Card key={service.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      {service.featured && (
                        <Badge className="bg-coral-400/10 text-coral-400 border-coral-400">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-ocean-900">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Price:</span>
                          <span className="ml-2 font-semibold text-ocean-500">{service.price}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Min Order:</span>
                          <span className="ml-2 font-semibold">{service.minimum}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Delivery:</span>
                          <span className="ml-2 font-semibold">{service.delivery}</span>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-ocean-700 hover:bg-ocean-900 hover:scale-105 transition-all duration-300">
                        <Link to="/import-quote">Request Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Import Process */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Import Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-ocean-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Documentation */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Import Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <Card key={req.category} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Global Import Network
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <div key={country.name} className="flex items-center justify-between p-4 bg-card rounded-lg hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <h3 className="font-semibold text-ocean-900">{country.name}</h3>
                      <p className="text-sm text-muted-foreground">{country.volume}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">{country.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Import Premium Shrimp?
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              Get started with your import requirements and receive a detailed quotation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-ocean-700 hover:bg-sand-200 hover:scale-105 transition-all duration-300">
                <Link to="/import-quote">
                  <Ship className="mr-2 h-5 w-5" />
                  Request Import Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Download Import Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Importer;
