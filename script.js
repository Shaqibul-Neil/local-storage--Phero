//Set and read Simple values from local storage
// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

//How to set and get objects to local storage
//primitive
// const addNumberToLS = () => {
//   const num = Math.ceil(Math.random() * 100);
//   console.log(num);
//   localStorage.setItem("number", num);
// };

// document.querySelector(".addBtn").addEventListener("click", addNumberToLS);

// const getNumberFromLS = () => {
//   const num = localStorage.getItem("number");
//   console.log("Get from local Storage", num);
// };

// document.querySelector(".getBtn").addEventListener("click", getNumberFromLS);

//non-primitive
// const setObjectToLS = () => {
//   const customer = { name: "abul", products: 3, price: 75 };
//   const customerJSON = JSON.stringify(customer);
//   //save in ls
//   localStorage.setItem("customer", customerJSON);
//   //localStorage.setItem("customer", JSON.stringify(customer));
//   console.log(customerJSON, typeof customerJSON);
// };
// document.querySelector(".addObj").addEventListener("click", setObjectToLS);

// const getObjectToLS = () => {
//   const customerJSON = localStorage.getItem("customer");
//   const customer = JSON.parse(customerJSON);
//   //   const customer = JSON.parse(localStorage.getItem('customer'))
//   console.log(customerJSON);
//   console.log(customer);

//   //obj update
//   customer.age = 55;
//   localStorage.setItem("customerNew", JSON.stringify(customer));
//   const customerNew = JSON.parse(localStorage.getItem("customerNew"));
//   console.log(customerNew);
// };

// document.querySelector(".getObj").addEventListener("click", getObjectToLS);

// const handleAddProducts = () => {
//   const productEL = document.querySelector("#product");
//   const product = productEL.value;
//   const quantityEL = document.querySelector("#quantity");
//   const quantity = +quantityEL.value;
//   //console.log("products added", quantity, product);

//   displayProducts(product, quantity);
//   addProductToCart(product, quantity);
//   productEL.value = quantityEL.value = "";
// };

// document
//   .querySelector(".addProduct")
//   .addEventListener("click", handleAddProducts);

// //creating a cart obj
// const getCart = () => {
//   let cart = {};
//   //getting the cart from local storage
//   const cartJSON = localStorage.getItem("cart");
//   //console.log(cartJSON);
//   //cart name e kono obj ache kina check krtesi. jodi thake tahole cart er sathe add hbe
//   if (cartJSON) {
//     cart = JSON.parse(cartJSON);
//     console.log(cart);
//   }
//   //jodi previously cart e kichu na thake
//   return cart;
// };
// //adding key value in cart obj
// const addProductToCart = (product, quantity) => {
//   const cart = getCart();
//   //cart e check krtesi similar name e oi product ache kina
//   if (cart[product]) {
//     cart[product] = cart[product] + quantity;
//   } else {
//     cart[product] = quantity;
//   }
//   //console.log("cart", cart);
//   //creating json for cart
//   const cartJSON = JSON.stringify(cart);
//   //saving in local storage
//   localStorage.setItem("cart", cartJSON);
// };

// const productsContainer = document.querySelector("#products-container");
// const displayProducts = (product, quantity) => {
//   const li = document.createElement("li");
//   li.innerText = `${product} : ${quantity}`;
//   productsContainer.appendChild(li);
// };

// //display products from stored local storage
// const displayStoredProducts = () => {
//   const cart = getCart();
//   for (const product in cart) {
//     const quantity = cart[product];
//     console.log(product, quantity);
//     displayProducts(product, quantity);
//   }
// };
// displayStoredProducts();
// const xy = { laptop: 8, pen: 10 };
// console.log(xy.laptop);
// const key = "laptop";
// console.log(xy[key]);
