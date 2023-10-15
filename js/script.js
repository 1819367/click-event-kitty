//var button = document.querySelector(".show-cat");//
//button.addEventListener("click", function () {//
//  button.innerText = "It's working.";//
//});//
//console.log(button);//

//var cat = document.querySelector(".cat");//
//cat.classList.add("show");//
//console.log(cat);//

var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector(".cat");
console.log(cat);

button.addEventListener("click", function () {
  cat.classList.add("show");
})
