function Footer() {
  return (
    <footer className="bg-black text-white py-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            HOME CONSTRUCTORS
          </h2>

          <p className="text-gray-300">
            Building and renovation experts you can trust.
            With over 10 years of experience, we deliver
            quality construction solutions for homes and businesses.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>


        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300">
            📍 South Africa
          </p>

          <p className="text-gray-300">
            📞 +27 00 000 0000
          </p>

          <p className="text-gray-300">
            ✉️ info@homeconstructors.co.za
          </p>
        </div>

      </div>


      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">

        <p>
          © {new Date().getFullYear()} HOME CONSTRUCTORS.
          All Rights Reserved. 
          <br />
          <a href="https://github.com/eliasmtisie4321">Built by</a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;