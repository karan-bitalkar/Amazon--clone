document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".button1");
    let cartCount = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            cartCount++;
            updateCartCount(cartCount);
            alert("Item added to cart!");
        });
    });

    function updateCartCount(count) {
        let cartIcon = document.querySelector(".nav-cart");
        if (cartIcon) {
            cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${count})`;
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all "Buy Now" buttons
    const buyNowButtons = document.querySelectorAll(".button2");

    // Loop through each button and add a click event listener
    buyNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Product Purchased!");
        });
    });
});


