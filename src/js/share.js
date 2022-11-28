//  document.getElementById("add-btn").addEventListener("click", newSharedUser);

// function newSharedUser() {
//   const inputUser = document.getElementById("input-user").value;

//   var li = document.createElement("li");
//   var user = document.createTextNode(inputUser);
//   li.appendChild(user);
//   document.getElementById("users-table").appendChild(li);
// }

const newSharedUser = () => {
  // -------------------- new user -------------------------------
  console.log("share user");
  $(document).on("add-user-btn", "#userList", function (event) {
    console.log("add user");
    event.preventDefault();
    console.log(event);
    const inputUser = document.getElementById("input-user").value;

    var li = document.createElement("li");
    var user = document.createTextNode(inputUser);
    li.appendChild(user);
    document.getElementById("users-table").appendChild(li);
  });
};

const copyLink = () => {
  $(document).on("click", "#copyLink", () => {
    //TODO
  });
};

const shareViaEmail = () => {
  $(document).on("click", "#shareViaEmail", () => {
    //TODO
  });
};

const updatePermission = () => {
  $(document).on("click", "#updatePermissionBtn", () => {
    //TODO
  });
};

export { newSharedUser, copyLink, shareViaEmail, updatePermission };
