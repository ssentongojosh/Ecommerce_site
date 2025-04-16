const toggle = document.getElementById("categories-toggle");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }
});

document.getElementById("view-more-btn").addEventListener("click", () => {
  const showcase = document.querySelector(".showcase");

  // Example data for new items (you can replace this with data from an API)
  const newItems = [
    {
      name: "Classy handbag",
      price: "UGX50,000",
      rating: "1200+ sold",
      image: "./assets/images/bag1.jpg",
    },
    {
      name: "Elegant Watch",
      price: "UGX300,000",
      rating: "1200+ sold",
      image: "./assets/images/watch.png",
    },
    {
      name: "Cinder Crest",
      price: "UGX50,000",
      rating: "1200+ sold",
      image: "./assets/images/hat9.jpg",
    },
    {
      name: "Breeze Bandit",
      price: "UGX100,000",
      rating: "1200+ sold",
      image: "./assets/images/hat10.jpg",
    },
    {
      name: "Velvet Peak",
      price: "UGX45,000",
      rating: "1200+ sold",
      image: "./assets/images/hat11.jpg",
    },
    {
      name: "Leather Bag",
      price: "UGX200,000",
      rating: "1200+ sold",
      image: "./assets/images/bag1.jpg",
    },
    {
      name: "classic handbag",
      price: "UGX100,000",
      rating: "1200+ sold",
      image: "./assets/images/bag2.jpg",
    },
    {
      name: "valentines Bag",
      price: "UGX55,000",
      rating: "1200+ sold",
      image: "./assets/images/bag3.jpg",
    },
    {
      name: "Luxe Link",
      price: "UGX80,000",
      rating: "1200+ sold",
      image: "./assets/images/belt9.jpg",
    },
    {
      name: "Halo Wrap",
      price: "UGX23,000",
      rating: "1200+ sold",
      image: "./assets/images/belt10.jpg",
    },
    {
      name: "Urban Halo",
      price: "UGX110,000",
      rating: "1500+ sold",
      image: "./assets/images/bag7.jpg",
    },
    {
      name: "Aurora Clutch",
      price: "UGX130,000",
      rating: "1500+ sold",
      image: "./assets/images/bag8.jpg",
    },
    {
      name: "Messenger Bag",
      price: "UGX90,000",
      rating: "1500+ sold",
      image: "./assets/images/bag9.jpg",
    },
    {
      name: "Hobo Bag",
      price: "UGX85,000",
      rating: "1500+ sold",
      image: "./assets/images/bag10.jpg",
    },
    {
      name: "Velvet Bloom",
      price: "UGX150,000",
      rating: "1500+ sold",
      image: "./assets/images/bag11.jpg",
    },
    {
      name: "Baguette",
      price: "UGX350,000",
      rating: "1500+ sold",
      image: "./assets/images/bag12.jpg",
    },
    {
      name: "Glimmer Kiss",
      price: "UGX65,000",
      rating: "1500+ sold",
      image: "./assets/images/necklace9.jpg",
    },
    {
      name: "StarLight Strand",
      price: "UGX75,000",
      rating: "1500+ sold",
      image: "./assets/images/necklace10.jpg",
    },
    {
      name: "Radiance Chain",
      price: "UGX125,000",
      rating: "1500+ sold",
      image: "./assets/images/necklace11.jpg",
    },
    {
      name: "Balenciaga Halet",
      price: "UGX525,000",
      rating: "1500+ sold",
      image: "./assets/images/necklace12.jpg",
    },
  ];

  // Dynamically create and append new items
  newItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
        <div class="image">
          <img loading="lazy" src="${item.image}" class="item-image" alt="${item.name}">
        </div>
        <div class="detail">
          <div class="item-name">${item.name}</div>
          <div class="rating">${item.rating}</div>
          <div class="price">${item.price}</div>
        </div>
      `;

    showcase.appendChild(itemDiv);
  });

  // Optionally, hide the button after loading all items
  // document.getElementById("view-more-btn").style.display = "none";
});

// render category
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("[data-category]");
  const showcase = document.querySelector(".showcase");

  // Example data for items
  const items = {
    SuperDeals: [
      {
        name: "Classy handbag",
        price: "UGX50,000",
        image: "./assets/images/bag1.jpg",
      },
      {
        name: "Elegant Watch",
        price: "UGX300,000",
        image: "./assets/images/watch.png",
      },
      {
        name: "Cinder Crest",
        price: "UGX50,000",
        image: "./assets/images/hat9.jpg",
      },
      {
        name: "Breeze Bandit",
        price: "UGX100,000",
        image: "./assets/images/hat10.jpg",
      },
      {
        name: "Velvet Peak",
        price: "UGX45,000",
        image: "./assets/images/hat11.jpg",
      },
      {
        name: "Leather Bag",
        price: "UGX200,000",
        image: "./assets/images/bag1.jpg",
      },
      {
        name: "classic handbag",
        price: "UGX100,000",
        image: "./assets/images/bag2.jpg",
      },
      {
        name: "valentines Bag",
        price: "UGX55,000",
        image: "./assets/images/bag3.jpg",
      },
      {
        name: "Luxe Link",
        price: "UGX80,000",
        image: "./assets/images/belt9.jpg",
      },
      {
        name: "Halo Wrap",
        price: "UGX23,000",
        image: "./assets/images/belt10.jpg",
      },
      {
        name: "Crickler Belt",
        price: "UGX45,000",
        image: "./assets/images/belt11.jpg",
      },
      {
        name: "Gold Necklace",
        price: "UGX500,000",
        image: "./assets/images/necklace1.jpg",
      },
      {
        name: "Pendant",
        price: "UGX50,000",
        image: "./assets/images/necklace2.jpg",
      },
      {
        name: "choker",
        price: "UGX32,000",
        image: "./assets/images/necklace3.jpg",
      },
      {
        name: "Ear Cuffs",
        price: "UGX55,000",
        image: "./assets/images/earring8.jpg",
      },
      {
        name: "Luna Drops",
        price: "UGX30,000",
        image: "./assets/images/earring9.jpg",
      },
      {
        name: "Celeste Charms",
        price: "UGX40,000",
        image: "./assets/images/earring10.jpg",
      },
      {
        name: "Dress Watch",
        price: "UGX125,000",
        image: "./assets/images/watch1.jpg",
      },
      {
        name: "Luxury Automatic",
        price: "UGX225,000",
        image: "./assets/images/watch2.jpg",
      },
      {
        name: "GMT Watch",
        price: "UGX425,000",
        image: "./assets/images/watch3.jpg",
      },
      {
        name: "Chrome veil",
        price: "UGX50,000",
        image: "./assets/images/shades8.jpg",
      },
      {
        name: "Saphire Blue",
        price: "UGX35,000",
        image: "./assets/images/shades9.jpg",
      },
      {
        name: "Silkona shades",
        price: "UGX25,000",
        image: "./assets/images/shades10.jpg",
      },
      {
        name: "Diamond Muse",
        price: "UGX25,000",
        image: "./assets/images/necklace8.jpg",
      },
      {
        name: "Glimmer Kiss",
        price: "UGX65,000",
        image: "./assets/images/necklace9.jpg",
      },
      {
        name: "Cow boy Hat",
        price: "UGX45,000",
        image: "./assets/images/hat1.jpg",
      },
      { name: "Fedora", price: "UGX50,000", image: "./assets/images/hat2.jpg" },
      {
        name: "Panama Hat",
        price: "UGX30,000",
        image: "./assets/images/hat3.jpg",
      },
    ],
    Bags: [
      {
        name: "Leather Bag",
        price: "UGX200,000",
        image: "./assets/images/bag1.jpg",
      },
      {
        name: "classic handbag",
        price: "UGX100,000",
        image: "./assets/images/bag2.jpg",
      },
      {
        name: "valentines Bag",
        price: "UGX55,000",
        image: "./assets/images/bag3.jpg",
      },
      {
        name: "Satchel",
        price: "UGX150,000",
        image: "./assets/images/bag4.jpg",
      },
      { name: "Clutch", price: "UGX40,000", image: "./assets/images/bag5.jpg" },
      {
        name: "City Chic",
        price: "UGX34,000",
        image: "./assets/images/bag6.jpg",
      },
      {
        name: "Urban Halo",
        price: "UGX110,000",
        image: "./assets/images/bag7.jpg",
      },
      {
        name: "Aurora Clutch",
        price: "UGX130,000",
        image: "./assets/images/bag8.jpg",
      },
      {
        name: "Messenger Bag",
        price: "UGX90,000",
        image: "./assets/images/bag9.jpg",
      },
      {
        name: "Hobo Bag",
        price: "UGX85,000",
        image: "./assets/images/bag10.jpg",
      },
      {
        name: "Velvet Bloom",
        price: "UGX150,000",
        image: "./assets/images/bag11.jpg",
      },
      {
        name: "Baguette",
        price: "UGX350,000",
        image: "./assets/images/bag12.jpg",
      },
    ],
    NeckLaces: [
      {
        name: "Gold Necklace",
        price: "UGX500,000",
        image: "./assets/images/necklace1.jpg",
      },
      {
        name: "Pendant",
        price: "UGX50,000",
        image: "./assets/images/necklace2.jpg",
      },
      {
        name: "choker",
        price: "UGX32,000",
        image: "./assets/images/necklace3.jpg",
      },
      {
        name: "Bib Necklace",
        price: "UGX20,000",
        image: "./assets/images/necklace4.jpg",
      },
      {
        name: "Locket",
        price: "UGX33,500",
        image: "./assets/images/necklace5.jpg",
      },
      {
        name: "Eternal Bloom",
        price: "UGX53,000",
        image: "./assets/images/necklace6.jpg",
      },
      {
        name: "Serenity Spark",
        price: "UGX20,000",
        image: "./assets/images/necklace7.jpg",
      },
      {
        name: "Diamond Muse",
        price: "UGX25,000",
        image: "./assets/images/necklace8.jpg",
      },
      {
        name: "Glimmer Kiss",
        price: "UGX65,000",
        image: "./assets/images/necklace9.jpg",
      },
      {
        name: "StarLight Strand",
        price: "UGX75,000",
        image: "./assets/images/necklace10.jpg",
      },
      {
        name: "Radiance Chain",
        price: "UGX125,000",
        image: "./assets/images/necklace11.jpg",
      },
      {
        name: "Balenciaga Halet",
        price: "UGX525,000",
        image: "./assets/images/necklace12.jpg",
      },
    ],
    Watches: [
      {
        name: "Dress Watch",
        price: "UGX125,000",
        image: "./assets/images/watch1.jpg",
      },
      {
        name: "Luxury Automatic",
        price: "UGX225,000",
        image: "./assets/images/watch2.jpg",
      },
      {
        name: "GMT Watch",
        price: "UGX425,000",
        image: "./assets/images/watch3.jpg",
      },
      {
        name: "Minimalist Quartz",
        price: "UGX355,000",
        image: "./assets/images/watch4.jpg",
      },
      {
        name: "Titan Egde",
        price: "UGX200,000",
        image: "./assets/images/watch5.jpg",
      },
      {
        name: "MidNight Pulse",
        price: "UGX105,000",
        image: "./assets/images/watch6.jpg",
      },
      {
        name: "Nova Tempo",
        price: "UGX150,000",
        image: "./assets/images/watch7.jpg",
      },
      {
        name: "Cobalt curve",
        price: "UGX175,000",
        image: "./assets/images/watch8.jpg",
      },
      {
        name: "Pilot Watch",
        price: "UGX100,000",
        image: "./assets/images/watch9.jpg",
      },
      {
        name: "Chronograph",
        price: "UGX425,000",
        image: "./assets/images/watch10.jpg",
      },
      {
        name: "Pico Matter",
        price: "UGX275,000",
        image: "./assets/images/watch11.jpg",
      },
      {
        name: "Rolex",
        price: "UGX625,000",
        image: "./assets/images/watch.png",
      },
    ],
    Shades: [
      {
        name: "Solar Drift",
        price: "UGX15,000",
        image: "./assets/images/shades1.jpg",
      },
      {
        name: "Amber Fade",
        price: "UGX25,000",
        image: "./assets/images/shades2.jpg",
      },
      {
        name: "Obsidian Whisper",
        price: "UGX30,000",
        image: "./assets/images/shades3.jpg",
      },
      {
        name: "Jet Dusk",
        price: "UGX45,000",
        image: "./assets/images/shades4.jpg",
      },
      {
        name: "Serbian Bluets",
        price: "UGX40,000",
        image: "./assets/images/shades5.jpg",
      },
      {
        name: "Shadow Bloom",
        price: "UGX75,000",
        image: "./assets/images/shades6.jpg",
      },
      {
        name: "Jaspers",
        price: "UGX15,000",
        image: "./assets/images/shades7.jpg",
      },
      {
        name: "Chrome veil",
        price: "UGX50,000",
        image: "./assets/images/shades8.jpg",
      },
      {
        name: "Saphire Blue",
        price: "UGX35,000",
        image: "./assets/images/shades9.jpg",
      },
      {
        name: "Silkona shades",
        price: "UGX25,000",
        image: "./assets/images/shades10.jpg",
      },
    ],
    Earrings: [
      {
        name: "Studd Earrings",
        price: "UGX25,000",
        image: "./assets/images/earring1.jpg",
      },
      {
        name: "Dangle Earrings",
        price: "UGX15,000",
        image: "./assets/images/earring2.jpg",
      },
      {
        name: "Tassel Earrings",
        price: "UGX35,000",
        image: "./assets/images/earring3.jpg",
      },
      {
        name: "Huggies",
        price: "UGX45,000",
        image: "./assets/images/earring4.jpg",
      },
      {
        name: "Threader Earrings",
        price: "UGX75,000",
        image: "./assets/images/earring5.jpg",
      },
      {
        name: "Climber Earrings",
        price: "UGX65,000",
        image: "./assets/images/earring6.jpg",
      },
      {
        name: "Chandelier Earrings",
        price: "UGX125,000",
        image: "./assets/images/earring7.jpg",
      },
      {
        name: "Ear Cuffs",
        price: "UGX55,000",
        image: "./assets/images/earring8.jpg",
      },
      {
        name: "Luna Drops",
        price: "UGX30,000",
        image: "./assets/images/earring9.jpg",
      },
      {
        name: "Celeste Charms",
        price: "UGX40,000",
        image: "./assets/images/earring10.jpg",
      },
    ],
    Belts: [
      {
        name: "Corset Belt",
        price: "UGX45,000",
        image: "./assets/images/belt1.jpg",
      },
      {
        name: "Western Belt",
        price: "UGX50,000",
        image: "./assets/images/belt2.jpg",
      },
      {
        name: "Sash Belt",
        price: "UGX65,000",
        image: "./assets/images/belt3.jpg",
      },
      {
        name: "Braided Belt",
        price: "UGX40,000",
        image: "./assets/images/belt4.jpg",
      },
      {
        name: "Cliver Belt",
        price: "UGX75,000",
        image: "./assets/images/belt5.jpg",
      },
      {
        name: "Utility Belt",
        price: "UGX42,000",
        image: "./assets/images/belt6.jpg",
      },
      {
        name: "Terra Grip",
        price: "UGX35,000",
        image: "./assets/images/belt7.jpg",
      },
      {
        name: "Bold Bind Belt",
        price: "UGX60,000",
        image: "./assets/images/belt8.jpg",
      },
      {
        name: "Luxe Link",
        price: "UGX80,000",
        image: "./assets/images/belt9.jpg",
      },
      {
        name: "Halo Wrap",
        price: "UGX23,000",
        image: "./assets/images/belt10.jpg",
      },
      {
        name: "Crickler Belt",
        price: "UGX45,000",
        image: "./assets/images/belt11.jpg",
      },
    ],
    Hats: [
      {
        name: "Cow boy Hat",
        price: "UGX45,000",
        image: "./assets/images/hat1.jpg",
      },
      { name: "Fedora", price: "UGX50,000", image: "./assets/images/hat2.jpg" },
      {
        name: "Panama Hat",
        price: "UGX30,000",
        image: "./assets/images/hat3.jpg",
      },
      {
        name: "Bowler Hat",
        price: "UGX15,000",
        image: "./assets/images/hat4.jpg",
      },
      { name: "Trilby", price: "UGX35,000", image: "./assets/images/hat5.jpg" },
      {
        name: "Halo Cap",
        price: "UGX70,000",
        image: "./assets/images/hat6.jpg",
      },
      {
        name: "Drift Dome",
        price: "UGX30,000",
        image: "./assets/images/hat7.jpg",
      },
      {
        name: "The Nomad Topper",
        price: "UGX45,000",
        image: "./assets/images/hat8.jpg",
      },
      {
        name: "Cinder Crest",
        price: "UGX50,000",
        image: "./assets/images/hat9.jpg",
      },
      {
        name: "Breeze Bandit",
        price: "UGX100,000",
        image: "./assets/images/hat10.jpg",
      },
      {
        name: "Velvet Peak",
        price: "UGX45,000",
        image: "./assets/images/hat11.jpg",
      },
    ],
    // Add more categories as needed
  };

  // Function to render items for a category
  function renderCategory(category) {
    showcase.innerHTML = ""; // Clear existing items
    const categoryItems = items[category] || [];
    categoryItems.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
          <div class="image">
            <img loading="lazy" src="${item.image}" class="item-image" alt="${item.name}">
          </div>
          <div class="detail">
            <div class="item-name">${item.name}</div>
            <div class="price">${item.price}</div>
          </div>
        `;
      showcase.appendChild(itemDiv);
    });
  }

  // Event listener for category clicks
  categories.forEach((category) => {
    category.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedCategory = category.getAttribute("data-category");

      // Update active class
      document.querySelectorAll(".categories div").forEach((div) => {
        div.classList.remove("active");
      });
      category.classList.add("active");

      // Render items for the selected category
      renderCategory(selectedCategory);
    });
  });

  // Render SuperDeals by default
  renderCategory("SuperDeals");

  // Add event listener for product clicks
  document.querySelector(".showcase").addEventListener("click", (e) => {
    if (e.target.classList.contains("item-image")) {
      const product = {
        name: e.target.closest(".item").querySelector(".item-name").textContent,
        price: e.target.closest(".item").querySelector(".price").textContent,
        image: e.target.src,
        material: "Stainless Steel", // Example data
        application: "Formal and Casual Wear", // Example data
        customization: "Engraving Available", // Example data
        reviews: ["Great product!", "Good value for money."], // Example data
        similarProducts: [
          {
            name: "Luxury Watch",
            price: "UGX500,000",
            image: "./assets/images/watch.png",
          },
          {
            name: "Classic Watch",
            price: "UGX250,000",
            image: "./assets/images/watch.png",
          },
        ],
      };

      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "./pages/product.html";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showcase = document.querySelector(".showcase");

  // Add event listener for cart icon clicks
  showcase.addEventListener("click", (e) => {
    if (e.target.closest(".cart-icon")) {
      const productElement = e.target.closest(".item");
      const product = {
        name: productElement.querySelector(".item-name").textContent,
        price: productElement.querySelector(".price").textContent,
        image: productElement.querySelector(".item-image").src,
        quantity: 1, // Default quantity
      };

      // Retrieve the cart from localStorage or initialize it
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the product is already in the cart
      const existingProduct = cart.find((item) => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if already in cart
      } else {
        cart.push(product); // Add new product to cart
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} has been added to your cart!`);
    }
  });
});
