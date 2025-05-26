import express from "express";

const app = express();

const PORT = 5000;

// REGISTRATION SERVICE
app.post("/registration", (req, res) => {
  res.send("<html><body>INSIDE REGISTRATION API... </body></html>");
});

// LOGIN SERVICE
app.post("/login", (req, res) => {
  res.send("<html><body>INSIDE LOGIN API... </body></html>");
});

// SEARCH SERVICE
app.get("/search", (req, res) => {
  res.send("<html><body>INSIDE SEARCH API... </body></html>");
});

// UPDATE PROFILE SERVICE
app.put("/updateprofile", (req, res) => {
  res.send("<html><body>INSIDE UPDATE PROFILE API... </body></html>");
});

// DELETE USER SERVICE
app.delete("/delete-user", (req, res) => {
  res.send("<html><body>INSIDE DELETE API... </body></html>");
});

app.listen(PORT, () => {
  console.log(`Sever is running on port: ${PORT}`);
});
