document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productMaterial = document.getElementById("product-material");
    const productApplication = document.getElementById("product-application");
    const productCustomization = document.getElementById("product-customization");
    const reviewsList = document.getElementById("reviews-list");
    const similarProductsList = document.getElementById("similar-products-list");
    const addToCartBtn = document.getElementById("add-to-cart-btn");
  
    // Example product data (replace with API or dynamic data)
    const product = JSON.parse(localStorage.getItem("selectedProduct")) || {
      name: "Elegant Watch",
      price: "UGX300,000",
      image: "../assets/images/watch.png",
      material: "Stainless Steel",
      application: "Formal and Casual Wear",
      customization: "Engraving Available",
      reviews: [
        "Great product! Highly recommend.",
        "Good value for money.",
        "Stylish and durable.",
      ],
      similarProducts: [
        { name: "Luxury Watch", price: "UGX500,000", image: "../assets/images/watch.png" },
        { name: "Classic Watch", price: "UGX250,000", image: "../assets/images/watch.png" },
      ],
    };
  
    // Render product details
    productImage.src = product.image;
    productName.textContent = product.name;
    productPrice.textContent = `Price: ${product.price}`;
    productMaterial.textContent = `Material: ${product.material}`;
    productApplication.textContent = `Application: ${product.application}`;
    productCustomization.textContent = `Customization: ${product.customization}`;
  
    // Render reviews
    product.reviews.forEach((review) => {
      const li = document.createElement("li");
      li.textContent = review;
      reviewsList.appendChild(li);
    });
  
    // Render similar products
    product.similarProducts.forEach((similarProduct) => {
      const div = document.createElement("div");
      div.classList.add("similar-product");
      div.innerHTML = `
        <img src="${similarProduct.image}" alt="${similarProduct.name}">
        <h4>${similarProduct.name}</h4>
        <p>${similarProduct.price}</p>
      `;
      similarProductsList.appendChild(div);
    });
  
    // Add to cart functionality
    addToCartBtn.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} has been added to your cart!`);
    });
  });