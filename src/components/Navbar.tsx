"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const serachParams = useSearchParams();
  const search = serachParams.get("todos");
  console.log(search);
  return (
    <nav className="flex gap-x-4 border-b-2 border-gray-300">
      <Link href="/" passHref>
        <div className={`cursor-pointer p-2 ${search === null && `navActive`}`}>
          All
        </div>
      </Link>
      <Link href="?todos=active" passHref>
        <div
          className={`cursor-pointer p-2 ${search === "active" && `navActive`}`}
        >
          Active
        </div>
      </Link>
      <Link href="?todos=completed" passHref>
        <div
          className={`cursor-pointer p-2 ${
            search === "completed" && `navActive`
          }`}
        >
          Completed
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
