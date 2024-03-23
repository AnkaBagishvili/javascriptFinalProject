function signInAcc() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let savePasswordIsChecked = document.getElementById("savePassword").checked;

  let usersData = localStorage.getItem("usersData");
  usersData = JSON.parse(usersData);

  let userExists = false;

  let loginForm = document.querySelector("form");

  let timeNow = new Date();
  timeNow.setTime(timeNow.getTime() + 1 * 24 * 60 * 1000);
  let expires = "expires=" + timeNow.toUTCString();
  let sessionToken = generateString(36);

  for (let user of usersData) {
    if (user.username === username && user.password === password) {
      if (savePasswordIsChecked) {
        document.cookie = `sessionToken=${sessionToken}; ${expires}; path=/`;
      } else {
        sessionStorage.setItem("sessionToken", sessionToken);
      }

      user.sessionToken = sessionToken;
      userExists = true;
      break;
    }
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  if (!userExists) {
    let loginFailed = document.createElement("h2");
    loginFailed.textContent = "Login Failed";
    document.loginFailed.appendChild(loginFailed);
  } else {
    window.location.href = "index.html";
  }
}
