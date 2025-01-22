var utilisateurs = [
  {
    name: "asma",
    mail: "asma@gmail.com",
    password: "asma1234",
    country: "tunis",
    push: "Everything",
    adresse: "rue 14 janvier",
    photo: "photo.png",
    Notifications: ["Comments", "Candidates"],
  },
  {
    name: "asma",
    mail: "fatma@gmail.com",
    password: "asma1234",
    country: "tunis",
    push: "Everything",
    adresse: "rue 14 janvier",
    photo: "photo.png",
    notifications: ["Comments", "Candidates"],
  },
];
var lastName = document.querySelector("#last-name");
var firstName = document.querySelector("#first-name");
var about = document.querySelector("#about");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var country = document.querySelector("#country");
var streetAddress = document.querySelector("#street-address");
var photo = document.querySelector("#file-upload");
var btn = document.querySelector("#save");

btn.addEventListener("click", save);

function save(e) {
  e.preventDefault();

  var notifications = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  var tableau = [];
  for (var element of notifications) {
    //   console.log(element.id)

    tableau.push(element.value);
  }
  console.log(tableau);

  var radio = document.querySelector('input[type="radio"]:checked');

  console.log(radio.value)


  
  password.parentElement.classList.remove(
    "outline",
    "outline-2",
    "outline-offset-2",
    "outline-pink-500"
  );
  email.classList.remove(
    "outline",
    "outline-2",
    "outline-offset-2",
    "outline-pink-500"
  );
  var mailCorrect = true;
  for (var u of utilisateurs) {
    console.log("element:", u.mail);
    if (u.mail === email.value.trim() || !email.value.trim().includes("@")) {
      mailCorrect = false;
      break;
    }
  }
  if (mailCorrect) {
    console.log("mail accepté");
  } else {
    console.log("mail incorrect");
    email.classList.add(
      "outline",
      "outline-2",
      "outline-offset-2",
      "outline-pink-500"
    );
  }
  var passwordCorrect = true;
  if (password.value.length < 8) {
    console.log("password invalid");
    password.parentElement.classList.add(
      "outline",
      "outline-2",
      "outline-offset-2",
      "outline-pink-500"
    );
    passwordCorrect = false;
  } else console.log("password valid");
var ph = ''
  if (photo.files.length){
    ph=photo.files[0].name;
    
  }

    
    
    console.log(ph)
  if (mailCorrect && passwordCorrect) {
    console.log("valid");
    var user = {
      password: password.value,
      mail: email.value,
      name: lastName.value + " " + firstName.value,
      about: about.value,
      country: country.value,
      adresse: streetAddress.value,
      photo: ph,
      notifications: tableau,
      push:radio.value
    };
    utilisateurs.push(user)
    console.log(user)
    console.log(utilisateurs)
    
  } else {
    console.log("invalid");
  }
}
