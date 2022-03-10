const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function valdateForm(){
  //using containt Api
  isValid = form.checkValidity();
  //style main message
  if (!isValid){
    message.textContent = 'Check os campos destacados';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  //checa se as validade bater
  if (password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  }else{
    passwordsMatch = false;
    message.textContent = 'Check os campos destacados';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  //checa se tudo se valida
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Registrado com sucesso!!!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

//event listener
form.addEventListener('submit', processFormData);