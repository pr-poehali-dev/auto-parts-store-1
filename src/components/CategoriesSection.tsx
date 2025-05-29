import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Категории запчастей
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 cursor-pointer group hover-scale ${
                selectedCategory === index ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() =>
                setSelectedCategory(selectedCategory === index ? null : index)
              }
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={category.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
