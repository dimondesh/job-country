import React from "react";
import Image from "next/image";

const MainCharacterSection = () => {
  return (
    <section className="relative w-full min-h-[800px] bg-[#1c6179]/95 overflow-hidden z-10">
      {/* --- 1. ФОНОВЫЕ ДЕКОРАЦИИ --- */}
      {/* Растягиваем на всю секцию */}
      <div className="absolute inset-0 -z-10 -top-46 opacity-60 pointer-events-none">
        <Image
          src="/decorationsMainCharacter.png" // Твои декорации (пятна)
          alt="Background Decorations"
          fill
          className="object-contain"
        />
      </div>

      {/* --- 2. КОНТЕНТ --- */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-between py-20 min-h-[800px]">
        {/* === ВЕРХНЯЯ ЧАСТЬ (Заяц-ведущий + Текст) === */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 md:pl-20">
          {/* Заяц-ведущий */}
          <div className="relative w-44 h-60 -left-24 -top-10 md:w-64 md:h-80 flex-shrink-0 z-20">
            <Image
              src="/rabbitHost.png" // Замени на файл верхнего зайца
              alt="Rabbit Host"
              fill
              className="object-contain"
            />
          </div>

          {/* Рамка с текстом */}
          {/* Вариант с картинкой-рамкой */}
          <div className="relative w-[280px] h-[140px] md:w-[400px] md:h-[180px] -top-76 left-14 flex items-center justify-center">
            {/* Сама картинка рамки */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/mainCharacterFrame.png" // Замени на файл рамочки
                alt="Quote Frame"
                fill
                className="object-contain"
              />
            </div>

            {/* Текст внутри рамки */}
            <div className="relative z-10 text-white text-center font-base text-[14px] md:text-2xl leading-snug px-8 pt-2 z-30">
              <p>Головну роль</p>
              <p>виконує –</p>
              <p>Зайчик Всезнайчик!</p>
            </div>
          </div>
        </div>

        {/* === НИЖНЯЯ ЧАСТЬ (Заяц-репортер) === */}
        {/* Absolute позиционирование, чтобы прижать его к правому низу секции */}
        <div className="absolute bottom-0 right-0 w-40 h-64 md:w-64 md:h-96 z-20">
          <Image
            src="/rabbitReporter.png" // Замени на файл нижнего зайца
            alt="Rabbit Reporter"
            fill
            className="object-contain object-bottom right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MainCharacterSection;
