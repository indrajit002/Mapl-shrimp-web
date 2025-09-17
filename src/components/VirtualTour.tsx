import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import shrimpFarmingPonds from "@/assets/shrimp-farming-ponds.jpg";
import processingPlantInterior from "@/assets/processing-plant-interior.jpg";
import researchFacility from "@/assets/research-facility.jpg";
import conservationArea from "@/assets/conservation-area.jpg";
import companyHeadquarters from "@/assets/company-headquarters.jpg";
import virtualTourBg from "@/assets/Virtual_tour.png";
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
      image: shrimpFarmingPonds,
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
      image: processingPlantInterior,
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
      image: researchFacility,
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
      image: conservationArea,
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
      image: companyHeadquarters,
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${virtualTourBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6 text-black">
            Virtual Tour
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto eb-garamond-text">
            Experience our facilities through immersive 360° tours and drone footage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 shadow-2xl overflow-hidden">
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
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-black"
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
                    <Badge className="bg-black/80 backdrop-blur-sm text-white border-gray-600">
                      {getTypeIcon(currentLocationData.type)} {currentLocationData.name}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <MapPin className="h-5 w-5" />
                  Current Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl eb-garamond font-bold mb-2 text-black">{currentLocationData.name}</h3>
                  <p className="text-gray-700 text-sm mb-4 eb-garamond-text">{currentLocationData.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
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
                  <h4 className="eb-garamond font-semibold text-black">Key Highlights</h4>
                  <ul className="space-y-1">
                    {currentLocationData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${getTypeColor(currentLocationData.type)} mt-2 flex-shrink-0`}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Award className="h-5 w-5" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {currentLocationData.facts.map((fact, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg shadow-sm">
                      <div className="text-lg font-bold text-black">{fact.value}</div>
                      <div className="text-xs text-gray-600">{fact.label}</div>
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
                className="flex-1 bg-white border-gray-200 text-black hover:bg-gray-50 shadow-lg"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={nextLocation}
                className="flex-1 bg-white border-gray-200 text-black hover:bg-gray-50 shadow-lg"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <Button className="w-full bg-black hover:bg-gray-800 text-white border-0 shadow-lg">
              <ExternalLink className="h-4 w-4 mr-2" />
              Start Full Tour
            </Button>
          </div>
        </div>

        {/* Location Thumbnails */}
        <div className="mt-12">
          <h3 className="text-2xl eb-garamond font-semibold mb-6 text-center text-black">Explore All Locations</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {tourLocations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setCurrentLocation(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl ${
                  currentLocation === index
                    ? "ring-2 ring-black scale-105"
                    : "hover:scale-102"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
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
