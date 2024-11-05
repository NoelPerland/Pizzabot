//task 1.1
const vegetarian = "vegetarian pizza";
const hawaiian = "hawaiian pizza";
const pepperoni = "pepperoni pizza";

const pizzaPrice = 80; // no inflation
//task 1.2
alert(
  "Hi! Welcome to Pizzabot. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni
);

//task 2.3
const orderName = prompt("Enter the name of the pizza you want to order");
const orderQuantity = prompt("How many of the " + orderName + " do you want?");

//task 2.4 flyttade till if-satsen i task 3.1

//task 3.1
if (orderName === vegetarian || orderName === hawaiian || pepperoni) {
  const orderQuantity = parseInt(
    prompt("how many of " + orderName + " do you want?"),
    10
  );
  //task 2.4.2
  const orderTotal = orderQuantity * pizzaPrice;

  //task 3.2
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  //task 3.3

  alert(
    "Fantastic choice. I will get started on your " +
      orderName +
      " right away. Your total will be " +
      orderTotal +
      ":-"
  );
} else {
  alert("Sorry, we don't have that pizza on our menu.");
}
