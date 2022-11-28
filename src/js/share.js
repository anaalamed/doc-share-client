//  document.getElementById("add-btn").addEventListener("click", newSharedUser);

// function newSharedUser() {
//   const inputUser = document.getElementById("input-user").value;

//   var li = document.createElement("li");
//   var user = document.createTextNode(inputUser);
//   li.appendChild(user);
//   document.getElementById("users-table").appendChild(li);
// }

// const newSharedUser = () => {
//   // -------------------- new user -------------------------------
//   console.log("share user");
//   $(document).on("btn-add-user", "#userList", function (event) {
//     console.log("add user");
//     event.preventDefault();
//     console.log(event);
//     const inputUser = document.getElementById("input-user").value;

//     var li = document.createElement("li");
//     var user = document.createTextNode(inputUser);
//     li.appendChild(user);
//     document.getElementById("users-table").appendChild(li);
//   });
// };
import $ from "jquery";

// -------------------- new user -------------------------------
const newSharedUser = () => {
  $(".addUser").on("click", function () {
    console.log("add user");
    const inputUser = document.getElementById("input-user").value;
    var li = document.createElement("li");
    var user = document.createTextNode(inputUser);
    li.appendChild(user);
    document.getElementById("users-table").appendChild(li);
  });
};



// const shareViaEmail = () => {
//   $(document).on("click", "#shareViaEmail", () => {
//     //TODO
//   });
// };

// const updatePermission = () => {
//   $(document).on("click", "#updatePermissionBtn", () => {
//     //TODO
//   });
// };

export { newSharedUser };
