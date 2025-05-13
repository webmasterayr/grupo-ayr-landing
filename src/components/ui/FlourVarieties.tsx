import React from "react";
import { Leaf, Scale, Award } from "lucide-react";

interface FlourVarietiesProps {
  mode?: "icon" | "image";
}

// Example data for flour varieties with image references
const flourVarieties = [
  {
    name: "Cassava Flour",
    icon: <Leaf size={32} className="text-green-600" />, 
    image: "/varieties/harina de yuca.png"
  },
  {
    name: "Sweet Potato Flour",
    icon: <Award size={32} className="text-yellow-600" />, 
    image: "/varieties/harina de camote.png"
  },
  {
    name: "Banana Flour",
    icon: <Scale size={32} className="text-purple-600" />, 
    image: "/varieties/harina de banano.png"
  },
  {
    name: "Plantain Flour",
    icon: <Leaf size={32} className="text-green-600" />, 
    image: "/varieties/Plantain flour.png"
  },
  {
    name: "Purple Sweet Potato Flour",
    icon: <Award size={32} className="text-yellow-600" />, 
    image: "/varieties/Purple sweet potato.png"
  },
  {
    name: "Taro Flour",
    icon: <Scale size={32} className="text-purple-600" />, 
    image: "/varieties/Taro flour.png"
  },
  {
    name: "Turmeric Flour",
    icon: <Leaf size={32} className="text-green-600" />, 
    image: "/varieties/Tumeric flour.png"
  },
];

import Image from "next/image";

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
              <Image
                src={variety.image}
                alt={variety.name}
                width={64}
                height={64}
                className="rounded-full object-cover border border-gray-200 bg-white"
                unoptimized={true}
              />
            </div>
          )}
          <span className="font-semibold text-sm">{variety.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FlourVarieties;
