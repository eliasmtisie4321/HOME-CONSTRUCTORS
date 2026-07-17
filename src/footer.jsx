import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">


        {/* Company Info */}
        <div>

          <h2 className="text-3xl font-extrabold text-yellow-400 mb-5">
            HOME CONSTRUCTORS
          </h2>


          <p className="text-gray-400 leading-7 mb-6">

            Building and renovation experts you can trust.
            With over

            <span className="text-yellow-400 font-bold">
              {" "}10+ years experience
            </span>

            , we deliver quality construction solutions
            for homes and businesses.

          </p>


          <Link
            to="/contact"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
          >
            Request Quote
          </Link>


        </div>





        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-bold text-yellow-400 mb-5">
            Quick Links
          </h3>


          <ul className="space-y-4">


            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-yellow-400 hover:translate-x-2 inline-block transition"
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-yellow-400 hover:translate-x-2 inline-block transition"
              >
                About Us
              </Link>
            </li>


            <li>
              <Link
                to="/ourservice"
                className="text-gray-400 hover:text-yellow-400 hover:translate-x-2 inline-block transition"
              >
                Our Services
              </Link>
            </li>


            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-yellow-400 hover:translate-x-2 inline-block transition"
              >
                Contact Us
              </Link>
            </li>


          </ul>


        </div>






        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold text-yellow-400 mb-5">
            Contact Us
          </h3>


          <div className="space-y-5 text-gray-400">


            <p>
              📍
              <span className="text-white font-semibold">
                {" "} Location
              </span>

              <br />

              Soshanguve & Surrounding Areas
            </p>



            <p>

              📞
              <span className="text-white font-semibold">
                {" "} Phone
              </span>

              <br />


              <a
                href="tel:0720688992"
                className="hover:text-yellow-400 transition"
              >
                072 068 8992
              </a>

              <br />


              <a
                href="tel:0670516749"
                className="hover:text-yellow-400 transition"
              >
                067 051 6749
              </a>


            </p>




            <p>

              📧
              <span className="text-white font-semibold">
                {" "} Email
              </span>


              <br />


              <a
                href="mailto:homeconstructorscompany@gmail.com"
                className="hover:text-yellow-400 transition break-all"
              >
                homeconstructorscompany@gmail.com
              </a>


            </p>


          </div>


        </div>


      </div>






      {/* Bottom Footer */}

      <div className="border-t border-gray-800">


        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">


          <p className="text-gray-500 text-sm text-center">

            © {new Date().getFullYear()} 
            <span className="text-yellow-400 font-semibold">
              {" "}HOME CONSTRUCTORS
            </span>.
            All Rights Reserved.

          </p>




          <a
            href="https://github.com/eliasmtisie4321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold hover:text-yellow-300 transition"
          >
            Built by Elias Mtisie 🚀
          </a>


        </div>


      </div>


    </footer>
  );
}


export default Footer;