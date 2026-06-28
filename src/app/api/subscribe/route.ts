import { NextRequest, NextResponse } from "next/server";
import { resultTypes, type ResultType } from "@/lib/results";
import { mailMagazineIds } from "@/lib/reservestock";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, lastName, firstName, type } = body as {
    email?: string;
    lastName?: string;
    firstName?: string;
    type?: string;
  };

  if (!email || !type || !resultTypes.includes(type as ResultType)) {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  const apiKey = process.env.RESERVESTOCK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "server not configured" }, { status: 500 });
  }

  const mailMagazineId = mailMagazineIds[type as ResultType];

  const params = new URLSearchParams();
  params.set("mail_magazine_id", String(mailMagazineId));
  params.set("email_address", email);
  if (lastName) params.set("last_name", lastName);
  if (firstName) params.set("first_name", firstName);

  const res = await fetch("https://www.reservestock.jp/api/subscribe_mail_magazine", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.result !== "success") {
    return NextResponse.json({ error: "subscribe failed", detail: data }, { status: 502 });
  }

  return NextResponse.json({ result: "success" });
}
