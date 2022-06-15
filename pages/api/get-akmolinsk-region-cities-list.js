const fs = require("fs");

export default function handler(req, res) {
  const json_data = fs.readFileSync("pages/api-data/get-akmolinsk-region-cities-list.json");
  res.status(200).json(JSON.parse(json_data));
}
