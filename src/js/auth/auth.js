import $ from "jquery";
import { createUser, loginUser } from "./rest";

$(() => {
  // registration
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

  // login
  $("#login").on("submit", function (event) {
    console.log("login");
    event.preventDefault();

    const user = {
      email: $(".form-floating #email").val(),
      password: $(".form-floating #password").val(),
    };

    console.log(user);
    loginUser(user);
  });
});
