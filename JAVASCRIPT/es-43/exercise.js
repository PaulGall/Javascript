const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  localStorage.setItem("utente", JSON.stringify(user));
}
saveUser(user);