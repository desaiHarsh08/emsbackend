import 'dotenv/config';
import { config } from 'dotenv';
config({ path: './config.env' });


export const getExamEmailHtml = ({
    studentName,
    examName,
    examDate,
    examDuration,
    roomNumber,
    floorNumber,
    seatNumber
}) => {
    const floorDisplay = floorNumber || 'N/A';

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exam Notification</title>
      <style>
        body {
          font-family: "Segoe UI", Roboto, sans-serif;
          background-color: #f4f6f8;
          padding: 20px;
          margin: 0;
        }
        .container {
          background-color: #fff;
          max-width: 600px;
          margin: auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border-top: 4px solid #004aad;
        }
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo img {
          max-height: 70px;
        }
        .header {
          font-size: 22px;
          font-weight: 600;
          color: #2a2a2a;
          text-align: center;
          margin-bottom: 25px;
        }
        .highlight {
          color: #004aad;
          font-weight: 600;
        }
        .info-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #ab47bc;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          margin-bottom: 25px;
        }
        thead {
          background-color: #f0f4f8;
        }
        th, td {
          border: 1px solid #e0e0e0;
          padding: 12px 16px;
          text-align: left;
        }
        td.value {
          color: #004aad;
          font-weight: 500;
        }
        .note-box {
          background-color: #f9f0ff;
          border-left: 4px solid #ab47bc;
          padding: 15px 20px;
          margin-bottom: 25px;
        }
        .note-box ol {
          margin: 0;
          padding-left: 20px;
          color: #4a148c;
          font-size: 14px;
        }
        .footer {
          font-size: 14px;
          color: #666;
          margin-top: 25px;
          text-align: left;
        }
        .signature {
          font-weight: bold;
          margin-top: 10px;
        }
        .disclaimer {
          margin-top: 30px;
          color: red;
          font-size: 15px;
          font-weight: bold;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          .container {
            padding: 20px;
          }
          table, th, td {
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img src="cid:besc-logo" alt="Logo" />
        </div>
  
        <p>Dear <span class="highlight">${studentName}</span>,</p>
  
        <p>
          Please find the details below for your <span class="highlight">${examName}</span>.
          Your reporting details to appear for the said examination are as follows:
        </p>
  
        <table>
          <thead>
            <tr>
              <th>Detail</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Examination Date</td>
              <td class="value">${examDate}</td>
            </tr>
            <tr>
              <td>Exam Duration</td>
              <td class="value">${examDuration}</td>
            </tr>
            <tr>
              <td>Room No.</td>
              <td class="value">${roomNumber}, ${floorDisplay} floor</td>
            </tr>
            <tr>
              <td>Seat No.</td>
              <td class="value">${seatNumber}</td>
            </tr>
          </tbody>
        </table>
  
        <p class="info-title">Important Information:</p>

        <div class="note-box">
          <ol>
            <li>It is mandatory to report 30 minutes prior to the exam start time.</li>
            <li>No entry shall be allowed after the above given reporting time.</li>
            <li>You must carry your valid College ID Card and Admit Card printed from <i>Campus Login</i> on the College Website.</li>
          </ol>
        </div>
  
        <div class="footer">
          <p>Best wishes,</p>
          <div class="signature">Department of Commerce</div>
          <div>The Bhawanipur Education Society College</div>
        </div>
  
        <div class="disclaimer">
          This is an auto-generated email. Please do not reply.
        </div>
      </div>
    </body>
    </html>
    `;
};
