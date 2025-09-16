import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Reliance Fresh",
    logo: "RF",
    description: "India's leading retail chain",
    partnership: "Premium seafood partner since 2018",
  },
  {
    name: "Taj Hotels",
    logo: "TH",
    description: "Luxury hospitality group",
    partnership: "Exclusive shrimp supplier",
  },
  {
    name: "Swiggy Instamart",
    logo: "SI",
    description: "Online grocery platform",
    partnership: "Featured sustainable brand",
  },
  {
    name: "ITC Hotels",
    logo: "IH",
    description: "Premium hotel chain",
    partnership: "Preferred seafood partner",
  },
  {
    name: "BigBasket",
    logo: "BB",
    description: "Online grocery delivery",
    partnership: "Sustainable seafood provider",
  },
  {
    name: "Oberoi Hotels",
    logo: "OH",
    description: "International luxury hotels",
    partnership: "Premium Indian shrimp supplier",
  },
];

const CompaniesGrid = () => {
  return (
    <section id="partners" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From Michelin-starred restaurants to premium retailers, the world's most 
            discerning buyers choose Mayank Aquaculture for uncompromising quality and sustainability.
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <CompanyCard
              key={company.name}
              {...company}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">25+</div>
            <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-600">50+</div>
            <div className="text-sm text-slate-600 font-medium">Global Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">99%</div>
            <div className="text-sm text-slate-600 font-medium">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-600">1000+</div>
            <div className="text-sm text-slate-600 font-medium">MT Annual Production</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesGrid;