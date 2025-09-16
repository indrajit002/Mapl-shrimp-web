import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import heroImage from "@/assets/hero-shrimp-farm.jpg";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "MAPL Shrimp Achieves Carbon Neutral Certification",
      excerpt: "We're proud to announce that our sustainable farming practices have been officially recognized with carbon neutral certification, setting new industry standards.",
      date: "2024-01-15",
      author: "Dr. Jean-Pierre Rakoto",
      category: "Sustainability",
      image: heroImage,
      featured: true
    },
    {
      id: 2,
      title: "New Partnership with European Distributors",
      excerpt: "Expanding our reach across Europe with premium sustainable shrimp now available in 15 new markets.",
      date: "2024-01-10",
      author: "Marie Andriamahefa",
      category: "Business",
      image: heroImage,
      featured: false
    },
    {
      id: 3,
      title: "Innovative Water Recycling System Reduces Usage by 95%",
      excerpt: "Our latest technological advancement in water management sets new benchmarks for sustainable aquaculture.",
      date: "2024-01-05",
      author: "Thomas Raharison",
      category: "Innovation",
      image: heroImage,
      featured: false
    },
    {
      id: 4,
      title: "Community Education Program Launches in Mahajanga",
      excerpt: "Empowering local communities through education and sustainable farming knowledge sharing initiatives.",
      date: "2023-12-28",
      author: "Community Team",
      category: "Community",
      image: heroImage,
      featured: false
    },
    {
      id: 5,
      title: "Research Collaboration with University of Antananarivo",
      excerpt: "Partnering with leading marine biologists to advance sustainable aquaculture research and development.",
      date: "2023-12-20",
      author: "Research Team",
      category: "Research",
      image: heroImage,
      featured: false
    },
    {
      id: 6,
      title: "ASC Certification Renewal for Another 3 Years",
      excerpt: "Our commitment to responsible aquaculture continues with renewed ASC certification across all facilities.",
      date: "2023-12-15",
      author: "Quality Team",
      category: "Certification",
      image: heroImage,
      featured: false
    }
  ];

  const categories = ["All", "Sustainability", "Business", "Innovation", "Community", "Research", "Certification"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-serif font-bold mb-6">
                Latest News & Insights
              </h1>
              <p className="text-fluid-lg md:text-fluid-xl text-sand-200">
                Stay updated with our latest developments in sustainable aquaculture and industry innovations
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <Badge className="mb-4 bg-coral-400/10 text-coral-400 border-coral-400">
                  Featured Article
                </Badge>
                <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(articles[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {articles[0].author}
                  </div>
                </div>
                <Button size="lg" className="bg-ocean-700 hover:bg-ocean-900">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="animate-scale-in">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-center text-ocean-900 mb-12">
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <Card key={article.id} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-ocean-900">
                      <Tag className="h-3 w-3 mr-1" />
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-sand-200">
              Subscribe to our newsletter for the latest news and insights
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-ocean-900 placeholder-ocean-700"
              />
              <Button className="bg-white text-ocean-700 hover:bg-sand-200">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
