import express, { json, urlencoded } from "express";
import { makePDF } from "./pdf";

const app = express();

app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb", parameterLimit: 1000000 }));

app.post("/", async (req, res) => {
  if (req.body.html && typeof req.body.html === "string") {
    const buffer = await makePDF(req.body);
    res.send(buffer);
  } else {
    res.send("403");
  }
});

app.listen(3000);
