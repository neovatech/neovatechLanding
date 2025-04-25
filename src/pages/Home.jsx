import React, { useState } from "react";
import { motion } from "framer-motion";
import ServicesSection from "../components/services";
import ErrorBoundary from "../components/errorboundary";
import QuoteForm from "../components/Quoteform";
import Technologies from "../components/tech";
import MobileAppSection from "../components/mobile";

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
      <div className="bg-white text-gray-900 font-oswald">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center relative w-full overflow-hidden"
        >
          {/* Blurred Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* <video
              className="w-full h-full object-cover blur-md opacity-30 scale-110"
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
            /> */}
            <img
              className="w-full h-full object-cover blur-sm opacity-30 scale-110"
              src="https://img.freepik.com/free-vector/gradient-technology-futuristic-background_23-2149122416.jpg?t=st=1745501436~exp=1745505036~hmac=161d362bf8c0b3249d0cf12d49d58a9be97ebb65a2f810803c09e5ef9012cfea&w=2000"
              alt="img"
            />
          </div>

          {/* Foreground Content */}
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
              className="text-xl max-w-2xl mx-auto p-auto py-6"
            >
              Innovating Digital Solutions for Businesses Worldwide.
            </motion.p>
            {/* Explore Button */}
            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Explore
            </motion.a>
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
        <div id="featuress">
          <ErrorBoundary>
            <ServicesSection />
          </ErrorBoundary>
        </div>
        {/* Mobile Application Section */}
        <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto w-full">
          <ErrorBoundary>
            <MobileAppSection />
          </ErrorBoundary>

          {/* <motion.h2
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
          </motion.p> */}
        </section>

        <div id="contact-us">
          <QuoteForm />
        </div>
        <div>
          <ErrorBoundary>
            <Technologies />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
