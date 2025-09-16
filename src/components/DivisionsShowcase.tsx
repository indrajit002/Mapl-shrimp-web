import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Ship, 
  Factory, 
  Leaf, 
  Users, 
  Award, 
  Globe, 
  ArrowRight, 
  Play,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

interface Division {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats: {
    label: string;
    value: string;
  }[];
  features: string[];
  image: string;
  video?: string;
  location: string;
  established: string;
  employees: string;
  capacity: string;
  certifications: string[];
  description_long: string;
  achievements: string[];
  future_plans: string[];
}

const DivisionsShowcase = () => {
  const [activeDivision, setActiveDivision] = useState("aquaculture");

  const divisions: Division[] = [
    {
      id: "aquaculture",
      name: "Aquaculture Division",
      description: "Our core shrimp farming operations with sustainable practices",
      icon: <Ship className="h-8 w-8" />,
      color: "ocean",
      stats: [
        { label: "Ponds", value: "50+" },
        { label: "Capacity", value: "500 tons/month" },
        { label: "Species", value: "3 varieties" },
        { label: "Sustainability", value: "100%" }
      ],
      features: [
        "Advanced water management systems",
        "Organic feed production",
        "Disease prevention protocols",
        "Biodiversity conservation"
      ],
      image: "/api/placeholder/600/400",
      location: "Mahajanga Province, Madagascar",
      established: "2000",
      employees: "150+",
      capacity: "500 tons/month",
      certifications: ["ASC", "BAP", "HACCP", "Organic"],
      description_long: "Our flagship aquaculture division operates state-of-the-art shrimp farming facilities across Madagascar's pristine coastline. We combine traditional knowledge with cutting-edge technology to produce premium shrimp while maintaining the highest environmental standards.",
      achievements: [
        "First ASC-certified shrimp farm in Madagascar",
        "Zero-waste processing facility",
        "Community development programs",
        "Ocean conservation initiatives"
      ],
      future_plans: [
        "Expansion to 1000 tons/month capacity",
        "New species introduction",
        "Advanced automation systems",
        "Global sustainability partnerships"
      ]
    },
    {
      id: "processing",
      name: "Processing Division",
      description: "State-of-the-art processing and packaging facilities",
      icon: <Factory className="h-8 w-8" />,
      color: "coral",
      stats: [
        { label: "Facilities", value: "3" },
        { label: "Processing Lines", value: "12" },
        { label: "Quality Checks", value: "50+" },
        { label: "Certifications", value: "8" }
      ],
      features: [
        "HACCP certified processing",
        "IQF freezing technology",
        "Traceability systems",
        "Custom packaging solutions"
      ],
      image: "/api/placeholder/600/400",
      location: "Mahajanga Industrial Zone",
      established: "2019",
      employees: "200+",
      capacity: "300 tons/month",
      certifications: ["HACCP", "BRC", "SQF", "ISO 22000"],
      description_long: "Our processing division features cutting-edge technology and strict quality control measures. We process and package our premium shrimp using the latest freezing and packaging technologies to ensure maximum freshness and quality.",
      achievements: [
        "BRC Grade A certification",
        "Automated quality control systems",
        "Custom packaging solutions",
        "International export capabilities"
      ],
      future_plans: [
        "New processing facility construction",
        "Advanced automation implementation",
        "Value-added product development",
        "International expansion"
      ]
    },
    {
      id: "sustainability",
      name: "Sustainability Division",
      description: "Environmental stewardship and community development",
      icon: <Leaf className="h-8 w-8" />,
      color: "green",
      stats: [
        { label: "Carbon Footprint", value: "Neutral" },
        { label: "Waste Reduction", value: "95%" },
        { label: "Community Projects", value: "25+" },
        { label: "Conservation Areas", value: "500 ha" }
      ],
      features: [
        "Carbon-neutral operations",
        "Waste recycling programs",
        "Community development",
        "Ocean conservation projects"
      ],
      image: "/api/placeholder/600/400",
      location: "Madagascar Coastline",
      established: "2010",
      employees: "50+",
      capacity: "Environmental Impact",
      certifications: ["ASC", "BAP", "Carbon Neutral", "Ocean Positive"],
      description_long: "Our sustainability division leads environmental initiatives and community development programs. We're committed to protecting Madagascar's marine ecosystems while supporting local communities through education, employment, and conservation efforts.",
      achievements: [
        "Carbon-neutral certification",
        "Ocean conservation partnerships",
        "Community education programs",
        "Biodiversity protection initiatives"
      ],
      future_plans: [
        "Ocean-positive operations",
        "Expanded conservation areas",
        "International partnerships",
        "Climate change adaptation"
      ]
    },
    {
      id: "research",
      name: "Research & Development",
      description: "Innovation in aquaculture technology and practices",
      icon: <Award className="h-8 w-8" />,
      color: "purple",
      stats: [
        { label: "Research Projects", value: "15+" },
        { label: "Patents", value: "8" },
        { label: "Publications", value: "25+" },
        { label: "Partnerships", value: "10+" }
      ],
      features: [
        "Marine biology research",
        "Feed optimization studies",
        "Disease prevention research",
        "Technology development"
      ],
      image: "/api/placeholder/600/400",
      location: "Research Center, Madagascar",
      established: "2005",
      employees: "30+",
      capacity: "Innovation Hub",
      certifications: ["ISO 9001", "Research Excellence", "Innovation Award"],
      description_long: "Our R&D division drives innovation in sustainable aquaculture. We collaborate with leading research institutions to develop new technologies, improve farming practices, and advance our understanding of marine ecosystems.",
      achievements: [
        "Innovation awards recognition",
        "Research publications",
        "Technology patents",
        "International collaborations"
      ],
      future_plans: [
        "AI-powered farming systems",
        "Genetic improvement programs",
        "Sustainable feed development",
        "Global research partnerships"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "ocean":
        return {
          bg: "bg-ocean-500",
          text: "text-ocean-500",
          border: "border-ocean-500",
          light: "bg-ocean-50",
          dark: "bg-ocean-900"
        };
      case "coral":
        return {
          bg: "bg-coral-500",
          text: "text-coral-500",
          border: "border-coral-500",
          light: "bg-coral-50",
          dark: "bg-coral-900"
        };
      case "green":
        return {
          bg: "bg-green-500",
          text: "text-green-500",
          border: "border-green-500",
          light: "bg-green-50",
          dark: "bg-green-900"
        };
      case "purple":
        return {
          bg: "bg-purple-500",
          text: "text-purple-500",
          border: "border-purple-500",
          light: "bg-purple-50",
          dark: "bg-purple-900"
        };
      default:
        return {
          bg: "bg-ocean-500",
          text: "text-ocean-500",
          border: "border-ocean-500",
          light: "bg-ocean-50",
          dark: "bg-ocean-900"
        };
    }
  };

  const activeDivisionData = divisions.find(div => div.id === activeDivision) || divisions[0];
  const colors = getColorClasses(activeDivisionData.color);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ocean-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-coral-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-ocean-900 mb-8 animate-fade-in-up">
            Our Divisions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Discover our comprehensive operations across aquaculture, processing, sustainability, and research
          </p>
        </div>

        <Tabs value={activeDivision} onValueChange={setActiveDivision} className="space-y-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent p-0 mb-8">
            {divisions.map((division) => (
              <TabsTrigger 
                key={division.id} 
                value={division.id}
                className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-semibold transition-all duration-300 text-center min-h-[70px] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-ocean-500 data-[state=active]:to-ocean-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=inactive]:text-ocean-600 data-[state=inactive]:hover:text-ocean-700 data-[state=inactive]:hover:bg-ocean-50"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center">
                    {division.icon}
                  </div>
                  <span className="text-sm sm:text-base leading-tight">{division.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {divisions.map((division) => (
            <TabsContent key={division.id} value={division.id} className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Division Overview */}
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-5 rounded-2xl ${colors.light} ${colors.text} shadow-lg`}>
                      {division.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-ocean-900 mb-3">{division.name}</h3>
                      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{division.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {division.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className={`${colors.border} px-3 py-1 text-sm font-medium`}>
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-ocean-100/50 shadow-lg">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {division.description_long}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {division.stats.map((stat, index) => (
                      <div key={index} className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-ocean-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className={`text-3xl font-bold ${colors.text} mb-2`}>{stat.value}</div>
                        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-ocean-100/50 shadow-lg">
                    <h4 className="text-2xl font-semibold text-ocean-900 mb-6">Key Features</h4>
                    <ul className="space-y-4">
                      {division.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${colors.bg} flex-shrink-0`}></div>
                          <span className="text-lg text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Division Details */}
                <div className="space-y-8">
                  <Card className="bg-white/80 backdrop-blur-sm border border-ocean-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <MapPin className="h-6 w-6 text-ocean-600" />
                        Division Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Location</div>
                          <div className="text-lg font-semibold text-ocean-900">{division.location}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Established</div>
                          <div className="text-lg font-semibold text-ocean-900">{division.established}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Employees</div>
                          <div className="text-lg font-semibold text-ocean-900">{division.employees}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Capacity</div>
                          <div className="text-lg font-semibold text-ocean-900">{division.capacity}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border border-ocean-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        Recent Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {division.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`w-3 h-3 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                            <span className="text-base text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border border-ocean-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Globe className="h-6 w-6 text-purple-600" />
                        Future Plans
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {division.future_plans.map((plan, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`w-3 h-3 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                            <span className="text-base text-muted-foreground leading-relaxed">{plan}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 px-10 py-5 text-xl font-semibold rounded-2xl"
                >
                  <Link to={`/divisions/${division.id}`}>
                    Learn More
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 px-10 py-5 text-xl font-semibold rounded-2xl"
                >
                  <div>
                    <Play className="mr-3 h-6 w-6" />
                    Virtual Tour
                  </div>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DivisionsShowcase;
