async function submitData() {
  console.log("Clicked 🔥");

  const data = {
    name: document.getElementById("name").value,
    usn: document.getElementById("usn").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
    email: document.getElementById("email").value
  };

  try {
    const res = await fetch("https://student-backend-dnnq.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    alert("✅ Submitted successfully");
    console.log(result);

  } catch (err) {
    alert("😴 Server waking... try again");
    console.log(err);
  }
}
