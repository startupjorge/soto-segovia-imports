// ─────────────────────────────────────────────────────────────
// Soto & Segovia Imports — Waitlist Google Apps Script
// Deploy as: Web App → Execute as "Me" → Anyone can access
// ─────────────────────────────────────────────────────────────

const SHEET_ID = "1GtbHvTqsUhkKvtLMBHEp7Uv6MKzq_yzGf_BY-jSYcMw";
const NOTIFY_EMAILS = ["Jorge@sotosegoviaimports.com", "roberto@sotosegoviaimports.com"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 1. Append to Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "First Name", "Last Name", "Email",
        "Company", "Location", "Mobile Phone", "Message", "Language"
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#C9A227").setFontColor("#FFFFFF");
    }

    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      data.firstName,
      data.lastName,
      data.email,
      data.company,
      data.location,
      data.phone,
      data.message,
      data.lang === "ES" ? "Spanish" : "English"
    ]);

    // 2. Send internal notification email
    const internalBody = `
New Waitlist Signup — Soto & Segovia Imports

Name:     ${data.firstName} ${data.lastName}
Email:    ${data.email}
Company:  ${data.company}
Location: ${data.location}
Phone:    ${data.phone}
Message:  ${data.message}
Language: ${data.lang === "ES" ? "Spanish" : "English"}
Time:     ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET

View all signups: https://docs.google.com/spreadsheets/d/${SHEET_ID}
    `.trim();

    GmailApp.sendEmail(
      NOTIFY_EMAILS.join(","),
      "🎉 New Waitlist Signup — " + data.firstName + " " + data.lastName,
      internalBody
    );

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
