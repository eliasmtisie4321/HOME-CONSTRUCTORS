import { useState, useEffect } from "react";
import { team, display, exp, skill, logo, pool, ele, h1 ,h2} from "./images";

function Home() {

  // Hero slider images
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



          {/* LEFT - IMAGE SLIDER */}

          <div className="md:w-1/2">


            <div className="overflow-hidden rounded-xl shadow-lg">


              <img
                src={heroImages[currentHero]}
                alt="Construction project"
                className="w-full h-[500px] object-cover transition duration-700"
              />


            </div>


          </div>






          {/* RIGHT - COMPANY TEXT */}

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



            <button 
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            > <a href="0720688992"></a>
              Get a Free Quote
            </button>


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



            {/* EXPERIENCE */}

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







            {/* SKILLED PROFESSIONALS */}

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







            {/* QUALITY GUARANTEED */}

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



    </div>


          


  );
}


export default Home;