import { Card } from "@/components/ui/card";

interface CompanyCardProps {
  name: string;
  logo: string;
  description: string;
  partnership: string;
  delay?: number;
}

const CompanyCard = ({ name, logo, description, partnership, delay = 0 }: CompanyCardProps) => {
  return (
    <Card
      className="group p-8 hover:scale-105 cursor-pointer border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative overflow-hidden"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.8s cubic-bezier(0.22,0.9,0.38,1) ${delay}s forwards`,
      }}
      role="article"
      tabIndex={0}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            {logo}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-slate-600 mb-3 font-medium">{description}</p>
          </div>
        </div>
        
        {/* Partnership Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-2"></div>
          <p className="text-sm text-slate-700 font-semibold">{partnership}</p>
        </div>
        
        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </Card>
  );
};

export default CompanyCard;