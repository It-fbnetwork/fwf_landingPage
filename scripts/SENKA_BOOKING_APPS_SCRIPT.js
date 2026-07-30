/**
 * Google Apps Script - Senka Facial Combo Booking
 *
 * Cách setup:
 * 1. Tạo Google Sheet mới (hoặc dùng sheet có sẵn).
 * 2. Extensions > Apps Script, dán toàn bộ file này.
 * 3. Đổi CONFIG.SHEET_ID = ID sheet (lấy từ URL: docs.google.com/spreadsheets/d/<SHEET_ID>/edit).
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy Web App URL vào FWF_Senka/.env.local:
 *    BOOKING_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 * 6. Restart `npm run dev`.
 */

var CONFIG = {
  SHEET_ID: "REPLACE_WITH_GOOGLE_SHEET_ID",
  SHEET_NAME: "Senka Booking",
};

function doGet() {
  return json_({
    ok: true,
    message: "Senka booking Apps Script is running",
  });
}

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents;
    if (!raw) {
      return json_({ ok: false, success: false, error: "Empty body" });
    }

    var data = JSON.parse(raw);
    var fullName = String((data && (data.fullName || data.name || data.customerName)) || "").trim();
    var phone = String((data && (data.phone || data.customerPhone)) || "").trim();
    var email = String((data && (data.email || data.customerEmail)) || "").trim();
    var note = String((data && (data.note || data.customerNote)) || "").trim();
    var branchName = String((data && (data.branchName || data.branch)) || "").trim();
    var branchCity = String((data && data.branchCity) || "").trim();
    var branchAddress = String((data && data.branchAddress) || "").trim();
    var branchMapsUrl = String((data && data.branchMapsUrl) || "").trim();
    var nearestDistanceKm =
      data && data.nearestDistanceKm !== undefined && data.nearestDistanceKm !== null && data.nearestDistanceKm !== ""
        ? String(data.nearestDistanceKm)
        : "";
    var source = String((data && data.source) || "senka-facial-combo").trim();

    if (!fullName || !phone) {
      return json_({
        ok: false,
        success: false,
        error: "Missing required fields: fullName, phone",
      });
    }

    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
      sheet.getRange(1, 1, 1, 11).setValues([
        [
          "Thời gian",
          "Họ tên",
          "SĐT",
          "Email",
          "Chi nhánh",
          "Thành phố",
          "Địa chỉ chi nhánh",
          "Link maps",
          "Khoảng cách (km)",
          "Ghi chú",
          "Nguồn",
        ],
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      fullName,
      "'" + phone,
      email,
      branchName,
      branchCity,
      branchAddress,
      branchMapsUrl,
      nearestDistanceKm,
      note,
      source,
    ]);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    return json_({
      ok: true,
      success: true,
      message: "Saved to Google Sheet",
      sheetId: CONFIG.SHEET_ID,
      tab: CONFIG.SHEET_NAME,
      lastRow: lastRow,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return json_({
      ok: false,
      success: false,
      error: String(err),
    });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
