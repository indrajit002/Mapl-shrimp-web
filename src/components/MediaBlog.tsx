import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sustainableAquaculture from "@/assets/sustainable-aquaculture.jpg";
import marineConservation from "@/assets/marine-conservation.jpg";
import shrimpCooking from "@/assets/shrimp-cooking.jpg";
import aquacultureTechnology from "@/assets/aquaculture-technology.jpg";
import aquacultureFacilityAerial from "@/assets/aquaculture-facility-aerial.jpg";
import seafoodTradeShow from "@/assets/seafood-trade-show.jpg";
import shrimpProcessingFacility from "@/assets/shrimp-processing-facility.jpg";
import renewableEnergyAquaculture from "@/assets/renewable-energy-aquaculture.jpg";
import premiumShrimpProducts from "@/assets/premium-shrimp-products.jpg";
import chefPreparingShrimp from "@/assets/chef-preparing-shrimp.jpg";
import mediaImage from "@/assets/Media_image.jpg";
import { 
  Calendar, 
  User, 
  Eye, 
  Heart, 
  Share2, 
  ExternalLink,
  Play,
  Image,
  FileText,
  Newspaper,
  ChefHat,
  Leaf,
  Award,
  Globe,
  ArrowRight,
  Search,
  Filter
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: "sustainability" | "recipes" | "industry" | "company" | "press";
  tags: string[];
  image: string;
  views: number;
  likes: number;
  featured: boolean;
}

interface PressRelease {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  source: string;
  category: "award" | "partnership" | "expansion" | "sustainability" | "innovation";
  image: string;
  link: string;
}

interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  prepTime: string;
  cookTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  chef: string;
  category: "appetizer" | "main" | "dessert" | "soup";
}

