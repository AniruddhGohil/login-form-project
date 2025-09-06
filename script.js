document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "⚠️ Please enter both username and password.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Login successful (demo only).";
    message.style.color = "green";
  }
});
