document.getElementById("add-btn").addEventListener("click", newSharedUser);

function newSharedUser() {
  const inputUser = document.getElementById("input-user").value;

  var li = document.createElement("li");
  var user = document.createTextNode(inputUser);
  li.appendChild(user);
  document.getElementById("users-table").appendChild(li);
}
