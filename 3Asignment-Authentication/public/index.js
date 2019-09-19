let myButton = document.querySelector("#myButton");

fetch ("/login", {
  method: "POST", 
  body: JSON.stringify({"brukernavn":"hei", "passord":"secret"}),
  headers: {"Content-Type": "application/json"}
})
.then(response => response.json())
.then(json => localStorage.setItem("jwt", json.jwt))
.catch(error => console.error("Error: ", error));

myButton.addEventListener("click", e => {
  console.log("Fikk klikk-event");
  let url = "api/person/1";
  fetch(url, {
    method: "GET",
    headers: {"x-access-token": localStorage.getItem("jwt")}
  })
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))
    .catch(error => console.error("Error: ", error));
    fetch("/token", {
      method: "POST",
      headers: {"x-access-token": localStorage.getItem("jwt")}
    })
    .then(response => response.json())
    .then(json => localStorage.setItem("jwt", json.jwt))
    .catch(error => console.error("Error: ", error));
});