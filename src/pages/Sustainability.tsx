import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Droplets, Fish, Globe, Award, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import coastImage from "@/assets/madagascar-coast.jpg";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6">
                Sustainability First
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Our commitment to preserving Madagascar's marine ecosystems for future generations
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-5xl font-bold text-ocean-500 mb-2">90%</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Water Recycled</p>
                <p className="text-muted-foreground">Through our advanced filtration systems</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">Zero</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Chemical Use</p>
                <p className="text-muted-foreground">100% natural farming methods</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold text-ocean-500 mb-2">1,200+</div>
                <p className="text-lg font-semibold text-ocean-900 mb-1">Local Jobs</p>
                <p className="text-muted-foreground">Supporting communities across Madagascar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Initiatives */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Our Environmental Initiatives
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={coastImage}
                  alt="Madagascar coastline preservation"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 hover-lift p-4 bg-card rounded-lg">
                  <Droplets className="h-8 w-8 text-ocean-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ocean-900 mb-2">Water Conservation</h3>
                    <p className="text-muted-foreground">
                      Advanced recirculation systems reduce water usage by 90% compared to traditional farming
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 hover-lift p-4 bg-card rounded-lg">
                  <Fish className="h-8 w-8 text-ocean-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ocean-900 mb-2">Biodiversity Protection</h3>
                    <p className="text-muted-foreground">
                      Mangrove restoration projects protect local species and prevent coastal erosion
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 hover-lift p-4 bg-card rounded-lg">
                  <Leaf className="h-8 w-8 text-ocean-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ocean-900 mb-2">Carbon Neutral by 2030</h3>
                    <p className="text-muted-foreground">
                      Solar panels and renewable energy sources power 60% of our operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 hover-lift p-4 bg-card rounded-lg">
                  <Globe className="h-8 w-8 text-ocean-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ocean-900 mb-2">Community Development</h3>
                    <p className="text-muted-foreground">
                      Education programs and healthcare initiatives for local communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              2030 Sustainability Goals Progress
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-ocean-900">Renewable Energy Usage</span>
                  <span className="text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-ocean-900">Water Recycling Rate</span>
                  <span className="text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-ocean-900">Mangrove Restoration</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-ocean-900">Community Programs</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12">
              Certified Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-ocean-500" />
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">ASC Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Aquaculture Stewardship Council certification for responsible farming
                </p>
              </div>
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-ocean-500" />
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">BAP 4-Star</h3>
                <p className="text-sm text-muted-foreground">
                  Best Aquaculture Practices certification across all production stages
                </p>
              </div>
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-ocean-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-ocean-500" />
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">GlobalG.A.P.</h3>
                <p className="text-sm text-muted-foreground">
                  International standard for safe and sustainable agriculture
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;