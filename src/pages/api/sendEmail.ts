import { NowRequest, NowResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<NowResponse> => {
  const { name, email, message } = request.body

  try {
    const transport = await nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      pool: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    await transport.sendMail({
      from: {
        address: email,
        name: `${email}`
      },
      to: {
        address: process.env.EMAIL_USER,
        name: 'informasaude.com'
      },
      subject: `Nova mensagem de ${name}`,
      html: `
        <p>
          ${message}
        </p>
      `
    })

    await transport.close()

    return response.json({
      message: 'ok'
    })
  } catch (err) {
    console.log(err)

    return response.json({
      error: 'The application has encountered an error'
    })
  }
}
