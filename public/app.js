// タスクを追加する関数
function addTodo() {
    // 入力フィールドからタスク内容を取得
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    // 入力が空の場合は何もしない
    if (todoText === "") return;

    // リストアイテム(li)を作成
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    // 削除ボタンを作成し、li に追加
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = function() {
        todoItem.remove(); // 削除ボタンがクリックされたときにリストアイテムを削除
    };
    todoItem.appendChild(deleteButton);

    // 作成したliをul要素に追加
    document.getElementById("todo-list").appendChild(todoItem);

    // 入力フィールドを空にする
    todoInput.value = "";
}
