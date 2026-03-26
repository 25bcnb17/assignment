async function submitData() {
  const data = {
    name: document.getElementById("name").value,
    usn: document.getElementById("usn").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
    email: document.getElementById("email").value
  };

  try {
    // 🔥 Wake up backend first
    await fetch(API_URL);

    const res = await fetch(`${API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const msg = await res.json();
    alert(msg.message);

  } catch (err) {
    console.error(err);
    alert("Server sleeping 😴... try again in 10 sec");
  }
}
