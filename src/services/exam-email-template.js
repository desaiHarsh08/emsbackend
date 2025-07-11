export const getExamEmailHtml = ({ studentName, examName, examDate, reportingTime, roomNumber, floor, seatNumber }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Exam Notification</title>
      <style>
        body {
          font-family: "Segoe UI", Roboto, sans-serif;
          background-color: #f6f6f6;
          padding: 20px;
          color: #333333;
        }
        .container {
          background-color: #ffffff;
          max-width: 600px;
          margin: 0 auto;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }
        .header {
          font-size: 20px;
          font-weight: bold;
          color: #2b2b2b;
          margin-bottom: 20px;
        }
        .highlight {
          color: #004aad;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        td.label {
          width: 40%;
          font-weight: 500;
          color: #333;
        }
        td.value {
          font-weight: bold;
          color: #004aad;
        }
        .footer {
          margin-top: 30px;
          font-size: 14px;
          color: #555555;
        }
        .signature {
          margin-top: 20px;
          font-weight: bold;
          color: #000;
        }
        .college {
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">Exam Related Email (by system - EMS)</div>
  
        <p>Dear <span class="highlight">${studentName}</span>,</p>
  
        <p>Please find the details below for your <span class="highlight">${examName}</span>. Your reporting details to appear for the said examination are as follows. Please check the same:</p>
  
        <table>
          <tr>
            <td class="label">Examination Date:</td>
            <td class="value">${examDate}</td>
          </tr>
          <tr>
            <td class="label">Reporting Time:</td>
            <td class="value">${reportingTime}</td>
          </tr>
          <tr>
            <td class="label">Room No.:</td>
            <td class="value">${roomNumber}, ${floor}</td>
          </tr>
          <tr>
            <td class="label">Seat No.:</td>
            <td class="value">${seatNumber}</td>
          </tr>
        </table>
  
        <p><b>Important Notes:</b></p>
        <ol>
          <li>It is mandatory to report 30 minutes prior to the exam start time.</li>
          <li>No entry shall be allowed after the above given reporting time.</li>
          <li>It is mandatory to carry your valid College ID Card and Admit Card printed from <i>Campus Login</i> available on College Website.</li>
        </ol>
  
        <div class="footer">
          <p>Best wishes,</p>
          <div class="signature">Department of Commerce</div>
          <div class="college">The Bhawanipur Education Society College</div>
        </div>
      </div>
    </body>
    </html>`;
};
