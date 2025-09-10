//Set and read Simple values from local storage
// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

//How to set and get objects to local storage
const addNumberToLS = () => {
  const num = Math.ceil(Math.random() * 100);
  console.log(num);
  localStorage.setItem("number", num);
};

document.querySelector(".addBtn").addEventListener("click", addNumberToLS);

const getNumberFromLS = () => {
  const num = localStorage.getItem("number");
  console.log("Get from local Storage", num);
};

document.querySelector(".getBtn").addEventListener("click", getNumberFromLS);
