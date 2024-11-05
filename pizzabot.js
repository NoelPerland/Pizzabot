// The most important variables
const vegetarian = "vegetarian pizza";
const hawaiian = "hawaiian pizza";
const pepperoni = "pepperoni pizza";
const pizzaPrice = 80; // no inflation

//Func to greet the costumer
function greetCostumer() {
  alert(
    "Hi! Welcome to Pizzabot. On our menu we have " +
      vegetarian +
      ", " +
      hawaiian +
      " and " +
      pepperoni
  );
}

//Func to check if the pizza is on the menu
function checkOrderName(orderName) {
  const lowerCaseOrder = orderName.toLowerCase(); // tror detta gör det simplare
  return (
    lowerCaseOrder === vegetarian ||
    lowerCaseOrder === hawaiian ||
    lowerCaseOrder === pepperoni
  );
}

//Func to check the total price of the order
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

//Func to check cooking time
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// Main program flow
greetCostumer();

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

if (checkOrderName(orderName)) {
  const orderQuantity = parseInt(
    prompt("How many of " + orderName + " do you want?"),
    10
  );

  // Check if orderQuantity is valid
  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    alert("You can't order zero pizzas you jerk.");
  } else {
    // Calculate order total and cooking time
    const orderTotal = totalCost(orderQuantity);
    const orderCookingTime = cookingTime(orderQuantity);
    alert(
      "Fantastic choice. I will get started on your " +
        orderName +
        " right away. " +
        "Your final total will be " +
        orderTotal +
        ":-. The pizzas will take " +
        orderCookingTime +
        " minutes."
    );
  }
} else {
  alert("Sorry, we don't have that pizza on our menu.");
}
