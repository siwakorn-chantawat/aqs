"use client";

import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10 items-center justify-center p-5 sm:p-10 min-h-[400px] mt-16 sm:mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-4xl lg:text-5xl font-normal text-wrap max-w-[600px]"
        >
          A brand and product designer working with clients globally
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center gap-2"
        >
          <p className="text-sm">Expertise</p>
          <p className="text-sm bg-[#e8e5e480] px-4 py-2 rounded-full">
            Branding
          </p>
          <p className="text-sm bg-[#e8e5e480] px-4 py-2 rounded-full">
            Product
          </p>
          <p className="text-sm bg-[#e8e5e480] px-4 py-2 rounded-full">
            Design Systems
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
