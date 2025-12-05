import React from "react";
import Image from "next/image";
import OrderForm from "./OrderForm";

const HowToAccess = () => {
  return (
    <section className="relative bg-[#1c6179] min-h-screen w-full overflow-hidden pb-20">
      <div className="absolute inset-0 bg-[url('/bg-decorationsHTA.png')]  bg-top bg-repeat bg-cover opacity-40 pointer-events-none z-1" />

      <div className="absolute inset-0 bg-[#1c6179]/30 z-1 pointer-events-none" />

      <div className="relative z-1 container mx-auto px-6 py-12 flex flex-col items-center max-w-lg">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-4 text-center">
          Як отримати доступ?
        </h2>

        <div className="bg-[#ECDB44]/90 w-full rounded-[40px] p-8 shadow-xl text-[#2f353b] mb-4 relative z-8 pb-20">
          <ul className="space-y-4 font-bold text-[14px] md:text-xl leading-tight">
            <li>
              1. Натисніть кнопку <span className="pl-3">“Приєднатись”</span>
            </li>
            <li>2. Оплатіть зручним способом</li>
            <li>
              3. Отримайте доступ на e-mail{" "}
              <span className="pl-4">одразу після оплати</span>
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-start -mt-6 mb-25 pl-4 pointer-events-none z-10 relative mx-20">
          <Image
            src="/pointingLion.png"
            alt="Lion Pointing"
            width={140}
            height={140}
            className="absolute -bottom-26 left-8 object-contain h-auto md:w-40"
          />
        </div>

        <div className="bg-[#ECDB44]/90 w-full rounded-[40px] px-8 py-6 shadow-xl text-[#2f353b] mb-5 relative z-20">
          <ul className=" custom-list font-medium text-[15px] leading-tight list-disc pl-5 marker:text-black">
            <li>Середній час проходження – 3-5 днів</li>
            <li>Можна дивитись з телефона, планшета чи ноутбука</li>
          </ul>
        </div>
      </div>
      <OrderForm />
    </section>
  );
};

export default HowToAccess;
