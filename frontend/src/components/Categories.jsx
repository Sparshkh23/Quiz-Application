import React from "react";

// ✅ Import images from src/assets
import comedyImg from "../assets/comedy.png";
import businessImg from "../assets/business.png";
import educationImg from "../assets/education.png";
import hobbiesImg from "../assets/hobbies.png";
import governmentImg from "../assets/government.png";
import technologyImg from "../assets/technology.png";

// ✅ Categories array with imported images
const categories = [
  {
    name: "Comedy",
    bgColor: "bg-[#F0D9FF]", // light purple
    img: comedyImg,
  },
  {
    name: "Business",
    bgColor: "bg-[#E5E5E5]", // light gray
    img: businessImg,
  },
  {
    name: "Education",
    bgColor: "bg-[#FFD6D6]", // light red
    img: educationImg,
  },
  {
    name: "Hobbies",
    bgColor: "bg-[#D9E6FF]", // light blue
    img: hobbiesImg,
  },
  {
    name: "Government",
    bgColor: "bg-[#FFF3D6]", // light yellow
    img: governmentImg,
  },
  {
    name: "Technology",
    bgColor: "bg-[#E0FFD6]", // light green
    img: technologyImg,
  },
];

export default function Categories() {
  return (
    <div className="pt-24 px-8 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bgColor} rounded-2xl p-6 shadow-lg flex flex-col items-start transform transition-transform duration-300 hover:scale-105`}
          >
            <h1 className="text-lg font-semibold mb-4 text-gray-800">
              {cat.name}
            </h1>
            <div className="relative w-32 h-20">
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute w-full h-full object-cover rounded-lg shadow-md transform rotate-6"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
