//id="form"を取得し、変数formに代入
const form = document.getElementById("form");
//id="input"を取得し、変数inputに代入
const input = document.getElementById("input");
//id="ul"を取得し、変数ulに代入
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
  todos.forEach(todo =>{
    add(todo);
  })
}

form.addEventListener("submit",function(event){
  event.preventDefault();
  add();
});

function add(todo){
  let todoText = input.value;

  //もし、引数に値が入っていれば、todoTextにその値を設定する
  if(todo){
    todoText = todo;
  }
  if(todoText){
  const li = document.createElement("li");
  li.innerText = todoText;
  li.classList.add("list-group-item");

  //チェックボックス未チェックfontawesome適応用class
  li.classList.add("uncomp-style");

  //右クリック押下時の処理（削除）
  li.addEventListener("contextmenu",function(event){
    event.preventDefault();
    li.remove();
    saveData();
  })

  ul.appendChild(li);
  input.value="";
  saveData();
  }
}

function saveData(){
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}