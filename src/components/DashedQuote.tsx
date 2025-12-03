import Image from "next/image";

export const DashedQuote = () => {
  return (
    <section className="relative w-full flex justify-center mt-[-60px] mb-20">
      <div className="relative w-[85%] max-w-[330px]">
        {/* Картинка рамки */}
        <Image
          src="/dashed-frame.png"
          alt="quote frame"
          width={330}
          height={230}
          className="w-full h-auto"
        />

        {/* ТЕКСТ ВНУТРИ РАМКИ */}
        <p
          className="
          absolute top-[35%] left-1/2 -translate-x-1/2 
          w-[75%] text-center text-sm font-semibold leading-snug
        "
        >
          “Більшість дітей не знають, ким хочуть стати. А більшість дорослих —
          шкодують, що не дізналися раніше.”
        </p>

        {/* Маленький лев под рамкой */}
        <Image
          src="/cryingLion.png"
          alt="small lion"
          width={90}
          height={90}
          className="absolute left-1/2 -translate-x-1/2 -bottom-[50px]"
        />
      </div>
    </section>
  );
};
