// cart.js : renders the cart items and bill summary

function renderCart(){

    let cart = getCart()

    let cartMain = document.getElementById("cartMain")
    let billSummary = document.getElementById("billSummary")

    cartMain.innerHTML = ""
    billSummary.innerHTML = ""

    if(cart.length === 0){
        let emptyMsg = document.createElement("p")
        emptyMsg.classList.add("emptyMsg")
        emptyMsg.innerText = "Your cart is empty. Go add some products!"
        cartMain.append(emptyMsg)
        return
    }

    let subtotal = 0

    cart.map((item) => {

        let itemPriceInr = Math.ceil(item.price * 95)
        let lineTotal = itemPriceInr * item.qty
        subtotal = subtotal + lineTotal

        let cartItem = document.createElement("div")
        let image = document.createElement("img")
        let heading = document.createElement("h2")

        let qtyBox = document.createElement("div")
        let minusBtn = document.createElement("button")
        let qtyText = document.createElement("span")
        let plusBtn = document.createElement("button")

        let price = document.createElement("p")
        let removeBtn = document.createElement("button")

        cartItem.classList.add("cartItem")
        qtyBox.classList.add("qtyBox")
        removeBtn.classList.add("removeBtn")

        image.src = item.thumbnail
        heading.innerText = item.title

        minusBtn.innerText = "-"
        qtyText.innerText = item.qty
        plusBtn.innerText = "+"

        minusBtn.addEventListener("click", () => {
            changeQty(item.id, -1)
            renderCart()
        })

        plusBtn.addEventListener("click", () => {
            changeQty(item.id, 1)
            renderCart()
        })

        price.innerText = `Rs ${lineTotal}/-`

        removeBtn.innerText = "Remove"
        removeBtn.addEventListener("click", () => {
            removeFromCart(item.id)
            renderCart()
        })

        qtyBox.append(minusBtn, qtyText, plusBtn)
        cartItem.append(image, heading, qtyBox, price, removeBtn)

        cartMain.append(cartItem)

    })

    let shipping = 50
    let tax = Math.ceil(subtotal * 0.08)
    let total = subtotal + shipping + tax

    let summaryHeading = document.createElement("h2")
    summaryHeading.innerText = "Bill Summary"

    let subtotalRow = document.createElement("div")
    subtotalRow.classList.add("billRow")
    subtotalRow.innerHTML = `<span>Subtotal</span><span>Rs ${subtotal}/-</span>`

    let shippingRow = document.createElement("div")
    shippingRow.classList.add("billRow")
    shippingRow.innerHTML = `<span>Shipping</span><span>Rs ${shipping}/-</span>`

    let taxRow = document.createElement("div")
    taxRow.classList.add("billRow")
    taxRow.innerHTML = `<span>Tax (8%)</span><span>Rs ${tax}/-</span>`

    let totalRow = document.createElement("div")
    totalRow.classList.add("billRow", "total")
    totalRow.innerHTML = `<span>Total</span><span>Rs ${total}/-</span>`

    billSummary.append(summaryHeading, subtotalRow, shippingRow, taxRow, totalRow)

}

renderCart()
updateCartCount()
