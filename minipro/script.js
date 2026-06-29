// iife function : immediate invoke function execution

(async function dataFetching(){

    let url = "https://dummyjson.com/products?limit=194"
    let apiRes = await fetch(url)
    let resData = await apiRes.json()

    // console.log(resData.products)

    let products = resData.products;
    // console.log(products)

    let main = document.getElementById("main")

    products.map((el) => {

        let outerDiv = document.createElement("div")
        let heading = document.createElement("h2")
        let image = document.createElement("img")
        let description = document.createElement("p")

        let price_cart = document.createElement("div")
        let price = document.createElement("p")
        let cart = document.createElement("button")

        heading.innerText = el.title
        image.src = el.thumbnail
        description.innerText = el.description
        price.innerText = `Rs ${Math.ceil(el.price * 95)}/-`
        cart.innerText = "Add to Cart"

        outerDiv.classList.add("outerDiv")
        price_cart.classList.add("price-cart")

        // clicking the card (except the cart button) opens the product page
        outerDiv.addEventListener("click", () => {
            window.location.href = `product.html?id=${el.id}`
        })

        // clicking add to cart should not open the product page
        cart.addEventListener("click", (e) => {
            e.stopPropagation()
            addToCart(el, 1)
            alert(`${el.title} added to cart!`)
        })

        price_cart.append(price, cart)
        outerDiv.append(image, heading, description, price_cart)

        main.append(outerDiv)

    })

})()

updateCartCount()
