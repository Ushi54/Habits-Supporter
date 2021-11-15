const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log($("input").val());
  add();
});

function add(){
  const li = document.createElement("li");
  li.innerText = $("input").val();
  ul.appendChild(li);
  $("input").val("");
}