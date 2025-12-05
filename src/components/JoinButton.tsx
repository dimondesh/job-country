"use client";

import React from "react";

interface JoinButtonProps {
  className?: string;
}

export const JoinButton = ({ className }: JoinButtonProps) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("order-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className={`bg-[#8AC825] hover:bg-[#7ab31f] text-white text-lg font-bold rounded-full px-12 py-4 shadow-[0_4px_14px_0_rgba(138,200,37,0.5)] transition transform  whitespace-nowrap hover:scale-105 active:scale-95 ${className}`}
    >
      Приєднатись
    </button>
  );
};
