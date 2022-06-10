const fs = require("fs");

export default function handler(req, res) {
  const json_data = fs.readFileSync("pages/api-data/get-car-details.json");
  res.status(200).json(JSON.parse(json_data));
}