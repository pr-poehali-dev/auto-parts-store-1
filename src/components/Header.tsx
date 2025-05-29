import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
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
  );
}
