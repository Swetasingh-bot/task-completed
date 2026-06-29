// iife function : immediate invoke function execution

(async function dataFetching(){

    // get the product id from the url, eg: product.html?id=5
    let params = new URLSearchParams(window.location.search)
    let productId = params.get("id")

    let url = `https://dummyjson.com/products/${productId}`
    let apiRes = await fetch(url)
    let el = await apiRes.json()

    // console.log(el)

    let productMain = document.getElementById("productMain")

    let image = document.createElement("img")
    let productInfo = document.createElement("div")
    let heading = document.createElement("h2")
    let description = document.createElement("p")
    let price = document.createElement("h3")
    let cart = document.createElement("button")

    image.src = el.thumbnail

    productInfo.classList.add("productInfo")

    heading.innerText = el.title
    description.innerText = el.description
    price.innerText = `Rs ${Math.ceil(el.price * 95)}/-`
    cart.innerText = "Add to Cart"

    cart.addEventListener("click", () => {
        addToCart(el, 1)
        alert(`${el.title} added to cart!`)
    })

    productInfo.append(heading, description, price, cart)
    productMain.append(image, productInfo)

})()

updateCartCount()
