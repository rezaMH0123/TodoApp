"use client";

import { useTodo } from "@/context/todosContext";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTodos } from "@/redux/todoSlice";
import { RootState } from "../redux/store";

const ClearCompletedTodos = () => {
  const dispatch = useDispatch();
  const [hasCompletedTodos, setHasCompletedTodos] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);

  //   const { deleteCompletedTodos, todos } = useTodo();
  const handlerClick = () => {
    dispatch(deleteCompletedTodos());
  };

  useEffect(() => {
    const completedTodosExist = todos.some((todo) => todo.completed);
    setHasCompletedTodos(completedTodosExist);
  }, [todos]);

  return (
    <div className="w-[360px] flex justify-center">
      <button
        onClick={handlerClick}
        className={`px-4 py-2 bg-purple-600 text-gray-100 cursor-pointer rounded-md mt-5 ${
          !hasCompletedTodos && "bg-slate-400 cursor-default"
        }`}
      >
        clear completed todos
      </button>
    </div>
  );
};

export default ClearCompletedTodos;
