function Contact() {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>


        <div className="grid md:grid-cols-2 gap-10">


          {/* Contact Information */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              HOME CONSTRUCTORS
            </h3>


            <p className="mb-3">
              📍 Pretoria, South Africa
            </p>


            <p className="mb-3">
              📞 012 345 6789
            </p>


            <p>
              ✉️ info@homeconstructors.co.za
            </p>


          </div>





          {/* Google Map */}
          <div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d115259.61063800844!2d28.001868771993273!3d-25.47625530183849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0xcebf1927be823f3%3A0x16f84114b0e8396!5e0!3m2!1sen!2sza!4v1784295624374!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="rounded-lg shadow-lg"
            ></iframe>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Contact;