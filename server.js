const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}
app.use(express.static("public"));
app.use(express.static("files"));
app.use(express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(PORT, () =>
  console.log(`server is running on the port http://localhost:${PORT}`)
);
