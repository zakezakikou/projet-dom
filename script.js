var user1 = {
    name: "asma",
    mail: "asma@gmail.com",
    password: "123",
    naissance: "14/10/1989",
    gender: "female",
    adresse: "rue 14 janvier",
    photo: "photo.png",
    statement: ["state1", "state2"],
  };
  var user2 = {
    name: "safa",
    mail: "safa@gmail.com",
    password: "456",
    naissance: "14/10/1989",
    gender: "female",
    adresse: "rue 14 janvier",
    photo: "photo.png",
    statement: ["state1", "state2"],
  };
  var utilisateurs = [
    user1,
    user2,
    {
      name: "fatma",
      mail: "fatma@gmail.com",
      password: "789",
      naissance: "14/10/1989",
      gender: "female",
      adresse: "rue 14 janvier",
      photo: "photo.png",
      statement: ["state1", "state2"],
    },
  ];
  
  var emailentree = document.querySelector("#email");
  var passwordentree = document.querySelector("#password");
  var btn = document.querySelector("button");
  btn.addEventListener("click", login);
  function login(e) {
    e.preventDefault();
    var exist = false;
    for (var u of utilisateurs) {
      // console.log(u.mail,u.password)
      if (
        u.mail === emailentree.value.trim().toLowerCase() &&
        u.password === passwordentree.value.trim()
      ) {
        console.log("login correct");
        exist = true;
        break;
      }
    }
    if (exist == true) {
      window.location.href = "home.html";
    } else {
      console.log("login incorrect");
      emailentree.classList.add("outline-pink-500");
      passwordentree.classList.add("outline-pink-500");
    }
  }