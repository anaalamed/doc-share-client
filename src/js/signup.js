import $ from "jquery";
import { createUser } from "./rest";

$(() => {
  $("#signup").on("submit", function (event) {
    console.log("registration");
    event.preventDefault();

    const user = {
      email: $(".form-floating #email").val(),
      name: $(".form-floating #name").val(),
      password: $(".form-floating #password").val(),
    };

    console.log(user);
    createUser(user);
  });
});

const pwShowHide = document.querySelectorAll(".eye-icon");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
      'input[type="password"]'
    );
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
