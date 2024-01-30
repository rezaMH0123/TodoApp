"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const serachParams = useSearchParams();
  const search = serachParams.get("todos");
  console.log(search);
  return (
    <nav className=" flex gap-x-4 border-b-2  border-gray-300">
      <Link
        className={`cursor-pointer p-2 ${search === null && `navActive`}`}
        href="/"
      >
        All
      </Link>
      <Link
        className={`cursor-pointer p-2 ${search === "active" && `navActive`}`}
        href="/?todos=active"
      >
        Active
      </Link>
      <Link
        className={`cursor-pointer p-2 ${
          search === "completed" && `navActive`
        }`}
        href="/?todos=completed"
      >
        completed
      </Link>
    </nav>
  );
};

export default Navbar;
