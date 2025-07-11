import 'dotenv/config';
import { config } from 'dotenv';
config({ path: './config.env' });

import { SendMailClient } from "zeptomail";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, "../../public/besc-logo.jpeg");
const base64Logo = fs.readFileSync(logoPath).toString("base64");



const isDev = !process.env.NODE_ENV || process.env.NODE_ENV.trim() === '' || process.env.NODE_ENV === 'development';

const client = new SendMailClient({
    url: process.env.ZEPTO_URL,
    token: `Zoho-enczapikey ${process.env.ZEPTO_TOKEN}`,
});

export async function sendZeptoMail(to, subject, htmlBody, name) {
    try {
        // Use developer email in development mode
        const recipientEmail = isDev ? process.env.DEVELOPER_EMAIL : to;
        // const recipientEmail = to;

        console.log("sending email to:", recipientEmail);
        console.log("email subject:", subject);
        console.log("email body:", htmlBody);
        console.log("email name:", name);
        const response = await client.sendMail({
            from: {
                address: process.env.ZEPTO_FROM,
                name: "BESC | The Bhawanipur Education Society College",
            },
            to: [
                {
                    email_address: {
                        address: recipientEmail,
                        name: name || "User",
                    },
                },
            ],
            subject,
            htmlbody: htmlBody,

            inline_images: [
                {
                    content: base64Logo,
                    cid: "besc-logo",
                    name: "besc-logo.jpeg",
                    mime_type: "image/jpeg",
                },
            ],
        });

        console.log("✅ Email sent via ZeptoMail:", response);
        return response;
    } catch (error) {
        console.error("❌ ZeptoMail send error:", error.error.details);
        throw error;
    }
}