import { serverAddress } from "./constants";

const createUser = (user) => {
  fetch(serverAddress + "/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name: user.name, email: user.email, password: user.password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      // const isJson = response.headers.get("content-type")?.includes("application/json");
      // const data = isJson && (await response.json());
      // if (!response.ok) {
      //   const error = (data && data.message) || response.status;
      //   $(".modal-title").text("Registration failed");
      //   $(".modal-body").text(error);
      //   return Promise.reject(error);
      // }
      // $(".modal-title").text("Registration success");
      // $(".modal-body").text("Please log in!");
    })
    .catch((error) => {
      console.error("error: ", error);
    });
};

export { createUser };
