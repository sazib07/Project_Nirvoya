"use client";

import React from 'react'
import {
  HeartPulse,
  Shirt,
  ToyBrick,
  ShoppingBasket,
  House,
  Watch,
  BookOpen,
  Hammer,
  Gem,
  Dog,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "Health & Household", icon: HeartPulse },
  { name: "Kids Fashion", icon: Shirt },
  { name: "Toys", icon: ToyBrick },
  { name: "Groceries", icon: ShoppingBasket },
  { name: "Home & Lifestyle", icon: House },
  { name: "Men Fashion", icon: Shirt },
  { name: "Women’s Fashion", icon: Shirt },
  { name: "Stationary & Books", icon: BookOpen },
  { name: "Tools & Hardware", icon: Hammer },
  { name: "Leather Goods", icon: ShoppingBasket },
  { name: "Jewelleries", icon: Gem },
 { name: "Men's Fashion", icon: Shirt },
  { name: "Watches", icon: Watch },
  { name: "Pet Supplies", icon: Dog },
  { name: "Seasonal", icon: CalendarDays },
];
const Category = () => {
  return (
<div className="bg-[#f5f5f5] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-[235px] bg-white border border-gray-200 rounded-lg px-5 py-4 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-sky-500" />

                  <span className="text-[15px] text-gray-700 font-medium">
                    {item.name}
                  </span>
                </div>

                <ChevronRight size={18} className="text-gray-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Category
