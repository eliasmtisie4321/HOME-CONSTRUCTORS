import { Link } from "react-router-dom";
import { logo } from "./images";
function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto h-41 px-6 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Home Constructors Logo"
            className="w-40 h-40 rounded-full object-cover border-2 border-yellow-400"
          />
        </div>

        {/* Center - Navigation */}
        <ul className="flex items-center gap-10 text-lg  font-bold">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>
          </li>

           <li>
            <Link
              to="/Ourservice"
              className="hover:text-yellow-400 transition duration-300"
            >
              Our Services
            </Link>
          </li>



        </ul>

        {/* Right - Button */}
        <div>
         <Link to="/contact">
  <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
    Contact Us
  </button>
</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;