"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 lg:p-10 min-h-[230px] my-10
    text-center text-3xl sm:text-4xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-black">Let&apos;s work together.</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-[#7f7f7f] hover:text-[#7f7f7f]/70 transition-all">
          <Link href="mailto:abc@mail.com">Get in touch.</Link>
        </h1>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
