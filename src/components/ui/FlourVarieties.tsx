import React from "react";
import { Leaf, Scale, Award } from "lucide-react";

interface FlourVarietiesProps {
  mode?: "icon" | "image";
}

// Example data for flour varieties
const flourVarieties = [
  { name: "Cassava Flour", icon: <Leaf size={32} className="text-green-600" /> },
  { name: "Sweet Potato Flour", icon: <Award size={32} className="text-yellow-600" /> },
  { name: "Yam Flour", icon: <Scale size={32} className="text-purple-600" /> },
  // Add more varieties as needed
];

const FlourVarieties: React.FC<FlourVarietiesProps> = ({ mode = "icon" }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {flourVarieties.map((variety, idx) => (
        <div
          key={variety.name}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center flex flex-col items-center"
        >
          {mode === "icon" ? (
            <div className="mb-2">{variety.icon}</div>
          ) : (
            <div className="mb-2">
              {/* Place image logic here if mode === 'image' and you have images */}
              <span className="block w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          )}
          <span className="font-semibold text-sm">{variety.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FlourVarieties;
