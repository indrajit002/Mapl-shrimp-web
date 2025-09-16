import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessServices from "@/components/BusinessServices";
import CompaniesGrid from "@/components/CompaniesGrid";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import DivisionsShowcase from "@/components/DivisionsShowcase";
import VirtualTour from "@/components/VirtualTour";
import CSRSustainability from "@/components/CSRSustainability";
import GlobalPartners from "@/components/GlobalPartners";
import MediaBlog from "@/components/MediaBlog";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="MAPL Shrimp - Premium Sustainable Aquaculture from Madagascar | 25+ Years Excellence"
        description="Leading sustainable shrimp farming in Madagascar for over 25 years. Premium quality shrimp products with ASC, BAP, HACCP certifications. Environmental stewardship and community development. Export worldwide."
        keywords="sustainable shrimp, Madagascar aquaculture, premium shrimp, sustainable farming, MAPL Shrimp, aquaculture excellence, ASC certified, BAP certified, HACCP certified, organic shrimp, eco-friendly seafood, Madagascar shrimp export, sustainable aquaculture technology, marine conservation, seafood export Madagascar"
        image="/assets/hero-shrimp-farm.jpg"
        url="https://maplshrimp.com"
        type="website"
      />
      <div className="min-h-screen bg-gradient-ocean-light">
        <Header />
        <main role="main">
          <Hero />
          <About />
          <BusinessServices />
          <CompaniesGrid />
          <InteractiveTimeline />
          <DivisionsShowcase />
          <VirtualTour />
          <CSRSustainability />
          <GlobalPartners />
          <MediaBlog />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
