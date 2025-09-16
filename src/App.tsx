import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import ErrorBoundary from "@/components/ErrorBoundary";
import ShrimpLoader from "@/components/ShrimpLoader";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const Importer = lazy(() => import("./pages/Importer"));
const Exporter = lazy(() => import("./pages/Exporter"));
const ImportQuote = lazy(() => import("./pages/ImportQuote"));
const ExportQuote = lazy(() => import("./pages/ExportQuote"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Research = lazy(() => import("./pages/Research"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Test = lazy(() => import("./pages/Test"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-ocean-light">
    <div className="flex flex-col items-center space-y-4">
      <ShrimpLoader size="lg" text="Loading page..." />
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <TooltipProvider>
              <Preloader />
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <PageTransition>
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/test" element={<Test />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/sustainability" element={<Sustainability />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/importer" element={<Importer />} />
                      <Route path="/exporter" element={<Exporter />} />
                      <Route path="/import-quote" element={<ImportQuote />} />
                      <Route path="/export-quote" element={<ExportQuote />} />
                      <Route path="/certifications" element={<Certifications />} />
                      <Route path="/research" element={<Research />} />
                      <Route path="/partnerships" element={<Partnerships />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </PageTransition>
              </BrowserRouter>
            </TooltipProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
