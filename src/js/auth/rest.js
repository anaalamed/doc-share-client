import { serverAddress } from "../constants";
import $ from "jquery";

const createUser = (user) => {
  fetch(serverAddress + "/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name: user.name, email: user.email, password: user.password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const isJson = response.headers.get("content-type")?.includes("application/json");
      const data = isJson && (await response.json());
      // console.log(data);
      const error = (data && data.message) || response.status;

      if (!data.success) {
        $(".modal-title").text("Registration failed");
        $(".modal-body").text("Please try again later");
        return Promise.reject(error);
      }

      $(".modal-title").text("Registration success");
      $(".modal-body").text("Please check your email and confirm your registration!");
    })
    .catch((error) => {
      console.error("error: ", error);
    });
};

const loginUser = (user) => {
  console.log("----- in loginUser() -----");
  console.log(user);
  
  fetch(serverAddress + "/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const isJson = response.headers.get("content-type")?.includes("application/json");
      const data = isJson && (await response.json());
      console.log(data);
      const error = (data && data.message) || response.status;

      if (!data.success) {
        $(".modal-title").text("Log In failed");
        $(".modal-body").text(error);
        return Promise.reject(error);
      }

      $(".modal-title").text("Log In success");
      $(".modal-body").text("You can now use the app");
    })
    .catch((error) => {
      console.error("error: ", error);
    });
};

export { createUser, loginUser };
