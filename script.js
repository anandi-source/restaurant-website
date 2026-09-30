const orderForm = document.getElementById("orderForm");
const food = document.getElementById("food");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

// Calculate total price
function calculateTotal() {
    const price = Number(food.value);
    const qty = Number(quantity.value);

    const total = price * qty;

    totalPrice.textContent = total;
}

// Run calculation when food or quantity changes
food.addEventListener("change", calculateTotal);
quantity.addEventListener("input", calculateTotal);

// Place order
orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const selectedFood = food.options[food.selectedIndex].text;
    const qty = quantity.value;
    const total = totalPrice.textContent;

    alert(
        "Thank you, " + name + "!\n\n" +
        "Your order has been placed successfully.\n" +
        "Food: " + selectedFood + "\n" +
        "Quantity: " + qty + "\n" +
        "Total Amount: ₹" + total
    );

    orderForm.reset();

    calculateTotal();
});