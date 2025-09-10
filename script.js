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
const setObjectToLS = () => {
  const customer = { name: "abul", products: 3, price: 75 };
  const customerJSON = JSON.stringify(customer);
  //save in ls
  localStorage.setItem("customer", customerJSON);
  //localStorage.setItem("customer", JSON.stringify(customer));
  console.log(customerJSON, typeof customerJSON);
};
document.querySelector(".addObj").addEventListener("click", setObjectToLS);

const getObjectToLS = () => {
  const customerJSON = localStorage.getItem("customer");
  const customer = JSON.parse(customerJSON);
  //   const customer = JSON.parse(localStorage.getItem('customer'))
  console.log(customerJSON);
  console.log(customer);

  //obj update
  customer.age = 55;
  localStorage.setItem("customerNew", JSON.stringify(customer));
  const customerNew = JSON.parse(localStorage.getItem("customerNew"));
  console.log(customerNew);
};

document.querySelector(".getObj").addEventListener("click", getObjectToLS);
