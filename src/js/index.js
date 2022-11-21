import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup";
import "./share";
import { openConnection } from "./sockets";
import "../styles/_custom.scss";

console.log("index.js file");
console.log("------------------------------------------");

// insert dynamic html at different html files
$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    // var file = "views/" + $(this).data("include") + ".html";
    var file = "blocks/" + $(this).data("include") + ".html";
    console.log(file);

    $(this).load(file);
  });
});

openConnection();
