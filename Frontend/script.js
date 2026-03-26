const API_URL = "https://student-backend-dnnq.onrender.com";

async function submitData() {
  const data = {
  name: document.getElementById("name").value,
  usn: document.getElementById("usn").value,
  branch: document.getElementById("branch").value,
  year: document.getElementById("year").value,
  email: document.getElementById("email").value
};

  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const msg = await res.text();
  alert(msg);
}
