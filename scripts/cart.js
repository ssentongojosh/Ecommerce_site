document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Retrieve cart data from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Example stock data (you can replace this with data from an API)
  const stockData = {
    "Elegant Watch": 10,
    "Phantom Laptop": 5,
    "Leather Bag": 15,
    "Travel Backpack": 8,
  };

  // Function to render cart items
  function renderCart() {
    cartItemsContainer.innerHTML = ""; // Clear existing items
    let total = 0;

    cart.forEach((item, index) => {
      const stock = stockData[item.name] || 50;
      const quantity = item.quantity || 1;
      const price = parseFloat(item.price.replace("UGX", "").replace(",", ""));
      const subtotal = price * quantity;
      total += subtotal;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Stock: ${stock} left</p>
        </div>
        <div class="quantity">
          <button class="decrease-btn" data-index="${index}">-</button>
          <input type="number" value="${quantity}" min="1" max="${stock}" data-index="${index}">
          <button class="increase-btn" data-index="${index}">+</button>
        </div>
        <div class="subtotal">Subtotal: UGX${subtotal.toLocaleString()}</div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = `UGX${total.toLocaleString()}`;
  }

  // Event listener for quantity changes
  cartItemsContainer.addEventListener("input", (e) => {
    if (e.target.type === "number") {
      const index = e.target.getAttribute("data-index");
      const newQuantity = parseInt(e.target.value, 10);
      const stock = stockData[cart[index].name] || 50;

      if (newQuantity > stock) {
        alert("Quantity exceeds stock!");
        e.target.value = stock;
      } else if (newQuantity < 1) {
        e.target.value = 1;
      } else {
        cart[index].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  });

  // Event listener for increase and decrease buttons
  cartItemsContainer.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data-index");
    if (e.target.classList.contains("increase-btn")) {
      const stock = stockData[cart[index].name] || 50;
      if (cart[index].quantity < stock) {
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      } else {
        alert("Quantity exceeds stock!");
      }
    } else if (e.target.classList.contains("decrease-btn")) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  });

  // Event listener for removing items
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove item from cart
      localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
      renderCart();
    }
  });

  // Event listener for the checkout button
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      // Redirect to sign-in page
      window.location.href = "./signin.html";
    }
  });

  // Render the cart on page load
  renderCart();
});
