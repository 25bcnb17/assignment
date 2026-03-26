const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// connect to Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// route to save student
app.post("/students", async (req, res) => {
  const { name, usn, branch, year } = req.body;

  const { error } = await supabase
    .from("students")
    .insert([{ name, usn, branch, year }]);

  if (error) return res.status(500).send(error.message);

  res.send("Student added");
});

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
