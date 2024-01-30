import AddTodos from "@/components/AddTodos";
import ClearCompletedTodos from "@/components/ClearCompletedTodos";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="h-screen bg-white flex  justify-center items-center ">
      <div className="bg-zinc-700 p-4 containerTodo flex flex-col items-center rounded-xl shadow-3xl  sm:w-[80%] md:w-[75%] lg:w-[55%]">
        <h2 className="t mt-4 mb-4">
          TODO App nextjs + typscript +Redux or context
        </h2>
        <Navbar />
        <AddTodos />

        <TodoList />
      </div>
    </div>
  );
}
