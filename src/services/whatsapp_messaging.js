import 'dotenv/config';
import { config } from 'dotenv';
config({ path: './config.env' });
import fetch from "node-fetch";

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV.trim() === '' || process.env.NODE_ENV == 'development';
const DEVELOPER_PHONE = process.env.DEVELOPER_PHONE;
const INTERAKT_BASE_URL = process.env.INTERAKT_BASE_URL;

export const sendWhatsAppMessage = async (to, messageArr = [], interaktApiKey, interaktBaseUrl, templateName = 'logincode') => {
    console.log(to, messageArr, interaktApiKey, interaktBaseUrl, templateName);
    console.log(`DEVELOPER_PHONE: ${DEVELOPER_PHONE}`)
    try {
        const requestBody = {
            countryCode: '+91',
            phoneNumber: isDev ? `${DEVELOPER_PHONE}` : to,
            type: 'Template',
            template: {
                name: templateName,
                languageCode: 'en',
                headerValues: ['Alert'],
                bodyValues: messageArr,
            },
            data: {
                message: '',
            },
        };
        // 
        const response = await fetch(INTERAKT_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${interaktApiKey}`,
            },
            body: JSON.stringify(requestBody)
        });

        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers.raw());
        // const responseBody = await response.text();
        // console.log('Response Body:', responseBody);
        if (!response.ok) {
            const errorResponse = await response.json(); // Log the error response
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${JSON.stringify(errorResponse)}`);
        }

        const data = await response.json()
        console.log(data)

        return data;

    } catch (error) {
        console.error(error.message);
        return { result: false };
    }
}