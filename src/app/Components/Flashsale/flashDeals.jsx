// FlashDeals.jsx

import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Headrest Executive Mesh Office Chair set",
    price: "৳10500",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Women fashion dress set",
    price: "৳11000",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657",
    title: "Headrest Executive Mesh Office Chair set",
    price: "৳5000",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    title: "Women black dress and red hat collections",
    price: "৳1000.00",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    title: "Women fashion dress set",
    price: "৳11000",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Headrest Executive Mesh Office Chair set",
    price: "৳5000",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    title: "Women black dress and red hat collections",
    price: "৳1000.00",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Headrest Executive Mesh Office Chair set",
    price: "৳5000",
  },
];

export default function FlashDeals() {
  return (
    <div className="bg-[#f5f5f5] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Featured Product
          </h2>

          <button className="flex items-center gap-2 text-gray-500 hover:text-black transition">
            View more →
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-300"
                />

                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow">
                  <Heart
                    size={16}
                    className="text-gray-400 hover:text-red-500"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                  <span className="text-xs text-gray-400 ml-1">(0)</span>
                </div>

                {/* Title */}
                <h3 className="text-[13px] leading-[20px] text-gray-600 mb-2">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-sky-500 font-bold text-lg">
                    {product.price}
                  </p>

                  <button className="text-sky-500 hover:scale-110 transition">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
            SHOW MORE ▼
          </button>
        </div>
      </div>
    </div>
  );
}