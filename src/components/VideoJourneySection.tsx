import Image from "next/image";

export default function VideoJourneySection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* --- ФОН СЕКЦИИ --- */}
      <div className="absolute inset-0 bg-[url('/bg-reverse.png')] bg-cover bg-top" />

      <div className="relative z-10 flex flex-col items-center w-full bottom-30">
        {/* --- ПУНКТИРНАЯ ЦИТАТА --- */}
        <div className="relative w-[85%] max-w-[370px]">
          <Image
            src="/dashed-frame.png"
            alt="quote frame"
            width={400}
            height={280}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-[13px] leading-tight font-semibold">
            “Більшість дітей не знають, ким хочуть стати. А більшість дорослих —
            шкодують, що не дізналися раніше”
          </div>

          <Image
            src="/cryingLion.png"
            alt="lion small"
            width={70}
            height={70}
            className="absolute -bottom-6 left-3"
          />
        </div>

        {/* --- ОТСТУП --- */}
        <div className="h-12" />

        {/* --- ЗАГОЛОВОК --- */}
        <h2 className="text-[#2C7488] text-[24px] font-extrabold text-center px-6 leading-tight">
          Що всередині цієї відеоподорожі?
        </h2>

        {/* Подзаголовок */}
        <p className="mt-4 text-center text-[14px] text-black font-semibold px-10 leading-snug">
          Докладно та в інтерактивній формі про всі професії
        </p>

        {/* --- ЛЕВ В ЦЕНТРЕ --- */}
        <Image
          src="/smartLion.png"
          alt="big lion"
          width={300}
          height={300}
          className="mt-4"
        />

        {/* --- ДВА ВИДЕО-ПРЕВЬЮ --- */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <Image
            src="/video1.png"
            alt="video1"
            width={250}
            height={180}
            className="rounded-xl"
          />
          <Image
            src="/video2.png"
            alt="video2"
            width={250}
            height={180}
            className="rounded-xl"
          />
        </div>

        {/* --- БЛОК С ИКОНКОЙ --- */}
        <div className="mt-6 w-[80%] max-w-[330px] bg-[#D3E17A] rounded-2xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <Image src="/icon-steps.png" alt="steps" width={50} height={50} />
            <p className="text-[14px] font-semibold leading-tight">
              Дитина дізнається, які професії існують та зрозуміє, яка їй
              підходить
            </p>
          </div>
        </div>

        {/* --- ЗАЙЦЫ --- */}
        <Image
          src="/rabbits.png"
          alt="rabbits"
          width={320}
          height={180}
          className="mt-6"
        />

        {/* --- ПЕРЕХОД К НОВОЙ СЕКЦИИ --- */}
        <div className="w-full h-[280px] mt-6 bg-[url('/bg-bottom.png')] bg-cover bg-center" />

        {/* --- ЗАГОЛОВОК СЛЕДУЮЩЕЙ СЕКЦИИ --- */}
        <h2 className="text-[#2C7488] text-[24px] font-extrabold text-center px-6 leading-tight -mt-10 relative z-10">
          Чому це справді важливо?
        </h2>
      </div>
    </section>
  );
}
