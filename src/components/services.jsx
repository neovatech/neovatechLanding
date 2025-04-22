import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    desc: "We build fast, scalable web apps tailored to your needs using modern frameworks.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-4xl text-pink-600 mb-4" />,
    desc: "Boost your business online with SEO, social media, and targeted ad campaigns.",
  },
  {
    title: "Web Designing",
    icon: <FaPaintBrush className="text-4xl text-yellow-500 mb-4" />,
    desc: "Create stunning, user-friendly website designs that capture attention and drive results.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
    desc: "Develop cross-platform mobile apps that are fast, sleek, and intuitive.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-4xl text-purple-600 mb-4" />,
    desc: "Secure and scalable cloud services to help your business operate efficiently.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 bg-black text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-6">
          Our Services
        </h2>
        <p className="text-lg text-white text-center mb-10">
          Scroll to explore what we offer.
        </p>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 min-w-max px-2 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-md p-6 w-72 hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col items-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
