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

//button.addEventListener("click", function () {//
  //if (cat.classList.contains("show")) {//
   // console.log("Yes.");//
//}  else {//
  //console.log("No.");//
//}//
//});//


button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    cat.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!!";
    button.classList.remove("disappear");
  }
})