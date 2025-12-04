import React from "react";
import Image from "next/image";

const FinalOfferSection = () => {
  return (
    <section className="relative w-full min-h-[650px] bg-[#fffdf5] overflow-hidden pt-0 pb-0">
      {/* ================= ФОН И ДЕКОРАЦИИ ================= */}

      {/* 1. Градиентный переход сверху */}
      <div className="absolute top-0 left-0 w-full h-[400px] z-10 pointer-events-none">
        <Image
          src="/bg-finalOffer.png"
          alt="Gradient Transition"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* 2. Город (Справа сверху) */}
      <div className="absolute top-0 -right-30 w-64 h-64 -z-0 pointer-events-none">
        <Image
          src="/city.png"
          alt="City Background"
          width={140}
          height={140}
          className="object-contain "
        />
      </div>

      {/* 3. ЛОКАЦИИ (Слева сверху) - ИСПРАВЛЕНО */}
      {/* Убрал лишние обертки. Поставил z-30, чтобы точно было видно. 
          Добавил left-4 md:left-10, чтобы был отступ от края экрана. */}
      <div className="absolute -top-8 left-0 z-10 pointer-events-none">
        <Image
          src="/locations.png"
          alt="Locations"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* 4. ЗВЕЗДОЧКИ (Единая картинка-оверлей) */}
      <div className="absolute inset-0 top-0 left-6 z-0 pointer-events-none">
        <Image
          src="/stars.png"
          alt="Stars Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* ================= ОСНОВНОЙ КОНТЕНТ ================= */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-16">
        {/* --- ЗАГОЛОВОК --- */}
        <div className="bg-white rounded-full px-7.5 py-1.5 font-inter shadow-lg mb- z-20">
          <h2 className="text-[#2C7488] font-extrabold text-[14px] md:text-2xl uppercase">
            КРАЇНА ПРОФЕСІЙ
          </h2>
        </div>

        {/* --- ВЕРХНИЕ ЗАЙЦЫ И ЗЕЛЕНАЯ ПЛАШКА --- */}
        <div className="relative w-full max-w-xl mb-0">
          {/* Зайцы */}
          <div className="flex -mb-10 relative px-2 md:px-10">
            <div className="relative-mr-6 z-50 -left-20 transition-transform">
              <Image
                src="/firefighter.png"
                alt="Firefighter"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="absolute left-30 -top-8 z-35  transition-transform">
              <Image
                src="/suit.png"
                alt="Host"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="absolute left-60 z-50 scale-110 transition-transform">
              <Image
                src="/doctor.png"
                alt="Doctor"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Зеленая плашка */}
          <div className="relative z-40 bg-[#8AC825] rounded-[30px] px-6 py-6 md:p-10 text-center mx-2 mt-4 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
            <p className="text-[#2f353b] font-medium text-sm md:text-2xl leading-snug">
              Подаруйте дитині чарівну <br className="hidden md:block" />{" "}
              подорож у світ професій
            </p>
          </div>
        </div>

        {/* --- ЦЕННИК (КАРТИНКА) --- */}
        <div className="relative w-[300px] h-[180px] md:w-[420px] md:h-[240px] z-20 -mt-2">
          {/* 1. Картинка рамки */}
          <Image
            src="/frameOnRopes.png"
            alt="Price Frame"
            fill
            className="object-contain"
          />

          {/* 2. Текст */}
          <div className="absolute inset-0 flex items-center justify-center pt-8 pb-4 px-8 text-center">
            <p className="text-[#2f353b] font-extrabold text-sm pt-8 md:text-2xl leading-tight">
              240 грн замість{" "}
              <span className="line-through opacity-60">2100</span> – <br />{" "}
              лише зараз
            </p>
          </div>
        </div>
      </div>

      {/* ================= НИЖНИЕ ПЕРСОНАЖИ ================= */}

      {/* Повар (Слева) */}
      <div className="absolute bottom-0 left-0 md:left-0 w-48 h-64 md:w-[400px] md:h-[500px] z-30 pointer-events-none">
        <Image
          src="/cooker.png"
          alt="Chef Rabbit"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Гитарист (Справа) */}
      <div className="absolute bottom-0 right-0 md:right-0 w-48 h-64 md:w-[380px] md:h-[520px] z-30 pointer-events-none">
        <Image
          src="/guitarist.png"
          alt="Guitarist Rabbit"
          fill
          className="object-contain object-bottom-right"
        />
      </div>
    </section>
  );
};

export default FinalOfferSection;
