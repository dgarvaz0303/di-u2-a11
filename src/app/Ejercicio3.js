import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    const newTodos=[...todos,{
      id: nextId++,
      title:title,
      done:false
    }]
    setTodos(newTodos)
    
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(todo =>
    {
      if(todo.id === nextTodo.id){
        return{...todo,title:nextTodo.title,done:nextTodo.done}
      }else{
        return todo
      }
    })
    setTodos(newTodos)
  }

  function handleDeleteTodo(todoId) {
    const newTodos=todos.filter(todo=>todo.id!==todoId)
    setTodos(newTodos)
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
