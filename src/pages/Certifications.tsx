import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Globe, CheckCircle, Download, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "ASC Certified",
      organization: "Aquaculture Stewardship Council",
      description: "Certified for responsible aquaculture practices that minimize environmental and social impacts.",
      status: "Active",
      validUntil: "2026-12-31",
      level: "Premium",
      requirements: [
        "Zero use of antibiotics",
        "Sustainable feed sourcing",
        "Water quality management",
        "Social responsibility compliance"
      ],
      logo: "ASC",
      featured: true
    },
    {
      id: 2,
      name: "BAP 4-Star",
      organization: "Best Aquaculture Practices",
      description: "Four-star certification covering hatchery, farm, processing plant, and feed mill operations.",
      status: "Active",
      validUntil: "2025-08-15",
      level: "Premium",
      requirements: [
        "Food safety standards",
        "Environmental responsibility",
        "Social accountability",
        "Animal welfare compliance"
      ],
      logo: "BAP",
      featured: true
    },
    {
      id: 3,
      name: "GlobalG.A.P.",
      organization: "Global Good Agricultural Practice",
      description: "International standard for safe and sustainable agriculture and aquaculture practices.",
      status: "Active",
      validUntil: "2025-03-20",
      level: "Standard",
      requirements: [
        "Good Agricultural Practices",
        "Food safety protocols",
        "Traceability systems",
        "Worker welfare standards"
      ],
      logo: "GLOBALGAP",
      featured: false
    },
    {
      id: 4,
      name: "ISO 14001",
      organization: "International Organization for Standardization",
      description: "Environmental management system certification for sustainable operations.",
      status: "Active",
      validUntil: "2025-11-30",
      level: "Standard",
      requirements: [
        "Environmental policy",
        "Impact assessment",
        "Continuous improvement",
        "Legal compliance"
      ],
      logo: "ISO",
      featured: false
    },
    {
      id: 5,
      name: "HACCP",
      organization: "Hazard Analysis Critical Control Points",
      description: "Food safety management system ensuring safe production processes.",
      status: "Active",
      validUntil: "2025-06-10",
      level: "Standard",
      requirements: [
        "Hazard identification",
        "Critical control points",
        "Monitoring procedures",
        "Corrective actions"
      ],
      logo: "HACCP",
      featured: false
    },
    {
      id: 6,
      name: "Carbon Neutral",
      organization: "Carbon Trust",
      description: "Certified carbon neutral operations through emission reduction and offset programs.",
      status: "Active",
      validUntil: "2025-12-31",
      level: "Premium",
      requirements: [
        "Carbon footprint measurement",
        "Emission reduction plans",
        "Offset verification",
        "Annual reporting"
      ],
      logo: "CARBON",
      featured: true
    }
  ];

  const auditResults = [
    {
      year: "2024",
      score: 98,
      auditor: "SGS Madagascar",
      findings: "Excellent compliance with all standards",
      improvements: ["Enhanced traceability system", "Improved worker training programs"]
    },
    {
      year: "2023",
      score: 96,
      auditor: "Bureau Veritas",
      findings: "Strong performance with minor recommendations",
      improvements: ["Updated safety protocols", "Expanded environmental monitoring"]
    },
    {
      year: "2022",
      score: 94,
      auditor: "SGS Madagascar",
      findings: "Good compliance with room for improvement",
      improvements: ["Implemented new water treatment system", "Enhanced documentation processes"]
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
                Our Certifications
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Committed to the highest standards of quality, sustainability, and responsible aquaculture practices
              </p>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-5xl font-bold text-ocean-500 mb-2">6</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Active Certifications</p>
                <p className="text-muted-foreground">International standards met</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">98%</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Audit Score</p>
                <p className="text-muted-foreground">Latest compliance rating</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">15+</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Years Experience</p>
                <p className="text-muted-foreground">In certified operations</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">100%</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Compliance</p>
                <p className="text-muted-foreground">Zero critical findings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Premium Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.filter(cert => cert.featured).map((cert, index) => (
                <Card key={cert.id} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-ocean-500" />
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <CardDescription className="text-sm">{cert.organization}</CardDescription>
                    <Badge className="w-fit mx-auto bg-coral-400/10 text-coral-400 border-coral-400">
                      {cert.level}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-green-600 font-semibold">{cert.status}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Valid Until:</span>
                        <span className="font-semibold">{cert.validUntil}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              All Certifications
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={cert.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-ocean-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="h-6 w-6 text-ocean-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-ocean-900 mb-1">{cert.name}</h3>
                          <p className="text-muted-foreground mb-2">{cert.organization}</p>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={cert.level === "Premium" ? "bg-coral-400/10 text-coral-400 border-coral-400" : "bg-ocean-500/10 text-ocean-500 border-ocean-500"}>
                          {cert.level}
                        </Badge>
                        <span className="text-sm text-green-600 font-semibold">{cert.status}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {cert.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Valid Until:</span>
                          <span className="font-semibold">{cert.validUntil}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Results */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Audit Results & Compliance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {auditResults.map((audit, index) => (
                <Card key={audit.year} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-ocean-900">{audit.year}</CardTitle>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-ocean-500 mb-2">{audit.score}%</div>
                      <p className="text-sm text-muted-foreground">Compliance Score</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-1">Auditor:</h4>
                        <p className="text-sm text-muted-foreground">{audit.auditor}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-1">Findings:</h4>
                        <p className="text-sm text-muted-foreground">{audit.findings}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-2">Improvements Made:</h4>
                        <ul className="space-y-1">
                          {audit.improvements.map((improvement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></span>
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              Download our complete certification portfolio or contact us for detailed compliance information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-ocean-700 hover:bg-sand-200">
                <Download className="mr-2 h-5 w-5" />
                Download Portfolio
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Compliance Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
