/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1C6179] px-4 text-center">
      <div className="w-full max-w-md rounded-[40px] bg-[#FDF5F0] p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] md:p-12">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8AC825]">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold text-[#333]">Дякуємо!</h1>

        <p className="mb-8 text-lg leading-snug text-[#555]">
          Ваша заявка успішно прийнята. <br />
          Ми зв'яжемось з вами у Telegram або Viber найближчим часом.
        </p>

        <Link
          href="/"
          className="inline-block w-full rounded-full bg-[#ECDB44] px-8 py-4 text-lg font-bold text-[#333] shadow-md transition hover:bg-[#d4c43d] active:scale-95"
        >
          На головну
        </Link>
      </div>
    </main>
  );
}
