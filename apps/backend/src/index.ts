import express from "express";
import { BACKEND_URL } from "@repo/common/config";
console.log(BACKEND_URL);

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.json({
    message: "We are doing good",
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "Health endpoint reached successfully.",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3030");
});
