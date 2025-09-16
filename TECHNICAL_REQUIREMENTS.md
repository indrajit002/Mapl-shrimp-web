# MAPL Shrimp Website - Technical Requirements

## 🎯 **Image Optimization Guidelines**

### **File Formats & Compression**
- **Primary Format**: WebP (90% quality)
- **Fallback Format**: JPEG (85% quality)
- **Logo Format**: PNG (transparent background)
- **Vector Graphics**: SVG (scalable)

### **Resolution Requirements**
- **Hero Images**: 1920x1080px minimum
- **Content Images**: 1200x800px minimum
- **Thumbnails**: 400x300px
- **Logos**: 300x150px (partners), 200x100px (clients)
- **Mobile Images**: 768x512px

### **File Size Limits**
- **Hero Images**: <500KB
- **Content Images**: <300KB
- **Thumbnails**: <100KB
- **Logos**: <50KB
- **Mobile Images**: <200KB

---

## 🎥 **Video Requirements**

### **Format Specifications**
- **Container**: MP4
- **Codec**: H.264
- **Resolution**: 1920x1080px (1080p)
- **Frame Rate**: 30fps
- **Bitrate**: 5-8 Mbps
- **Duration**: 30-60 seconds (tour videos)

### **File Size Limits**
- **Virtual Tour Videos**: <10MB
- **Drone Footage**: <15MB
- **Promotional Videos**: <20MB

### **Optimization**
- **Compression**: H.264 with CRF 23
- **Audio**: AAC, 128kbps
- **Thumbnails**: Generate poster frames

---

## 📱 **Responsive Design Requirements**

### **Breakpoints**
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### **Image Sizes by Device**
- **Mobile**: 768x512px
- **Tablet**: 1024x683px
- **Desktop**: 1920x1080px
- **Large Desktop**: 2560x1440px

---

## 🌐 **SEO & Performance**

### **Image SEO**
- **Alt Text**: Descriptive, keyword-rich
- **File Names**: SEO-friendly (kebab-case)
- **Metadata**: Proper EXIF data
- **Sitemap**: Include in image sitemap

### **Performance Optimization**
- **Lazy Loading**: Implement for all images
- **Progressive Loading**: Low-res placeholders
- **CDN**: Use content delivery network
- **Caching**: Proper cache headers

---

## ♿ **Accessibility Requirements**

### **Alt Text Guidelines**
- **Descriptive**: Clear description of image content
- **Contextual**: Relevant to surrounding content
- **Concise**: Under 125 characters
- **Meaningful**: Avoid "image of" or "picture of"

### **Examples**
- ✅ "Aerial view of MAPL's sustainable shrimp pond system in Madagascar"
- ❌ "Image of ponds"
- ✅ "HACCP certified processing facility interior with automated equipment"
- ❌ "Factory inside"

---

## 🎨 **Brand Guidelines**

### **Color Palette**
- **Primary Ocean**: #0ea5e9 (RGB: 14, 165, 233)
- **Secondary Coral**: #f97316 (RGB: 249, 115, 22)
- **Accent Green**: #10b981 (RGB: 16, 185, 129)
- **Neutral Slate**: #64748b (RGB: 100, 116, 139)

### **Typography**
- **Headings**: Serif font (e.g., Playfair Display)
- **Body Text**: Sans-serif font (e.g., Inter)
- **Captions**: Smaller, muted text

### **Visual Style**
- **Photography**: Professional, high-quality
- **Composition**: Clean, modern, minimal
- **Lighting**: Natural, well-lit
- **Color Grading**: Consistent, warm tones

---

## 📁 **File Organization**

### **Directory Structure**
```
public/
├── images/
│   ├── hero/
│   ├── timeline/
│   ├── divisions/
│   │   ├── aquaculture/
│   │   ├── processing/
│   │   ├── sustainability/
│   │   └── research/
│   ├── virtual-tour/
│   ├── certifications/
│   ├── partners/
│   ├── clients/
│   ├── blog/
│   ├── recipes/
│   ├── press/
│   └── csr/
├── videos/
│   ├── virtual-tour/
│   ├── drone-footage/
│   └── promotional/
└── documents/
    ├── certifications/
    ├── reports/
    └── press-releases/
```

### **Naming Convention**
- **Format**: `category-description-version.ext`
- **Examples**: 
  - `hero-facility-aerial-v2.jpg`
  - `timeline-company-founding-2000.jpg`
  - `partners-aquafood-europe-logo.png`

---

## 🔧 **Technical Implementation**

### **Image Optimization Tools**
- **WebP Conversion**: `cwebp` or online tools
- **JPEG Optimization**: `jpegoptim` or `mozjpeg`
- **PNG Optimization**: `pngquant` or `optipng`
- **Batch Processing**: ImageMagick or GIMP

### **Responsive Images**
```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-desktop.webp">
  <source media="(min-width: 768px)" srcset="image-tablet.webp">
  <img src="image-mobile.webp" alt="Description">
</picture>
```

### **Lazy Loading**
```html
<img 
  src="placeholder.jpg" 
  data-src="actual-image.jpg" 
  alt="Description"
  loading="lazy"
>
```

---

## 📊 **Quality Assurance**

### **Pre-Upload Checklist**
- [ ] Image resolution meets requirements
- [ ] File size is optimized
- [ ] Alt text is descriptive and accurate
- [ ] File name follows convention
- [ ] Image is properly cropped and composed
- [ ] Color correction is applied
- [ ] Mobile responsiveness verified

### **Testing Requirements**
- [ ] Images load on all devices
- [ ] Lazy loading works correctly
- [ ] Alt text displays properly
- [ ] No broken image links
- [ ] Performance metrics meet targets

---

## 🚀 **Performance Targets**

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### **Image Performance**
- **Hero Image Load**: <1s
- **Content Images**: <2s
- **Thumbnails**: <0.5s
- **Total Page Size**: <5MB

---

## 📞 **Support & Resources**

### **Tools & Software**
- **Image Editing**: Adobe Photoshop, GIMP
- **Video Editing**: Adobe Premiere, DaVinci Resolve
- **Optimization**: TinyPNG, ImageOptim
- **Testing**: Google PageSpeed Insights, GTmetrix

### **Team Contacts**
- **Technical Lead**: [Name] - [email]
- **Content Manager**: [Name] - [email]
- **Design Lead**: [Name] - [email]

---

*This document should be referenced throughout the content creation process to ensure all assets meet technical requirements.*
