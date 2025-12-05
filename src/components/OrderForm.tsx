/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const OrderForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

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
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100 z-10">
      <h3 className="text-2xl font-bold text-center text-[#1c6179] mb-6">
        Замовити курс
      </h3>

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
            Номер телефону на якому є телеграм або вайбер
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

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-[#8AC825] hover:bg-[#7ab31f] text-white font-bold rounded-xl shadow-lg transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        >
          {status === "loading" ? "Відправка..." : "Оформити замовлення"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-center text-sm mt-2">
            Сталася помилка. Перевірте з'єднання та спробуйте ще раз.
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
