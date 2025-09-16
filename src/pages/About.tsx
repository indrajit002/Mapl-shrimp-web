import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Leaf, Target } from "lucide-react";
import expertImage from "@/assets/expert-portrait.jpg";
import facilityImage from "@/assets/facility-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />
      <main role="main">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-slate-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6 animate-fade-in-up">
                Our Story
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                From humble beginnings to becoming Madagascar's premier sustainable shrimp producer
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-4 group-hover:text-ocean-700 transition-colors duration-300">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide the world with premium, sustainably-farmed shrimp while preserving Madagascar's 
                    pristine marine ecosystems and supporting local communities through ethical employment 
                    and environmental stewardship.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-up group hover:scale-105 transition-all duration-300 ease-out" style={{ animationDelay: "0.1s" }}>
                <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-4 group-hover:text-ocean-700 transition-colors duration-300">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be recognized globally as the gold standard in sustainable aquaculture, setting new 
                    benchmarks for quality, environmental responsibility, and social impact in the seafood industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-br from-coral-50/50 via-white to-ocean-50/50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-ocean-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12 animate-fade-in-up">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <img
                    src={expertImage}
                    alt="Dr Manoj. M. Sharma"
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Dr. Jean-Pierre Rakoto</h3>
                  <p className="text-muted-foreground">Chief Marine Biologist</p>
                  <p className="mt-3 text-sm">20+ years of experience in sustainable aquaculture</p>
                </div>
              </div>
              <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 ease-out" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <img
                    src={facilityImage}
                    alt="Marie Andriamahefa"
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Marie Andriamahefa</h3>
                  <p className="text-muted-foreground">Operations Director</p>
                  <p className="mt-3 text-sm">Leading our commitment to excellence since 2015</p>
                </div>
              </div>
              <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 ease-out" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <img
                    src={expertImage}
                    alt="Dr Manoj. M. Sharma"
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Thomas Raharison</h3>
                  <p className="text-muted-foreground">Sustainability Manager</p>
                  <p className="mt-3 text-sm">Ensuring eco-friendly practices at every step</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gradient-to-br from-ocean-50/50 via-white to-coral-50/50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12 animate-fade-in-up">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-500/20 to-ocean-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="h-8 w-8 text-ocean-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Never compromising on the excellence of our products
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Leaf className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    Protecting our oceans for future generations
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-500/20 to-coral-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Users className="h-8 w-8 text-coral-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting local families and economies
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Award className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-ocean-900 mb-2 group-hover:text-ocean-700 transition-colors duration-300">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneering new standards in aquaculture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;