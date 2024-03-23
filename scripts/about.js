// BurgerMenu
let burger = document.getElementById("burgerMenu");
let menuInfo = document.getElementById("burgerMenuInfo");
burgerMenu.addEventListener("click",()=>{
  if (burgerMenuInfo.style.display === "none"){
    burgerMenuInfo.style.display = "block"
  }
  else{
    burgerMenuInfo.style.display= "none";
  }
});