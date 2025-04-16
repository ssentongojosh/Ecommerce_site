document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin-form");

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example: Check credentials (replace with actual authentication logic)
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Sign-in successful!");
      // Redirect to checkout or home page
      window.location.href = "./checkout.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  // Forgot Password (placeholder functionality)
  document.getElementById("forgot-password").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Forgot Password functionality is not implemented yet.");
  });
});