import { team1 } from "./images";

function About() {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            About HOME CONSTRUCTORS
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building quality homes, renovations, and lasting relationships
            for over 10 years.
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={team1}
              alt="Construction Team"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Text */}
          <div>

            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              HOME CONSTRUCTORS is a trusted construction and renovation
              company with more than <span className="font-bold text-yellow-600">10 years of experience</span>
              delivering high-quality building solutions to residential and
              commercial clients.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              We specialize in construction, renovations, painting,
              paving, tiling, ceiling installation, electrical work,
              and general property maintenance.
            </p>

            <p className="text-gray-600 leading-8">
              Our goal is to deliver every project on time, within budget,
              and with exceptional workmanship that exceeds our clients'
              expectations.
            </p>

          </div>

        </div>

      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-yellow-500">10+</h3>
            <p className="mt-3 text-xl font-semibold">
              Years Experience
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-yellow-500">100%</h3>
            <p className="mt-3 text-xl font-semibold">
              Quality Workmanship
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-yellow-500">24/7</h3>
            <p className="mt-3 text-xl font-semibold">
              Reliable Support
            </p>
          </div>

        </div>

      </section>

      {/* Our Values */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div className="bg-yellow-400 rounded-xl p-6 font-bold">
              Quality
            </div>

            <div className="bg-yellow-400 rounded-xl p-6 font-bold">
              Integrity
            </div>

            <div className="bg-yellow-400 rounded-xl p-6 font-bold">
              Reliability
            </div>

            <div className="bg-yellow-400 rounded-xl p-6 font-bold">
              Safety
            </div>

            <div className="bg-yellow-400 rounded-xl p-6 font-bold">
              Customer Focus
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;