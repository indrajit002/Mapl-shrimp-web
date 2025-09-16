import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Handshake, Globe, Users, Award, ExternalLink, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-shrimp-farm.jpg";

const Partnerships = () => {
  const currentPartners = [
    {
      id: 1,
      name: "European Seafood Distributors",
      type: "Distribution",
      region: "Europe",
      description: "Leading distributor of premium sustainable seafood across 15 European countries.",
      logo: "ESD",
      partnership: "Exclusive Distribution",
      duration: "2019-Present",
      featured: true
    },
    {
      id: 2,
      name: "Asian Pacific Aquaculture Network",
      type: "Industry Association",
      region: "Asia-Pacific",
      description: "Collaborative network promoting sustainable aquaculture practices across the Asia-Pacific region.",
      logo: "APAN",
      partnership: "Knowledge Sharing",
      duration: "2020-Present",
      featured: true
    },
    {
      id: 3,
      name: "University of Antananarivo",
      type: "Academic",
      region: "Madagascar",
      description: "Research collaboration in marine biology and sustainable aquaculture development.",
      logo: "UAT",
      partnership: "Research & Development",
      duration: "2018-Present",
      featured: false
    },
    {
      id: 4,
      name: "Madagascar Ministry of Fisheries",
      type: "Government",
      region: "Madagascar",
      description: "Regulatory compliance and policy development for sustainable aquaculture practices.",
      logo: "MOF",
      partnership: "Regulatory Partnership",
      duration: "2017-Present",
      featured: false
    },
    {
      id: 5,
      name: "Sustainable Seafood Alliance",
      type: "NGO",
      region: "Global",
      description: "International alliance promoting sustainable seafood practices and ocean conservation.",
      logo: "SSA",
      partnership: "Sustainability Initiative",
      duration: "2021-Present",
      featured: false
    },
    {
      id: 6,
      name: "Nordic Aquaculture Group",
      type: "Technology",
      region: "Nordic Countries",
      description: "Advanced aquaculture technology and equipment for sustainable farming operations.",
      logo: "NAG",
      partnership: "Technology Transfer",
      duration: "2022-Present",
      featured: false
    }
  ];

  const partnershipTypes = [
    {
      type: "Distribution Partners",
      description: "Expand your market reach with our premium sustainable shrimp products",
      benefits: [
        "Exclusive regional distribution rights",
        "Marketing support and materials",
        "Competitive pricing and terms",
        "Quality assurance and certification support"
      ],
      requirements: [
        "Established seafood distribution network",
        "Food safety certifications (HACCP, BRC)",
        "Cold chain logistics capability",
        "Minimum annual volume commitment"
      ]
    },
    {
      type: "Research Collaborations",
      description: "Join our research initiatives in sustainable aquaculture innovation",
      benefits: [
        "Access to cutting-edge research facilities",
        "Joint publication opportunities",
        "Technology transfer agreements",
        "Student exchange programs"
      ],
      requirements: [
        "Academic or research institution",
        "Relevant expertise in aquaculture/marine science",
        "Proven research track record",
        "Commitment to sustainable practices"
      ]
    },
    {
      type: "Technology Partners",
      description: "Develop and implement innovative aquaculture technologies together",
      benefits: [
        "Pilot testing opportunities",
        "Technology validation support",
        "Market access for new technologies",
        "Joint intellectual property development"
      ],
      requirements: [
        "Innovative aquaculture technology",
        "Proven technology performance",
        "Scalability potential",
        "Environmental sustainability focus"
      ]
    },
    {
      type: "NGO Partnerships",
      description: "Collaborate on environmental and social impact initiatives",
      benefits: [
        "Community development programs",
        "Environmental conservation projects",
        "Capacity building initiatives",
        "Impact measurement and reporting"
      ],
      requirements: [
        "Registered non-profit organization",
        "Relevant environmental/social focus",
        "Local community connections",
        "Transparent reporting practices"
      ]
    }
  ];

  const successStories = [
    {
      title: "European Market Expansion",
      partner: "European Seafood Distributors",
      result: "300% increase in European sales over 3 years",
      description: "Through our strategic partnership, we successfully introduced MAPL Shrimp to 15 European markets, establishing ourselves as a premium sustainable seafood brand.",
      metrics: ["15 countries", "300% growth", "€2.5M revenue"]
    },
    {
      title: "Research Breakthrough",
      partner: "University of Antananarivo",
      result: "5 peer-reviewed publications and 2 patents",
      description: "Our collaborative research has led to significant breakthroughs in water recycling technology, resulting in 95% water reuse efficiency.",
      metrics: ["5 publications", "2 patents", "95% efficiency"]
    },
    {
      title: "Community Impact",
      partner: "Sustainable Seafood Alliance",
      result: "1,200+ local jobs created",
      description: "Through our partnership, we've created over 1,200 sustainable jobs in local communities while maintaining environmental standards.",
      metrics: ["1,200 jobs", "15 communities", "100% local hiring"]
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
                Strategic Partnerships
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Building a sustainable future through collaboration with industry leaders, researchers, and communities worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                  Why Partner With Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At MAPL Shrimp, we believe that sustainable aquaculture requires collaboration across 
                  the entire value chain. Our partnerships span distribution, research, technology, and 
                  community development, creating mutual value while advancing our shared mission of 
                  environmental stewardship.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Proven track record of successful partnerships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Premium quality products with international certifications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Commitment to sustainability and social impact</p>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src={heroImage}
                  alt="Partnership collaboration at MAPL Shrimp"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Current Partners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <Card key={partner.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-ocean-500/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-ocean-500">{partner.logo}</span>
                      </div>
                      {partner.featured && (
                        <Badge className="bg-coral-400/10 text-coral-400 border-coral-400">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <CardDescription className="text-sm">{partner.type} • {partner.region}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Partnership:</span>
                        <span className="font-semibold">{partner.partnership}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{partner.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card key={type.type} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{type.type}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {type.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-coral-400 rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Partnership Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={story.title} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg">{story.title}</CardTitle>
                    <CardDescription className="text-sm">{story.partner}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{story.description}</p>
                    <div className="space-y-2">
                      <div className="text-lg font-bold text-ocean-500">{story.result}</div>
                      <div className="flex flex-wrap gap-1">
                        {story.metrics.map((metric, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Partnership Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">Initial Contact</h3>
                <p className="text-sm text-muted-foreground">Reach out to discuss partnership opportunities</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">Evaluation</h3>
                <p className="text-sm text-muted-foreground">We assess mutual fit and alignment</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">Agreement</h3>
                <p className="text-sm text-muted-foreground">Develop and sign partnership agreement</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">Launch</h3>
                <p className="text-sm text-muted-foreground">Begin collaboration and track progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              Join our network of partners committed to sustainable aquaculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-ocean-700 hover:bg-sand-200">
                <Handshake className="mr-2 h-5 w-5" />
                Start Partnership Discussion
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Download Partnership Guide
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                partnerships@maplshrimp.mg
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +261 20 22 123 45
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnerships;
