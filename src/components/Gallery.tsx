import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import premiumShrimp from "@/assets/premium-shrimp.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import madagascarCoast from "@/assets/madagascar-coast.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: premiumShrimp,
      alt: "Premium MAPL shrimp on ice",
      caption: "Fresh, premium quality shrimp",
    },
    {
      src: facilityInterior,
      alt: "Modern aquaculture facility",
      caption: "State-of-the-art biosecurity protocols",
    },
    {
      src: madagascarCoast,
      alt: "Madagascar pristine coastline",
      caption: "Pristine waters of Madagascar",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-ocean-50 via-slate-50 to-coral-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl eb-garamond font-bold text-foreground mb-4">
            Experience Excellence
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto eb-garamond-text">
            Take a closer look at our sustainable farming operations and premium products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.alt}
              className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image.src)}
              style={{
                opacity: 0,
                animation: `scaleIn 0.5s cubic-bezier(0.22,0.9,0.38,1) ${
                  index * 0.1
                }s forwards`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto animate-scale-in"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;