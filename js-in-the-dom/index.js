const formBtn = document.getElementById('close-form')
const form = document.getElementById('form')
formBtn.addEventListener('click', toggler)

function toggler() {
  if (formBtn.innerText === "X") {
    formBtn.innerText = "+";
  } else {
    formBtn.innerText = "X";
  }
}

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

let emailList = []

function validateForm() {
  if (nameInput.value && emailInput.value === false) {
    document.getElementById("name").style.border = "solid";
    // document.getElementById('name').style.color = "red";
    // document.getElementById('name').style.width = 5px;
    alert("you must enter a name and an email address to subscribe!");
  } else if(nameInput.value === false) {
    
    alert('please enter a name to subsribe')
  } else if(emailInput.value === false) {
    alert('please enter an email address to subsribe')
  } else {
      alert('you rock')
  }
}