import AddTodos from "@/components/AddTodos";
import ClearCompletedTodos from "@/components/ClearCompletedTodos";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col items-center">
      <h2 className="text-black mt-4 mb-4">
        TODO App nextjs + typscript +Redux or context
      </h2>
      <Navbar />
      <AddTodos />
      <ClearCompletedTodos />
      <TodoList />
    </div>
  );
}
