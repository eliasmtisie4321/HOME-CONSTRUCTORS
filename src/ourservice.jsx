import { pav,paint,build,ceiling,tilling,ele} from "./images";

function Ourservice() {
  const services = [
    {
      image: build,
      title: "Building & Renovations",
      description:
        "From new construction to complete renovations, we deliver durable, high-quality workmanship tailored to your needs."
    },
    {
      image: paint,
      title: "Painting (Interior & Exterior)",
      description:
        "We provide professional painting services that give your property a fresh, modern, and long-lasting finish."
    },
    {
      image:ceiling,
      title: "Ceiling Installation",
      description:
        "Our team installs stylish and durable ceilings that improve the appearance and value of your home or business."
    },
    {
        image: tilling,
      title: "Wall & Floor Tiling",
      description:
        "Expert wall and floor tiling with precision, using quality materials for beautiful and lasting results."
    },
    {
        image: pav,
      title: "Paving (Driveways & Walkways)",
      description:
        "We design and install durable paving solutions for driveways, walkways, patios, and outdoor spaces."
    },
    {
        image:ele,
      title: "Electrical Services",
      description:
        "Safe and reliable electrical installations, repairs, maintenance, and upgrades for residential and commercial properties."
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold">HOME CONSTRUCTORS</span>, we provide
          reliable construction and renovation services with quality workmanship,
          attention to detail, and customer satisfaction at the heart of every project.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image (only if available) */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Card Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Ourservice;