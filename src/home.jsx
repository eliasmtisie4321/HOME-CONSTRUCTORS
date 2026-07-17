function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

          {/* Left Side - Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              HOME CONSTRUCTORS
            </h1>

            <h2 className="text-2xl text-yellow-400 mb-4">
              Building & Renovations You Can Trust
            </h2>

            <p className="text-lg mb-6">
              With over 10 years of experience, we provide quality
              construction, renovations, roofing, paving, painting,
              and maintenance services for homes and businesses.
              We are committed to delivering projects on time,
              within budget, and to the highest standards.
            </p>

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400">
              Get a Free Quote
            </button>
          </div>

          {/* Right Side - Hero Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* Put construction image here */}
            <img
              src="/images/hero.jpg"
              alt="Construction workers"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Why Choose HOME CONSTRUCTORS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg p-6 rounded-lg">
              {/* Icon or Image */}
              <img
                src="/images/experience.jpg"
                alt="Experience"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-2">
                10+ Years Experience
              </h3>
              <p>
                Trusted by homeowners and businesses for reliable
                construction services.
              </p>
            </div>

            <div className="shadow-lg p-6 rounded-lg">
              <img
                src="/images/team.jpg"
                alt="Professional Team"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-2">
                Skilled Professionals
              </h3>
              <p>
                Our experienced team delivers quality workmanship on
                every project.
              </p>
            </div>

            <div className="shadow-lg p-6 rounded-lg">
              <img
                src="/images/quality.jpg"
                alt="Quality"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-2">
                Quality Guaranteed
              </h3>
              <p>
                We use quality materials and pay attention to every
                detail from start to finish.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;