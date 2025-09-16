import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Globe, Shield, Clock, CheckCircle, Download, ExternalLink, Truck, Package, FileText, Award, Users, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shrimp-farm.jpg";

const Exporter = () => {
  const exportCapabilities = [
    {
      id: 1,
      title: "Fresh Shrimp Export",
      description: "Premium fresh shrimp exported within 24 hours of harvest",
      capacity: "50 tons/month",
      destinations: ["EU", "USA", "Japan", "Canada"],
      certifications: ["ASC", "BAP", "HACCP"],
      featured: true
    },
    {
      id: 2,
      title: "Frozen Shrimp Export",
      description: "Flash-frozen shrimp with 12-month shelf life",
      capacity: "200 tons/month",
      destinations: ["Global", "Asia-Pacific", "Middle East"],
      certifications: ["ASC", "BAP", "HACCP", "BRC"],
      featured: false
    },
    {
      id: 3,
      title: "Value-Added Products",
      description: "Processed and ready-to-eat shrimp products",
      capacity: "30 tons/month",
      destinations: ["EU", "USA", "Australia"],
      certifications: ["ASC", "BAP", "HACCP", "BRC", "SQF"],
      featured: false
    }
  ];

  const exportProcess = [
    {
      step: 1,
      title: "Order Processing",
      description: "Receive and process export orders with detailed specifications",
      icon: <FileText className="h-6 w-6" />,
      duration: "24 hours"
    },
    {
      step: 2,
      title: "Production Planning",
      description: "Schedule harvest and processing according to order requirements",
      icon: <Clock className="h-6 w-6" />,
      duration: "1-2 days"
    },
    {
      step: 3,
      title: "Quality Control",
      description: "Comprehensive quality testing and certification",
      icon: <Shield className="h-6 w-6" />,
      duration: "1 day"
    },
    {
      step: 4,
      title: "Packaging & Labeling",
      description: "Custom packaging and labeling according to destination requirements",
      icon: <Package className="h-6 w-6" />,
      duration: "1 day"
    },
    {
      step: 5,
      title: "Documentation",
      description: "Prepare all export documentation and certificates",
      icon: <FileText className="h-6 w-6" />,
      duration: "1 day"
    },
    {
      step: 6,
      title: "Shipping & Delivery",
      description: "Temperature-controlled shipping to destination port",
      icon: <Ship className="h-6 w-6" />,
      duration: "3-14 days"
    }
  ];

  const certifications = [
    {
      name: "ASC Certified",
      description: "Aquaculture Stewardship Council certification for responsible farming",
      status: "Active",
      validUntil: "2026-12-31"
    },
    {
      name: "BAP 4-Star",
      description: "Best Aquaculture Practices certification across all production stages",
      status: "Active",
      validUntil: "2025-08-15"
    },
    {
      name: "HACCP",
      description: "Hazard Analysis Critical Control Points food safety management",
      status: "Active",
      validUntil: "2025-06-10"
    },
    {
      name: "BRC Global Standard",
      description: "British Retail Consortium global standard for food safety",
      status: "Active",
      validUntil: "2025-03-20"
    }
  ];

  const globalMarkets = [
    {
      region: "Europe",
      countries: ["Germany", "France", "Netherlands", "Belgium", "Italy"],
      volume: "150 tons/month",
      growth: "+15%",
      status: "Expanding"
    },
    {
      region: "North America",
      countries: ["United States", "Canada"],
      volume: "100 tons/month",
      growth: "+20%",
      status: "Growing"
    },
    {
      region: "Asia-Pacific",
      countries: ["Japan", "Singapore", "Australia", "South Korea"],
      volume: "80 tons/month",
      growth: "+25%",
      status: "Rapid Growth"
    },
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar"],
      volume: "40 tons/month",
      growth: "+30%",
      status: "Emerging"
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "Water Recycling",
      value: "95%",
      description: "Advanced water treatment and recycling systems"
    },
    {
      metric: "Carbon Footprint",
      value: "60%",
      description: "Reduction in carbon emissions through renewable energy"
    },
    {
      metric: "Zero Waste",
      value: "100%",
      description: "All by-products recycled or repurposed"
    },
    {
      metric: "Local Employment",
      value: "1,200+",
      description: "Jobs created in local communities"
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
                Export Excellence
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Premium sustainable shrimp exports from Madagascar to global markets
              </p>
            </div>
          </div>
        </section>

        {/* Export Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Export Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {exportCapabilities.map((capability, index) => (
                <Card key={capability.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                      {capability.featured && (
                        <Badge className="bg-coral-400/10 text-coral-400 border-coral-400">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{capability.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-ocean-900">Capacity:</h4>
                        <p className="text-sm text-muted-foreground">{capability.capacity}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-ocean-900">Key Destinations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {capability.destinations.map((dest, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-ocean-900">Certifications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {capability.certifications.map((cert, idx) => (
                            <Badge key={idx} className="bg-ocean-500/10 text-ocean-500 text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full bg-ocean-700 hover:bg-ocean-900 hover:scale-105 transition-all duration-300">
                        <Link to="/export-quote">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Export Process */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Export Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exportProcess.map((step, index) => (
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

        {/* Global Markets */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Global Market Presence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {globalMarkets.map((market, index) => (
                <Card key={market.region} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{market.region}</CardTitle>
                    <CardDescription>{market.countries.join(", ")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Volume:</span>
                          <span className="ml-2 font-semibold text-ocean-500">{market.volume}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Growth:</span>
                          <span className="ml-2 font-semibold text-green-600">{market.growth}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Badge className="bg-green-100 text-green-700">{market.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Export Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={cert.name} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-ocean-500/10 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-ocean-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-ocean-900">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">{cert.status}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Valid Until:</span>
                      <span className="font-semibold">{cert.validUntil}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Sustainable Export Practices
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={metric.metric} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-ocean-500" />
                  </div>
                  <div className="text-3xl font-bold text-ocean-500 mb-2">{metric.value}</div>
                  <h3 className="font-bold text-ocean-900 mb-2">{metric.metric}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Partner with Madagascar's Leading Shrimp Exporter
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              Join our global network of importers and distributors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-ocean-700 hover:bg-sand-200 hover:scale-105 transition-all duration-300">
                <Link to="/export-quote">
                  <Ship className="mr-2 h-5 w-5" />
                  Request Export Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Download Export Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Exporter;
