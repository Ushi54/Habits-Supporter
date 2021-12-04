//id="form"を取得し、変数formに格納する
const form = document.getElementById("form");
//id="input"を取得し、変数inputに格納する
const input = document.getElementById("input");
//id="ul"を取得し、変数ulに格納する
const ul = document.getElementById("ul");
//ローカルストレージにあるkeyがtodosのオブジェクトをJSON形式からJSのオブジェクトに変換して、変数todosに格納する
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

//ulにliをネストする関数
function add(todo){
  let todoText = input.value;

  //もし、引数に値が入っていれば、todoTextにその値を設定する
  if(todo){
    todoText = todo.text;
  }
  //todoTextに値が入っていれば、処理する
  if(todoText){
  //<li></li>を生成して、変数liに格納する
  const li = document.createElement("li");
  //<li></li>の中にtodoTextを入れる
  li.innerText = todoText;
  //liタグにclass="list-group-item"を付与する
  li.classList.add("list-group-item");
  //チェックボックス未チェックfontawesome適応用class
  li.classList.add("uncomp-style");

  if(todo && todo.completed){
    li.classList.add("comp-style")
  }

  //左クリック押下時の処理（完了）
  li.addEventListener("click",function(){
    //liタグに"comp-style"があれば削除、なければ追加する
    li.classList.toggle("comp-style");
    saveData();
  })

  //右クリック押下時の処理（削除）
  li.addEventListener("contextmenu",function(event){
    //右クリック押下時のデフォルトの動作（ページのリロード）をキャンセル
    event.preventDefault();
    //liの削除
    li.remove();
    //ローカルストレージにliの情報を保存する関数"saveData()"を呼び出す
    saveData();
  })

//ulにliをネストする
ul.appendChild(li);
  //input(テキストボックス)に入力されている値を空文字に設定する
  input.value="";
  //ローカルストレージにliの情報を保存する関数(saveData())を呼び出す
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
    //todoオブジェクト宣言
    let todo ={
      //textキーにlist.innerTextを定義
      text: list.innerText,
      //completedキーにliタグのclassに"comp-style"があればtrueを定義、なければfalseを定義する
      completed: list.classList.contains("comp-style")
    };
    //０番目の<li>***</li>のテキストを配列todosにプッシュ（配列０番目に代入）
    //１番目の<li>***</li>のテキストを配列todosにプッシュ（配列１番目に代入）
    //２番目の<li>***</li>のテキストを配列todosにプッシュ（配列２番目に代入）
    todos.push(todo);
  });
  // ローカルストレージにkeyをtodosとして、配列todos[]をJSON形式に変換したものを保存する
  localStorage.setItem("todos", JSON.stringify(todos));
}
