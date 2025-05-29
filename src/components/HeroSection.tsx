import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in">
          Автозапчасти для любого авто
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Более 500 000 оригинальных запчастей в наличии
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                placeholder="Поиск по VIN, артикулу или названию..."
                className="h-12 text-lg bg-white text-gray-900 border-0 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 h-12 px-8 shadow-lg hover-scale"
            >
              <Icon name="Search" size={20} />
              Найти
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-3">
            Например: "тормозные колодки BMW E90" или "WVA 24174"
          </p>
        </div>
      </div>
    </section>
  );
}
