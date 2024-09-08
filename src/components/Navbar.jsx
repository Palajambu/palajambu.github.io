import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between py-4 bg-gray-50">
        <Link
          to="/"
          className="ml-4 px-2 lg:px-0 uppercase font-bold text-sky-950 hover:text-white hover:bg-yellow-600 hover:rounded-md hover:px-2 hover:py-0.5"
        >
          Home
        </Link>
        <ul className="inline-flex items-center">
          <li className="px-2 md:px-4">
            <Link
              to="/"
              className="text-sky-950 font-semibold hover:text-white hover:bg-yellow-600 hover:rounded-md hover:px-2 hover:py-0.5"
            >
              Posts
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link
              className="text-sky-950 font-semibold hover:text-white hover:bg-yellow-600 hover:rounded-md hover:px-2 hover:py-0.5"
              to="/aboutme"
            >
              About Me
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link
              className="text-sky-950 font-semibold hover:text-white hover:bg-yellow-600 hover:rounded-md hover:px-2 hover:py-0.5"
              to="/resume"
            >
              Resume
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link
              className="text-sky-950 font-semibold hover:text-white hover:bg-yellow-600 hover:rounded-md hover:px-2 hover:py-0.5"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
