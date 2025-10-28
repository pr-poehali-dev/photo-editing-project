import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    title: "Веб-разработка",
    description: "Создавайте современные сайты с нуля",
    duration: "3 месяца",
    level: "Начальный",
    students: 1250,
    rating: 4.9,
    price: "29 990 ₽",
    icon: "Code2",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Дизайн UI/UX",
    description: "Проектируйте удобные интерфейсы",
    duration: "2 месяца",
    level: "Средний",
    students: 890,
    rating: 4.8,
    price: "24 990 ₽",
    icon: "Palette",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Data Science",
    description: "Анализируйте данные и стройте модели",
    duration: "4 месяца",
    level: "Продвинутый",
    students: 670,
    rating: 4.9,
    price: "39 990 ₽",
    icon: "BarChart3",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    id: 4,
    title: "Digital-маркетинг",
    description: "Продвигайте бренды в интернете",
    duration: "2 месяца",
    level: "Начальный",
    students: 1450,
    rating: 4.7,
    price: "19 990 ₽",
    icon: "TrendingUp",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    title: "Python для начинающих",
    description: "Освойте программирование с нуля",
    duration: "2 месяца",
    level: "Начальный",
    students: 2100,
    rating: 4.9,
    price: "22 990 ₽",
    icon: "Terminal",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 6,
    title: "Мобильная разработка",
    description: "Создавайте приложения для iOS и Android",
    duration: "4 месяца",
    level: "Средний",
    students: 780,
    rating: 4.8,
    price: "34 990 ₽",
    icon: "Smartphone",
    gradient: "from-orange-500 to-amber-500"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-heading bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              EduPro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Курсы
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Отзывы
            </a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              О нас
            </a>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Войти
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm font-semibold">
              🚀 Более 10 000 выпускников
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Освойте профессию
              <br />
              будущего онлайн
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Практические курсы от экспертов индустрии. 
              Получите востребованные навыки и начните карьеру мечты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Выбрать курс
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-semibold"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Курсов" },
              { number: "10K+", label: "Студентов" },
              { number: "95%", label: "Трудоустройство" },
              { number: "4.9", label: "Рейтинг" }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold font-heading bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              📚 Популярные направления
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Выберите свой путь
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные курсы по самым востребованным специальностям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon name={course.icon as any} className="text-white" size={28} />
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Clock" size={18} className="text-purple-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Users" size={18} className="text-blue-500" />
                      <span>{course.students.toLocaleString()} студентов</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Star" size={18} className="text-amber-500 fill-amber-500" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold font-heading text-purple-600">
                      {course.price}
                    </span>
                    <Button className={`bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white`}>
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
              ⭐ Отзывы выпускников
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте, как наши курсы изменили карьеру тысяч студентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Анна Соколова",
                role: "Frontend разработчик в Yandex",
                course: "Веб-разработка",
                rating: 5,
                text: "Прошла курс за 3 месяца и сразу получила оффер. Преподаватели помогали на каждом шаге, а практические задания — просто огонь! 🔥",
                avatar: "👩‍💻"
              },
              {
                name: "Дмитрий Петров",
                role: "UX/UI Designer в Сбербанк",
                course: "Дизайн UI/UX",
                rating: 5,
                text: "Лучшие инвестиции в себя! Материал структурирован идеально, много практики с реальными проектами. Зарплата выросла в 3 раза 📈",
                avatar: "👨‍🎨"
              },
              {
                name: "Мария Иванова",
                role: "Data Scientist в Tinkoff",
                course: "Data Science",
                rating: 5,
                text: "Курс превзошел все ожидания. Глубокое погружение в ML и работу с данными. Карьерный центр помог найти работу мечты 🎯",
                avatar: "👩‍🔬"
              },
              {
                name: "Алексей Морозов",
                role: "Digital маркетолог",
                course: "Digital-маркетинг",
                rating: 5,
                text: "Перешел из продаж в маркетинг благодаря этому курсу. Теперь работаю удаленно и зарабатываю больше. Рекомендую! 💪",
                avatar: "👨‍💼"
              },
              {
                name: "Екатерина Волкова",
                role: "Python Developer",
                course: "Python для начинающих",
                rating: 5,
                text: "Начинала с нуля, сейчас пишу код каждый день. Кураторы — супер, всегда на связи. Лучший старт в IT! 🚀",
                avatar: "👩‍💻"
              },
              {
                name: "Игорь Смирнов",
                role: "iOS разработчик в ВКонтакте",
                course: "Мобильная разработка",
                rating: 5,
                text: "Качество контента на высоте! Создал 3 приложения в портфолио, которые помогли пройти собеседования. Спасибо! 🙏",
                avatar: "👨‍💻"
              }
            ].map((review, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-3xl shadow-lg">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-heading mb-1">
                        {review.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600 font-medium">{review.role}</p>
                      <Badge variant="outline" className="mt-2 text-xs border-purple-300 text-purple-700">
                        {review.course}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам успешных студентов и измените свою карьеру
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all"
          >
            Начать бесплатно
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-white font-heading">EduPro</span>
          </div>
          <p>© 2024 EduPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;