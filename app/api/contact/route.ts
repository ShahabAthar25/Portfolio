import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with secret API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Send Discord Webhook Notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: `📬 New Portfolio Inquiry (${subject})`,
              color: 0x5865f2,
              fields: [
                { name: "Sender", value: `${name} (${email})`, inline: false },
                { name: "Message", value: message, inline: false },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
    }

    // 2. Send Email via Resend
    await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECIPIENT_EMAIL || "raishahabathar@gmail.com"],
      replyTo: email, // Sets visitor's email address so replying targets them directly
      subject: `Portfolio Inquiry from ${name} (${subject})`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Dispatched successfully",
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
