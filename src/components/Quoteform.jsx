import React, { useState } from "react";
import { motion } from "framer-motion";

const options = [
  "Website Development",
  "Mobile Application",
  "Web Hosting Services",
  "Web Designing",
  "Graphics Design",
];

const QuoteForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
    interestedIn: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-50 to-teal-50 flex items-center justify-center py-8 dark:bg-none dark:bg-gray-900">
      <motion.div
        className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl p-10 border border-blue-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text">
          Get Free Quote
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-blue-50 px-4 py-2 transition-all outline-none"
                required
              />
            </div>
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-700 font-semibold mb-2">
                Second Name
              </label>
              <input
                type="text"
                name="secondName"
                placeholder="Second Name"
                value={form.secondName}
                onChange={handleChange}
                className="w-full border rounded-lg border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-purple-50 px-4 py-2 transition-all outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-teal-50 px-4 py-2 transition-all outline-none"
                required
              />
            </div>
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-700 font-semibold mb-2">
                Interested In
              </label>
              <select
                name="interestedIn"
                value={form.interestedIn}
                onChange={handleChange}
                className="w-full border rounded-lg border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-blue-50 px-4 py-2 transition-all outline-none"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-purple-50 px-4 py-2 transition-all outline-none min-h-[80px]"
              required
            />
          </div>
          <div className="mt-8 text-center">
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-xl shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              SUBMIT
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default QuoteForm;
