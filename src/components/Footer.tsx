import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#154f63] text-white py-12 border-t border-white/10 z-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">Країна Професій</p>
            <p className="text-xs text-white/60 mb-2">
              ФОП Оніпко Я.В. Код за ЄДРПОУ 3005003816
            </p>
            <p className="text-[10px] text-white/40">
              © 2024 Всі права захищені.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:Educationagency.2024@gmail.com"
              className="text-sm font-medium hover:text-[#8AC825] transition duration-300"
            >
              Educationagency.2024@gmail.com
            </a>

            <Link
              href="/privacy-policy"
              className="text-xs text-white/70 border-b border-white/20 hover:text-white hover:border-white transition-all pb-0.5"
            >
              Політика конфіденційності та безпеки оплат
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
