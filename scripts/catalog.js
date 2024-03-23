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

// CatalogJs
let yearDropDown = document.getElementById("yearDropdown");
let colorDropDown = document.getElementById("colorDropdown");

let startYear = 1990;
let endYear = 2001;
for (let year = startYear; year <= endYear; year++) {
  let dropDownOption = document.createElement("option");
  dropDownOption.value = year;
  dropDownOption.textContent = year;
  yearDropDown.appendChild(dropDownOption);
}

function filterCars() {
  const selectedYear = parseInt(yearDropDown.value);
  const selectedColor = colorDropDown.value;

  fetch("https://myfakeapi.com/api/cars/model/E-Class")
    .then((response) => response.json())
    .then((data) => {
      let filteredCars = data.Cars;

      if (!isNaN(selectedYear)) {
        filteredCars = filteredCars.filter(
          (car) => car.car_model_year === selectedYear
        );
      }

      if (selectedColor !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.car_color.toLowerCase() === selectedColor.toLowerCase()
        );
      }

      let descriptions = document.querySelectorAll(".section2_card_title");
      for (let i = 0; i < descriptions.length; i++) {
        if (filteredCars[i]) {
          const car = filteredCars[i];
          descriptions[
            i
          ].textContent = `${car.car_color} ${car.car_model} (${car.car_model_year})`;
          descriptions[i].style.color = "rgb(113, 113, 113)";
          descriptions[i].style.fontSize = "20px";
        } else {
          descriptions[i].textContent = "";
        }
      }
    });
}

yearDropDown.addEventListener("change", filterCars);
colorDropDown.addEventListener("change", filterCars);

filterCars();
