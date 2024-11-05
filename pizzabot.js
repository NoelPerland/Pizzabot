//task 1.1
const vegetarian = "vegerarian pizza";
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
const orderQuantity = prompt("How mant of the " + orderName + " do you want?");

//task 2.4
const orderTotal = orderQuantity * pizzaPrice;
alert(
  "Fantastic choice. I will get started or your " +
    orderName +
    " right away. Your final will be " +
    orderTotal +
    ":-"
);
