import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  const { correo, mensaje } = req.body?.values ?? {};

  if (
    typeof correo !== "string" ||
    typeof mensaje !== "string" ||
    !EMAIL_RE.test(correo.trim()) ||
    mensaje.trim().length < 10 ||
    mensaje.length > 2000
  ) {
    return res.status(400).json({ ok: false, error: "Datos inválidos" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_CODE) {
    console.error("Faltan EMAIL_USER / EMAIL_CODE en el entorno");
    return res.status(500).json({ ok: false, error: "Servicio de correo no configurado" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_CODE,
      },
    });

    await transporter.sendMail({
      // Gmail reescribe el "from"; el cliente va en replyTo para poder responderle.
      from: `"Web Covirnet" <${process.env.EMAIL_USER}>`,
      replyTo: correo.trim(),
      to: process.env.EMAIL_USER,
      subject: `CONSULTA DESDE LA WEB DE: ${correo.trim()}`,
      text: `Correo del cliente: ${correo.trim()}\n\n${mensaje.trim()}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ ok: false, error: "Error al enviar el correo" });
  }
}
