function Services() {
  const services = [
    {
      title: "Building & Renovations",
      description:
        "We construct new buildings and renovate existing homes and commercial properties with quality workmanship.",
    },
    {
      title: "Painting (Interior & Exterior)",
      description:
        "Professional painting services that give your property a fresh, clean, and long-lasting finish.",
    },
    {
      title: "Ceiling Installation",
      description:
        "Expert installation and repair of ceilings for residential and commercial buildings.",
    },
    {
      title: "Wall & Floor Tiling",
      description:
        "We install stylish and durable wall and floor tiles with precision and attention to detail.",
    },
    {
      title: "Paving (Driveways & Walkways)",
      description:
        "Quality paving solutions for driveways, patios, walkways, and outdoor spaces.",
    },
    {
      title: "Electrical Services",
      description:
        "Safe and reliable electrical installations, maintenance, and repairs performed by qualified professionals.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable construction and maintenance services
            tailored to meet the needs of homeowners and businesses.
            Our experienced team is committed to delivering quality
            workmanship on every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;