import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize, 
  Volume2, 
  VolumeX,
  MapPin,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";

interface TourLocation {
  id: string;
  name: string;
  description: string;
  type: "pond" | "processing" | "research" | "office" | "conservation";
  duration: string;
  highlights: string[];
  image: string;
  video?: string;
  coordinates: { lat: number; lng: number };
  facts: {
    label: string;
    value: string;
  }[];
}

const VirtualTour = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tourLocations: TourLocation[] = [
    {
      id: "main-ponds",
      name: "Main Shrimp Ponds",
      description: "Our flagship aquaculture facility featuring advanced water management and sustainable farming practices",
      type: "pond",
      duration: "5 min",
      highlights: [
        "50+ sustainable shrimp ponds",
        "Advanced water filtration systems",
        "Organic feed production",
        "Real-time monitoring technology"
      ],
      image: "/api/placeholder/800/600",
      video: "/api/placeholder/video/ponds.mp4",
      coordinates: { lat: -15.7167, lng: 46.3167 },
      facts: [
        { label: "Total Area", value: "500 hectares" },
        { label: "Water Capacity", value: "2.5 million liters" },
        { label: "Shrimp Species", value: "3 varieties" },
        { label: "Sustainability", value: "100% eco-friendly" }
      ]
    },
    {
      id: "processing-facility",
      name: "Processing Facility",
      description: "State-of-the-art processing plant with HACCP certification and advanced freezing technology",
      type: "processing",
      duration: "7 min",
      highlights: [
        "HACCP certified processing lines",
        "IQF freezing technology",
        "Quality control automation",
        "Traceability systems"
      ],
      image: "/api/placeholder/800/600",
      video: "/api/placeholder/video/processing.mp4",
      coordinates: { lat: -15.7200, lng: 46.3200 },
      facts: [
        { label: "Processing Lines", value: "12 automated" },
        { label: "Daily Capacity", value: "10 tons" },
        { label: "Quality Checks", value: "50+ per batch" },
        { label: "Certifications", value: "8 international" }
      ]
    },
    {
      id: "research-center",
      name: "Research & Development Center",
      description: "Innovation hub driving sustainable aquaculture through cutting-edge research and technology",
      type: "research",
      duration: "6 min",
      highlights: [
        "Marine biology laboratory",
        "Feed optimization research",
        "Disease prevention studies",
        "Technology development"
      ],
      image: "/api/placeholder/800/600",
      video: "/api/placeholder/video/research.mp4",
      coordinates: { lat: -15.7100, lng: 46.3100 },
      facts: [
        { label: "Research Projects", value: "15+ active" },
        { label: "Scientists", value: "30+ experts" },
        { label: "Patents", value: "8 filed" },
        { label: "Publications", value: "25+ papers" }
      ]
    },
    {
      id: "conservation-area",
      name: "Marine Conservation Area",
      description: "Protected marine ecosystem showcasing our commitment to ocean conservation and biodiversity",
      type: "conservation",
      duration: "4 min",
      highlights: [
        "500-hectare protected area",
        "Coral reef restoration",
        "Marine biodiversity monitoring",
        "Community education programs"
      ],
      image: "/api/placeholder/800/600",
      video: "/api/placeholder/video/conservation.mp4",
      coordinates: { lat: -15.7300, lng: 46.3300 },
      facts: [
        { label: "Protected Area", value: "500 hectares" },
        { label: "Coral Species", value: "50+ varieties" },
        { label: "Marine Life", value: "200+ species" },
        { label: "Conservation", value: "100% protected" }
      ]
    },
    {
      id: "headquarters",
      name: "Company Headquarters",
      description: "Modern office complex housing our administrative, sales, and customer service operations",
      type: "office",
      duration: "3 min",
      highlights: [
        "Sustainable office design",
        "Customer service center",
        "Sales and marketing teams",
        "International partnerships"
      ],
      image: "/api/placeholder/800/600",
      video: "/api/placeholder/video/headquarters.mp4",
      coordinates: { lat: -15.7000, lng: 46.3000 },
      facts: [
        { label: "Office Space", value: "2,000 sqm" },
        { label: "Employees", value: "100+ staff" },
        { label: "Departments", value: "8 divisions" },
        { label: "Sustainability", value: "LEED certified" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pond": return "🐟";
      case "processing": return "🏭";
      case "research": return "🔬";
      case "office": return "🏢";
      case "conservation": return "🌊";
      default: return "📍";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pond": return "bg-ocean-500";
      case "processing": return "bg-coral-500";
      case "research": return "bg-purple-500";
      case "office": return "bg-slate-500";
      case "conservation": return "bg-green-500";
      default: return "bg-ocean-500";
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % tourLocations.length);
    setIsPlaying(false);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + tourLocations.length) % tourLocations.length);
    setIsPlaying(false);
  };

  const currentLocationData = tourLocations[currentLocation];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-ocean-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
            Virtual Tour
          </h2>
          <p className="text-xl text-sand-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience our facilities through immersive 360° tours and drone footage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={currentLocationData.image}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src={currentLocationData.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
                    >
                      {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                    </Button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleMute}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleFullscreen}
                        className="text-white hover:bg-white/20"
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {getTypeIcon(currentLocationData.type)} {currentLocationData.name}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Current Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentLocationData.name}</h3>
                  <p className="text-sand-200 text-sm mb-4">{currentLocationData.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-sand-300">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {currentLocationData.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Guided Tour
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Key Highlights</h4>
                  <ul className="space-y-1">
                    {currentLocationData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-sand-200">
                        <div className={`w-2 h-2 rounded-full ${getTypeColor(currentLocationData.type)} mt-2 flex-shrink-0`}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {currentLocationData.facts.map((fact, index) => (
                    <div key={index} className="text-center p-3 bg-white/10 rounded-lg">
                      <div className="text-lg font-bold text-ocean-400">{fact.value}</div>
                      <div className="text-xs text-sand-300">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={prevLocation}
                className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={nextLocation}
                className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <Button className="w-full bg-gradient-ocean hover:bg-gradient-aqua text-white shadow-lg hover:shadow-xl border-0">
              <ExternalLink className="h-4 w-4 mr-2" />
              Start Full Tour
            </Button>
          </div>
        </div>

        {/* Location Thumbnails */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Explore All Locations</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {tourLocations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setCurrentLocation(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                  currentLocation === index
                    ? "ring-2 ring-ocean-400 scale-105"
                    : "hover:scale-102"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{getTypeIcon(location.type)}</div>
                    <div className="text-sm font-medium">{location.name}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
