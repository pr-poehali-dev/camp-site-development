import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const CampSections = () => {
  const programs = [
    {
      title: "Природные мастерские",
      description:
        "Изучаем флору и фауну, создаём поделки из природных материалов",
      icon: "Leaf",
      emoji: "🌿",
    },
    {
      title: "Походы и квесты",
      description:
        "Увлекательные приключения на свежем воздухе с поиском сокровищ",
      icon: "Mountain",
      emoji: "🏔️",
    },
    {
      title: "Спорт на природе",
      description:
        "Активные игры, лазанье по деревьям и командные соревнования",
      icon: "Activity",
      emoji: "🏃",
    },
  ];

  const photos = [
    { src: "/placeholder.svg", alt: "Дети в лесу" },
    { src: "/placeholder.svg", alt: "Мастер-класс" },
    { src: "/placeholder.svg", alt: "Поход с рюкзаками" },
    { src: "/placeholder.svg", alt: "Костёр в лагере" },
  ];

  return (
    <div className="py-16 bg-white">
      {/* О лагере */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">
            О нашем лагере
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
            Мы создаём безопасную и вдохновляющую среду, где дети могут
            исследовать природу, заводить новых друзей и открывать свои таланты.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🌲</div>
              <CardTitle className="text-green-800">Экологичность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Обучаем детей бережному отношению к природе
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <CardTitle className="text-green-800">Командная работа</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Развиваем навыки общения и сотрудничества
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <CardTitle className="text-green-800">Личностный рост</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Помогаем каждому ребёнку раскрыть свой потенциал
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Программы */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">
            Наши программы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
            Увлекательные занятия на каждый день
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{program.emoji}</div>
                <CardTitle className="text-green-800 text-xl">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Фотогалерея */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">
              Жизнь в лагере
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Посмотрите, как весело проводят время наши ребята
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square bg-green-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">
              Контакты
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Свяжитесь с нами для записи или консультации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 text-center">
              <CardHeader>
                <Icon
                  name="Phone"
                  className="w-8 h-8 text-green-600 mx-auto mb-2"
                />
                <CardTitle className="text-green-800">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+7 (123) 456-78-90</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 text-center">
              <CardHeader>
                <Icon
                  name="Mail"
                  className="w-8 h-8 text-green-600 mx-auto mb-2"
                />
                <CardTitle className="text-green-800">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@lesnye-priklyucheniya.ru</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 text-center">
              <CardHeader>
                <Icon
                  name="MapPin"
                  className="w-8 h-8 text-green-600 mx-auto mb-2"
                />
                <CardTitle className="text-green-800">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Лесная поляна, 15
                  <br />
                  Подмосковье
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampSections;
