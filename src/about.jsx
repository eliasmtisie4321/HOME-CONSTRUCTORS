function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Company Image */}
        <div>
          <img
            src="/images/about.jpg"
            alt="Our construction team"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* About Text */}
        <div>

          <h1 className="text-4xl font-bold mb-6">
            About HOME CONSTRUCTORS
          </h1>

          <p className="mb-4">
            HOME CONSTRUCTORS is a trusted construction and renovation
            company with more than 10 years of experience delivering
            quality building solutions.
          </p>

          <p className="mb-4">
            We specialize in residential and commercial construction,
            home renovations, roofing, painting, paving, tiling, and
            general maintenance.
          </p>

          <p className="mb-4">
            Our mission is to provide dependable workmanship,
            exceptional customer service, and projects that exceed our
            clients' expectations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Our Values
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Quality Workmanship</li>
            <li>Honesty & Integrity</li>
            <li>Customer Satisfaction</li>
            <li>Safety First</li>
            <li>Reliable Service</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default About;