// cart-helpers.js : shared cart functions used on all 3 pages
// saves cart data in localStorage so it persists across pages

function getCart(){
    let cartData = localStorage.getItem("myCart")
    if(cartData){
        let cart = JSON.parse(cartData)
        // safety check: remove any old/corrupt items that don't have a title or price
        // (this can happen if cart data was saved before, with a different structure)
        cart = cart.filter((item) => item.title && typeof item.price === "number")
        return cart
    } else {
        return []
    }
}

function saveCart(cartArr){
    localStorage.setItem("myCart", JSON.stringify(cartArr))
    updateCartCount()
}

function addToCart(product, qty){
    let cart = getCart()

    let found = cart.find((item) => item.id === product.id)

    if(found){
        found.qty = found.qty + qty
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            qty: qty
        })
    }

    saveCart(cart)
}

function removeFromCart(id){
    let cart = getCart()
    cart = cart.filter((item) => item.id !== id)
    saveCart(cart)
}

function changeQty(id, change){
    let cart = getCart()
    let item = cart.find((i) => i.id === id)

    if(item){
        item.qty = item.qty + change
        if(item.qty <= 0){
            removeFromCart(id)
            return
        }
    }

    saveCart(cart)
}

function updateCartCount(){
    let cart = getCart()
    let totalQty = 0

    cart.map((item) => {
        totalQty = totalQty + item.qty
    })

    let cartCountEl = document.getElementById("cartCount")
    if(cartCountEl){
        cartCountEl.innerText = totalQty
    }
}
