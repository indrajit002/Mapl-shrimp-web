import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductTabs from "@/components/ProductTabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import premiumImage from "@/assets/premium-shrimp.jpg";

const Products = () => {
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
                Our Premium Products
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Discover our range of sustainably farmed shrimp, from jumbo to cocktail sizes
              </p>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up group">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50 group-hover:scale-105 transition-all duration-300 ease-out">
                  <Badge className="mb-4 bg-coral-400/10 text-coral-400 border-coral-400">
                    Most Popular
                  </Badge>
                  <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-4 group-hover:text-ocean-700 transition-colors duration-300">
                    Black Tiger Prawns
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our signature Black Tiger prawns are renowned for their distinctive striped shells, 
                    firm texture, and sweet, delicate flavor. Each prawn is carefully cultivated in our 
                    pristine ponds and harvested at peak quality.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>
                      Size range: 8-12, 13-15, 16-20 per pound
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>
                      Available fresh or flash-frozen
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>
                      ASC and BAP certified
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>
                      No antibiotics or chemicals
                    </li>
                  </ul>
                  <Button size="lg" className="bg-ocean-700 hover:bg-ocean-900 hover:scale-105 transition-all duration-300">
                    Request Pricing
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in group hover:scale-105 transition-all duration-300 ease-out">
                <div className="rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={premiumImage}
                    alt="Black Tiger Prawns"
                    className="w-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24 bg-gradient-to-br from-coral-50/50 via-white to-ocean-50/50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-ocean-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12 animate-fade-in-up">
              Browse Our Categories
            </h2>
            <ProductTabs />
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-24 bg-gradient-to-br from-ocean-50/50 via-white to-coral-50/50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center text-ocean-900 mb-12 animate-fade-in-up">
              Quality Assurance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <h3 className="text-xl font-bold text-ocean-900 mb-3 group-hover:text-ocean-700 transition-colors duration-300">Traceability</h3>
                  <p className="text-muted-foreground">
                    Every batch can be traced from pond to plate with our advanced tracking system
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <h3 className="text-xl font-bold text-ocean-900 mb-3 group-hover:text-ocean-700 transition-colors duration-300">Testing</h3>
                  <p className="text-muted-foreground">
                    Regular quality tests ensure our products exceed international standards
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 ease-out">
                <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl border border-ocean-100/50">
                  <h3 className="text-xl font-bold text-ocean-900 mb-3 group-hover:text-ocean-700 transition-colors duration-300">Freshness</h3>
                  <p className="text-muted-foreground">
                    Flash-frozen within hours of harvest to lock in peak freshness and flavor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-slate-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-6 animate-fade-in-up">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-xl mb-8 text-sand-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Contact our sales team for wholesale pricing and availability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-white text-ocean-700 hover:bg-sand-200 hover:scale-105 transition-all duration-300">
                Download Product Catalog
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Request Samples
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;