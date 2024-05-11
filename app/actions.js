"use server";
import nodemailer from "nodemailer";

export async function SendMail(formData) {
  try {
    const {
      NombreCompleto,
      NombreEmpresa,
      CelularCountry,
      Celular,
      Correo,
      DNI,
      DominioSugerido,
    } = Object.fromEntries(formData);

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "notificacion@brandingemocion.com",
        pass: "n7t!gqyQ",
      },
    });

    const mensaje = {
      from: "notificacion@brandingemocion.com",
      to: "fanaticos@emocion.pe,jhonned01@gmail.com",
      subject: `🎉🥳 ¡Solicitud de contacto: ${NombreEmpresa || ""}! 🥳🎉`,
      html: `
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #101c71; padding: 20px; color: #ffffff; border-radius: 5px 5px 0 0;">
              <h1 style="margin-top: 0; font-size: 24px;">Branding Emocion</h1>
            </div>
            <div style="padding: 20px;">
              <p style="margin-bottom: 15px;">Hemos recibido una solicitud de contacto de un nuevo usuario que se contactó a través de la página principal.</p>
              <p style="margin-bottom: 15px;">A continuación, encontrarás los detalles proporcionados:</p>
              <ul style="list-style: none; padding: 0; margin-bottom: 15px;">
              <li style="margin-bottom: 10px;"><strong>Nombre Completo:</strong> ${
                NombreCompleto || ""
              }</li>
              <li style="margin-bottom: 10px;"><strong>Nombre Empresa:</strong> ${
                NombreEmpresa || ""
              }</li>
              <li style="margin-bottom: 10px;"><strong>Celular:</strong> ${
                CelularCountry || ""
              } ${Celular || 0}</li>
              <li style="margin-bottom: 10px;"><strong>Dominio Sugerido:</strong> ${DominioSugerido}</li>
               <li style="margin-bottom: 10px;"><strong>Correo electrónico:</strong> <a href="mailto:${Correo}" style="color: #101c71; text-decoration: none;">${
        Correo || ""
      }</a></li>
                 <li style="margin-bottom: 10px;"><strong>DNI:</strong> ${
                   DNI || ""
                 }</li>
              </ul>
              <p style="margin-bottom: 0;">Por favor, ponte en contacto con el usuario lo antes posible para atender su solicitud.</p>
              <p style="margin-bottom: 0;">¡Gracias!</p>
            </div>
          </div>
        `,
    };
    await transporter.sendMail(mensaje);
    return {
      message: "Mensaje enviado correctamente",
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Error al enviar el mensaje",
    };
  }
}
