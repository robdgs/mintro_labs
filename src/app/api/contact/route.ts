import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    // Inizializza Resend al momento della richiesta
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, company, message } = body;

    // Validazione dei campi obbligatori
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Invia email usando Resend
    const data = await resend.emails.send({
      from: "Mintro Labs Contact <onboarding@resend.dev>", // Usa il dominio verificato in produzione
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Hack', monospace, Arial, sans-serif;
                line-height: 1.6;
                color: #2e2e2e;
                background-color: #f5f5f0;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #fafaf5;
                border: 3px solid #2e2e2e;
                box-shadow: 6px 6px 0px 0px rgba(46, 46, 46, 1);
              }
              .header {
                background: #fed835;
                padding: 20px;
                border-bottom: 3px solid #2e2e2e;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: bold;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                font-size: 14px;
                color: #2e2e2e;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background: white;
                border: 2px solid #2e2e2e;
                box-shadow: 2px 2px 0px 0px rgba(46, 46, 46, 1);
              }
              .message-box {
                min-height: 100px;
              }
              .footer {
                padding: 20px;
                text-align: center;
                border-top: 3px solid #2e2e2e;
                background: #f5f5f0;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎓 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${
                  company
                    ? `
                <div class="field">
                  <div class="label">Company / Organization</div>
                  <div class="value">${company}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message-box">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                Sent from Mintro Labs Contact Form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 },
    );
  }
}
