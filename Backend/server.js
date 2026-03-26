const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.post("/add-student", async (req, res) => {
  const { name, year } = req.body;

  const { data, error } = await supabase
    .from("students")
    .insert([{ name, year }]);

  if (error) return res.status(500).json(error);

  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
