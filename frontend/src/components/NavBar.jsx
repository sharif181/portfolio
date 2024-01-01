import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="w-screen justify-center flex absolute pt-2">
      <div className="bg-slate-300 py-3 px-[150px] rounded-3xl">
        <ul className="flex gap-3">
          <li>
            <Link href="/" className="bg-gray-500 px-3 py-2 rounded-3xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="bg-gray-500 px-3 py-2 rounded-3xl">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="bg-gray-500 px-3 py-2 rounded-3xl">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/" className="bg-gray-500 px-3 py-2 rounded-3xl">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
