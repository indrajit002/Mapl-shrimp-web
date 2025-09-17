import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Users, Award, Leaf, Ship, Globe, Calendar, TrendingUp, Target, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gsap } from "gsap";
import journeyBg from "@/assets/journey_bg.png";

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
  const eventRef = useRef<HTMLDivElement>(null);
  const yearButtonsRef = useRef<HTMLDivElement>(null);

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
    
    // Animate out current event
    if (eventRef.current) {
      gsap.to(eventRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    
    // Change year and animate in new event
    setTimeout(() => {
      setActiveYear(year);
      if (eventRef.current) {
        gsap.fromTo(eventRef.current, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    // Initial animation
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  const activeEvent = timelineEvents.find(event => event.year === activeYear) || timelineEvents[0];

  const years = timelineEvents.map(event => event.year).sort((a, b) => b - a);

  return (
    <section ref={timelineRef} className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${journeyBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-2xl">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <Badge className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium border border-gray-200 shadow-lg">
              Our Journey
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl eb-garamond font-bold mb-8 text-black" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
            {t('timeline.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Modern Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Year Navigation - Horizontal Scroll */}
          <div ref={yearButtonsRef} className="mb-16">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {years.map((year, index) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`group relative flex-shrink-0 px-8 py-4 rounded-2xl transition-all duration-500 ease-out ${
                    activeYear === year
                      ? "bg-black text-white shadow-2xl scale-105"
                      : "bg-white hover:bg-gray-50 text-black hover:text-gray-800 hover:shadow-2xl hover:scale-102 border border-gray-200 shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeYear === year ? "bg-white" : "bg-gray-400 group-hover:bg-gray-600"
                    }`}></div>
                    <span className="text-2xl font-bold eb-garamond">{year}</span>
                  </div>
                  {activeYear === year && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Event Details - Modern Card Design */}
          <div ref={eventRef} className="relative">
            <Card className="bg-white border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden" style={{ boxShadow: '0 25px 50px rgba(255,255,255,0.6), 0 10px 20px rgba(255,255,255,0.4)' }}>
              <div className="absolute inset-0 bg-white"></div>
              <CardContent className="relative p-0">
                {/* Event Header */}
                <div className="bg-black p-8 text-white">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gray-800 shadow-xl">
                      {getCategoryIcon(activeEvent.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-gray-800 text-white border-gray-600 px-4 py-2 text-sm font-medium shadow-lg">
                          {activeEvent.category.charAt(0).toUpperCase() + activeEvent.category.slice(1)}
                        </Badge>
                        {activeEvent.location && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{activeEvent.location}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-4xl eb-garamond font-bold mb-4">{activeEvent.title}</h3>
                      <p className="text-gray-300 text-xl leading-relaxed eb-garamond-text" style={{ textShadow: 'none' }}>{activeEvent.description}</p>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  {activeEvent.impact && (
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gray-800 rounded-xl shadow-md">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-800">Impact</span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed eb-garamond-text">{activeEvent.impact}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-100 rounded-xl shadow-md">
                        <Target className="h-5 w-5 text-gray-800" />
                      </div>
                      <h4 className="text-2xl eb-garamond font-semibold text-gray-800">Key Achievements</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeEvent.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-sm">
                          <div className="w-2 h-2 bg-gray-800 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                          <span className="text-gray-700 text-base leading-relaxed eb-garamond-text">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  const currentIndex = years.indexOf(activeYear);
                  if (currentIndex < years.length - 1) {
                    handleYearChange(years[currentIndex + 1]);
                  }
                }}
                disabled={years.indexOf(activeYear) >= years.length - 1}
                className="bg-white hover:bg-gray-50 border-gray-200 text-black hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
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
                className="bg-white hover:bg-gray-50 border-gray-200 text-black hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Modern Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl eb-garamond font-bold text-black mb-4" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>Our Impact in Numbers</h3>
            <p className="text-gray-700 text-lg eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>Milestones that define our journey</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>25+</div>
              <div className="text-white eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{t('timeline.stats.years')}</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>15+</div>
              <div className="text-white eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{t('timeline.stats.countries')}</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Ship className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>500+</div>
              <div className="text-white eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{t('timeline.stats.capacity')}</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>100%</div>
              <div className="text-white eb-garamond-text" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{t('timeline.stats.sustainable')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
