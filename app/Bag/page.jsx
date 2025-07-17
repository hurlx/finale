"use client";

import ProductGrid from "@/components/ProductGrid";

export default function BagGallery() {
  return (
     <main className="bg-[#f5f5f5] min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Bags</h1>
      <ProductGrid />
    </main>
  );
}
