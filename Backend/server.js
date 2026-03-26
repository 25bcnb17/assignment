const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.options("*", cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

app.post("/students", async (req, res) => {
  const { name, usn, branch, year, email } = req.body;

  const { data, error } = await supabase
    .from("students")
    .insert([{ name, usn, branch, year, email }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Data saved successfully ✅" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running 🚀"));
