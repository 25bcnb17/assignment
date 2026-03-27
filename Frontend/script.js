<script>
document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const usn = document.querySelector("#usn").value;
  const branch = document.querySelector("#branch").value;
  const year = document.querySelector("#year").value;
  const email = document.querySelector("#email").value;

  const data = { name, usn, branch, year, email };

  try {
    const res = await fetch("https://student-backend-dnnq.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    alert("✅ Data submitted successfully!");
    console.log(result);

  } catch (err) {
    alert("😴 Server waking up... try again in 10 sec");
    setTimeout(() => location.reload(), 10000);
  }
});
</script>
