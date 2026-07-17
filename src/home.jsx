import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { team, display, exp, skill, pool, ele, h1, h2 } from "./images";

function Home() {

  const heroImages = [
    display,
    ele,
    pool,
    h1,
    h2
  ];

  const [currentHero, setCurrentHero] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentHero((prev) =>
        (prev + 1) % heroImages.length
      );

    }, 3500);


    return () => clearInterval(interval);

  }, [heroImages.length]);



  return (

    <div>


      {/* HERO SECTION */}

      <section className="bg-gray-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">


          {/* IMAGE SLIDER */}

          <div className="md:w-1/2">

            <div className="overflow-hidden rounded-xl shadow-lg">

              <img
                src={heroImages[currentHero]}
                alt="Construction project"
                className="w-full h-[500px] object-cover transition duration-700"
              />

            </div>

          </div>



          {/* COMPANY TEXT */}

          <div className="md:w-1/2">


            <h1 className="text-5xl font-bold mb-6">
              HOME CONSTRUCTORS
            </h1>


            <h2 className="text-2xl text-yellow-400 mb-4">
              Building & Renovations You Can Trust
            </h2>


            <p className="text-lg mb-6 leading-relaxed">

              With over 10 years of experience, we provide quality
              construction, renovations, roofing, paving, painting,
              and maintenance services for homes and businesses.

              We are committed to delivering projects on time,
              within budget, and to the highest standards.

            </p>



            <a
              href="tel:0720688992"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition inline-block"
            >
              Get a Free Quote
            </a>


          </div>


        </div>


      </section>





      {/* WHY CHOOSE US */}

      <section className="py-16">


        <div className="max-w-7xl mx-auto px-6 text-center">


          <h2 className="text-4xl font-bold mb-10">
            WHY CHOOSE HOME CONSTRUCTORS?
          </h2>



          <div className="grid md:grid-cols-3 gap-8">



            <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition">


              <img
                src={exp}
                alt="Experience"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />


              <h3 className="font-bold text-xl mb-2">
                10+ Years Experience
              </h3>


              <p>
                Trusted by homeowners and businesses for reliable
                construction services.
              </p>


            </div>





            <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition">


              <img
                src={skill}
                alt="Professional Team"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />


              <h3 className="font-bold text-xl mb-2">
                Skilled Professionals
              </h3>


              <p>
                Our experienced team delivers quality workmanship on
                every project.
              </p>


            </div>





            <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition">


              <img
                src={team}
                alt="Quality"
                className="w-full h-56 object-cover rounded-lg mb-4"
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
            {/* OUR SERVICES */}

      <section className="bg-gray-900 text-white py-20">


        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold mb-4">
              Our Services
            </h2>


            <p className="text-gray-300 max-w-3xl mx-auto">

              We provide reliable construction and renovation services
              for residential and commercial properties with quality
              workmanship and attention to every detail.

            </p>


          </div>




          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



            {/* SERVICE 1 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Building & Renovations
              </h3>

              <p>
                Complete construction and renovation services.
              </p>

            </div>





            {/* SERVICE 2 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Painting
              </h3>

              <p>
                Interior and exterior painting services.
              </p>

            </div>





            {/* SERVICE 3 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Ceiling Installation
              </h3>

              <p>
                Modern ceiling installations for homes and businesses.
              </p>

            </div>





            {/* SERVICE 4 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Wall & Floor Tiling
              </h3>

              <p>
                Professional wall and floor tiling solutions.
              </p>

            </div>





            {/* SERVICE 5 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Paving
              </h3>

              <p>
                Driveways, walkways, and outdoor paving.
              </p>

            </div>





            {/* SERVICE 6 */}

            <div className="bg-white text-black rounded-xl shadow-lg p-6">

              <div className="text-5xl mb-4">
                
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Electrical Services
              </h3>

              <p>
                Electrical installations and maintenance.
              </p>

            </div>



          </div>





          <div className="text-center mt-12">


            <Link
              to="/ourservice"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition"
            >
              View All Services
            </Link>


          </div>


        </div>


      </section>



    </div>

  );

}


export default Home;