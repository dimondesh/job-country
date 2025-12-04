import React from "react";
import Image from "next/image";

const AccessBottomSection = () => {
  return (
    <section className="relative w-full bg-[#fffdf5] overflow-hidden pb-10">
      {/* --- ФОНОВЫЙ ПЕРЕХОД --- */}
      {/* Эта картинка должна стыковаться с синим фоном предыдущего компонента.
          Она прижата к ВЕРХУ (top-0) этой секции. */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-10">
        <Image
          src="/bgHTAEnding.png" // Картинка "волны" перехода
          alt="Background Transition"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* --- ДЕКОРАЦИИ (Конфетти) --- */}
      <div className="absolute inset-0 -left-0 top-0 pointer-events-none opacity-60 z-5">
        <Image
          src="/decorationsHTA.png" // Картинка только с узорами
          alt="Decorations"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>

      {/* --- КОНТЕНТ --- */}
      {/* pt-32 или pt-40 создает отступ сверху, чтобы элементы (Бейдж и Лев) 
          не наезжали друг на друга, так как они absolute */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-46 flex flex-col items-center max-w-lg">
        {/* Группа: Бейдж + Лев */}
        {/* relative нужен, чтобы absolute элементы позиционировались внутри этого блока */}
        <div className="w-full relative h-[100px] mb-8">
          {/* Бейдж "Recommend" */}
          {/* Поднимаем его вверх (-top-24), чтобы он был на стыке фонов */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-26 z-20 scale-110">
            <Image
              src="/recommendBadge.png"
              alt="Recommend Badge"
              width={160}
              height={160}
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Лев 2 (В очках) */}
          <div className="absolute -right-6 -top-5 z-30">
            <Image
              src="/pointingLionVideoPreview.png"
              alt="Lion with Glasses"
              width={150}
              height={150}
              className="object-contain w-36 h-auto"
            />
          </div>
        </div>

        {/* Желтая плашка "Відгуки батьків" */}
        <div className="bg-[#e8d956] w-[110%] -ml-[5%] rounded-full py-5 px-6 relative z-20 mb-8 left-4 bottom-10 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
          <h3 className="text-[#2f353b] text-md font-extrabold tracking-wide">
            Відгуки батьків
          </h3>
        </div>

        {/* Заяц (внизу слева) */}
        <div className="absolute w-full -bottom-10 left-5 flex justify-start pointer-events-none z-40">
          <Image
            src="/smartRabbit.png"
            alt="Rabbit Teacher"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="absolute bg-[linear-gradient(180deg,rgba(28,97,121,0)_67%,#1c6179_100%)] z-30 w-full h-[200px] -bottom-10" />
      </div>
    </section>
  );
};

export default AccessBottomSection;
