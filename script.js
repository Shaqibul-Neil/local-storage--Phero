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

const handleAddProducts = () => {
  const productEL = document.querySelector("#product");
  const product = productEL.value;
  const quantityEL = document.querySelector("#quantity");
  const quantity = quantityEL.value;
  //console.log("products added", quantity, product);

  displayProducts(product, quantity);
  addProductToCart(product, quantity);
  productEL.value = quantityEL.value = "";
};

document
  .querySelector(".addProduct")
  .addEventListener("click", handleAddProducts);

//creating a cart obj
const getCart = () => {
  const cart = {};
  return cart;
};
//adding key value in cart obj
const addProductToCart = (product, quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  console.log("cart", cart);
};

const productsContainer = document.querySelector("#products-container");
const displayProducts = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productsContainer.appendChild(li);
};
