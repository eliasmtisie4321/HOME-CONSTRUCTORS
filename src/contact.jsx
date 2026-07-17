function Contact() {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Contact HOME CONSTRUCTORS
          </h1>

          <p className="text-xl text-gray-300">
            We're here to help with all your construction and renovation needs.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>

            {/* Contact Details */}
            <div className="space-y-6">

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg">📞 Phone</h3>
                <p>072 068 8992</p>
                <p>067 051 6749</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg">📧 Email</h3>
                <p>homeconstructorscompany@gmail.com</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg">📍 Location</h3>
                <p>Soshanguve & Surrounding Areas</p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Request a Free Quote
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select a Service</option>
                  <option>Building & Renovations</option>
                  <option>Painting (Interior & Exterior)</option>
                  <option>Ceiling Installation</option>
                  <option>Wall & Floor Tiling</option>
                  <option>Paving (Driveways & Walkways)</option>
                  <option>Electrical Services</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Business Hours */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Business Hours
              </h2>

              <div className="bg-yellow-400 rounded-lg p-5 text-black">

                <p className="font-semibold">
                  Monday – Saturday
                </p>

                <p className="mb-3">
                  07:00 – 21:00
                </p>

                <p className="font-semibold">
                  Sunday
                </p>

                <p>
                  07:30 – 16:00
                </p>

              </div>

            </div>

          </div>

          {/* Right Side - Google Map */}
          <div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d115259.61063800844!2d28.001868771993273!3d-25.47625530183849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0xcebf1927be823f3%3A0x16f84114b0e8396!5e0!3m2!1sen!2sza!4v1784295624374!5m2!1sen!2sza"
              width="100%"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
              className="rounded-xl shadow-xl"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;