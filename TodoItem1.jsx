import React from "react";

function TodoItem1() {
    let todoName = "Buy Milk";
    let todoDate = "12/08/2024";
  return (
    <div class="container todo-container ">
      <div class="row">
        <div class="col-3">{todoName}</div>
        <div class="col-3">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
