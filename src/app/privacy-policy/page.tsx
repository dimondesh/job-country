/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#fffdf5] py-20 px-6 font-inter text-[#2f353b]">
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-xl p-8 md:p-16 border border-[#2f353b]/5">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2C7488] hover:text-[#8AC825] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Повернутися на головну
          </Link>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold mb-10 text-[#1c6179]">
          Політика конфіденційності та безпеки
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-[#2f353b] mb-4">
              1. Загальні положення
            </h2>
            <p>
              Ця Політика конфіденційності визначає порядок отримання,
              зберігання, обробки, використання і розкриття персональних даних
              користувача. Ми поважаємо вашу конфіденційність і зобов’язуємося
              захищати ваші персональні дані.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2f353b] mb-4">
              2. Збір та використання даних
            </h2>
            <p>
              Ми збираємо лише ті персональні дані, які ви надаєте нам
              добровільно (наприклад, ім!sqoя, email, номер телефону) для
              оформлення замовлення або підписки на новини.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-[#2C7488] mb-4">
              Політика безпеки передачі реквізитів платіжної картки
            </h2>
            <p className="mb-4">
              При оплаті замовлення банківською картою обробка платежу
              (включаючи введення номера картки) відбувається на захищеній
              сторінці процесингової системи. Це означає, що Ваші конфіденційні
              дані (реквізити картки, реєстраційні дані та ін.) не надходять до
              нас, їх обробка повністю захищена і ніхто не може отримати
              персональні та банківські дані клієнта.
            </p>
            <p>
              Під час роботи з картковими даними застосовується стандарт захисту
              інформації, розроблений міжнародними платіжними системами Visa та
              MasterCard – Payment Card Industry Data Security Standard (PCI
              DSS), що забезпечує безпечну обробку реквізитів Банківської картки
              Держателя. Технологія передачі даних, що застосовується, гарантує
              безпеку по операціях з Банківськими картами шляхом використання
              протоколів Secure Sockets Layer (SSL).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2f353b] mb-4">
              3. Контактна інформація
            </h2>
            <p>
              Якщо у вас виникли запитання щодо цієї політики, ви можете
              зв'язатися з нами:
              <br />
              <strong>Email:</strong> Educationagency.2024@gmail.com
              <br />
              <strong>ФОП:</strong> Оніпко Я.В. Код за ЄДРПОУ 3005003816
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
