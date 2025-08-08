// filepath: /pages/api/send-contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body;

  // Validate required field
  if (!email) {
    return res.status(400).json({ error: "Missing email" });
  }

  // Configure your SMTP transport
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
      from: `"CONTACT us" <contact_us@scotchstoneholdings.com>`,
      to: "contact_us@scotchstoneholdings.com",
      subject: `New Newsletter Signup`,
      text: `Email: ${email}`,
      replyTo: email,
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Mail error:", e);
    res.status(500).json({ error: "Failed to send" });
  }
}
