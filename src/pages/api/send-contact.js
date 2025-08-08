// filepath: /pages/api/send-contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Configure your SMTP transport with your provided settings
  const transporter = nodemailer.createTransport({
    host: "mail.scotchstoneholdings.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact_us@scotchstoneholdings.com",
      pass: "syFot}UUJ,P_dbJ(",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <contact_us@scotchstoneholdings.com>`,
      to: "contact_us@scotchstoneholdings.com",
      subject: `Contact Form: ${subject || "No Subject"}`,
      text: `Name: ${name || "No Name"}\nEmail: ${email || "No Email"}\nPhone: ${phone || "No Phone"}\nMessage: ${message || "No Message"}`,
      replyTo: email || "contact_us@scotchstoneholdings.com",
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Mail error:", e);
    res.status(500).json({ error: "Failed to send" });
  }
}