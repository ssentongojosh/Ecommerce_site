document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;

    // Save user to localStorage (replace with actual backend logic)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password, address });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful! Please sign in.");
    window.location.href = "./signin.html";
  });
});