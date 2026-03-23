import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type BookDemoPayload = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const DEFAULT_TO_EMAIL = "pathak.dhruv03@gmail.com";
const DEFAULT_SMTP_HOST = "smtp.gmail.com";
const DEFAULT_SMTP_PORT = 465;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(value: string | undefined) {
  return (value || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(payload: BookDemoPayload) {
  const rows = [
    ["Full Name", payload.fullName],
    ["Email", payload.email],
    ["Company", payload.company],
    ["Phone", payload.phone || "Not provided"],
    ["Message", payload.message || "No message included"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:700;color:#111827;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border:1px solid #e5e7eb;color:#111827;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="background:#0b0b0c;padding:32px;font-family:Arial,sans-serif;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#111111 0%,#23120c 45%,#e8542a 100%);color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.8;">Thumos Tech</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">New Book Demo enquiry</h1>
        </div>
        <div style="padding:28px 32px;">
          <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.7;">
            A new lead has been submitted from the website demo request form.
          </p>
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">
            ${tableRows}
          </table>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: BookDemoPayload = {
    fullName: sanitize(formData.get("fullName")),
    email: sanitize(formData.get("email")),
    company: sanitize(formData.get("company")),
    phone: sanitize(formData.get("phone")),
    message: sanitize(formData.get("message")),
  };

  if (!payload.fullName || !payload.email || !payload.company) {
    return NextResponse.json(
      { error: "Please complete your name, email, and company before submitting." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email address." },
      { status: 400 }
    );
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Add SMTP_USER and SMTP_PASS on the server." },
      { status: 500 }
    );
  }

  const smtpHost = process.env.SMTP_HOST || DEFAULT_SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT);
  const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.BOOK_DEMO_TO_EMAIL || smtpUser || DEFAULT_TO_EMAIL;
  const ccEmails = parseEmailList(process.env.BOOK_DEMO_CC_EMAIL);
  const fromEmail =
    process.env.BOOK_DEMO_FROM_EMAIL || `Thumos Website <${smtpUser}>`;
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const text = [
    "New Book Demo enquiry",
    "",
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Message: ${payload.message || "No message included"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      cc: ccEmails.length > 0 ? ccEmails : undefined,
      replyTo: payload.email,
      subject: `New demo request from ${payload.fullName}`,
      text,
      html: buildEmailHtml(payload),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `The request could not be sent right now. ${error.message}`
            : "The request could not be sent right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
