import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = "website",
  structuredData,
  noindex = false
}: SEOHeadProps) => {
  const { t, language } = useLanguage();

  const defaultTitle = t('hero.title') + " | " + t('about.title');
  const defaultDescription = t('hero.description');
  const defaultKeywords = "premium shrimp, sustainable aquaculture, India, MAPL, Mayank Aquaculture, organic shrimp, HACCP certified, ASC certified, BAP certified, seafood export, aquaculture technology, sustainable farming, India shrimp, premium seafood, eco-friendly shrimp, certified shrimp, aquaculture innovation, biosecure farming";
  const defaultImage = "https://maplshrimp.com/assets/hero-shrimp-farm.jpg";
  const defaultUrl = typeof window !== 'undefined' ? window.location.href : "https://maplshrimp.com";

  const seoTitle = title ? `${title} | Mayank Aquaculture Pvt. Ltd.` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image?.startsWith('http') ? image : `https://maplshrimp.com${image}`;
  const seoUrl = url || defaultUrl;

  // Enhanced structured data for better SEO
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mayank Aquaculture Pvt. Ltd.",
    "alternateName": "MAPL",
    "description": seoDescription,
    "url": "https://maplshrimp.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://maplshrimp.com/assets/logo.jpg",
      "width": 200,
      "height": 60
    },
    "image": {
      "@type": "ImageObject",
      "url": seoImage,
      "width": 1200,
      "height": 630
    },
    "foundingDate": "1996",
    "foundingLocation": {
      "@type": "Place",
      "name": "India"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aquaculture Zone",
      "addressLocality": "India",
      "addressRegion": "India",
      "postalCode": "000000",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XX-XXXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Spanish", "French"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "email": "info@maplshrimp.com",
        "contactType": "sales",
        "availableLanguage": ["English", "Chinese", "Spanish"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/mapl-shrimp",
      "https://www.facebook.com/maplshrimp",
      "https://www.instagram.com/maplshrimp",
      "https://twitter.com/maplshrimp"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Shrimp Products",
      "description": "Sustainable, high-quality shrimp products from Madagascar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Premium Madagascar Shrimp",
            "description": "Sustainable, high-quality shrimp from Madagascar's pristine waters",
            "category": "Seafood",
            "brand": {
              "@type": "Brand",
              "name": "MAPL Shrimp"
            }
          },
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "award": [
      "ASC (Aquaculture Stewardship Council) Certification",
      "BAP (Best Aquaculture Practices) Certification", 
      "HACCP (Hazard Analysis Critical Control Points) Certification",
      "BRC Grade A Certification",
      "ISO 14001 Environmental Management Certification",
      "Carbon Neutral Certification"
    ],
    "knowsAbout": [
      "Sustainable Aquaculture",
      "Shrimp Farming",
      "Environmental Stewardship",
      "Seafood Export",
      "Aquaculture Technology",
      "Marine Conservation"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "numberOfEmployees": "500-1000",
    "slogan": "From Our Ponds to Your Plate - Sustainable Excellence"
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="MAPL Shrimp" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MAPL Shrimp - Premium Sustainable Aquaculture from Madagascar" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="MAPL Shrimp" />
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : language === 'es' ? 'es_ES' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content="MAPL Shrimp - Premium Sustainable Aquaculture from Madagascar" />
      <meta name="twitter:site" content="@maplshrimp" />
      <meta name="twitter:creator" content="@maplshrimp" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="MAPL Shrimp" />
      <meta name="application-name" content="MAPL Shrimp" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content={language} />
      <meta name="geo.region" content="MG" />
      <meta name="geo.placename" content="Mahajanga" />
      <meta name="geo.position" content="-15.7167;46.3167" />
      <meta name="ICBM" content="-15.7167, 46.3167" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Aquaculture Zone" />
      <meta name="business:contact_data:locality" content="Mahajanga" />
      <meta name="business:contact_data:region" content="Boeny" />
      <meta name="business:contact_data:postal_code" content="401" />
      <meta name="business:contact_data:country_name" content="Madagascar" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Products */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MAPL Shrimp",
          "url": "https://maplshrimp.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://maplshrimp.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://maplshrimp.com"
            }
          ]
        })}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />
      <link rel="dns-prefetch" href="//www.facebook.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//www.twitter.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default SEOHead;
