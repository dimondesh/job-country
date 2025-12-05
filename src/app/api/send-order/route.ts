import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.NEXT_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_CHAT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email } = body;

    const message = `Нове замовлення:\n\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n📧 Email: ${
      email || "-"
    }`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.description }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
