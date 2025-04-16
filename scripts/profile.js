document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const userEmail = document.getElementById("user-email");
  const userAddress = document.getElementById("user-address");
  const paymentForm = document.getElementById("payment-form");
  const paymentDetails = document.getElementById("payment-details");
  const closeAccountForm = document.getElementById("close-account-form");
  const logoutBtn = document.getElementById("logout-btn");

  // Example user data (replace with actual backend data)
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users[users.length - 1]; // Assume the last registered user is the current user

  // Populate user details
  userEmail.textContent = currentUser?.email || "Not available";
  userAddress.textContent = currentUser?.address || "Not available";

  // Accordion functionality
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Payment form submission
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const paymentMethod = document.getElementById("payment-method").value;
    alert(`Payment method "${paymentMethod}" saved successfully!`);
  });

  // Close account form submission
  closeAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("close-email").value;
    const password = document.getElementById("close-password").value;

    if (email === currentUser?.email && password === currentUser?.password) {
      alert("Your account has been closed. We're sorry to see you go.");
      localStorage.removeItem("users");
      window.location.href = "./index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  // Log out functionality
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to log out?")) {
      alert("You have been logged out.");
      window.location.href = "./signin.html";
    }
  });
});