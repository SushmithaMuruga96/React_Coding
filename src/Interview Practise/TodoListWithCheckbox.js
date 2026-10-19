import React from "react";
const Todo = ({ name }) => {
  const [completed, setCompleted] = React.useState(false);
  console.log(name, "rendered", completed);

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      {name}
    </div>
  );
};

const TodoListWithCheckbox = () => {
  const [todos, setTodos] = React.useState([
    { id: 101, name: "Learn React" },
    { id: 102, name: "Learn JavaScript" },
    { id: 103, name: "Build a project" },
  ]);
  const deleteFirst = () => {
    setTodos(todos.slice(1));
  };
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo, index) => (
        <Todo key={todo.id} name={todo.name} />
      ))}

      <button onClick={deleteFirst}>Delete First</button>
    </div>
  );
};
export default TodoListWithCheckbox;
