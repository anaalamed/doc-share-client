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
