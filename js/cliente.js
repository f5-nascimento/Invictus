const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelector("[data-input]");

const closeButton = document.querySelector("#close-message");

//função anomima
cepInput.addEventListener("keypress",(e) =>{

  const onlyNumbers = /[0-9]/;
  const key = String.fromCharCode(e.keyCode);
  console.log(e.keyCode);
  console.log(key);

  if(!onlyNumbers.test(key)){
    e.preventDefault();
    return;
  }

});

cepInput.addEventListener("keyup", (e) =>{

  const inputValue = e.target.value;

  if (inputValue.length === 8){

    getAddress(inputValue);

  }

});

const getAddress = async (cep) => {

  
  toggleLoader();
  cepInput.blur();
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  
  if (data.erro === "true"){

    addressForm.reset();
    toggleLoader();
    return;

  }

};

const toggleLoader = () => {
  
  const fadeElement = document.querySelector("#fade");
  const loaderElement = document.querySelector("#loader");

  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");



}