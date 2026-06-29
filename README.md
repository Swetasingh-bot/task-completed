
# Product Listing & Cart App

A simple e-commerce style web app built with **HTML, CSS, and Vanilla JavaScript**, using the [DummyJSON](https://dummyjson.com/) API for product data.

## 🔗 Live Demo
https://github.com/Swetasingh-bot/task-completed

## 📋 Features

1. **Listing Page (`index.html`)** — Fetches all products from the API and displays them as cards (image, title, description, price).
2. **Product Details Page (`product.html`)** — Clicking on any product card opens its full details on a separate page.
3. **Cart Page (`cart.html`)** — Shows all items added to the cart with quantity controls (+/-), a remove option, and a full bill summary (Subtotal, Shipping, Tax, Total).

## 🔌 APIs Used

- `GET https://dummyjson.com/products?limit=194` — fetch all products for the listing page
- `GET https://dummyjson.com/products/{id}` — fetch a single product's details

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla, ES6+)
- Browser `localStorage` (to persist cart data across pages)

## 📁 Project Structure

```
├── index.html          # Product listing page
├── product.html        # Single product detail page
├── cart.html           # Cart page with bill summary
├── style.css           # Shared styling for all pages
├── script.js           # Listing page logic (fetch + render products)
├── product.js          # Product detail page logic
├── cart.js             # Cart page rendering logic
├── cart-helpers.js      # Shared cart functions (add/remove/update quantity) using localStorage
└── README.md
```

## ▶️ How to Run

1. Clone or download this repository.
2. Open `index.html` directly in your browser (no build step or server required).
3. Browse products → click a product to view details → add to cart → view cart and bill summary.

## 📝 Notes

- Prices from the API are in USD; they are converted to INR in the UI (`price × 95`) for display purposes.
- Cart data is stored in the browser's `localStorage`, so it persists across the Listing, Product, and Cart pages.