const MediaBlog = () => {
  const [activeTab, setActiveTab] = useState("blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts: BlogPost[] = [
    {
      id: "sustainable-aquaculture-future",
      title: "The Future of Sustainable Aquaculture: Our Vision for 2030",
      excerpt: "Exploring how MAPL is leading the transformation towards carbon-neutral aquaculture practices and what this means for the industry.",
      content: "Full article content...",
      author: "Dr. Sarah Chen",
      authorRole: "Head of Sustainability",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-15",
      readTime: "8 min",
      category: "sustainability",
      tags: ["sustainability", "aquaculture", "future", "innovation"],
        image: sustainableAquaculture,
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: "madagascar-conservation",
      title: "Protecting Madagascar's Marine Biodiversity: A Success Story",
      excerpt: "How our conservation efforts have helped restore coral reefs and protect endangered marine species along Madagascar's coastline.",
      content: "Full article content...",
      author: "Marine Biologist Team",
      authorRole: "Research Department",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-10",
      readTime: "6 min",
      category: "sustainability",
      tags: ["conservation", "biodiversity", "madagascar", "marine-life"],
        image: marineConservation,
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: "premium-shrimp-recipes",
      title: "Chef's Guide: 5 Ways to Cook Premium Shrimp Like a Pro",
      excerpt: "Professional cooking techniques and recipes from our partner chefs to bring out the best in premium shrimp.",
      content: "Full article content...",
      author: "Chef Marco Rodriguez",
      authorRole: "Culinary Consultant",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-08",
      readTime: "12 min",
      category: "recipes",
      tags: ["cooking", "recipes", "chef-tips", "culinary"],
        image: shrimpCooking,
      views: 2100,
      likes: 156,
      featured: true
    },
    {
      id: "aquaculture-industry-trends",
      title: "2024 Aquaculture Industry Trends: What to Watch",
      excerpt: "Analysis of emerging trends in global aquaculture, from technology adoption to consumer preferences and regulatory changes.",
      content: "Full article content...",
      author: "Industry Analysis Team",
      authorRole: "Market Research",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-05",
      readTime: "10 min",
      category: "industry",
      tags: ["industry", "trends", "analysis", "market"],
        image: aquacultureTechnology,
      views: 1750,
      likes: 98,
      featured: false
    },
    {
      id: "new-processing-facility",
      title: "MAPL Opens New State-of-the-Art Processing Facility",
      excerpt: "Our latest investment in cutting-edge processing technology to meet growing global demand for premium shrimp products.",
      content: "Full article content...",
      author: "Operations Team",
      authorRole: "Facilities Management",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-03",
      readTime: "5 min",
      category: "company",
      tags: ["facility", "expansion", "technology", "investment"],
        image: aquacultureFacilityAerial,
      views: 890,
      likes: 45,
      featured: false
    }
  ];

  const pressReleases: PressRelease[] = [
    {
      id: "sustainability-award-2024",
      title: "MAPL Receives International Sustainability Award for Ocean Conservation",
      summary: "Recognized for outstanding commitment to marine biodiversity protection and sustainable aquaculture practices.",
      publishDate: "2024-01-12",
      source: "Aquaculture Today",
      category: "award",
      image: seafoodTradeShow,
      link: "#"
    },
    {
      id: "european-partnership",
      title: "New Partnership Expands MAPL's European Market Presence",
      summary: "Strategic alliance with leading European distributor to bring premium shrimp to 15 additional countries.",
      publishDate: "2024-01-09",
      source: "Seafood Business",
      category: "partnership",
      image: shrimpProcessingFacility,
      link: "#"
    },
    {
      id: "carbon-neutral-certification",
      title: "MAPL Achieves Carbon Neutral Certification",
      summary: "First shrimp farming company in Madagascar to achieve carbon-neutral operations across all facilities.",
      publishDate: "2024-01-06",
      source: "Environmental News",
      category: "sustainability",
      image: renewableEnergyAquaculture,
      link: "#"
    }
  ];

  const recipes: Recipe[] = [
    {
      id: "garlic-butter-shrimp",
      title: "Garlic Butter Shrimp with Lemon",
      description: "A classic preparation that highlights the natural sweetness of premium shrimp",
      difficulty: "easy",
      prepTime: "10 min",
      cookTime: "5 min",
      servings: 4,
      image: chefPreparingShrimp,
      ingredients: [
        "1 lb premium shrimp, peeled and deveined",
        "4 cloves garlic, minced",
        "4 tbsp butter",
        "2 tbsp olive oil",
        "1 lemon, juiced",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
      ],
      instructions: [
        "Heat olive oil in a large skillet over medium-high heat",
        "Add shrimp and cook for 2-3 minutes per side",
        "Add garlic and butter, cook for 1 minute",
        "Add lemon juice and season with salt and pepper",
        "Garnish with fresh parsley and serve immediately"
      ],
      chef: "Chef Marco Rodriguez",
      category: "main"
    },
    {
      id: "shrimp-ceviche",
      title: "Fresh Shrimp Ceviche",
      description: "A refreshing Latin American classic with a modern twist",
      difficulty: "medium",
      prepTime: "20 min",
      cookTime: "0 min",
      servings: 6,
      image: premiumShrimpProducts,
      ingredients: [
        "1 lb premium shrimp, cooked and chopped",
        "1 red onion, thinly sliced",
        "2 tomatoes, diced",
        "1 cucumber, diced",
        "1 jalapeño, minced",
        "1/2 cup lime juice",
        "Cilantro for garnish",
        "Salt to taste"
      ],
      instructions: [
        "Combine shrimp, onion, tomatoes, and cucumber in a bowl",
        "Add jalapeño and lime juice",
        "Season with salt and mix well",
        "Refrigerate for 30 minutes",
        "Garnish with cilantro and serve chilled"
      ],
      chef: "Chef Isabella Santos",
      category: "appetizer"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: blogPosts.length },
    { id: "sustainability", name: "Sustainability", count: blogPosts.filter(p => p.category === "sustainability").length },
    { id: "recipes", name: "Recipes", count: blogPosts.filter(p => p.category === "recipes").length },
    { id: "industry", name: "Industry", count: blogPosts.filter(p => p.category === "industry").length },
    { id: "company", name: "Company", count: blogPosts.filter(p => p.category === "company").length },
    { id: "press", name: "Press", count: pressReleases.length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sustainability": return <Leaf className="h-4 w-4" />;
      case "recipes": return <ChefHat className="h-4 w-4" />;
      case "industry": return <Globe className="h-4 w-4" />;
      case "company": return <Award className="h-4 w-4" />;
      case "press": return <Newspaper className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sustainability": return "bg-green-100 text-green-800";
      case "recipes": return "bg-orange-100 text-orange-800";
      case "industry": return "bg-blue-100 text-blue-800";
      case "company": return "bg-purple-100 text-purple-800";
      case "press": return "bg-red-100 text-red-800";
      default: return "bg-ocean-100 text-ocean-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "hard": return "bg-red-100 text-red-800";
      default: return "bg-ocean-100 text-ocean-800";
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-"
        style={{ backgroundImage: `url(${mediaImage})` }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Newspaper className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Latest Updates</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-6">
            <h2 className="text-5xl md:text-6xl eb-garamond font-bold text-black mb-6">
              Media & Blog
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed eb-garamond-text font-bold">
              Discover insights, stories, and innovations from the world of sustainable aquaculture
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'blog', label: 'Blog', icon: FileText, color: 'from-blue-500 to-cyan-500' },
            { id: 'press', label: 'Press', icon: Newspaper, color: 'from-emerald-500 to-teal-500' },
            { id: 'recipes', label: 'Recipes', icon: ChefHat, color: 'from-orange-500 to-red-500' },
            { id: 'media', label: 'Gallery', icon: Image, color: 'from-purple-500 to-pink-500' }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 backdrop-blur-sm border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6" />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-16">
          {/* Blog Section */}
          <TabsContent value="blog" className="space-y-12">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="flex gap-3">
                <Filter className="h-5 w-5 text-gray-500 mt-3" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-900"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Featured Post */}
            {filteredPosts.some(post => post.featured) && (
              <div className="relative group mb-12">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden hover:bg-white transition-all duration-500 shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={filteredPosts.find(p => p.featured)?.image}
                        alt="Featured post"
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-sm font-medium shadow-lg">Featured</Badge>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        {getCategoryIcon(filteredPosts.find(p => p.featured)?.category || "")}
                        <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                          {filteredPosts.find(p => p.featured)?.category}
                        </Badge>
                      </div>
                      <h3 className="text-3xl eb-garamond font-bold text-gray-900 mb-6 leading-tight">
                        {filteredPosts.find(p => p.featured)?.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed eb-garamond-text">
                        {filteredPosts.find(p => p.featured)?.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-base text-gray-600">
                          <div className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            {filteredPosts.find(p => p.featured)?.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            {filteredPosts.find(p => p.featured)?.publishDate}
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="h-5 w-5" />
                            {filteredPosts.find(p => p.featured)?.views}
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl">
                          Read More
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className={`${getCategoryColor(post.category)} px-3 py-1 text-sm font-medium shadow-lg`}>
                        {getCategoryIcon(post.category)}
                        <span className="ml-2">{post.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl eb-garamond font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 line-clamp-3 leading-relaxed eb-garamond-text">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-sm px-3 py-1 border-gray-300 text-gray-600">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-base text-gray-600 mb-6">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          {post.publishDate}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        {post.views}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-base text-gray-600">
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          {post.likes}
                        </div>
                        <div className="font-medium">{post.readTime} read</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 text-base font-semibold rounded-xl">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="press" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl eb-garamond font-bold text-gray-900 mb-6">Press Releases</h3>
              <p className="text-gray-700 max-w-2xl mx-auto eb-garamond-text">
                Latest news and announcements from MAPL
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((release) => (
                <Card key={release.id} className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getCategoryColor(release.category)}>
                        {release.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg eb-garamond font-bold text-gray-900 mb-2 line-clamp-2">
                      {release.title}
                    </h4>
                    <p className="text-gray-700 mb-4 line-clamp-3 eb-garamond-text">
                      {release.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div>{release.source}</div>
                      <div>{release.publishDate}</div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Full Release
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipes" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl eb-garamond font-bold text-gray-900 mb-6">Chef's Recipes</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed eb-garamond-text">
                Professional recipes and cooking techniques from our partner chefs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {recipes.map((recipe) => (
                <Card key={recipe.id} className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className={`${getDifficultyColor(recipe.difficulty)} px-3 py-1 text-sm font-medium shadow-lg`}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge variant="outline" className="bg-white/90 px-3 py-1 text-sm font-medium shadow-lg border-gray-300">
                        {recipe.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h4 className="text-2xl eb-garamond font-bold text-gray-900 mb-4 leading-tight">{recipe.title}</h4>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed eb-garamond-text">{recipe.description}</p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6 text-center">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <div className="text-base text-gray-600 mb-2">Prep Time</div>
                        <div className="text-xl font-bold text-blue-900">{recipe.prepTime}</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <div className="text-base text-gray-600 mb-2">Cook Time</div>
                        <div className="text-xl font-bold text-blue-900">{recipe.cookTime}</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <div className="text-base text-gray-600 mb-2">Servings</div>
                        <div className="text-xl font-bold text-blue-900">{recipe.servings}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="eb-garamond font-semibold text-gray-900 mb-2">Ingredients</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {ingredient}
                          </li>
                        ))}
                        {recipe.ingredients.length > 4 && (
                          <li className="text-blue-600">+{recipe.ingredients.length - 4} more ingredients</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        By {recipe.chef}
                      </div>
                      <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Play className="h-4 w-4 mr-2" />
                        View Recipe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl eb-garamond font-bold text-gray-900 mb-6">Media Gallery</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed eb-garamond-text">
                High-resolution images, videos, and media assets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative aspect-square">
                    <img
                      src={premiumShrimpProducts}
                      alt={`Media ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-blue-900 hover:bg-white px-4 py-2 rounded-xl font-semibold"
                      >
                        <Image className="h-5 w-5 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MediaBlog;
