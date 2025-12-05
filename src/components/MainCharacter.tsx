import React from "react";
import Image from "next/image";

const faqData = [
  {
    question: "Кому буде корисно?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Для малюків 6–9 років</strong> — це пізнавальна та яскрава
          подорож у світ дорослих.
        </li>
        <li>
          <strong>Для дітей 10–13 років</strong> — як перший путівник у виборі
          майбутнього. Справжній гід, який допоможе знайти своє покликання.
        </li>
        <li>
          <strong>Для батьків</strong> — нагода м’яко і цікаво поговорити з
          дитиною про майбутнє.
        </li>
      </ul>
    ),
  },
  {
    question: "Як проходить навчання?",
    answer:
      "Дитина дивиться відео, проходить мінітести, слухає героя. Можна з телефону, планшета чи ноутбука. Увесь доступ — назавжди.",
  },
  {
    question: "Хто за кадром?",
    answer:
      "Освітяни, мультиплікатори, дитячі психологи та профорієнтатори. Усе — з любов’ю й розумінням дітей.",
  },
  {
    question: "А якщо нам не сподобається?",
    answer:
      "Якщо вам здасться, що відео не підходить — просто напишіть нам. Ми повернемо кошти без питань.",
  },
  {
    question: "Чи не зарано дитині визначатися з майбутнім?",
    answer:
      "Ми не змушуємо обирати професію, а допомагаємо побачити світ можливостей, зрозуміти себе і отримати відповідь на запитання «Як стати кимось?»",
  },
];

const benefitsData = [
  {
    title: "1. Упевненість у собі",
    text: "Діти починають краще розуміти свої сильні сторони, інтереси й здібності. З’являється відчуття: «Я щось можу. Я важливий».",
  },
  {
    title: "2. Ширший світогляд",
    text: "Замість шаблонного «лікар або вчитель» — знайомство з десятками сучасних професій, реальними прикладами та натхненними історіями.",
  },
  {
    title: "3. Розвиток критичного мислення",
    text: "Через мінітести й запитання діти вчаться аналізувати, порівнювати, робити власні висновки. Без нудних лекцій.",
  },
  {
    title: "4. Позитивний досвід навчання",
    text: "Формат відеоподорожі — це коли навчання не схоже на навчання. Це цікаво, весело й по-доброму. Дитина запам’ятовує краще, коли залучена емоційно.",
  },
  {
    title: "5. Внутрішній орієнтир",
    text: "Після перегляду в дитини з’являється більше розуміння, чого вона хоче і що для цього потрібно. Це маленький, але важливий крок у дорослість — без стресу.",
  },
];

const MainCharacterSection = () => {
  return (
    <section className="relative w-full h-auto bg-[#1C6179] z-10 overflow-hidden pb-40 md:pb-32">
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <Image
          src="/decorationsMainCharacter.svg"
          alt="Background Decorations"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-10 md:pt-20">
        <div className="relative h-[300px] md:h-[400px] w-full mb-12 md:mb-0">
          <div className="absolute -left-10 top-0 w-44 h-60 md:w-80 md:h-96 z-20 md:left-0">
            <Image
              src="/rabbitHost.png"
              alt="Rabbit Host"
              fill
              className="object-contain object-top-left"
            />
          </div>

          <div className="absolute top-10 right-0 md:left-1/2 md:transform md:-translate-x-1/2 w-56 h-56 md:w-96 md:h-96 flex items-center justify-center z-10">
            <div className="absolute inset-0">
              <Image
                src="/mainCharacterFrame.png"
                alt="Quote Frame"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative z-10 text-white text-center font-bold text-sm md:text-2xl leading-snug px-6 pt-4">
              <p>Головну роль</p>
              <p>виконує –</p>
              <p className="text-[#8AC825]">Зайчик Всезнайчик!</p>
            </div>
          </div>
        </div>

        <div className="relative z-30 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-10 drop-shadow-md">
            Залишились питання?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/15 transition duration-300"
              >
                <h3 className="text-xl font-bold text-[#8AC825] mb-3">
                  {item.question}
                </h3>
                <div className="text-white/90 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Які переваги отримає моя дитина?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsData.map((benefit, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="text-[#8AC825] font-bold text-lg">
                    {benefit.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-48 md:w-64 md:h-80 z-20 pointer-events-none">
        <Image
          src="/rabbitReporter.png"
          alt="Rabbit Reporter"
          fill
          className="object-contain object-bottom-right"
        />
      </div>
    </section>
  );
};

export default MainCharacterSection;
