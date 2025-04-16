document.addEventListener("DOMContentLoaded", () => {
  const orderItemsContainer = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");
  const userAddress = document.getElementById("user-address");
  const editAddressBtn = document.getElementById("edit-address-btn");
  const confirmPaymentBtn = document.getElementById("confirm-payment-btn");

  // Retrieve cart and user data from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users[users.length - 1]; // Assume the last registered user is the current user

  // Render order items
  function renderOrder() {
    orderItemsContainer.innerHTML = ""; // Clear existing items
    let total = 0;

    cart.forEach((item) => {
      const price = parseFloat(item.price.replace("UGX", "").replace(",", ""));
      total += price * (item.quantity || 1);

      const orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: ${item.quantity || 1}</p>
        </div>
      `;
      orderItemsContainer.appendChild(orderItem);
    });

    orderTotal.textContent = `UGX${total.toLocaleString()}`;
  }

  // Render shipping address
  function renderAddress() {
    userAddress.textContent = currentUser?.address || "No address provided.";
  }

  // Edit address functionality
  editAddressBtn.addEventListener("click", () => {
    const newAddress = prompt("Enter your new shipping address:", currentUser?.address || "");
    if (newAddress) {
      currentUser.address = newAddress;
      localStorage.setItem("users", JSON.stringify(users));
      renderAddress();
    }
  });

  // Confirm payment functionality
  confirmPaymentBtn.addEventListener("click", () => {
    alert("Payment confirmed! Thank you for your purchase.");
    localStorage.removeItem("cart"); // Clear the cart
    window.location.href = "./index.html"; // Redirect to home page
  });

  // Initialize the page
  renderOrder();
  renderAddress();
});