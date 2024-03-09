import React, {useState, useEffect} from "react";
import { Todo } from "./assets/componentes/todo";
interface DataTodo {
  todos:{
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[];
  total:number;
  skip: number;
  limit:number;
}

export const App: React.FC = () => {
  const [name, setName] = useState("henry");
  const [active, setActive] = useState(false);
  const [todoList, setTodoList] = useState<DataTodo>();





  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch('https://dummyjson.com/todos');
      const result = await data.json();
      console.log(result);
      setTodoList(result);
};
getTodos();
},[]);

  return  <div>{
    todoList?.todos.map((todo) => {
      return (
      <Todo key={todo.id}
       todo={todo.todo}
        status={todo.completed? "active": "inactive"}
        />
      );
    })}
    </div>
};