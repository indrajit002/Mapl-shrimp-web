import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "black-tiger",
    name: "Black Tiger",
    scientific: "Penaeus monodon",
    sizes: ["16/20", "21/25", "26/30", "31/40"],
    features: ["Bold flavor", "Firm texture", "Versatile cooking"],
    description: "Our flagship Black Tiger shrimp delivers exceptional taste with a firm, succulent texture perfect for grilling, sautéing, or tempura.",
  },
  {
    id: "vannamei",
    name: "Vannamei",
    scientific: "Litopenaeus vannamei",
    sizes: ["31/40", "41/50", "51/60", "61/70"],
    features: ["Sweet flavor", "Tender texture", "Quick cooking"],
    description: "Premium Vannamei shrimp with a naturally sweet flavor profile and tender texture, ideal for salads, pasta, and stir-fry dishes.",
  },
  {
    id: "value-added",
    name: "Value-Added",
    scientific: "Pre-processed products",
    sizes: ["Peeled", "Deveined", "Tail-on", "Butterfly"],
    features: ["Ready to cook", "Time-saving", "Consistent quality"],
    description: "Save preparation time with our value-added products, professionally processed while maintaining the highest quality standards.",
  },
];

const ProductTabs = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-br from-coral-50 via-white to-ocean-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-ocean-100"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl eb-garamond font-bold text-foreground mb-4">
            Premium Product Range
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto eb-garamond-text">
            From ocean to plate, discover our selection of sustainably-farmed, 
            premium quality shrimp varieties
          </p>
        </div>

        <Tabs defaultValue="black-tiger" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-1 md:grid-cols-3 h-auto p-1 mb-8">
            {products.map((product) => (
              <TabsTrigger
                key={product.id}
                value={product.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {product.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent
              key={product.id}
              value={product.id}
              className="animate-fade-in"
            >
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl eb-garamond font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic mb-4">
                      {product.scientific}
                    </p>
                    <p className="text-foreground mb-6">{product.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="eb-garamond font-semibold text-foreground mb-2">
                          Available Sizes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size) => (
                            <Badge
                              key={size}
                              variant="secondary"
                              className="bg-secondary text-secondary-foreground"
                            >
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="eb-garamond font-semibold text-foreground mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {product.features.map((feature) => (
                            <li
                              key={feature}
                              className="text-muted-foreground flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-ocean opacity-20" />
                      <Button size="lg" className="bg-gradient-ocean hover:bg-gradient-aqua text-white shadow-lg hover:shadow-xl border-0">
                        Request Samples
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;