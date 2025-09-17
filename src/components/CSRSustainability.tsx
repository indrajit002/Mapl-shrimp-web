import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ascCertificationLogo from "@/assets/asc-certification-logo.jpg";
import bapCertificationLogo from "@/assets/bap-certification-logo.jpg";
import haccpCertificationLogo from "@/assets/haccp-certification-logo.jpg";
import isoCertificationLogo from "@/assets/iso-certification-logo.jpg";
import communityEducation from "@/assets/community-education.jpg";
import localFishermen from "@/assets/local-fishermen.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import cleanWaterAccess from "@/assets/clean-water-access.jpg";
import sustainableAquaculture from "@/assets/sustainable-aquaculture.jpg";
import { 
  Leaf, 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Shield, 
  Recycle, 
  Droplets,
  TreePine,
  Fish,
  Waves,
  Sun,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star
} from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
  logo: string;
  status: "active" | "pending" | "renewed";
}

interface ImpactStory {
  title: string;
  description: string;
  impact: string;
  image: string;
  category: "environment" | "community" | "education" | "health";
  year: string;
}

interface SustainabilityMetric {
  category: string;
  value: string;
  target: string;
  unit: string;
  icon: React.ReactNode;
  color: string;
  trend: "up" | "down" | "stable";
}

const CSRSustainability = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const certifications: Certification[] = [
    {
      name: "ASC (Aquaculture Stewardship Council)",
      issuer: "ASC International",
      year: "2023",
      description: "Certification for responsible aquaculture practices",
      logo: ascCertificationLogo,
      status: "active"
    },
    {
      name: "BAP (Best Aquaculture Practices)",
      issuer: "Global Aquaculture Alliance",
      year: "2023",
      description: "Comprehensive certification for aquaculture facilities",
      logo: bapCertificationLogo,
      status: "active"
    },
    {
      name: "HACCP",
      issuer: "International HACCP Alliance",
      year: "2023",
      description: "Hazard Analysis Critical Control Points certification",
      logo: haccpCertificationLogo,
      status: "active"
    },
    {
      name: "BRC Grade A",
      issuer: "British Retail Consortium",
      year: "2023",
      description: "Food safety certification for processing facilities",
      logo: isoCertificationLogo,
      status: "active"
    },
    {
      name: "ISO 14001",
      issuer: "International Organization for Standardization",
      year: "2023",
      description: "Environmental management systems certification",
      logo: isoCertificationLogo,
      status: "active"
    },
    {
      name: "Carbon Neutral",
      issuer: "Carbon Trust",
      year: "2024",
      description: "Certification for carbon-neutral operations",
      logo: bapCertificationLogo,
      status: "active"
    }
  ];

  const impactStories: ImpactStory[] = [
    {
      title: "Ocean Conservation Initiative",
      description: "Established 500-hectare marine protected area to preserve coral reefs and marine biodiversity",
      impact: "Protected 200+ marine species and restored 15 coral reef sites",
      image: sustainableAquaculture,
      category: "environment",
      year: "2023"
    },
    {
      title: "Community Education Program",
      description: "Launched sustainable fishing education program for local communities",
      impact: "Trained 500+ local fishermen in sustainable practices",
      image: communityEducation,
      category: "education",
      year: "2023"
    },
    {
      title: "Clean Water Access",
      description: "Installed water purification systems in 10 local villages",
      impact: "Provided clean water access to 5,000+ community members",
      image: cleanWaterAccess,
      category: "health",
      year: "2023"
    },
    {
      title: "Women's Empowerment",
      description: "Created employment opportunities and skills training for women in aquaculture",
      impact: "Employed 200+ women in leadership and technical roles",
      image: womenEmpowerment,
      category: "community",
      year: "2023"
    }
  ];

  const sustainabilityMetrics: SustainabilityMetric[] = [
    {
      category: "Carbon Footprint",
      value: "0",
      target: "0",
      unit: "tons CO2",
      icon: <Leaf className="h-6 w-6" />,
      color: "text-green-500",
      trend: "stable"
    },
    {
      category: "Water Usage",
      value: "95%",
      target: "100%",
      unit: "recycled",
      icon: <Droplets className="h-6 w-6" />,
      color: "text-blue-500",
      trend: "up"
    },
    {
      category: "Waste Reduction",
      value: "98%",
      target: "100%",
      unit: "zero waste",
      icon: <Recycle className="h-6 w-6" />,
      color: "text-emerald-500",
      trend: "up"
    },
    {
      category: "Energy Efficiency",
      value: "85%",
      target: "90%",
      unit: "renewable",
      icon: <Sun className="h-6 w-6" />,
      color: "text-yellow-500",
      trend: "up"
    },
    {
      category: "Biodiversity",
      value: "200+",
      target: "250+",
      unit: "species protected",
      icon: <Fish className="h-6 w-6" />,
      color: "text-purple-500",
      trend: "up"
    },
    {
      category: "Community Impact",
      value: "5,000+",
      target: "10,000+",
      unit: "lives improved",
      icon: <Users className="h-6 w-6" />,
      color: "text-coral-500",
      trend: "up"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "environment": return <TreePine className="h-5 w-5" />;
      case "community": return <Users className="h-5 w-5" />;
      case "education": return <Award className="h-5 w-5" />;
      case "health": return <Heart className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "environment": return "bg-green-500";
      case "community": return "bg-blue-500";
      case "education": return "bg-purple-500";
      case "health": return "bg-red-500";
      default: return "bg-ocean-500";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "📈";
      case "down": return "📉";
      case "stable": return "➡️";
      default: return "➡️";
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-8 animate-fade-in-up">
            Sustainability & Social Impact
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Committed to environmental stewardship, community development, and sustainable aquaculture practices
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent p-0 mb-8">
            <TabsTrigger 
              value="overview"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-semibold transition-all duration-300 text-center min-h-[70px] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-green-100/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=inactive]:text-green-600 data-[state=inactive]:hover:text-green-700 data-[state=inactive]:hover:bg-green-50"
            >
              <Leaf className="h-5 w-5" />
              <span className="text-sm sm:text-base">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="certifications"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-semibold transition-all duration-300 text-center min-h-[70px] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-green-100/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=inactive]:text-green-600 data-[state=inactive]:hover:text-green-700 data-[state=inactive]:hover:bg-green-50"
            >
              <Award className="h-5 w-5" />
              <span className="text-sm sm:text-base">Certifications</span>
            </TabsTrigger>
            <TabsTrigger 
              value="impact"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-semibold transition-all duration-300 text-center min-h-[70px] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-green-100/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=inactive]:text-green-600 data-[state=inactive]:hover:text-green-700 data-[state=inactive]:hover:bg-green-50"
            >
              <Heart className="h-5 w-5" />
              <span className="text-sm sm:text-base">Impact Stories</span>
            </TabsTrigger>
            <TabsTrigger 
              value="metrics"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-semibold transition-all duration-300 text-center min-h-[70px] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-green-100/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=inactive]:text-green-600 data-[state=inactive]:hover:text-green-700 data-[state=inactive]:hover:bg-green-50"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm sm:text-base">Metrics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Sustainability Overview */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-green-100 rounded-2xl shadow-lg">
                    <Leaf className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-green-900">Our Commitment</h3>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100/50 shadow-lg">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    At MAPL, sustainability isn't just a goal—it's our foundation. We've built our entire operation 
                    around principles that protect our oceans, support our communities, and ensure a thriving future 
                    for generations to come.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/80 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-base font-medium text-muted-foreground">Years of Sustainability</div>
                  </div>
                  <div className="p-6 bg-white/80 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-base font-medium text-muted-foreground">Eco-Friendly Practices</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={sustainableAquaculture}
                  alt="Sustainable Aquaculture"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid md:grid-cols-3 gap-10">
              <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-5 bg-green-100 rounded-2xl w-fit mb-6 shadow-lg">
                    <Waves className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-900">Environmental Protection</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Protecting marine ecosystems through sustainable farming practices and conservation initiatives
                  </p>
                  <ul className="space-y-3 text-base text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      Zero-waste processing
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      Water recycling systems
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      Marine conservation areas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-5 bg-blue-100 rounded-2xl w-fit mb-6 shadow-lg">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Community Development</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Empowering local communities through education, employment, and sustainable development
                  </p>
                  <ul className="space-y-3 text-base text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      Education programs
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      Employment opportunities
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      Healthcare access
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-5 bg-purple-100 rounded-2xl w-fit mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-purple-900">Innovation & Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Leading aquaculture innovation through research, technology, and continuous improvement
                  </p>
                  <ul className="space-y-3 text-base text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      R&D investments
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      Technology adoption
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      Industry leadership
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-green-900 mb-6">Our Certifications</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Recognized by leading international organizations for our commitment to quality, safety, and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-6">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="h-20 w-auto mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl text-green-900 mb-2">{cert.name}</CardTitle>
                    <CardDescription className="text-base">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <Badge 
                      className={`px-4 py-2 text-sm font-medium ${
                        cert.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : cert.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                    </Badge>
                    <p className="text-base text-muted-foreground leading-relaxed">{cert.description}</p>
                    <div className="text-base font-semibold text-green-600">Certified {cert.year}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-green-900 mb-6">Impact Stories</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Real stories of positive change in our communities and environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {impactStories.map((story, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className={`${getCategoryColor(story.category)} text-white px-3 py-2 text-sm font-medium`}>
                        {getCategoryIcon(story.category)}
                        <span className="ml-2">{story.category}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge variant="outline" className="bg-white/90 text-green-800 px-3 py-2 text-sm font-medium">
                        {story.year}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-green-900 mb-4">{story.title}</h4>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{story.description}</p>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Star className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-900 text-lg">Impact</span>
                      </div>
                      <p className="text-base text-green-800 leading-relaxed">{story.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-green-900 mb-6">Sustainability Metrics</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Track our progress towards environmental and social goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sustainabilityMetrics.map((metric, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className={`mx-auto ${metric.color}`}>
                      {metric.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-green-900 mb-3">{metric.category}</h4>
                    <div className="text-4xl font-bold text-green-600 mb-3">{metric.value}</div>
                    <div className="text-base text-muted-foreground mb-4">{metric.unit}</div>
                    <div className="flex items-center justify-center gap-3 text-base">
                      <span className="text-muted-foreground">Target: {metric.target}</span>
                      <span className="text-xl">{getTrendIcon(metric.trend)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-12">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-xl hover:shadow-2xl border-0 px-10 py-5 text-xl font-semibold rounded-2xl">
                <ExternalLink className="h-6 w-6 mr-3" />
                View Full Sustainability Report
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CSRSustainability;
