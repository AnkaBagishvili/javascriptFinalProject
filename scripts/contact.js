// BurgerMenu
let burger = document.getElementById("burgerMenu");
let menuInfo = document.getElementById("burgerMenuInfo");
burgerMenu.addEventListener("click", () => {
  if (burgerMenuInfo.style.display === "none") {
    burgerMenuInfo.style.display = "block";
  } else {
    burgerMenuInfo.style.display = "none";
  }
});

// ContactJs

function handleSubmit(event) {
  event.preventDefault();

  let contactName = document.getElementById("contactName").value;
  let contactLastName = document.getElementById("contactLastName").value;
  let contactAge = document.getElementById("contactAge").value;
  let contactGender = document.getElementById("contactGender").value;
  let contactCountry = document.getElementById("contactCountry").value;
  let contactCity = document.getElementById("contactCity").value;

  let submittedInfoDiv = document.createElement("div");
  submittedInfoDiv.classList.add("submittedInfo");

  submittedInfoDiv.innerHTML = `
    <p>Name: ${contactName}</p>
<p>LastName: ${contactLastName}</p>
<p>Age: ${contactAge}</p>
<p>Gender: ${contactGender}</p>
<p>Country: ${contactCountry}</p>
<p>City: ${contactCity}</p>
`;

  let container = document.querySelector(".contactSection1");
  container.appendChild(submittedInfoDiv);
}

document.getElementById("contactForm").addEventListener("submit", handleSubmit);
