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

  // Retrieve the selected product from localStorage
  const product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
  console.log("Selected Product:", product); // Debugging
  console.log("product image path:", product.image);

  // Retrieve the items object from localStorage
  const items = JSON.parse(localStorage.getItem("items")) || {};
  console.log("Items Object:", items); // Debugging

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

  // Fetch similar products
  let similarProducts = [];
  if (product.category === "SuperDeals") {
    // Extract product type from the image name (e.g., "watch" from "watch.png")
    const productType = product.image
      .split("/")
      .pop()
      .split(/[0-9]/)[0]
      .replace(/\..+$/, "");
    console.log("Product Type:", productType); // Debugging

    // Filter items from all categories based on the product type
    Object.values(items).forEach((categoryItems) => {
      similarProducts = similarProducts.concat(
        categoryItems.filter((item) => item.image.includes(productType))
      );
    });
  } else {
    // Fetch similar products from the same category
    similarProducts = items[product.category] || [];
  }

  console.log("Similar Products:", similarProducts); // Debugging

  // Render similar products
  similarProducts
    .filter((similarProduct) => similarProduct.name !== product.name) // Exclude the current product
    .slice(0, 5) // Limit to 4 similar products
    .forEach((similarProduct) => {
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
