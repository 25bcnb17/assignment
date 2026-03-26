const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Supabase setup (IMPORTANT: set these in Render ENV)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

// ✅ MAIN API (matches frontend)
app.post("/students", async (req, res) => {
  try {
    const { name, usn, branch, year, email } = req.body;

    const { data, error } = await supabase
      .from("students")
      .insert([{ name, usn, branch, year, email }]);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Data saved successfully ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running 🚀"));
