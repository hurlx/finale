"use client";
import { use, useState } from "react";
import { products } from "@/app/Lib/data"; // your correct path

export default function BagDetailPage(props) {
  const { slug } = use(props.params); // unwrap the async params

  const bag = products.find((item) => item.slug === slug);

  if (!bag) {
    return <main className="p-10 text-xl">Bag not found</main>;
  }

  const [selectedImage, setSelectedImage] = useState(bag.images?.[0]);

  return (
    <main className="min-h-screen p-10 bg-[#faebf2] z-10 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{bag.name}</h1>

        {/* Main image */}
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Main bag"
            className="w-[500px] rounded-xl mb-6 shadow-md transition duration-300"
          />
        )}

        {/* Description */}
        <p className="text-lg text-gray-700 mb-2">{bag.shortDescription}</p>
        <p className="text-xl font-semibold">${bag.price}</p>
        <p className="text-sm text-gray-500 mt-2">Tag: {bag.tag}</p>

        {/* Available Colors */}
        <div className="mt-6 flex flex-col items-center">
  <h3 className="text-lg font-semibold mb-2">Available Colors:</h3>
  <div className="flex gap-4">
    {bag.colors.map((color, index) => (
      <div key={index} className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full border border-gray-300"
          style={{ backgroundColor: color.hex }}
          title={color.name}
        />
        <span className="text-sm text-gray-700">{color.name}</span>
      </div>
    ))}
  </div>
</div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-6">
          {bag.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                selectedImage === img ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
