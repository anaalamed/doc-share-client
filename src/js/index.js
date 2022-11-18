import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup";
import { openConnection } from "./sockets";
import "../styles/_custom.scss";

console.log("index.js file");

openConnection();
