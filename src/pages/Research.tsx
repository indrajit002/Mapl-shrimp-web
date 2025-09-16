import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Microscope, BookOpen, Users, Award, ExternalLink, Download, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-shrimp-farm.jpg";

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      title: "Sustainable Aquaculture Systems",
      description: "Developing innovative farming techniques that minimize environmental impact while maximizing productivity.",
      status: "Active",
      duration: "2022-2025",
      funding: "€2.5M",
      partners: ["University of Antananarivo", "Wageningen University", "IFREMER"],
      publications: 8,
      featured: true
    },
    {
      id: 2,
      title: "Water Quality Management",
      description: "Advanced filtration and recirculation systems for optimal water conditions and waste reduction.",
      status: "Active",
      duration: "2023-2026",
      funding: "€1.8M",
      partners: ["Sorbonne University", "Madagascar Institute of Oceanography"],
      publications: 5,
      featured: true
    },
    {
      id: 3,
      title: "Disease Prevention & Health",
      description: "Natural disease prevention methods and probiotic applications for shrimp health.",
      status: "Active",
      duration: "2024-2027",
      funding: "€1.2M",
      partners: ["University of Montpellier", "National Aquaculture Center"],
      publications: 3,
      featured: false
    },
    {
      id: 4,
      title: "Feed Optimization",
      description: "Sustainable feed formulations using local ingredients and alternative protein sources.",
      status: "Completed",
      duration: "2020-2023",
      funding: "€950K",
      partners: ["INRAE", "University of Antananarivo"],
      publications: 12,
      featured: false
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Sustainable Shrimp Farming: A Comprehensive Approach to Environmental Stewardship",
      authors: "Dr. Jean-Pierre Rakoto, Dr. Marie Andriamahefa, Prof. Sarah Johnson",
      journal: "Aquaculture Research",
      year: "2024",
      doi: "10.1111/are.12345",
      type: "Research Article",
      impact: "High",
      abstract: "This study presents a comprehensive analysis of sustainable shrimp farming practices implemented at MAPL Shrimp facilities, demonstrating significant improvements in environmental metrics while maintaining production efficiency."
    },
    {
      id: 2,
      title: "Water Recirculation Systems in Tropical Aquaculture: Performance and Sustainability Metrics",
      authors: "Dr. Thomas Raharison, Dr. Pierre Dubois, Dr. Elena Rodriguez",
      journal: "Journal of Applied Aquaculture",
      year: "2024",
      doi: "10.1080/10454438.2024.1234567",
      type: "Research Article",
      impact: "Medium",
      abstract: "Evaluation of advanced water recirculation systems showing 90% water reuse efficiency and improved shrimp health outcomes in tropical conditions."
    },
    {
      id: 3,
      title: "Probiotic Applications in Shrimp Aquaculture: A Case Study from Madagascar",
      authors: "Dr. Marie Andriamahefa, Dr. Ahmed Hassan, Dr. Sophie Martin",
      journal: "Aquaculture International",
      year: "2023",
      doi: "10.1007/s10499-023-01234-5",
      type: "Research Article",
      impact: "High",
      abstract: "Long-term study demonstrating the effectiveness of probiotic treatments in reducing disease incidence and improving growth rates in Black Tiger shrimp."
    },
    {
      id: 4,
      title: "Economic Impact of Sustainable Aquaculture on Local Communities in Madagascar",
      authors: "Dr. Jean-Pierre Rakoto, Prof. Michael Thompson, Dr. Fatima Al-Zahra",
      journal: "Marine Policy",
      year: "2023",
      doi: "10.1016/j.marpol.2023.105678",
      type: "Policy Analysis",
      impact: "High",
      abstract: "Comprehensive analysis of the socio-economic benefits of sustainable aquaculture practices on local communities in the Mahajanga region."
    }
  ];

  const collaborations = [
    {
      name: "University of Antananarivo",
      country: "Madagascar",
      type: "Academic",
      focus: "Marine Biology & Environmental Science",
      status: "Active",
      projects: 3
    },
    {
      name: "Wageningen University",
      country: "Netherlands",
      type: "Academic",
      focus: "Aquaculture Technology",
      status: "Active",
      projects: 2
    },
    {
      name: "IFREMER",
      country: "France",
      type: "Research Institute",
      focus: "Marine Research",
      status: "Active",
      projects: 2
    },
    {
      name: "Sorbonne University",
      country: "France",
      type: "Academic",
      focus: "Water Quality Management",
      status: "Active",
      projects: 1
    },
    {
      name: "INRAE",
      country: "France",
      type: "Research Institute",
      focus: "Feed Development",
      status: "Completed",
      projects: 1
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
                Research & Innovation
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Advancing sustainable aquaculture through cutting-edge research and international collaboration
              </p>
            </div>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                  Our Research Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At MAPL Shrimp, research is at the heart of everything we do. We're committed to advancing 
                  sustainable aquaculture through innovative solutions that benefit both the environment and 
                  local communities. Our research focuses on developing practical, scalable solutions for 
                  the global aquaculture industry.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Pioneering sustainable farming techniques</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Collaborating with leading research institutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Publishing findings for industry advancement</p>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src={heroImage}
                  alt="Research facilities at MAPL Shrimp"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Research Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={area.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      {area.featured && (
                        <Badge className="bg-coral-400/10 text-coral-400 border-coral-400">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Status:</span>
                          <span className={`ml-2 font-semibold ${area.status === 'Active' ? 'text-green-600' : 'text-blue-600'}`}>
                            {area.status}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="ml-2 font-semibold">{area.duration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Funding:</span>
                          <span className="ml-2 font-semibold">{area.funding}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Publications:</span>
                          <span className="ml-2 font-semibold">{area.publications}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-2">Partners:</h4>
                        <div className="flex flex-wrap gap-1">
                          {area.partners.map((partner, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {partner}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Collaborations */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="publications" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="publications" className="mt-8">
                <h3 className="text-3xl font-serif font-bold text-center text-ocean-900 mb-8">
                  Recent Publications
                </h3>
                <div className="space-y-6">
                  {publications.map((pub, index) => (
                    <Card key={pub.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-ocean-900 mb-2">{pub.title}</h4>
                            <p className="text-muted-foreground mb-2">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground mb-3">
                              {pub.journal} • {pub.year} • DOI: {pub.doi}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge className={pub.impact === 'High' ? 'bg-coral-400/10 text-coral-400 border-coral-400' : 'bg-ocean-500/10 text-ocean-500 border-ocean-500'}>
                              {pub.impact} Impact
                            </Badge>
                            <Badge variant="outline">{pub.type}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{pub.abstract}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Paper
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="collaborations" className="mt-8">
                <h3 className="text-3xl font-serif font-bold text-center text-ocean-900 mb-8">
                  Research Collaborations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {collaborations.map((collab, index) => (
                    <Card key={collab.name} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-ocean-900 mb-1">{collab.name}</h4>
                            <p className="text-muted-foreground text-sm">{collab.country} • {collab.type}</p>
                          </div>
                          <Badge className={collab.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}>
                            {collab.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{collab.focus}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Active Projects:</span>
                          <span className="font-semibold">{collab.projects}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Research Impact Stats */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Research Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-5xl font-bold text-ocean-500 mb-2">28</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Publications</p>
                <p className="text-muted-foreground">Peer-reviewed research papers</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">5</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Active Projects</p>
                <p className="text-muted-foreground">Ongoing research initiatives</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">€6.5M</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Research Funding</p>
                <p className="text-muted-foreground">Total investment in R&D</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">12</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Partners</p>
                <p className="text-muted-foreground">International collaborations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              We welcome research partnerships and academic collaborations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-ocean-700 hover:bg-sand-200">
                <Microscope className="mr-2 h-5 w-5" />
                Research Partnership
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Academic Exchange
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
