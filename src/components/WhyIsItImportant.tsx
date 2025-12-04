import Image from "next/image";

const WhyIsItImportant = () => {
  return (
    <section className="relative w-full bg-[#1C6179] pt-12 overflow-hidden">
      {/* --- Верхний мягкий градиент (светлый → голубой) --- */}
      <Image
        src="/plami2.png"
        alt="rabbit car"
        width={350}
        height={280}
        className="absolute left-0 top-2 z-10"
      />
      <div className="absolute top-0 left-0 w-full h-[120px] bg-[linear-gradient(180deg,rgba(28,97,121,0)_0%,rgba(28,97,121,1)_100%)] opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center px-2">
        {/* === Первый жёлтый блок === */}
        <div className="w-[88%] bg-[#ECDB44]/90 rounded-[40px] px-4 py-6 text-[#333] shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
          <h2 className="text-[20px] font-extrabold mb-2 leading-tight">
            Чому це справді важливо?
          </h2>

          <p className="text-[15px] leading-snug">
            Більшість дітей <strong>не уявляють, ким хочуть стати</strong> – і
            потім губляться.
          </p>

          <p className="text-[16px] font-extrabold mt-2">Ми допомагаємо:</p>

          <ul className="list-disc custom-list pl-5 text-[14px]">
            <li>Пробудити цікавість</li>
            <li>Зрозуміти сильні сторони</li>
            <li>Зробити перший крок до мрії</li>
          </ul>
        </div>

        {/* === Кролик + машина === */}
        <Image
          src="/2bunnies.png"
          alt="rabbit car"
          width={310}
          height={200}
          className="absolute top-60 left-6 z-10"
        />
        <Image
          src="/decorationleft2.png"
          alt="decoration right"
          width={35}
          height={200}
          className="absolute top-12 left-0 z-0"
        />
        <Image
          src="/decorationRight.png"
          alt="rabbit car"
          width={50}
          height={200}
          className="absolute top-95 left-75 z-0"
        />

        {/* === Второй жёлтый блок === */}
        <div className="w-[87%] bg-[#ECDB44]/90 rounded-[40px] px-6 py-6 text-[#333] mt-45 z-10 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
          <p className="text-[14px] leading-snug pb-2">
            Сучасна школа не вчить розуміти себе. Діти часто губляться у виборі.
            <br />
            Ми хочемо, щоб кожна дитина відчула:
            <strong> “У мене є майбутнє. І я знаю, куди йду!”</strong>
            <br />
          </p>
          <p className="text-[14px] leading-snug pb-2">
            Ця навчальна пригода – не просто про професії. Це про{" "}
            <strong>
              мрію, віру в себе, та перші кроки до своєї реалізації.
            </strong>
          </p>
        </div>
        <div className="absolute left-0 w-full h-[1920px] top-[520px] pointer-events-none -z-1 bg-[linear-gradient(180deg,rgba(253,245,240,0)_10%,#fdf5f0_21.63%)]" />
        <Image
          src="/plami3.png"
          alt="rabbit car"
          width={350}
          height={200}
          className="absolute top-188 left-0 z-0"
        />
        {/* === Лев в очках === */}
        <Image
          src="/smartLion2.png"
          alt="smart lion"
          width={200}
          height={340}
          className="mt-4"
        />

        {/* === Цитата в зелёном блоке === */}
        <div className="w-full bg-[#8AC825] rounded-[30px] shadow-lg p-6 text-[#333] -mt-3">
          <p className="text-[11px] leading-snug font-medium">
            <strong>Джон Крісбі</strong>, професійний консультант (США):
          </p>
          <p className="text-[12px] leading-snug font-medium text-center">
            “Цей формат – майбутнє профорієнтації. Левеня Лео – це геніально!”
          </p>
        </div>
      </div>

      {/* === Нижний градиент (как в макете, белый → тёмный) === */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-[linear-gradient(180deg,rgba(253,245,240,0)_0%,#1c6179_100%)]"></div>
      <div className="bg-[linear-gradient(180deg,rgba(28,97,121,0)_67%,#1c6179_100%)] z-30 w-full h-[200px] relative mt-90 " />
    </section>
  );
};

export default WhyIsItImportant;
