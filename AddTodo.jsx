import React from "react";

function AddTodo() {
  return (
    <>
      <div class="container todo-container ">
        <div class="row">
          <div class="col-3">
            <input type="text" placeholder="enter todo name" />
          </div>
          <div class="col-3">
            <input type="date" name="" id="" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
