//id="form"を取得し、変数formに代入
const form = document.getElementById("form");
//id="input"を取得し、変数inputに代入
const input = document.getElementById("input");
//id="ul"を取得し、変数ulに代入
const ul = document.getElementById("ul");
//ローカルストレージにあるkeyがtodosのオブジェクトをJSON形式からJSのオブジェクトに変換して、変数todosに代入
const todos = JSON.parse(localStorage.getItem("todos"));

//もしtodosに値があれば処理する
if(todos){
  //todosに格納されている値をadd()関数の引数として渡す
  todos.forEach(todo =>{
    add(todo);
  })
}

//formがsubmit（エンターキー押下）された時の処理
form.addEventListener("submit",function(event){
  ///エンターキー押下時のデフォルトの動作（ページのリロード）をキャンセル
  event.preventDefault();
  //add()関数を呼び出す
  add();
});

//ulにliをネスとする関数
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
    //右クリック押下時のデフォルトの動作（ページのリロード）をキャンセル
    event.preventDefault();
    //liの削除
    li.remove();
    //
    saveData();
  })

  ul.appendChild(li);
  input.value="";
  saveData();
  }
}

//ローカルストレージにliの情報を保存する関数
function saveData(){
  //変数listsに全てのliタグを格納(<li>***</li>)
  const lists = document.querySelectorAll("li");
  //todos配列を定義
  let todos = [];
  //listsの<li>***</li>を０番目からlistに代入
  lists.forEach(list => {
    //０番目の<li>***</li>のテキストを配列todosにプッシュ（配列０番目に代入）
    //１番目の<li>***</li>のテキストを配列todosにプッシュ（配列１番目に代入）
    //２番目の<li>***</li>のテキストを配列todosにプッシュ（配列２番目に代入）
    todos.push(list.innerText);
  });
  // ローカルストレージにkeyをtodosとして、配列todos[]をJSON形式に変換したものを保存する
  localStorage.setItem("todos", JSON.stringify(todos));
}