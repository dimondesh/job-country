import React from "react";
import Image from "next/image";
import { JoinButton } from "./JoinButton";

const FinalOfferSection = () => {
  return (
    <section className="relative w-full min-h-[650px] bg-[#fffdf5] overflow-hidden pt-0 md:pb-40">
      <div className="absolute top-0 left-0 w-full h-[400px] z-10 pointer-events-none">
        <Image
          src="/bg-finalOffer.png"
          alt="Gradient Transition"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="absolute top-0 -right-10 md:right-0 w-40 h-40 md:w-64 md:h-64 z-0 pointer-events-none">
        <Image
          src="/city.png"
          alt="City Background"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="absolute -top-8 left-4 md:left-10 z-10 pointer-events-none">
        <Image
          src="/locations.png"
          alt="Locations"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 top-0 left-6 z-0 pointer-events-none">
        <Image
          src="/stars.png"
          alt="Stars Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-16">
        <div className="bg-white rounded-full px-7.5 py-1.5 font-inter shadow-lg mb-8 z-20">
          <h2 className="text-[#2C7488] font-extrabold text-[14px] md:text-2xl uppercase">
            КРАЇНА ПРОФЕСІЙ
          </h2>
        </div>

        <div className="relative w-full max-w-xl flex flex-col items-center">
          <div className="relative flex justify-center items-end -mb-10 w-full px-4 pointer-events-none">
            <div className="relative z-50 w-[130px] h-[130px] md:w-[180px] md:h-[180px]  md:translate-x-6  -translate-x-4 -translate-y-16">
              <Image
                src="/firefighter.png"
                alt="Firefighter"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-30 w-[170px] h-[170px] md:w-[200px] md:h-[200px] translate-x-3 -translate-y-18">
              <Image
                src="/suit.png"
                alt="Host"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-50 w-[170px] h-[170px] md:w-[200px] md:h-[200px] translate-x-6 md:-translate-x-6 -translate-y-8">
              <Image
                src="/doctor.png"
                alt="Doctor"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-40 bg-[#8AC825] rounded-[30px] -translate-y-12 px-8 py-6 md:p-10 text-center w-full shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
            <p className="text-[#2f353b] font-medium text-[15px] md:text-2xl leading-snug">
              Подаруйте дитині чарівну <br className="hidden md:block" />{" "}
              подорож у світ професій
            </p>
          </div>
        </div>

        <div className="relative w-[300px] h-[180px] md:w-[420px] md:h-[240px] z-20 -mt-4 md:-mt-6 -translate-y-10">
          <Image
            src="/frameOnRopes.png"
            alt="Price Frame"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center pt-8 pb-4 px-8 text-center">
            <p className="text-[#2f353b] font-extrabold text-sm pt-8 md:text-2xl leading-tight">
              240 грн замість <span className="">2100</span> – <br /> лише зараз
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-48 h-64 md:w-[400px] md:h-[500px] z-30 pointer-events-none">
        <Image
          src="/cooker.png"
          alt="Chef Rabbit"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-60 md:w-[380px] md:h-[520px] z-30 pointer-events-none">
        <Image
          src="/guitarist.png"
          alt="Guitarist Rabbit"
          fill
          className="object-contain object-bottom-right"
        />
      </div>
      <JoinButton className="absolute top-[520px] md:top-[660px] left-1/2 -translate-x-1/2 z-30 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)] md:scale-125" />
    </section>
  );
};

export default FinalOfferSection;
