import { motion } from "framer-motion";
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <motion.div
      // initial={{ opacity: 1, y: 0 }}
      // whileInView={{ opacity: 0, y: -60 }}
      // transition={{ duration: 10, delay: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-2 justify-center w-full max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-lg p-6"
    >
      <div className="text-center border rounded-lg shadow-lg p-6">
        <div className="flex justify-center items-center w-full h-16 mb-4 mx-auto">
          <svg
            className="w-full h-full text-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
        <p className="text-gray-600">We appreciate your feedback.</p>
      </div>
    </motion.div>
  );
};

export default ThankYou;
