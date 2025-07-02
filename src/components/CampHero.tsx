import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CampHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-green-600">
          🌲
        </div>
        <div className="absolute top-40 right-20 text-4xl text-green-500">
          🦋
        </div>
        <div className="absolute bottom-40 left-20 text-5xl text-yellow-500">
          🌻
        </div>
        <div className="absolute bottom-20 right-10 text-6xl text-green-600">
          🏕️
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 font-montserrat">
          Лесные приключения
        </h1>
        <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto font-open-sans">
          Детский лагерь для юных исследователей природы от 7 до 14 лет
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Trees" className="mr-2" size={20} />
            Записаться в лагерь
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 text-lg"
          >
            <Icon name="Camera" className="mr-2" size={20} />
            Посмотреть фото
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampHero;
