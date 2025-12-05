import Image from "next/image";
import { Video } from "./Video";
import { JoinButton } from "./JoinButton";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[3000px] bg-white flex justify-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1800px] max-h-[1800px] bg-[url('/bg2.png')] bg-top bg-no-repeat bg-cover pointer-events-none z-0" />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-[0_12px_15px_0_rgba(0,0,0,0.5)] px-8 py-1.5 rounded-full z-20">
        <h1 className="text-[#2C7488] text-sm font-extrabold whitespace-nowrap font-inter">
          КРАЇНА ПРОФЕСІЙ
        </h1>
      </div>

      <Image
        src="/lion.png"
        alt="lion"
        width={250}
        height={250}
        className="absolute top-[45px] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      />

      <div className="absolute top-[255px] left-1/2 -translate-x-1/2 bg-[#2C7488]/90 text-white/90 p-4 rounded-3xl w-74 z-10 shadow-[10px_12px_15px_0_rgba(0,0,0,0.5)]">
        <div className="text-center text-xs font-semibold leading-3 space-y-4">
          <p>
            Навчальна відеоподорож, яка допоможе дитині знайти своє покликання і
            повірити в себе.
          </p>

          <p>
            Анімований гід Левеня Лео знайомить з професіями у формі гри,
            прикладів і простих порад
          </p>
        </div>

        <Image
          src="/heart.png"
          alt="heart"
          width={65}
          height={65}
          className="absolute left-[255px] top-[85px]"
        />
      </div>

      <div className="absolute top-[460px] left-1/2 -translate-x-1/2 flex gap-[-10px] z-10">
        <div className="relative w-[100px] h-[150px]">
          <Image
            src="/boy2.png"
            alt="kid mic"
            width={150}
            height={150}
            className="absolute bottom-0 left-7"
          />
        </div>

        <div className="relative w-[140px] h-[190px] ">
          <Image
            src="/boy1.png"
            alt="middle kid"
            width={150}
            height={150}
            className="absolute bottom-[70px] left-2 "
          />
        </div>

        <div className="relative w-[145px] h-[195px]">
          <Image
            src="/girl.png"
            alt="kid girl"
            width={150}
            height={150}
            className="absolute bottom-2 -left-5"
          />
        </div>
      </div>

      <div className="absolute top-[510px] left-1/2 -translate-x-1/2 w-55 bg-[#ECDB44]/80 rounded-2xl py-4 text-center z-10 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
        <p className="text-[#333333] font-semibold text-base pb-3">
          для дітей 6–13 років
        </p>

        <p className="text-[#333333] font-bold text-2xl mt-1 leading-none pb-1">
          240 грн
        </p>
        <p className="text-[#333333] font-base text-xl mt-1 leading-none line-through">
          2100
        </p>
      </div>
      <JoinButton className="absolute top-[670px] md:top-[670px] left-1/2 -translate-x-1/2 z-30 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)] md:scale-125" />

      <div className="absolute left-0 w-full h-[2170px] top-[850px] pointer-events-none z-15 bg-[linear-gradient(180deg,rgba(253,245,240,0)_0%,#fdf5f0_17.79%)]" />

      <div className="absolute top-[810px] left-1/2 -translate-x-1/2 w-[95%] max-w-[370px] z-20 ">
        <div className="absolute bg-[#F5F1F0]/80 w-76 h-44 min-[375px]:w-82 min-[375px]:h-48 sm:w-84 sm:h-50 left-1/2 -translate-x-1/2 top-4 -z-1 rounded-xl"></div>
        <Image
          src="/dashed-frame.png"
          alt="quote frame"
          width={400}
          height={280}
          className="w-full h-auto"
        />

        <p className="absolute inset-0 flex items-center justify-center px-5 text-center text-[15px] text-[#333333] leading-tight font-bold ">
          “ Більшість дітей не знають, ким хочуть стати. А більшість дорослих —
          шкодують, що не дізналися раніше”
        </p>

        <Image
          src="/cryingLion.png"
          alt="small lion"
          width={130}
          height={130}
          className="absolute -bottom-30 -left-2 z-20 min-[360px]:-bottom-26"
        />
      </div>
      <Image
        src="/plami.png"
        alt="background"
        width={320}
        height={390}
        className="absolute inset-y-0 top-248 z-19"
      />
      <Image
        src="/decorationLeft.png"
        alt="background"
        width={350}
        height={390}
        className="absolute top-275 left-0 z-19"
      />
      <Image
        src="/decorationRight.png"
        alt="background"
        width={50}
        height={390}
        className="absolute top-295 inset-y-0 right-0  z-19"
      />
      <div className="absolute top-[1130px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-20">
        <h2 className="text-[#333] text-[28px] font-bold text-center px-6 leading-tight font-inter">
          Що всередині цієї відеоподорожі?
        </h2>

        <Image
          src="/smartLion.png"
          alt="smart lion"
          width={340}
          height={340}
          className=""
        />
        <p className=" text-center text-[16px] text-[#222] font-extrabold px-4 leading-snug  font-montserrat max-w-[300px]">
          Докладно та в інтерактивній формі про всі професії
        </p>

        <ul className=" custom-list mt-3 text-[12px] text-[#222] font-base px-6 font-montserrat max-w-[300px] list-disc">
          <li>Як працюють лікарі, архітектори, пілоти</li>
          <li>Чому ця робота важлива й цікава</li>
          <li>Відомі люди з цієї сфери</li>
          <li>Які навички треба розвивати</li>
          <li>Мінітест “Чи підходить тобі ця професія”</li>
          <li>
            Чіткий план дій: що можна зробити вже зараз, щоб стати ближче до
            мрії
          </li>
        </ul>
        <Image
          src="/paperPlane.png"
          alt="background"
          width={50}
          height={390}
          className="absolute top-115  right-3 lg:right-85 z-19"
        />
        <div className="w-75 mt-15 bg-[#ECDB44]/80 rounded-[40px] py-6 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
          <h2 className="pl-6 text-[#333333] font-extrabold text-xl pb-3">
            Що дитина отримає?{" "}
          </h2>

          <ul className="pl-12 pr-11 custom-list text-[14px] font-medium text-[#333333] text-left list-disc">
            <li>4+ години відео</li>
            <li>розбір 20+ професій</li>
            <li>інтерактив, міні-тести</li>
            <li>Левеня Лео говорить так, як зрозуміло й цікаво дітям</li>
          </ul>
        </div>
        <Image
          src="/little-lion.png"
          alt="little lion"
          width={85}
          height={85}
          className="relative bottom-22 right-34 pointer-events-none"
        />

        <div className="relative bottom-20 flex flex-col items-center mt-6">
          <div className="">
            <Image
              src="/pencil.png"
              alt="pencil"
              width={60}
              height={60}
              className="absolute -top-8 sm:-left-2"
            />
            <h2 className="text-[#333] text-[20px] font-bold text-center px-6 leading-tight">
              Левеня Лео ваш мульт-гід у світ професій
            </h2>
          </div>

          <div className="relative flex flex-col items-center gap-8 mt-4">
            <Video
              src="/lion.mp4"
              posterSrc="/lion-preview.png"
              className="w-50"
            />

            <Image
              src="/scissors.png"
              alt="scissors and ruler"
              width={60}
              height={60}
              className="absolute -right-18 top-[175px] pointer-events-none"
            />

            <Image
              src="/videoPreview2.png"
              alt="video2"
              width={200}
              height={120}
              className="shadow-md"
            />
          </div>

          <div className="mt-6 w-[82%] max-w-[330px] bg-[#8AC825] rounded-[40px] px-7 py-10 pb-12 shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]">
            <p className="text-[15px] font-bold text-[#222] leading-tight font-montserrat text-center">
              Дитина дивиться відео, проходить мінітести, дізнається про себе –
              все в легкій формі, ніби говорить з героєм мультфільму.
            </p>
            <Image
              src="/boyWithBoard.png"
              alt="boy"
              width={180}
              height={180}
              className="relative top-10 left-8 -mt-6 pointer-events-none"
            />
          </div>

          <Image
            src="/rabbits.png"
            alt="three rabbits"
            width={350}
            height={230}
            className="mt-8 sm:mt-22 min-[505px]:mt-13 min-[535px]:mt-22"
          />
        </div>
        <div className="bg-[linear-gradient(180deg,rgba(28,97,121,0)_67%,#1c6179_100%)] z-30 w-full h-[200px] relative -top-70 min-[505px]:-top-65 min-[535px]:-top-68 sm:-top-68" />
      </div>
    </section>
  );
};
