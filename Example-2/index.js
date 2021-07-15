var today = new Date();
var Age = today.getFullYear() - 1999;
var Name = "Mehmet Yılmaz";

myFunction = () => {
  visibilityChange();
  changeData();
};

visibilityChange = () => {
  var card = document.querySelector(".card");
  var btn = document.querySelector(".btn");

  card.classList.remove("visnon");
  card.classList.add("vis");

  btn.classList.add("visnon");
};
changeData = () => {
  var nameAge = document.getElementById("name&Age");
  var github = document.getElementById("github");
  var linkedin = document.getElementById("linkedin");

  nameAge.innerHTML = Name + " " + Age;
  github.setAttribute("href", "https://github.com/Meeyzt");
  linkedin.setAttribute("href", "https://github.com/Meeyzt");
};
