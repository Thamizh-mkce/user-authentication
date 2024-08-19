document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy check (In a real application, this would involve a backend server check)
    if (username === "user" && password === "123") {
      alert("Login successful!");
      // Redirect to another page or perform further actions
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
