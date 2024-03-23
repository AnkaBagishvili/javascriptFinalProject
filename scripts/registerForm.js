function handleRegistration() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let regForm = document.getElementById("registerForm");
  let errorMessage = document.getElementById("error");

  let firstNameRegex = /^[a-zA-Z'-]{1,30}$/;
  let lastNameRegex = /^[a-zA-Z'-]{1,30}$/;
  let userNameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{8,}$/;

  switch (false) {
    case firstNameRegex.test(firstName):
      errorMessage.innerHTML = "Enter valid First Name";
      break;
    case lastNameRegex.test(lastName):
      errorMessage.innerHTML = "Enter valid Last Name";
      break;
    case userNameRegex.test(username):
      errorMessage.innerHTML = "Enter valid Username";
      break;
    case passwordRegex.test(password):
      errorMessage.innerHTML = "Enter valid Password";
      break;
    default:
      errorMessage.innerHTML = "";
      break;
  }
  errorMessage.style.color = "red";
  errorMessage.style.marginTop = "10px";

  if (errorMessage.innerHTML === "") {
    let oldUsersData = JSON.parse(localStorage.getItem("usersData")) || [];

    let existingUser = oldUsersData.find((user) => user.username === username);
    if (existingUser) {
      errorMessage.innerHTML = "This username is already used!";
    } else {
      let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      };
      oldUsersData.push(user);
      localStorage.setItem("usersData", JSON.stringify(oldUsersData));
      window.location.href = "signIn.html";
    }
  }

  regForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
