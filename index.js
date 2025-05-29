import express from "express";

const app = express();

const PORT = 5001;

// SUBMIT ASSIGNMENT SERVICE
app.post("/submit", (req, res) => {
  res.send("<html><body>INSIDE SUBMIT ASSIGNMENT API...</body></html>");
});

// VIEW ASSIGNMENT SERVICE
app.get("/view", (req, res) => {
  res.send("<html><body>INSIDE VIEW ASSIGNMENT API...</body></html>");
});

// EDIT PROFILE SERVICE
app.put("/edit", (req, res) => {
  res.send("<html><body>INSIDE EDIT PROFILE API...</body></html>");
});

app.listen(PORT, () => {
  console.log(`Sever is running on port: ${PORT}`);
});
