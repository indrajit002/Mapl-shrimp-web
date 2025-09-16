import shrimpLoadingImage from "@/assets/Shrimp-Loading.png";

interface ShrimpLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  className?: string;
}

const ShrimpLoader = ({ 
  size = "md", 
  text = "Loading...", 
  className = "" 
}: ShrimpLoaderProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg", 
    xl: "text-xl"
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Spinning Shrimp Image */}
        <img
          src={shrimpLoadingImage}
          alt="Loading shrimp"
          className={`${sizeClasses[size]} animate-shrimp-spin`}
        />
        
        {/* Optional: Add a subtle glow effect */}
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-aqua opacity-20 animate-pulse`}
          style={{
            animationDuration: '1.5s',
            animationDelay: '0.5s'
          }}
        />
      </div>
      
      {/* Loading Text */}
      {text && (
        <p className={`text-ocean-700 font-medium ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default ShrimpLoader;
