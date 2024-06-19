import { SummaryProps } from "@/types/form";
import { motion } from "framer-motion";
import React from "react";
import { TiTick } from "react-icons/ti";

const Summary: React.FC<SummaryProps> = ({ formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-2 justify-center items-center w-full max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-lg p-6"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <TiTick className="border-2 border-gray-600 rounded-full text-xl text-gray-600" />
          <p>Welcome Card</p>
        </div>
        <div>
          <p className="text-gray-500">What is your role?</p>
          <p className="text-lg font-semibold">{formData.role}</p>
        </div>
        <div>
          <p className="text-gray-500">What&apos;s your company size?</p>
          <p className="text-lg font-semibold">{formData.companySize}</p>
        </div>
        <div>
          <p className="text-gray-500">How did you hear about us first?</p>
          <p className="text-lg font-semibold">{formData.hear}</p>
        </div>
        <div className="flex items-center gap-4">
          <TiTick className="border-2 border-gray-600 rounded-full text-xl text-gray-600" />
          <p className="bg-gray-100 rounded-lg px-2">Complete</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
