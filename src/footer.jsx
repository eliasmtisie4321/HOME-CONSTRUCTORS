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
          <a href="https://github.com/eliasmtisie4321"><img src="data:image/png;base64,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" className="w-10 center" alt="" srcset="" /></a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;