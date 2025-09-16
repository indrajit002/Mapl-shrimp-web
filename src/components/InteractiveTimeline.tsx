import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Users, Award, Leaf, Ship, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "milestone" | "expansion" | "innovation" | "sustainability" | "award";
  location?: string;
  impact?: string;
  image?: string;
  details: string[];
}

const InteractiveTimeline = () => {
  const { t } = useLanguage();
  const [activeYear, setActiveYear] = useState(2024);
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: 2024,
      title: t('timeline.events.2024.title'),
      description: t('timeline.events.2024.description'),
      category: "expansion",
      location: t('timeline.events.2024.location'),
      impact: t('timeline.events.2024.impact'),
      details: [
        t('timeline.events.2024.details.0'),
        t('timeline.events.2024.details.1'),
        t('timeline.events.2024.details.2'),
        t('timeline.events.2024.details.3')
      ]
    },
    {
      year: 2022,
      title: "Sustainability Leadership Recognition",
      description: "Received multiple international sustainability awards and certifications",
      category: "award",
      location: "Madagascar",
      impact: "100% sustainable practices",
      details: [
        "ASC and BAP certification achieved",
        "Zero-waste processing facility opened",
        "Community development programs launched",
        "Ocean conservation initiatives expanded"
      ]
    },
    {
      year: 2019,
      title: "Advanced Processing Facility",
      description: "Built state-of-the-art processing plant with cutting-edge technology",
      category: "innovation",
      location: "Mahajanga",
      impact: "300+ tons/month capacity",
      details: [
        "HACCP and BRC certified facility",
        "IQF freezing technology implemented",
        "Traceability system developed",
        "Quality control automation"
      ]
    },
    {
      year: 2015,
      title: "International Market Entry",
      description: "Began exporting to major international markets",
      category: "milestone",
      location: "Global",
      impact: "First international exports",
      details: [
        "First shipment to European Union",
        "Established quality standards",
        "Built international partnerships",
        "Developed export protocols"
      ]
    },
    {
      year: 2010,
      title: "Sustainable Farming Practices",
      description: "Implemented eco-friendly aquaculture methods",
      category: "sustainability",
      location: "Madagascar",
      impact: "Environmental protection",
      details: [
        "Organic feed development",
        "Water recycling systems",
        "Biodiversity conservation",
        "Community engagement programs"
      ]
    },
    {
      year: 2005,
      title: "Research & Development Center",
      description: "Established dedicated R&D facility for aquaculture innovation",
      category: "innovation",
      location: "Madagascar",
      impact: "Scientific advancement",
      details: [
        "Marine biology research",
        "Breeding program development",
        "Disease prevention protocols",
        "Feed optimization studies"
      ]
    },
    {
      year: 2000,
      title: "Company Foundation",
      description: "MAPL Shrimp was founded with a vision for sustainable aquaculture",
      category: "milestone",
      location: "Madagascar",
      impact: "Company established",
      details: [
        "Founded by aquaculture experts",
        "First shrimp ponds established",
        "Local community employment",
        "Sustainable farming principles"
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "milestone": return <Award className="h-5 w-5" />;
      case "expansion": return <Globe className="h-5 w-5" />;
      case "innovation": return <Ship className="h-5 w-5" />;
      case "sustainability": return <Leaf className="h-5 w-5" />;
      case "award": return <Award className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "milestone": return "bg-ocean-500";
      case "expansion": return "bg-coral-500";
      case "innovation": return "bg-green-500";
      case "sustainability": return "bg-emerald-500";
      case "award": return "bg-purple-500";
      default: return "bg-ocean-500";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "milestone": return "text-ocean-500";
      case "expansion": return "text-coral-500";
      case "innovation": return "text-green-500";
      case "sustainability": return "text-emerald-500";
      case "award": return "text-purple-500";
      default: return "text-ocean-500";
    }
  };

  const handleYearChange = (year: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveYear(year);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeEvent = timelineEvents.find(event => event.year === activeYear) || timelineEvents[0];

  const years = timelineEvents.map(event => event.year).sort((a, b) => b - a);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-ocean-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ocean-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 animate-fade-in-up">
            {t('timeline.title')}
          </h2>
          <p className="text-xl md:text-2xl text-sand-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t('timeline.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-8">Select a Year</h3>
            <div className="space-y-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                    activeYear === year
                      ? "bg-white/20 backdrop-blur-sm border-2 border-ocean-400 scale-105 shadow-xl"
                      : "bg-white/10 hover:bg-white/15 hover:scale-102 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{year}</span>
                    <div className={`w-4 h-4 rounded-full ${activeYear === year ? "bg-ocean-400" : "bg-white/40"}`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-8">
            <Card className="bg-white/15 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 rounded-2xl ${getCategoryColor(activeEvent.category)} shadow-lg`}>
                    {getCategoryIcon(activeEvent.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${getCategoryTextColor(activeEvent.category)} bg-transparent border-current px-4 py-2 text-sm font-medium`}>
                        {activeEvent.category.charAt(0).toUpperCase() + activeEvent.category.slice(1)}
                      </Badge>
                      {activeEvent.location && (
                        <div className="flex items-center gap-2 text-base text-sand-300">
                          <MapPin className="h-5 w-5" />
                          {activeEvent.location}
                        </div>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{activeEvent.title}</h3>
                    <p className="text-sand-200 text-xl leading-relaxed">{activeEvent.description}</p>
                  </div>
                </div>

                {activeEvent.impact && (
                  <div className="mb-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-ocean-400" />
                      <span className="text-xl font-semibold">Impact</span>
                    </div>
                    <p className="text-sand-200 text-lg leading-relaxed">{activeEvent.impact}</p>
                  </div>
                )}

                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold mb-6">Key Achievements</h4>
                  <ul className="space-y-4">
                    {activeEvent.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-ocean-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sand-200 text-lg leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  const currentIndex = years.indexOf(activeYear);
                  if (currentIndex < years.length - 1) {
                    handleYearChange(years[currentIndex + 1]);
                  }
                }}
                disabled={years.indexOf(activeYear) >= years.length - 1}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const currentIndex = years.indexOf(activeYear);
                  if (currentIndex > 0) {
                    handleYearChange(years[currentIndex - 1]);
                  }
                }}
                disabled={years.indexOf(activeYear) <= 0}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-400 mb-2">25+</div>
            <div className="text-sand-300">{t('timeline.stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-coral-400 mb-2">15+</div>
            <div className="text-sand-300">{t('timeline.stats.countries')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sand-300">{t('timeline.stats.capacity')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-sand-300">{t('timeline.stats.sustainable')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
