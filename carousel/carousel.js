const XLSX = require("xlsx");
const workbook = XLSX.readFile("book_collection.xlsx");

let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}
data = worksheets.Sheet1;
for (var i = 0; i < data.length; i++) {
    values = Object.values(worksheets.Sheet1[i]);
    console.log(values)
  }