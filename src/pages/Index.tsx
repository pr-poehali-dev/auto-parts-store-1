import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Двигатель", icon: "Cog", color: "bg-blue-500" },
    { name: "Тормоза", icon: "CircleStop", color: "bg-red-500" },
    { name: "Подвеска", icon: "Wrench", color: "bg-green-500" },
    { name: "Электрика", icon: "Zap", color: "bg-yellow-500" },
    { name: "Кузов", icon: "Car", color: "bg-purple-500" },
    { name: "Масла", icon: "Droplets", color: "bg-orange-500" },
  ];

  const popularProducts = [
    {
      name: "Тормозные колодки Brembo",
      price: "3 450 ₽",
      oldPrice: "4 200 ₽",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    },
    {
      name: "Масло Shell Helix 5W-30",
      price: "2 890 ₽",
      image:
        "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=300&h=200&fit=crop",
    },
    {
      name: "Фильтр воздушный Mann",
      price: "890 ₽",
      image:
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=300&h=200&fit=crop",
    },
    {
      name: "Свечи зажигания NGK",
      price: "1 290 ₽",
      image:
        "https://images.unsplash.com/photo-1609741199743-341894485562?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                АвтоЗапчасти.рф
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={18} />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Categories */}
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
                    <Icon
                      name={category.icon}
                      size={28}
                      className="text-white"
                    />
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

      {/* Popular Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Популярные товары
            </h3>
            <Button variant="outline">
              Все товары
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.oldPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      СКИДКА
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 hover-scale"
                    >
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">
                Доставка по Москве в день заказа, по России 1-3 дня
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">
                Только оригинальные запчасти с гарантией от производителя
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">
                Консультации по подбору запчастей в любое время
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">АвтоЗапчасти.рф</span>
              </div>
              <p className="text-gray-400">
                Надёжный поставщик автозапчастей с 2010 года
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Двигатель</li>
                <li>Тормозная система</li>
                <li>Подвеска</li>
                <li>Электрика</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Как заказать</li>
                <li>Доставка и оплата</li>
                <li>Возврат товара</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@автозапчасти.рф</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
