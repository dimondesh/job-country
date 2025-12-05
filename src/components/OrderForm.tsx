/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setStatus("error");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100 z-10">
      <h3 className="text-2xl font-bold text-center text-[#1c6179] mb-6">
        Замовити курс
      </h3>

      {status === "success" ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-[#8AC825] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h4 className="text-xl font-bold text-[#1c6179]">Дякуємо!</h4>
          <p className="text-gray-600 mt-2">
            Ми зв!sqoяжемося з вами найближчим часом.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-[#8AC825] font-medium hover:underline"
          >
            Відправити ще
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ім'я
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8AC825] duration-400 focus:ring-2 focus:ring-[#8AC825]/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 placeholder-black">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+38 (0XX) XXX-XX-XX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8AC825] duration-400 focus:ring-2 focus:ring-[#8AC825]/20 outline-none transition-all text-[#333]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (необов'язково)
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8AC825] duration-400 focus:ring-2 focus:ring-[#8AC825]/20 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-[#8AC825] hover:bg-[#7ab31f] text-white font-bold rounded-xl shadow-lg transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {status === "loading" ? "Відправка..." : "Оформити замовлення"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-center text-sm mt-2">
              Сталася помилка. Спробуйте ще раз.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default OrderForm;
