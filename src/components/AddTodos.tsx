"use client";

import { useTodo } from "@/context/todosContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
import ClearCompletedTodos from "./ClearCompletedTodos";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [toddo, setTodo] = useState<string>("");
  //   const { addTodo } = useTodo();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handlerclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // addTodo(toddo);
    dispatch(addTodo(toddo));
    setTodo("");
  };

  return (
    <form className="flex items-center gap-x-2 mt-8 sm:text-sm lg:text-base">
      <input
        className="border border-gray-400 outline-none  text-black px-2 py-1 rounded-md w-72 h-[40px]"
        type="text"
        value={toddo}
        placeholder="add new todo"
        onChange={handlerChange}
      />
      <button
        onClick={handlerclick}
        type="button"
        className="bg-green-600 px-4 py-1 rounded-md h-[40px]"
      >
        add +
      </button>
      <ClearCompletedTodos />
    </form>
  );
};

export default AddTodos;
