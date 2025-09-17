import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import partnerAquafreshLogo from "@/assets/partner-aquafresh-logo.jpg";
import partnerOceanFreshLogo from "@/assets/partner-ocean-fresh-logo.jpg";
import partnerIndianOceanLogo from "@/assets/partner-indian-ocean-logo.jpg";
import partnerMinistryLogo from "@/assets/partner-ministry-logo.jpg";
import partnerRoyalPalaceLogo from "@/assets/partner-royal-palace-logo.jpg";
import clientTajLogo from "@/assets/client-taj-logo.jpg";
import clientOberoiLogo from "@/assets/client-oberoi-logo.jpg";
import clientRelianceLogo from "@/assets/client-reliance-logo.jpg";
import clientBigbasketLogo from "@/assets/client-bigbasket-logo.jpg";
import { 
  Globe, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  CheckCircle
} from "lucide-react";

interface Partner {
  id: string;
  name: string;
  country: string;
  region: string;
  logo: string;
  type: "distributor" | "retailer" | "restaurant" | "processor" | "government";
  relationship: string;
  since: string;
  description: string;
  achievements: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface Client {
  id: string;
  name: string;
  country: string;
  logo: string;
  industry: string;
  partnership: string;
  testimonial: string;
  rating: number;
}

const GlobalPartners = () => {
  const [activeRegion, setActiveRegion] = useState("all");
  const [currentPartner, setCurrentPartner] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      id: "european-distributor",
      name: "AquaFood Europe",
      country: "Netherlands",
      region: "europe",
      logo: partnerAquafreshLogo,
      type: "distributor",
      relationship: "Exclusive Distributor",
      since: "2018",
      description: "Leading European distributor specializing in premium seafood products",
      achievements: [
        "Distributed 1000+ tons annually",
        "Expanded to 15 European countries",
        "Maintained 99% customer satisfaction",
        "Achieved 40% year-over-year growth"
      ],
      testimonial: {
        quote: "MAPL's commitment to quality and sustainability makes them our preferred partner. Their products consistently exceed our customers' expectations.",
        author: "Hans van der Berg",
        position: "CEO, AquaFood Europe"
      }
    },
    {
      id: "asian-retailer",
      name: "Ocean Fresh Asia",
      country: "Singapore",
      region: "asia",
      logo: partnerOceanFreshLogo,
      type: "retailer",
      relationship: "Premium Retail Partner",
      since: "2020",
      description: "High-end seafood retailer serving luxury hotels and restaurants across Asia",
      achievements: [
        "Serves 200+ luxury establishments",
        "Premium product positioning",
        "Zero quality complaints",
        "Award-winning product range"
      ],
      testimonial: {
        quote: "The quality and consistency of MAPL's shrimp products have helped us maintain our reputation as Asia's premier seafood retailer.",
        author: "Li Wei Ming",
        position: "Managing Director, Ocean Fresh Asia"
      }
    },
    {
      id: "american-processor",
      name: "Atlantic Seafood Co.",
      country: "United States",
      region: "americas",
      logo: partnerIndianOceanLogo,
      type: "processor",
      relationship: "Processing Partner",
      since: "2015",
      description: "Major seafood processor specializing in value-added shrimp products",
      achievements: [
        "Processed 500+ tons monthly",
        "Custom product development",
        "HACCP certified facility",
        "Innovation partnership"
      ],
      testimonial: {
        quote: "Our partnership with MAPL has been instrumental in developing innovative shrimp products that meet the highest quality standards.",
        author: "Michael Rodriguez",
        position: "VP Operations, Atlantic Seafood Co."
      }
    },
    {
      id: "african-government",
      name: "Madagascar Ministry of Fisheries",
      country: "Madagascar",
      region: "africa",
      logo: partnerMinistryLogo,
      type: "government",
      relationship: "Regulatory Partner",
      since: "2000",
      description: "Government agency overseeing sustainable aquaculture development",
      achievements: [
        "Policy development support",
        "Sustainable farming guidelines",
        "Export certification",
        "Community development programs"
      ]
    },
    {
      id: "middle-east-restaurant",
      name: "Royal Palace Hotels",
      country: "UAE",
      region: "middle-east",
      logo: partnerRoyalPalaceLogo,
      type: "restaurant",
      relationship: "Premium Restaurant Chain",
      since: "2022",
      description: "Luxury hotel chain serving premium seafood across the Middle East",
      achievements: [
        "15 luxury properties",
        "Michelin-starred restaurants",
        "Exclusive supplier status",
        "Custom menu development"
      ],
      testimonial: {
        quote: "MAPL's premium shrimp products have become a signature ingredient in our award-winning restaurants across the region.",
        author: "Sheikh Ahmed Al-Rashid",
        position: "Food & Beverage Director, Royal Palace Hotels"
      }
    }
  ];

  const clients: Client[] = [
    {
      id: "client-1",
      name: "Tokyo Sushi Masters",
      country: "Japan",
      logo: clientTajLogo,
      industry: "Restaurant",
      partnership: "Premium Supplier",
      testimonial: "Exceptional quality and consistency. Our customers love the premium taste.",
      rating: 5
    },
    {
      id: "client-2",
      name: "Paris Fine Dining",
      country: "France",
      logo: clientOberoiLogo,
      industry: "Restaurant",
      partnership: "Exclusive Partner",
      testimonial: "The best shrimp we've ever worked with. Truly premium quality.",
      rating: 5
    },
    {
      id: "client-3",
      name: "New York Seafood Market",
      country: "USA",
      logo: clientRelianceLogo,
      industry: "Retail",
      partnership: "Key Supplier",
      testimonial: "Reliable supply and outstanding quality. Our customers keep coming back.",
      rating: 5
    },
    {
      id: "client-4",
      name: "Sydney Harbor Restaurants",
      country: "Australia",
      logo: clientBigbasketLogo,
      industry: "Restaurant",
      partnership: "Premium Supplier",
      testimonial: "Sustainable and delicious. Perfect for our eco-conscious customers.",
      rating: 5
    }
  ];

  const regions = [
    { id: "all", name: "All Regions", count: partners.length },
    { id: "europe", name: "Europe", count: partners.filter(p => p.region === "europe").length },
    { id: "asia", name: "Asia", count: partners.filter(p => p.region === "asia").length },
    { id: "americas", name: "Americas", count: partners.filter(p => p.region === "americas").length },
    { id: "africa", name: "Africa", count: partners.filter(p => p.region === "africa").length },
    { id: "middle-east", name: "Middle East", count: partners.filter(p => p.region === "middle-east").length }
  ];

  const filteredPartners = activeRegion === "all" 
    ? partners 
    : partners.filter(partner => partner.region === activeRegion);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "distributor": return "🚚";
      case "retailer": return "🏪";
      case "restaurant": return "🍽️";
      case "processor": return "🏭";
      case "government": return "🏛️";
      default: return "🤝";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "distributor": return "bg-blue-100 text-blue-800";
      case "retailer": return "bg-green-100 text-green-800";
      case "restaurant": return "bg-purple-100 text-purple-800";
      case "processor": return "bg-orange-100 text-orange-800";
      case "government": return "bg-slate-100 text-slate-800";
      default: return "bg-ocean-100 text-ocean-800";
    }
  };

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % filteredPartners.length);
  };

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + filteredPartners.length) % filteredPartners.length);
  };

  const currentPartnerData = filteredPartners[currentPartner] || partners[0];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200 via-blue-100 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6 animate-fade-in-up hover-underline-fade cursor-pointer" style={{ color: '#000000' }}>
            Global Partners & Clients
          </h2>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up eb-garamond-text" style={{ animationDelay: "0.2s", color: '#000000' }}>
            Trusted by leading companies and organizations worldwide for premium shrimp products and sustainable practices
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => {
                setActiveRegion(region.id);
                setCurrentPartner(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl ${
                activeRegion === region.id
                  ? "bg-white shadow-lg scale-105 font-semibold"
                  : "bg-white/70 hover:bg-white hover:border-2 hover:border-blue-300 backdrop-blur-sm"
              }`}
              style={{ color: '#000000' }}
            >
              {region.name} ({region.count})
            </button>
          ))}
        </div>

        {/* Partner Spotlight */}
        <div className="mb-16">
          <h3 className="text-2xl eb-garamond font-bold text-center text-ocean-900 mb-8">Partner Spotlight</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Partner Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src={currentPartnerData.logo}
                  alt={currentPartnerData.name}
                  className="w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-2xl eb-garamond font-bold text-ocean-900">{currentPartnerData.name}</h4>
                    <Badge className={getTypeColor(currentPartnerData.type)}>
                      {getTypeIcon(currentPartnerData.type)} {currentPartnerData.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {currentPartnerData.country}
                  </div>
                  <p className="text-muted-foreground">{currentPartnerData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/70 rounded-lg border border-ocean-100/50">
                  <div className="text-sm text-muted-foreground">Partnership</div>
                  <div className="font-semibold text-ocean-900">{currentPartnerData.relationship}</div>
                </div>
                <div className="p-4 bg-white/70 rounded-lg border border-ocean-100/50">
                  <div className="text-sm text-muted-foreground">Since</div>
                  <div className="font-semibold text-ocean-900">{currentPartnerData.since}</div>
                </div>
              </div>

              <div>
                <h5 className="eb-garamond font-semibold text-ocean-900 mb-3">Key Achievements</h5>
                <ul className="space-y-2">
                  {currentPartnerData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentPartnerData.testimonial && (
                <Card className="bg-gradient-to-r from-ocean-50 to-blue-50 border-ocean-200">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-ocean-400 mb-4" />
                    <p className="text-muted-foreground italic mb-4">
                      "{currentPartnerData.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold text-ocean-900">{currentPartnerData.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{currentPartnerData.testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Partner Navigation */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h5 className="eb-garamond font-semibold text-ocean-900">All Partners</h5>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevPartner}
                    disabled={filteredPartners.length <= 1}
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextPartner}
                    disabled={filteredPartners.length <= 1}
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredPartners.map((partner, index) => (
                  <button
                    key={partner.id}
                    onClick={() => setCurrentPartner(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ease-out ${
                      currentPartner === index
                        ? "bg-white border-2 border-blue-300 scale-105 shadow-xl"
                        : "bg-white/70 backdrop-blur-sm"
                    }`}
                    style={{ color: '#000000' }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 object-contain rounded bg-white p-1"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-ocean-900">{partner.name}</div>
                        <div className="text-sm text-muted-foreground">{partner.country}</div>
                      </div>
                      <Badge className={getTypeColor(partner.type)}>
                        {getTypeIcon(partner.type)}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl eb-garamond font-bold text-center mb-8" style={{ color: '#000000' }}>What Our Clients Say</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <Card key={client.id} className="bg-white/90 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-3 hover:rotate-2 group">
                <CardContent className="p-6 text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 object-contain mx-auto mb-4 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12"
                  />
                  <h4 className="eb-garamond font-semibold mb-2" style={{ color: '#000000' }}>{client.name}</h4>
                  <div className="text-sm mb-3" style={{ color: '#000000' }}>{client.country}</div>
                  
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 transition-all duration-300 ease-out group-hover:scale-125 ${
                          i < client.rating ? "text-yellow-400 fill-current group-hover:text-yellow-500" : "text-gray-300 group-hover:text-gray-400"
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm italic mb-4 transition-all duration-500 ease-out group-hover:scale-105" style={{ color: '#000000' }}>
                    "{client.testimonial}"
                  </p>
                  
                  <Badge variant="outline" className="text-xs transition-all duration-500 ease-out group-hover:bg-ocean-100 group-hover:border-ocean-300 group-hover:scale-110 group-hover:text-ocean-800">
                    {client.partnership}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Reach Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
            <Globe className="h-12 w-12 text-ocean-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-ocean-900 mb-2">25+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
            <Users className="h-12 w-12 text-coral-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-ocean-900 mb-2">150+</div>
            <div className="text-muted-foreground">Active Partners</div>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
            <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-ocean-900 mb-2">99%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
            <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-ocean-900 mb-2">40%</div>
            <div className="text-muted-foreground">Annual Growth</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl eb-garamond font-bold mb-4" style={{ color: '#000000' }}>Join Our Global Network</h3>
          <p className="mb-8 max-w-2xl mx-auto eb-garamond-text" style={{ color: '#000000' }}>
            Become part of our worldwide network of partners and experience the quality and sustainability that sets us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-ocean hover:bg-gradient-aqua text-white border-0 font-bold" style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2)' }}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Become a Partner
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 font-bold" style={{ color: '#000000', borderColor: '#000000', boxShadow: '0 8px 25px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2)' }}>
              View Partnership Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
