import React, { useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  const services = [
    "Website Development",
    "Digital Marketing",
    "Mobile Application Development",
    "Web Hosting",
    "Graphic Design",
    "Content Writing",
    "TEst", //testing only
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMore = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center relative w-full overflow-hidden"
        >
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover opacity-40"
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to Neovatech
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-xl"
            >
              Innovating Digital Solutions for Businesses Worldwide.
            </motion.p>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          id="about"
          className="py-20 px-6 text-center max-w-5xl mx-auto w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Neovatech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Neovatech is your trusted partner for transforming business ideas
            into dynamic digital solutions. We specialize in web development,
            mobile applications, digital marketing, and more — offering
            end-to-end services that help businesses thrive in a competitive
            online ecosystem.
          </motion.p>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 bg-gray-100 text-center px-4 w-full overflow-hidden"
        >
          <h2 className="text-4xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow hover:shadow-lg transition min-h-[300px] w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">
                    Elevate your business with our expert{" "}
                    {service.toLowerCase()} solutions tailored to your unique
                    needs.
                  </p>
                </div>
                <button
                  onClick={() => handleReadMore(index)}
                  className={`mt-6 py-2 px-4 rounded-xl text-white font-medium transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-[#00BFFF] hover:bg-blue-600"
                  }`}
                >
                  {activeIndex === index ? "Close" : "Read More"}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mobile Application Section */}
        <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Mobile Application Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Our team crafts cutting-edge mobile apps that engage users and
            deliver seamless digital experiences. From Android to iOS — we turn
            your app ideas into reality.
          </motion.p>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-gray-100 text-center w-full overflow-hidden">
          <h2 className="text-4xl font-bold mb-10">Our Trusted Clients</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto w-full">
            {[
              "/client1.png",
              "/client2.png",
              "/client3.png",
              "/client4.png",
            ].map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-16 w-auto object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
