import 'dotenv/config';
import { config } from 'dotenv';
config({ path: './config.env' });

import { SendMailClient } from "zeptomail";



const isDev = !process.env.NODE_ENV || process.env.NODE_ENV.trim() === '' || process.env.NODE_ENV === 'development';

const client = new SendMailClient({
    url: process.env.ZEPTO_URL,
    token: `Zoho-enczapikey ${process.env.ZEPTO_TOKEN}`,
});

export async function sendZeptoMail(to, subject, htmlBody, name) {
    try {
        // Use developer email in development mode
        const recipientEmail = isDev ? process.env.DEVELOPER_EMAIL : to;

        console.log("sending email to:", recipientEmail);
        console.log("email subject:", subject);
        console.log("email body:", htmlBody);
        console.log("email name:", name);
        const response = await client.sendMail({
            from: {
                address: process.env.ZEPTO_FROM,
                name: "BESC - Exam Management System",
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
        });

        console.log("✅ Email sent via ZeptoMail:", response);
        return response;
    } catch (error) {
        console.error("❌ ZeptoMail send error:", error);
        throw error;
    }
}